import {
    put,
    call,
    select,
    fork,
    take,
    race,
} from 'redux-saga/effects';

import { takeLatest, delay } from 'redux-saga';

import firebase from 'firebase';
import { firebaseConfig } from '../../config.js';

import { selectors } from '../reducers';
import actions from '../actions';

let database;

const fetchFirebase = (path) => {
    if (database === undefined) {
        firebase.initializeApp(firebaseConfig);
        database = firebase.database();
    }

    let resolvedPath = path;
    if (resolvedPath instanceof Array) {
        resolvedPath = path.join('/');
    }

    return database.ref(resolvedPath).once('value')
        .then((snapshot) => snapshot.val());
};

// run this function for each FETCH_SPEECH_KEYS
export function* doFetchSpeechKeys() {
    // make API call without blocking application
    const data = yield call(fetchFirebase, 'speechKeys');

    // when done, send data to reducer
    yield put(actions.fetchedSpeechKeys(data));
}

// run this function for each FETCH_SPEECH action
function* doFetchSpeech() {
    // determine which speech to fetch based on Redux
    const key = yield select(selectors.getCurrentSpeech);

    // make api call without blocking application
    const data = yield call(fetchFirebase, ['speeches', key]);

    // when done, send data to reducer
    yield put(actions.fetchedSpeech(data));
}

// run this function for each DEAL_TO_PLAYER action
export function* doPlaySpeech() {
    // get data from the store
    const displayedPhrases = yield select(selectors.getDisplayedPhrases)
    const phrases = yield select(selectors.getPhrases);

    let displayedCount = displayedPhrases.length;

    // clear the phrases if the speech is complete
    if (displayedCount === phrases.length) {
        yield put(actions.clearSpeech());
        displayedCount = 0;
    }

    for (let i = displayedCount; i < phrases.length; i++) {
        const nextPhrase = phrases[i];

        // dispatch an action with the next phrase
        yield put(actions.displayPhrase(nextPhrase));

        // wait before showing next phrase except after last one
        if (i < phrases.length - 1) {
            yield call(delay, nextPhrase.split(' ').length * 400);
        }
    }
}

function* watchPlaySpeech() {
    while (true) {
        // pause until a play speech action is observed
        yield take('PLAY_SPEECH');

        // race doPlaySpeech and take('RESET')
        // all effects in a race will be canceled once one of them finishes
        // the generator is paused until the race is resolved
        yield race([
            call(doPlaySpeech),
            take('RESET'),
        ]);
    }
}

export default function*() {
    yield [
        takeLatest('FETCH_SPEECH_KEYS', doFetchSpeechKeys),
        takeLatest('FETCH_SPEECH', doFetchSpeech),
        fork(watchPlaySpeech),
    ];
}

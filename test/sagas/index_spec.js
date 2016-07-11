import 'babel-polyfill';
import { expect } from 'chai';

import {
    put,
    call,
} from 'redux-saga/effects';

import actions from '../../src/actions';

import { getAllEffects } from '../helpers';

import {
    doFetchSpeechKeys,
    doPlaySpeech,
    fetchFirebase,
} from '../../src/sagas';

describe('sagas', () => {
    describe('doFetchSpeechKeys', () => {
        const saga = doFetchSpeechKeys();

        it('calls fetchFirebase with speechKeys arg', () => {
            // get next effect by iterating the generator
            const effect = saga.next().value;

            // since effects are just objects that are handled
            // by the middleware, we just need to make sure that
            // the effect object yielded by the saga is correct
            expect(effect).to
                .eql(call(fetchFirebase, 'speechKeys'));
        });

        it('puts FETCHED_SPEECH_KEYS with data', () => {
            const testData = { speechKeys: ['speech1', 'speech2'] };

            // since we never actually make the Firebase API call
            // we need to simulate it by giving the saga mock data
            // when we iterate the generator
            const effect = saga.next(testData).value;

            expect(effect).to
                .eql(put(actions.fetchedSpeechKeys(testData)));
        });

        it('is done', () => {
            // after the PUT and CALL effects, the saga should be
            // done. When a generator is done, the 'done' property
            // of the object returned is true
            const next = saga.next();
            expect(next.done).to.eq(true);
        });
    });

    describe('doPlaySpeech', () => {
        context('when speech is done before start', () => {
            const saga = doPlaySpeech();
            const phrases = ['a phrase'];

            it('puts CLEAR_SPEECH', () => {
                const data = [undefined, phrases, phrases];
                const effects = getAllEffects(saga, data);
                expect(effects).to.deep.include(put(actions.clearSpeech()));
            });
        });

        it('does not delay after final phrase', () => {
            const saga = doPlaySpeech();
            const phrases = ['phrase one', 'phrase two'];
            const data = [undefined, phrases, phrases];
            const effects = getAllEffects(saga, data);

            expect(effects[effects.length - 1]).to
                .eql(put(actions.displayPhrase('phrase two')));
        });
    });
});

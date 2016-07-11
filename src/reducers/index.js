export default function (state = { }, action) {
    switch (action.type) {
        case 'FETCH_SPEECH':
            return {
                ...state,
                currentSpeech: action.speechKey,
                allPhrases: [],
                displayedPhrases: [],
                loading: true,
            };
        case 'FETCHED_SPEECH':
        case 'FETCHED_SPEECH_KEYS':
            return {
                ...state,
                ...action.data,
                loading: false,
            };
        case 'DISPLAY_PHRASE':
            return {
                ...state,
                displayedPhrases: [
                    ...state.displayedPhrases,
                    action.phrase,
                ],
            };
        case 'CLEAR_SPEECH':
            return {
                ...state,
                displayedPhrases: [],
            };
        case 'RESET':
            return { speechKeys: state.speechKeys };
        default:
            return state;
    }
}

export const selectors = {
    getDisplayedPhrases: (state) => state.displayedPhrases,
    getPhrases: (state) => state.phrases,
    getSpeechKeys: (state) => state.speechKeys,
    getLoading: (state) => state.loading,
    getCurrentSpeech: (state) => state.currentSpeech,
};


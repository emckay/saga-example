const fetchSpeechKeys = () => ({
    type: 'FETCH_SPEECH_KEYS',
});

const fetchedSpeechKeys = (speechKeys) => ({
    type: 'FETCHED_SPEECH_KEYS',
    data: { speechKeys },
});

const fetchSpeech = (speechKey) => ({
    type: 'FETCH_SPEECH',
    speechKey,
});

const fetchedSpeech = (phrases) => ({
    type: 'FETCHED_SPEECH',
    data: { phrases },
});

const playSpeech = () => ({
    type: 'PLAY_SPEECH',
});

const displayPhrase = (phrase) => ({
    type: 'DISPLAY_PHRASE',
    phrase,
});

const reset = () => ({
    type: 'RESET',
});

const clearSpeech = () => ({
    type: 'CLEAR_SPEECH',
})

export default {
    fetchSpeechKeys,
    fetchedSpeechKeys,
    fetchSpeech,
    fetchedSpeech,
    playSpeech,
    displayPhrase,
    reset,
    clearSpeech,
};

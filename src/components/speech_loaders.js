import React from 'react';

export const SpeechLoaders = ({ speechKeys, fetchSpeech, loading }) => (
    <div className="speechLoaders">
        {speechKeys.map((key) => (
            <button onClick={() => fetchSpeech(key)} key={key} disabled={loading}>
                Fetch {key}
            </button>
        ))}
    </div>
);

SpeechLoaders.propTypes = {
    speechKeys: React.PropTypes.array.isRequired,
    fetchSpeech: React.PropTypes.func.isRequired,
    loading: React.PropTypes.bool.isRequired,
};

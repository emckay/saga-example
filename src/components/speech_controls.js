import React from 'react';

export const SpeechControls = ({ playSpeech, reset }) => (
    <div className="speechControls">
        <button onClick={playSpeech}>Play</button>
        <button onClick={reset}>Reset</button>
    </div>
);

SpeechControls.propTypes = {
    playSpeech: React.PropTypes.func,
    reset: React.PropTypes.func,
};

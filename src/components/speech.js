import React from 'react';

export const Speech = ({ phrases }) => (
    <div className="speech">
        {phrases !== undefined ? phrases.map((phrase) => (
            <div key={phrase}>{phrase}</div>
        )) : ''}
    </div>
);

Speech.propTypes = {
    phrases: React.PropTypes.array,
};

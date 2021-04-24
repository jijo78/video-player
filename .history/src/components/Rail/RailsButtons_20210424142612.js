import React from 'react';

const RailsButtons = ({ className, testId, onCLick }) => (
    <button
        className={className}
        data-test={testId}
        onClick={onCLick}
    />
);

export default RailsButtons;

import React from 'react';

const RailsButtons = ({ className, testId, onClick }) => (
    <button className={className} data-test={testId} onClick={onClick} />
);

export default RailsButtons;

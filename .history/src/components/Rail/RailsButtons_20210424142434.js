import React from 'react';

import Logo from '../Logo/Logo';

import styles from './header.css';

const RailsButtons = ({ className, testId, onCLick }) => (
    <button
        className={styles['className']}
        data-test={testId}
        onClick={onCLick}
    />
);

export default RailsButtons;

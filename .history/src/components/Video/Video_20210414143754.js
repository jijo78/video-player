import React from 'react';

import { VIDEO_PATH } from '../../shared/constants/assetPaths';

import styles from './video.css';

const Video = props => {    const currentTime = Math.ceil(props.timeElapsed);
    const duration = Math.ceil((props.duration && props.duration) || 0);

    const url = `${VIDEO_PATH}dazn.mp4`;

    return (
        <figure>
            <video
                ref={props.setRef}
                tabIndex={0}
                className={styles.video}
                src={url}
                onKeyPress={props.onKeyPress}
                onMouseOver={props.onMouseOver}
                onMouseLeave={props.onMouseLeave}
            />
            <figcaption>
                <time data-test="elapsed-time"></time>
                <div>
                    <input min="0" type="range" />
                    <progress />
                </div>
                <time data-test="duration-time"></time>
            </figcaption>
        </figure>
    );
};

export default Video;

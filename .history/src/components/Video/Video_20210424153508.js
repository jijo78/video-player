import React from 'react';

import { VIDEO_PATH } from '../../shared/constants/assetPaths';
import { formatTime } from '../../shared/util/formatTime';

import styles from './video.css';

const Video = props => {
    const currentTime = Math.ceil(props.timeElapsed);
    const { hours, minutes, seconds } = formatTime(currentTime);

    const duration = Math.ceil((props.duration && props.duration) || 0);

    const {
        hours: durationHours,
        minutes: durationMinutes,
        seconds: durationSeconds
    } = formatTime(duration);

    const url = `${VIDEO_PATH}dazn.mp4`;

    const seek = e => {
        const skipTo = e.target.value;
        const player = props.setRef.current;
        // player.currentTime = skipTo;
    };

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
                <time data-test="elapsed-time">{`${hours}:${minutes}:${seconds}`}</time>
                <div className={styles.videoWrapper}>
                    <input
                        value={currentTime}
                        min="0"
                        max={duration}
                        type="range"
                        onChange={e => seek(e)}
                    />
                    <progress max={duration} value={currentTime} />
                </div>
                <time data-test="duration-time">{`${durationHours}:${durationMinutes}:${durationSeconds}`}</time>
            </figcaption>
        </figure>
    );
};

export default Video;

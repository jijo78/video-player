import React, { useState, useRef, useEffect } from 'react';

import PlayPause from '../PlayPause/PlayPause';
import Video from '../Video/Video';
import VideoStatus from '../Video/videoStatus';

import styles from './player.css';

const Player = () => {
    const videoElementRef = useRef(null);
    const [timeElapsed, setTimeElapsed] = useState(0);

    const [status, setStatus] = useState(VideoStatus.PAUSED);
    const [isHover, setIsHover] = useState(false);
    const duration =
        videoElementRef.current && videoElementRef.current.duration;

    const isPlaying = status === VideoStatus.PLAYING;
    console.log('isPlaying: ', isPlaying);
    const isUiHidden = !isHover && isPlaying;

    useEffect(() => {
        let videoTimer = setInterval(() => {
            setTimeElapsed(
                videoElementRef.current && videoElementRef.current.currentTime
            );
        }, 500);
        return () => clearInterval(videoTimer);
    }, []);

    const handlePlayPauseClick = () => {
        switch (status) {
            case VideoStatus.PAUSED:
                playVideo();
                break;
            case VideoStatus.PLAYING:
                pauseVideo();
                break;
        }
    };

    const handleVideoKeyPress = target => {
        if (target.charCode === 13) {
            handlePlayPauseClick();
        }
    };

    const playVideo = () => {
        videoElementRef.current.play();
        setStatus(VideoStatus.PLAYING);
    };

    const pauseVideo = () => {
        videoElementRef.current.pause();
        setStatus(VideoStatus.PAUSED);
    };

    const handleVideoMouseOver = () => {
        setIsHover(true);
    };

    const handleVideoMouseLeave = () => {
        setIsHover(false);
    };

    return (
        <div className={styles.player}>
            <Video
                setRef={videoElementRef}
                timeElapsed={timeElapsed}
                duration={duration}
                onKeyPress={handleVideoKeyPress}
                onMouseOver={handleVideoMouseOver}
                onMouseLeave={handleVideoMouseLeave}
            />
            <PlayPause
                isPlaying={isPlaying}
                onClick={handlePlayPauseClick}
                isUiHidden={isUiHidden}
            />
        </div>
    );
};

export default Player;

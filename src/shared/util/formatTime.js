// formatTime takes a time length in seconds and returns the time in
// minutes and seconds
export const formatTime = timeInSeconds => {
    if (isNaN(timeInSeconds)) {
        return '00:00:00';
    }
    const time = new Date(timeInSeconds * 1000).toISOString().substr(11, 8);

    return {
        hours: time.substr(0, 2),
        minutes: time.substr(3, 2),
        seconds: time.substr(6, 2)
    };
};

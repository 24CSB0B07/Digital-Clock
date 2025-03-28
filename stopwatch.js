let stopwatchInterval;
let stopwatchTime = 0;
const stopwatchElement = document.getElementById('stopwatch');
const startStopwatch = document.getElementById('startStopwatch');
const pauseStopwatch = document.getElementById('pauseStopwatch');
const resetStopwatch = document.getElementById('resetStopwatch');

startStopwatch.addEventListener('click', () => {
    stopwatchInterval = setInterval(() => {
        stopwatchTime++;
        const hours = String(Math.floor(stopwatchTime / 3600)).padStart(2, '0');
        const minutes = String(Math.floor((stopwatchTime % 3600) / 60)).padStart(2, '0');
        const seconds = String(stopwatchTime % 60).padStart(2, '0');
        stopwatchElement.textContent = `${hours}:${minutes}:${seconds}`;
    }, 1000);
    startStopwatch.disabled = true;
    pauseStopwatch.disabled = false;
});

pauseStopwatch.addEventListener('click', () => {
    clearInterval(stopwatchInterval);
    startStopwatch.disabled = false;
    pauseStopwatch.disabled = true;
});

resetStopwatch.addEventListener('click', () => {
    clearInterval(stopwatchInterval);
    stopwatchTime = 0;
    stopwatchElement.textContent = '00:00:00';
    startStopwatch.disabled = false;
    pauseStopwatch.disabled = true;
});

const themeSelect = document.getElementById('themeSelect');
const customColor = document.getElementById('customColor');

themeSelect.addEventListener('change', (e) => {
    const theme = e.target.value;
    document.body.className = theme;
    if (theme === 'custom') {
        customColor.style.display = 'inline-block';
        customColor.click();
        document.body.style.backgroundColor = customColor.value;
    } else {
        customColor.style.display = 'none';
    }
});

customColor.addEventListener('input', (e) => {
    if (document.body.className === 'custom') {
        document.body.style.backgroundColor = e.target.value;
    }
});
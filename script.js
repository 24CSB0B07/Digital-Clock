let alarmTime = null;
let alarmTimeout = null;
let stopwatchInterval = null;
let stopwatchTime = 0;
let countdownInterval = null;

function updateClock() {
    let now = new Date();
    document.getElementById('hours').textContent = String(now.getHours()).padStart(2, '0');
    document.getElementById('minutes').textContent = String(now.getMinutes()).padStart(2, '0');
    document.getElementById('seconds').textContent = String(now.getSeconds()).padStart(2, '0');
    document.getElementById('date').textContent = now.toDateString();
}
setInterval(updateClock, 1000);

function setAlarm() {
    alarmTime = document.getElementById('alarmTime').value;
    if (alarmTime) {
        alert('Alarm set for ' + alarmTime);
    }
}

function clearAlarm() {
    alarmTime = null;
    clearTimeout(alarmTimeout);
    alert('Alarm cleared');
}

function startStopwatch() {
    if (!stopwatchInterval) {
        stopwatchInterval = setInterval(() => {
            stopwatchTime++;
            document.getElementById('stopwatchDisplay').textContent = formatTime(stopwatchTime);
        }, 1000);
    }
}

function pauseStopwatch() {
    clearInterval(stopwatchInterval);
    stopwatchInterval = null;
}

function resetStopwatch() {
    clearInterval(stopwatchInterval);
    stopwatchTime = 0;
    document.getElementById('stopwatchDisplay').textContent = '00:00:00';
    stopwatchInterval = null;
}

function formatTime(seconds) {
    let hrs = Math.floor(seconds / 3600);
    let mins = Math.floor((seconds % 3600) / 60);
    let secs = seconds % 60;
    return `${String(hrs).padStart(2, '0')}:${String(mins).padStart(2, '0')}:${String(secs).padStart(2, '0')}`;
}

function startCountdown() {
    let countdownValue = parseInt(document.getElementById('countdownInput').value);
    if (countdownValue > 0) {
        clearInterval(countdownInterval);
        countdownInterval = setInterval(() => {
            if (countdownValue > 0) {
                document.getElementById('countdownDisplay').textContent = countdownValue + ' seconds left';
                countdownValue--;
            } else {
                clearInterval(countdownInterval);
                document.getElementById('countdownDisplay').textContent = 'Time up!';
            }
        }, 1000);
    }
}

function changeTheme() {
    let theme = document.getElementById('themeSelector').value;
    if (theme === 'dark') {
        document.body.style.backgroundColor = '#333';
        document.body.style.color = '#fff';
    } else if (theme === 'neon') {
        document.body.style.backgroundColor = '#000';
        document.body.style.color = '#0ff';
    } else if (theme === 'custom') {
        document.body.style.backgroundColor = '#ffcc00';
        document.body.style.color = '#000';
    } else {
        document.body.style.backgroundColor = '#f4f4f4';
        document.body.style.color = '#333';
    }
}

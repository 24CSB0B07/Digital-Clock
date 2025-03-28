let countdownInterval;
let countdownTime = 0;
const countdownElement = document.getElementById('countdown');
const progressBar = document.getElementById('progress');

document.getElementById('startCountdown').addEventListener('click', () => {
    const minutes = parseInt(document.getElementById('countdownMinutes').value) || 0;
    const seconds = parseInt(document.getElementById('countdownSeconds').value) || 0;
    countdownTime = minutes * 60 + seconds;
    const totalTime = countdownTime;

    if (countdownTime <= 0) {
        alert('Please enter a valid time');
        return;
    }

    clearInterval(countdownInterval);
    countdownInterval = setInterval(() => {
        if (countdownTime <= 0) {
            clearInterval(countdownInterval);
            countdownElement.textContent = '00:00';
            progressBar.style.width = '0%';
            alert('Countdown finished!');
            return;
        }

        countdownTime--;
        const minutes = String(Math.floor(countdownTime / 60)).padStart(2, '0');
        const seconds = String(countdownTime % 60).padStart(2, '0');
        countdownElement.textContent = `${minutes}:${seconds}`;
        progressBar.style.width = `${(countdownTime / totalTime) * 100}%`;
    }, 1000);
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
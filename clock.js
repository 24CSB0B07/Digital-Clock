function updateTime() {
    const timeElement = document.getElementById('time');
    const ampmElement = document.getElementById('ampm');
    const dateElement = document.getElementById('date');

    const now = new Date();
    let hours = now.getHours();
    const minutes = String(now.getMinutes()).padStart(2, '0');
    const seconds = String(now.getSeconds()).padStart(2, '0');
    const ampm = hours >= 12 ? 'PM' : 'AM';

    hours = hours % 12 || 12; 
    hours = String(hours).padStart(2, '0');

    timeElement.textContent = `${hours}:${minutes}:${seconds}`;
    ampmElement.textContent = ampm;

    dateElement.textContent = now.toLocaleDateString('en-US', {
        month: 'long',
        day: 'numeric',
        year: 'numeric'
    });
}

setInterval(updateTime, 1000);
updateTime();

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
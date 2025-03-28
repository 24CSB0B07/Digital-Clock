const alarms = [];
const alarmSound = document.getElementById('alarmSound');
const alarmList = document.getElementById('alarmList');
const snoozeButton = document.getElementById('snoozeAlarm');

function checkAlarms() {
    const now = new Date();
    let hours = now.getHours();
    const minutes = String(now.getMinutes()).padStart(2, '0');
    const ampm = hours >= 12 ? 'PM' : 'AM';
    hours = hours % 12 || 12;
    hours = String(hours).padStart(2, '0');
    const currentTime = `${hours}:${minutes} ${ampm}`;

    alarms.forEach(alarm => {
        if (alarm.active && alarm.time === currentTime) {
            alarmSound.play();
            alarm.active = false;
            snoozeButton.disabled = false;
            updateAlarmList();
        }
    });
}

setInterval(checkAlarms, 1000);


document.getElementById('setAlarm').addEventListener('click', () => {
    const alarmTimeInput = document.getElementById('alarmTime').value; 
    if (alarmTimeInput) {
        const [hours, minutes] = alarmTimeInput.split(':');
        let hoursNum = parseInt(hours);
        const ampm = hoursNum >= 12 ? 'PM' : 'AM';
        hoursNum = hoursNum % 12 || 12;
        const formattedTime = `${String(hoursNum).padStart(2, '0')}:${minutes} ${ampm}`;
        alarms.push({ time: formattedTime, active: true });
        updateAlarmList();
        document.getElementById('alarmTime').value = '';
    } else {
        alert('Please select a valid time');
    }
});

function updateAlarmList() {
    alarmList.innerHTML = alarms.map((alarm, index) => 
        `<div ${alarm.active ? 'class="alarm-active"' : ''}>${alarm.time} <button onclick="deleteAlarm(${index})">Delete</button></div>`
    ).join('');
}

function deleteAlarm(index) {
    alarms.splice(index, 1);
    updateAlarmList();
}

document.getElementById('snoozeAlarm').addEventListener('click', () => {
    const now = new Date();
    now.setMinutes(now.getMinutes() + 5);
    let hours = now.getHours();
    const minutes = String(now.getMinutes()).padStart(2, '0');
    const ampm = hours >= 12 ? 'PM' : 'AM';
    hours = hours % 12 || 12;
    hours = String(hours).padStart(2, '0');
    alarms.push({ time: `${hours}:${minutes} ${ampm}`, active: true });
    updateAlarmList();
    snoozeButton.disabled = true;
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
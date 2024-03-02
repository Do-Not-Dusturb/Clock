let timer;
let hours = 0;
let minutes = 0;
let seconds = 0;

function displayTime() {
    document.getElementById('display').textContent = `${hours.toString().padStart(2, '0')}:${minutes.toString().padStart(2, '0')}:${seconds.toString().padStart(2, '0')}`;
}

function startStopwatch() {
    timer = setInterval(() => {
        seconds++;
        if (seconds === 60) {
            seconds = 0;
            minutes++;
        }
        if (minutes === 60) {
            minutes = 0;
            hours++;
        }
        displayTime();
    }, 1000);
    document.getElementById('startStop').textContent = 'Stop';
}

function stopStopwatch() {
    clearInterval(timer);
    document.getElementById('startStop').textContent = 'Start';
}

function resetStopwatch() {
    clearInterval(timer);
    hours = 0;
    minutes = 0;
    seconds = 0;
    displayTime();
    document.getElementById('startStop').textContent = 'Start';
}

document.getElementById('startStop').addEventListener('click', () => {
    if (timer) {
        stopStopwatch();
    } else {
        startStopwatch();
    }
});

document.getElementById('reset').addEventListener('click', resetStopwatch);


let [milliseconds, seconds, minutes, hours] = [0, 0, 0, 0];
let display = document.getElementById("display");

let timer = null;

function updateDisplay() {
  let h = hours < 10 ? "0" + hours: hours;
  let m = minutes < 10 ? "0" +minutes: minutes;
  let s = seconds < 10 ? "0" +seconds: seconds;
  let ms = milliseconds < 10 ? "00" + milliseconds : milliseconds < 100 ? "0" +  milliseconds: milliseconds;
  display.textContent = `${h}:${m}:${s}:${ms}`;
}
function startTimer() {
  if (timer != null) return;

  timer = setInterval(() => {
    milliseconds += 10;

    if (milliseconds === 1000) {
      milliseconds = 0;
      seconds++;
    }

    if (seconds === 60) {
      seconds = 0;
      minutes++;
    }
    if (minutes === 60) {
      minutes = 0;
      hours++;
    }
    updateDisplay();
  }, 10);
}


function stopTimer(){
  clearInterval(timer);
  timer = null;
};

function resetTimer(){
  stopTimer();
  [milliseconds, seconds, minutes, hours] = [0, 0, 0, 0];
  updateDisplay();

}


document.getElementById("start").addEventListener("click", startTimer);
document.getElementById("pause").addEventListener("click", stopTimer);
document.getElementById("reset").addEventListener("click", resetTimer);

// 1000ms= 1s
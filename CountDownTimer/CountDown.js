const yearsEl = document.getElementById('years');
const daysEl = document.getElementById('days');
const hoursEl = document.getElementById('hours');
const minutesEl = document.getElementById('minutes');
const secondsEl = document.getElementById('seconds');
const CountingDownP = document.getElementById('DateCountingDown_P');
var userInput = prompt("Enter a future date to count down to (Ex: 1 Jan 2023):");
console.log(userInput);

var currentYear = new Date().getFullYear();
var stringCurrentYear = currentYear.toString();

document.body.style.backgroundImage = "url('https://images.unsplash.com/photo-1501139083538-0139583c060f?ixlib=rb-1.2.1&ixid=MnwxMjA3fDB8MHxwaG90by1wYWdlfHx8fGVufDB8fHx8&auto=format&fit=crop&w=1740&q=80')";

//Main countdown function:
function CountDown()
{
    const CountDownDate = new Date(userInput);
    const currentDate = new Date();

    console.log(CountDownDate);
    console.log(currentDate);

    var totalSeconds = (CountDownDate - currentDate) / 1000;
    console.log(totalSeconds)
    
    if (totalSeconds >= 0)
    {
        const years = Math.floor(totalSeconds / 3600 / 24 / 365);
        const days = Math.floor(totalSeconds / 3600 / 24) % 365;
        const hours = Math.floor(totalSeconds / 3600) % 24;
        const mins = Math.floor(totalSeconds / 60) % 60;
        const seconds = Math.floor(totalSeconds) % 60;
        CountingDownP.innerHTML = "Counting Down To " + userInput;

        yearsEl.innerHTML = formatTime(years);
        daysEl.innerHTML = formatTime(days);
        hoursEl.innerHTML = formatTime(hours);
        minutesEl.innerHTML = formatTime(mins);
        secondsEl.innerHTML = formatTime(seconds);
    }else{
        const years = Math.abs(Math.floor(totalSeconds / 3600 / 24 / 365));
        const days = Math.abs(Math.floor(totalSeconds / 3600 / 24) % 365);
        const hours = Math.abs(Math.floor(totalSeconds / 3600) % 24);
        const mins = Math.abs(Math.floor(totalSeconds / 60) % 60);
        const seconds = Math.abs(Math.floor(totalSeconds) % 60);
        CountingDownP.innerHTML = "Counting Up From " + userInput;

        yearsEl.innerHTML = formatTime(years);
        daysEl.innerHTML = formatTime(days);
        hoursEl.innerHTML = formatTime(hours);
        minutesEl.innerHTML = formatTime(mins);
        secondsEl.innerHTML = formatTime(seconds);
    }

    if (days == 0 && hours == 0 && mins == 0 && seconds == 0)
    {
        CountingDownP.innerHTML = userInput + "has been reached!!!";
        alert("Counter finished!!!");
    }
}

function formatTime(time) {
    return time < 10 ? `0${time}` : time;
}

CountDown(userInput);

setInterval(CountDown, 1000);
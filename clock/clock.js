"use strict";

const $ = selector => document.querySelector(selector);

const padSingleDigit = num => num.toString().padStart(2, "0");

let elapsedMinutes = 0;
let elapsedSeconds = 0;
let elapsedMilliseconds = 0;
//let stopwatchInterval = null;

function displayCurrentTime() {
    const now = new Date();
    alert(now);
    let hours = now.getHours();
    const minutes = now.getMinutes();
    const seconds = now.getSeconds();
    let ampm = "AM";

    if (hours === 0) {
        hours = 12;
    } else if (hours > 12) {
        hours -= 12;
        ampm = "PM";
    }
alert(hours);
alert(minutes);
alert (seconds);
    const formattedHours = padSingleDigit(hours);
    const formattedMinutes = padSingleDigit(minutes);
    const formattedSeconds = padSingleDigit(seconds);

    document.getElementById("hours").textContent = formattedHours;
    document.getElementById("minutes").textContent = formattedMinutes;
    document.getElementById("seconds").textContent = formattedSeconds;
    document.getElementById("ampm").textContent = ampm;
};

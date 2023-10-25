"use strict";

const $ = selector => document.querySelector(selector);

const padSingleDigit = num => num.toString().padStart(2, "0");

let elapsedMinutes = 0;
let elapsedSeconds = 0;
let elapsedMilliseconds = 0;
let stopwatchInterval = null;

function displayCurrentTime() {
    const now = new Date();
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

    const formattedHours = padSingleDigit(hours);
    const formattedMinutes = padSingleDigit(minutes);
    const formattedSeconds = padSingleDigit(seconds);

    document.getElementById("hours").textContent = formattedHours;
    document.getElementById("minutes").textContent = formattedMinutes;
    document.getElementById("seconds").textContent = formattedSeconds;
    document.getElementById("ampm").textContent = ampm;
}

function tickStopwatch() {
    elapsedMilliseconds += 10;
  
    if (elapsedMilliseconds >= 1000) {
      elapsedSeconds++;
      elapsedMilliseconds = 0;
    }
  
    if (elapsedSeconds >= 60) {
      elapsedMinutes++;
      elapsedSeconds = 0;
    }
  
    const formattedMinutes = padSingleDigit(elapsedMinutes);
    const formattedSeconds = padSingleDigit(elapsedSeconds);
    const formattedMilliseconds = padSingleDigit(elapsedMilliseconds);
  
    document.getElementById("Min").textContent = formattedMinutes;
    document.getElementById("Sec").textContent = formattedSeconds;
    document.getElementById("count").textContent = formattedMilliseconds;
  }
  

  function startStopwatch(event) {
  event.preventDefault();
  //timer=true;
    if (stopwatchInterval == null) {
      stopwatchInterval = setInterval(tickStopwatch, 10);
    }
  }
  
  function stopStopwatch(event) {
    event.preventDefault();
   //timer=false;
    if (stopwatchInterval !== null) {
      clearInterval(stopwatchInterval);
      stopwatchInterval = null;
    }
  }
  
  function resetStopwatch(event) {
   event.preventDefault();
  
    elapsedMinutes = 0;
    elapsedSeconds = 0;
    elapsedMilliseconds = 0;
    document.getElementById("Hr").textContent = "00";
    document.getElementById("Min").textContent = "00";
    document.getElementById("Sec").textContent = "00";
    document.getElementById("count").textContent = "000";
  
   if (stopwatchInterval !== null) {
      clearInterval(stopwatchInterval);
      stopwatchInterval = null;
    }
  }
  

document.addEventListener("DOMContentLoaded", function() {
  displayCurrentTime();
  setInterval(displayCurrentTime, 1000);


let startBtn = document.getElementById('start');
let stopBtn = document.getElementById('stop');
let resetBtn = document.getElementById('reset');

  start.addEventListener("click", startStopwatch);
  stopBtn.addEventListener("click", stopStopwatch);
  resetBtn.addEventListener("click", resetStopwatch);
});

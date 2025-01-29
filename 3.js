function updateClock() {
    let now = new Date();
    let hours = now.getHours();
    let minutes = now.getMinutes();
    let seconds = now.getSeconds();
    let ampm = hours >= 12 ? "PM" : "AM";

    // Convert 24-hour format to 12-hour format
    hours = hours % 12 || 12;

    // Update digital values
    document.getElementById("hours").innerText = hours.toString().padStart(2, "0");
    document.getElementById("minutes").innerText = minutes.toString().padStart(2, "0");
    document.getElementById("seconds").innerText = seconds.toString().padStart(2, "0");
    document.getElementById("ampm").innerText = ampm;

    // Calculate stroke-dashoffset values
    let hourOffset = 283 - (hours / 12) * 283;
    let minuteOffset = 283 - (minutes / 60) * 283;
    let secondOffset = 283 - (seconds / 60) * 283;

    document.getElementById("hour-progress").style.strokeDashoffset = hourOffset;
    document.getElementById("minute-progress").style.strokeDashoffset = minuteOffset;
    document.getElementById("second-progress").style.strokeDashoffset = secondOffset;
}

// Update the clock every second
setInterval(updateClock, 1000);
updateClock();
// ===============================
// DIGITAL CLOCK
// ===============================

function updateClock() {

    // Get current date and time
    const now = new Date();

    // Get hours, minutes and seconds
    let hours = now.getHours();
    let minutes = now.getMinutes();
    let seconds = now.getSeconds();

    // Convert to two-digit format
    hours = String(hours).padStart(2, "0");
    minutes = String(minutes).padStart(2, "0");
    seconds = String(seconds).padStart(2, "0");

    // Display the time
    document.getElementById("clock").textContent =
        hours + ":" + minutes + ":" + seconds;
}


// ===============================
// NEW YEAR COUNTDOWN
// ===============================

function updateCountdown() {

    // Get current date and time
    const now = new Date();

    // Get next New Year
    const newYear = new Date(
        now.getFullYear() + 1,
        0,
        1
    );

    // Calculate remaining time
    const difference = newYear - now;

    // Convert milliseconds into days
    const days = Math.floor(
        difference / (1000 * 60 * 60 * 24)
    );

    // Convert milliseconds into hours
    const hours = Math.floor(
        (difference / (1000 * 60 * 60)) % 24
    );

    // Convert milliseconds into minutes
    const minutes = Math.floor(
        (difference / (1000 * 60)) % 60
    );

    // Convert milliseconds into seconds
    const seconds = Math.floor(
        (difference / 1000) % 60
    );

    // Display countdown
    document.getElementById("countdown").textContent =
        days + "d " +
        String(hours).padStart(2, "0") + "h " +
        String(minutes).padStart(2, "0") + "m " +
        String(seconds).padStart(2, "0") + "s";
}


// ===============================
// UPDATE EVERY SECOND
// ===============================

updateClock();
updateCountdown();

setInterval(updateClock, 1000);
setInterval(updateCountdown, 1000);
// 📚 JavaScript Concepts Used in Digital Clock 🕰️

// 🗓️ Date Object  
// 🔁 setInterval()   
// 🧵 Template Literals `${}`  
// 🧪 if Conditional Statements  
// 📦 Arrays []  
// 🧠 Variables (const, let)  
// 🧰 Functions 
// 🌐 DOM Manipulation  

function updateClock() {
    const now = new Date();
    let hours = now.getHours();
    let minutes = now.getMinutes();
    let seconds = now.getSeconds();

    // Period: AM / PM
    let period;
    if (hours >= 12) {
        period = "PM";
        if (hours > 12) {
            hours -= 12;
        }
    } else if (hours === 0) {
        hours = 12;
        period = 'AM';
    } else {
        period = 'AM';
    }

    // Pad single digits with zero
    hours = String(hours).padStart(2, '0');
    minutes = String(minutes).padStart(2, '0');
    seconds = String(seconds).padStart(2, '0');

    // Time String
    let timeString = `${hours}:${minutes}:${seconds} ${period}`;
    document.querySelector('#time').textContent = timeString;

    // Date
    const days = ["Sunday", "Monday", "Tuesday", "Wednesday", "Thursday", "Friday", "Saturday"];
    const months = ["January", "February", "March", "April", "May", "June", "July", "August", "September", "October", "November", "December"];

    const day = days[now.getDay()];
    const date = now.getDate();
    const month = months[now.getMonth()];
    const year = now.getFullYear();

    const dateString = `${day}, ${date} ${month} ${year}`;
    document.getElementById("date").textContent = dateString;
}

// Call every second
setInterval(updateClock, 1000);
updateClock();

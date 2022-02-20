const clock = document.querySelector('.clock');

function getTime() {
    const dateObj = new Date();
    const hours = String(dateObj.getHours()).padStart(2, '0');
    const minutes = String(dateObj.getMinutes()).padStart(2, '0');
    const seconds = String(dateObj.getSeconds()).padStart(2, '0');
    
    clock.innerHTML = `${hours}:${minutes}:${seconds}`;
}

setInterval(getTime, 1000);
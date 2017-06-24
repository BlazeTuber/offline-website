// When the page loads, set the status to online or offline
window.onload = function() {
    if (navigator.onLine) {
        document.getElementById("net-status").innerHTML = "online";
    } else {
        document.getElementById("net-status").innerHTML = "offline";
    }
}

// Now add event listeners to notify a change in online status
window.addEventListener("online", function(e) {
    document.getElementById("net-status").innerHTML = "online";
}, true);
window.addEventListener("offline", function(e) {
    document.getElementById("net-status").innerHTML = "offline";
}, true);
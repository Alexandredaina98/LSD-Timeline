let obj = document.querySelectorAll("bar");
console.log(obj.disabled);
document.getElementById("delayedButton").addEventListener("click", function () {
             // Disable the overlay-panel during the delay
             // Disable the button during the delay
             document.getElementById("bar").disabled = true;
             // Add a 3-second delay
             setTimeout(function () {
                 // Re-enable the button after the delay
                 // Perform the desired action here (e.g., navigate to a new page)
    window.location.href = "index.html";
  }, 3000); // 3000 milliseconds = 3 seconds
});
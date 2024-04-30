document.addEventListener("DOMContentLoaded", function() {
    const button = document.getElementById("monkey");
    const audio = new Audio("./monkey.mp3");

    button.addEventListener("click", function() {
        audio.play();
    });
});

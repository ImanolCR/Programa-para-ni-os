document.addEventListener("DOMContentLoaded", function() {
    const playButtons = document.querySelectorAll(".play-sound");

    playButtons.forEach(button => {
        button.addEventListener("click", function() {
            const audio = this.previousElementSibling;
            audio.play();
        });
    });
});
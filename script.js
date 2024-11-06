// Function to play selected song
function playSong(songFile) {
    const audioPlayer = document.getElementById('audioPlayer');
    audioPlayer.src = songFile;
    audioPlayer.play();
}

// Generate floating particles for background effect
document.addEventListener("DOMContentLoaded", () => {
    const particleCount = 20; // Number of particles

    for (let i = 0; i < particleCount; i++) {
        const particle = document.createElement("div");
        particle.classList.add("particle");

        // Set random size, position, and animation timing for each particle
        const size = Math.random() * 20 + 5;
        particle.style.width = `${size}px`;
        particle.style.height = `${size}px`;
        particle.style.left = `${Math.random() * 100}vw`;
        particle.style.animationDuration = `${Math.random() * 5 + 5}s`;
        particle.style.animationDelay = `${Math.random() * 5}s`;

        document.body.appendChild(particle);
    }
});


const pianoKeys = document.querySelectorAll(".piano-keys .key"),
    volumeSlider = document.querySelector(".volume-slider input"),
    keyCheckBox = document.querySelector(".volumn-checkbox input"),
    themeToggle = document.getElementById("theme-toggle");

let allKeys = [];

// Function to play a tune
const playTune = (key) => {
    // Create a new Audio object for each key press
    const audio = new Audio(`Resources/Sounds/KeySounds/${key}.wav`);
    console.log(`Attempting to play: Resources/Sounds/KeySounds/${key}.wav`); // Debugging
    audio.volume = volumeSlider.value; // Set volume from the slider
    audio.play().catch(error => {
        console.error("Error playing audio:", error);
    });

    // Add visual feedback for the pressed key
    const keyElement = document.querySelector(`.piano-keys .key[data-key="${key}"]`);
    if (keyElement) {
        keyElement.classList.add("active");
        setTimeout(() => {
            keyElement.classList.remove("active");
        }, 150);
    }
};

// Add event listeners to piano keys
pianoKeys.forEach(key => {
    allKeys.push(key.dataset.key); // Add all keys to the allKeys array
    key.addEventListener("click", () => playTune(key.dataset.key));
});

// Handle volume change
const handleVolume = (e) => {
    // Update volume for future audio objects
    // Note: This won't affect currently playing sounds
    volumeSlider.value = e.target.value;
};

// Show/hide key labels
const showHideKeys = () => {
    pianoKeys.forEach(key => key.classList.toggle("hide"));
};

// Handle key press
const pressKey = (e) => {
    if (allKeys.includes(e.key)) playTune(e.key);
};

// Toggle Magic Mode
const toggleMagicMode = () => {
    document.body.classList.toggle("magic-mode");
    themeToggle.textContent = document.body.classList.contains("magic-mode") ? "Normal Mode" : "Magic Mode";
};

// Event listeners
volumeSlider.addEventListener("input", handleVolume);
keyCheckBox.addEventListener("click", showHideKeys);
themeToggle.addEventListener("click", toggleMagicMode);
document.addEventListener("keydown", pressKey);

// Movie script 
const videoPopup = document.getElementById("videoPopup");

function openPopup() {
    videoPopup.showModal(); 
}

function closePopup() {
    videoPopup.close(); 
}

document.addEventListener('DOMContentLoaded', () => {
    const sections = document.querySelectorAll('.section');

    const observer = new IntersectionObserver((entries) => {
        entries.forEach(entry => {
            if (entry.isIntersecting) {
                entry.target.classList.add('visible');
            }
        });
    }, { threshold: 0.1 });

    sections.forEach(section => {
        observer.observe(section);
    });
});
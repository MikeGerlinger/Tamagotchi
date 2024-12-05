document.addEventListener("DOMContentLoaded", () => {
    // Initialisation des paramètres
    const hungerBar = document.getElementById("hungerBar");
    const happinessBar = document.getElementById("happinessBar");
    const energyBar = document.getElementById("energyBar");
    const messageBox = document.getElementById("messageBox");
    const emojiElement = document.getElementById("emoji");

    let hunger = 50;
    let happiness = 50; 
    let energy = 50; 

    // Mettre à jour l'affichage des barres
    function updateBars() {
        hungerBar.style.width = `${hunger}%`;
        happinessBar.style.width = `${happiness}%`;
        energyBar.style.width = `${energy}%`;
    }

    // Afficher un message dans le cadran
    function showMessage(message) {
        messageBox.textContent = message;
    }

    // Nourrir l'animal
    function feedPet() {
        if (hunger < 100) {
            hunger = Math.min(100, hunger + 20);
            showMessage("Votre animal est nourri !🍕👍");
        } else {
            showMessage("Votre animal n'a pas faim !🤮");
        }
        updateBars();
    }

    // Jouer avec l'animal
    function playWithPet() {
        if (energy > 10) {
            happiness = Math.min(100, happiness + 15);
            energy = Math.max(0, energy - 10);
            hunger = Math.min(100, hunger + 5);
            showMessage("Votre animal s'est amusé !⚽️");
        } else {
            showMessage("Votre animal est trop fatigué pour jouer !🥱");
        }
        updateBars();
    }

    // Faire dormir l'animal
    function putPetToSleep() {
        if (energy < 100) {
            energy = Math.min(100, energy + 30);
            happiness = Math.min(100, happiness + 5);
            hunger = Math.min(100, hunger + 10);
            showMessage("Votre animal se repose !💤");
        } else {
            showMessage("Votre animal n'a pas besoin de dormir ! ☄️");
        }
        updateBars();
    }

    // Décrémentation automatique toutes les 5 secondes
    setInterval(() => {
        hunger = Math.min(100, hunger + 5); 
        happiness = Math.max(0, happiness - 2); 
        energy = Math.max(0, energy - 1); 

        // Si l'une des barres tombe à 0
        if (hunger >= 100) {
            happiness = Math.max(0, happiness - 5); 
        }

        if (happiness === 0 || energy === 0) {
            showMessage("Votre animal virtuel est en danger ! 🚨");
        }

        updateBars();
    }, 5000);

    // Changer l'emoji lorsque l'on clique dessus
    const emojis = ['🐱', '🐶', '🐰', '🦊', '🐼'];
    let currentEmojiIndex = 0;

    emojiElement.addEventListener("click", () => {
        currentEmojiIndex = (currentEmojiIndex + 1) % emojis.length;
        emojiElement.textContent = emojis[currentEmojiIndex];
        showMessage("Vous avez changé l'apparence de votre animal !🫶");
    });

    // Initialiser les barres et le message
    updateBars();
    showMessage("Bienvenue dans le monde de votre animal virtuel !😎");

    // Associer les fonctions aux boutons
    window.feedPet = feedPet;
    window.playWithPet = playWithPet;
    window.putPetToSleep = putPetToSleep;
});
const envelope = document.getElementById('envelope');
const popup = document.getElementById('popup');

envelope.addEventListener('click', () => {
  envelope.classList.toggle('open');
  popup.classList.toggle('show');
});

function hidePopup() {
  popup.classList.remove('show');
}

function teleportButton() {
    const buttonNon = document.querySelector('.popup button:last-child'); // Sélectionne le dernier bouton dans .popup
    const buttonWidth = buttonNon.offsetWidth;
    const buttonHeight = buttonNon.offsetHeight;
    const maxX = window.innerWidth - buttonWidth;
    const maxY = window.innerHeight - buttonHeight;
    const randomX = Math.max(0, Math.floor(Math.random() * maxX)); // Ajustement pour éviter que le bouton sorte à gauche de l'écran
    const randomY = Math.max(0, Math.floor(Math.random() * maxY)); // Ajustement pour éviter que le bouton sorte en haut de l'écran
    buttonNon.style.position = 'absolute';
    buttonNon.style.left = randomX + 'px';
    buttonNon.style.top = randomY + 'px';
  }

// Script JavaScript de base pour le portfolio
// Vous pouvez ajouter des fonctionnalités ici si besoin

document.querySelector('form').addEventListener('submit', function(e) {
    e.preventDefault();
    // Affiche un message de confirmation sous le formulaire
    let confirmation = document.getElementById('confirmation-message');
    if (!confirmation) {
        confirmation = document.createElement('p');
        confirmation.id = 'confirmation-message';
        confirmation.style.color = '#43a047';
        confirmation.style.fontWeight = 'bold';
        this.parentNode.appendChild(confirmation);
    }
    confirmation.textContent = 'Merci pour votre message, je vous répondrai rapidement !';
    this.reset();
});
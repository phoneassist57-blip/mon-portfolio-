// Mini-jeu : Devine le nombre
const secret = Math.floor(Math.random() * 100) + 1;
let essais = 0;

function checkGuess() {
    const guess = Number(document.getElementById('guess').value);
    essais++;
    let message = '';
    if (guess === secret) {
        message = `Bravo ! Vous avez trouvé le nombre mystère (${secret}) en ${essais} essais.`;
    } else if (guess < secret) {
        message = 'C’est plus !';
    } else {
        message = 'C’est moins !';
    }
    document.getElementById('result').textContent = message;
}
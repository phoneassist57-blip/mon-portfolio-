// Jeu Mémo simple
const cardsArray = [
  '🍎', '🍌', '🍒', '🍇', '🍉', '🍋', '🍓', '🍍'
];
let cards = [];
let firstCard = null;
let secondCard = null;
let lock = false;
let foundPairs = 0;

function shuffle(array) {
  for (let i = array.length - 1; i > 0; i--) {
    const j = Math.floor(Math.random() * (i + 1));
    [array[i], array[j]] = [array[j], array[i]];
  }
}

function createBoard() {
  cards = [...cardsArray, ...cardsArray];
  shuffle(cards);
  const board = document.getElementById('game-board');
  board.innerHTML = '';
  foundPairs = 0;
  document.getElementById('result').textContent = '';
  cards.forEach((emoji, idx) => {
    const card = document.createElement('button');
    card.className = 'card';
    card.dataset.index = idx;
    card.textContent = '';
    card.onclick = () => flipCard(card, emoji);
    board.appendChild(card);
  });
}

function flipCard(card, emoji) {
  if (lock || card.textContent !== '') return;
  card.textContent = emoji;
  if (!firstCard) {
    firstCard = card;
  } else if (!secondCard && card !== firstCard) {
    secondCard = card;
    lock = true;
    setTimeout(checkMatch, 700);
  }
}

function checkMatch() {
  if (firstCard.textContent === secondCard.textContent) {
    firstCard.disabled = true;
    secondCard.disabled = true;
    foundPairs++;
    if (foundPairs === cardsArray.length) {
      document.getElementById('result').textContent = 'Bravo, toutes les paires sont trouvées !';
    }
  } else {
    firstCard.textContent = '';
    secondCard.textContent = '';
  }
  firstCard = null;
  secondCard = null;
  lock = false;
}

function restartGame() {
  firstCard = null;
  secondCard = null;
  lock = false;
  createBoard();
}

window.onload = createBoard;

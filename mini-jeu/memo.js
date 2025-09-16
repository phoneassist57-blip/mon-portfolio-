const emojis = ['🍓', '🍇', '🍉', '🍒', '🍍', '🥝'];
let cards = [...emojis, ...emojis];
let flippedCards = [];
let matchedCards = [];

function shuffle(array) {
  return array.sort(() => 0.5 - Math.random());
}

function createBoard() {
  const board = document.getElementById('game-board');
  board.innerHTML = '';
  shuffle(cards).forEach((emoji, index) => {
    const card = document.createElement('div');
    card.classList.add('card');
    card.dataset.emoji = emoji;
    card.dataset.index = index;
    card.innerText = '❓';
    card.addEventListener('click', flipCard);
    board.appendChild(card);
  });
}

function flipCard(e) {
  const card = e.target;
  const emoji = card.dataset.emoji;
  const index = card.dataset.index;

  if (flippedCards.length < 2 && !matchedCards.includes(index) && !flippedCards.includes(index)) {
    card.innerText = emoji;
    flippedCards.push(index);

    if (flippedCards.length === 2) {
      checkMatch();
    }
  }
}

function checkMatch() {
  const [i1, i2] = flippedCards;
  const c1 = document.querySelector(`[data-index='${i1}']`);
  const c2 = document.querySelector(`[data-index='${i2}']`);

  if (c1.dataset.emoji === c2.dataset.emoji) {
    matchedCards.push(i1, i2);
    document.getElementById('result').innerText = `Paires trouvées : ${matchedCards.length / 2}`;
  } else {
    setTimeout(() => {
      c1.innerText = '❓';
      c2.innerText = '❓';
    }, 1000);
  }

  flippedCards = [];

  if (matchedCards.length === cards.length) {
    document.getElementById('result').innerText = '🎉 Bravo, toutes les paires sont trouvées !';
  }
}

function restartGame() {
  flippedCards = [];
  matchedCards = [];
  createBoard();
  document.getElementById('result').innerText = '';
}

createBoard();

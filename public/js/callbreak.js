// Detect if paid mode
const urlParams = new URLSearchParams(window.location.search);
const isPaid = urlParams.get('paid') === 'true';

// Players and initial balance
let players = [
  { name: 'Player 1', balance: isPaid ? 0.25 : 0 },
  { name: 'Player 2', balance: isPaid ? 0.25 : 0 },
  { name: 'Player 3', balance: isPaid ? 0.25 : 0 },
  { name: 'Player 4', balance: isPaid ? 0.25 : 0 }
];

// Start game
function startGame() {
  alert(isPaid ? "Paid Call Break game started!" : "Free Call Break game started!");
  // Your Call Break game logic here...
}

// When game ends, distribute rewards if paid
function endGame(winnerIndex) {
  if(isPaid) {
    const winner = players[winnerIndex];
    winner.balance += 3; // Winner gets 3 INR
    alert(`Winner: ${winner.name} wins 3 INR!`);
    // Record the remaining Rs 1 to your PayPal account
  } else {
    alert(`Winner: ${players[winnerIndex].name}`);
  }
}

// Example start
startGame();

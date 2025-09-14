// Detect if paid mode
const urlParams = new URLSearchParams(window.location.search);
const isPaid = urlParams.get('paid') === 'true';

// Players and initial balance
let players = [
  { name: 'Player 1', balance: isPaid ? 0.5 : 0 },
  { name: 'Player 2', balance: isPaid ? 0.5 : 0 }
];

// Start game
function startGame() {
  alert(isPaid ? "Paid Snake & Ladder game started!" : "Free Snake & Ladder game started!");
  // Game logic here...
}

// When game ends, distribute rewards if paid
function endGame(winnerIndex) {
  if(isPaid) {
    const winner = players[winnerIndex];
    winner.balance += 1.5; // Winner gets 1.5 INR
    alert(`Winner: ${winner.name} wins 1.5 INR!`);
    // Your logic to record payments can go here
  } else {
    alert(`Winner: Player ${winnerIndex + 1}`);
  }
}

// Example start
startGame();

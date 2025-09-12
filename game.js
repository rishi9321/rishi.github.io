function startGame(gameName, mode){
    if(mode === 'paid'){
        paypal.Buttons({
            createOrder: (data, actions) => {
                return actions.order.create({
                    purchase_units: [{ amount: { value: '1.00' } }]
                });
            },
            onApprove: (data, actions) => {
                return actions.order.capture().then(details => {
                    alert('Payment successful! Joining ' + gameName);
                    joinMultiplayer(gameName, mode);
                });
            }
        }).render('#paypal-button-container');
    } else {
        joinMultiplayer(gameName, mode);
    }
}

function joinMultiplayer(gameName, mode){
    const roomName = gameName + '-room';
    const playersRef = db.ref(roomName + '/players');

    // Add player
    const newPlayerRef = playersRef.push();
    newPlayerRef.set({
        id: newPlayerRef.key,
        mode: mode,
        joinedAt: Date.now()
    });

    // Listen for other players
    playersRef.on('value', snapshot => {
        const players = snapshot.val();
        console.log('Players in room:', players);

        // Start game automatically if enough players joined
        let requiredPlayers = 2;
        if(gameName === 'ludo' || gameName === 'callbreak') requiredPlayers = 4;

        if(players && Object.keys(players).length === requiredPlayers){
            alert('All players joined! Start ' + gameName);
            startGameLogic(gameName, players);
        }
    });
}

function startGameLogic(gameName, players){
    // TODO: Implement actual game moves sync and winner calculation
    console.log('Starting', gameName, 'with players:', players);

    // Placeholder: Random winner simulation
    const playerKeys = Object.keys(players);
    const winnerKey = playerKeys[Math.floor(Math.random()*playerKeys.length)];
    alert('Winner is: ' + winnerKey + ' 🎉');

    // Handle payout logic here (PayPal Payout API or manual)
}

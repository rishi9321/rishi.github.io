function startGame(gameName, mode) {
    if(mode === 'paid'){
        // Show PayPal button for payment
        paypal.Buttons({
            createOrder: function(data, actions) {
                return actions.order.create({
                    purchase_units: [{
                        amount: { value: '1.00' }
                    }]
                });
            },
            onApprove: function(data, actions) {
                return actions.order.capture().then(function(details) {
                    alert('Payment successful! Welcome to ' + gameName);
                    joinMultiplayer(gameName, mode);
                });
            }
        }).render('#paypal-button-container');
    } else {
        alert('Joining ' + gameName + ' in free mode!');
        joinMultiplayer(gameName, mode);
    }
}

function joinMultiplayer(gameName, mode){
    // Placeholder: Connect to Firebase to join a room
    console.log('Connecting to multiplayer room for', gameName, 'Mode:', mode);
    // Implement game logic here later
}

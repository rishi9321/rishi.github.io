// Call Break JS

// Free Mode
function startCallBreakFree(players) {
    alert("Starting Call Break Free Mode with " + players + " players!");
    // TODO: Add your existing 4-player free game logic here
}

// Paid Mode
function startCallBreakPaid(players) {
    const paypalDiv = document.getElementById('paypal-button-container-callbreak') || document.createElement("div");
    paypalDiv.id = "paypal-button-container-callbreak";
    if (!document.getElementById('paypal-button-container-callbreak')) document.body.appendChild(paypalDiv);

    paypal.Buttons({
        createOrder: function(data, actions) {
            return actions.order.create({
                purchase_units: [{
                    amount: { value: (players * 1).toFixed(2) }  // Rs 1 per player, 4 players = Rs 4
                }]
            });
        },
        onApprove: function(data, actions) {
            return actions.order.capture().then(function(details) {
                alert('Payment completed! Starting Paid Call Break.');
                // TODO: Start your 4-player paid game logic here
                // After game ends:
                // Winner gets Rs 3, Rs 1 goes to PayPal (rksingh9321@gmail.com)
            });
        }
    }).render('#paypal-button-container-callbreak');
}

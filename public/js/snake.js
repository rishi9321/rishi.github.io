// Snake & Ladder JS

// Free Mode
function startSnakeFree(players) {
    alert("Starting Snake & Ladder Free Mode with " + players + " players!");
    // TODO: Add your existing 2-player free game logic here
}

// Paid Mode
function startSnakePaid(players) {
    const paypalDiv = document.getElementById('paypal-button-container') || document.createElement("div");
    paypalDiv.id = "paypal-button-container";
    if (!document.getElementById('paypal-button-container')) document.body.appendChild(paypalDiv);

    paypal.Buttons({
        createOrder: function(data, actions) {
            return actions.order.create({
                purchase_units: [{
                    amount: { value: (players * 1).toFixed(2) }  // Rs 1 per player
                }]
            });
        },
        onApprove: function(data, actions) {
            return actions.order.capture().then(function(details) {
                alert('Payment completed! Starting Paid Snake & Ladder.');
                // TODO: Start your 2-player paid game logic here
                // After game ends:
                // Winner gets Rs 1.5, Rs 0.5 goes to PayPal (rksingh9321@gmail.com)
            });
        }
    }).render('#paypal-button-container');
}

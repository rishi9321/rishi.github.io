// Ludo JS

// Free Mode
function playLudoFree() {
    alert("Starting Ludo Free Mode!");
    // TODO: Add your existing 4-player free game logic here
}

// Paid Mode
function playLudoPaid() {
    const paypalDiv = document.getElementById('paypal-button-container') || document.createElement("div");
    paypalDiv.id = "paypal-button-container";
    if (!document.getElementById('paypal-button-container')) document.body.appendChild(paypalDiv);

    paypal.Buttons({
        createOrder: function(data, actions) {
            return actions.order.create({
                purchase_units: [{
                    amount: { value: '4.00' }  // Rs 1 per player, 4 players
                }]
            });
        },
        onApprove: function(data, actions) {
            return actions.order.capture().then(function(details) {
                alert('Payment completed! Starting Paid Ludo.');
                // TODO: Start your 4-player paid game logic here
                // After game ends:
                // Winner gets Rs 3, Rs 1 goes to PayPal rksingh9321@gmail.com
            });
        }
    }).render('#paypal-button-container');
}

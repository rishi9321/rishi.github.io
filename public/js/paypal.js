// public/js/paypal.js

// PayPal client ID (replace with your own)
const PAYPAL_CLIENT_ID = "YOUR_PAYPAL_CLIENT_ID";

// Function to render PayPal button
function renderPayPalButton(containerId, amount, onApproveCallback) {
  if (!paypal) {
    console.error("PayPal SDK not loaded!");
    return;
  }

  paypal.Buttons({
    createOrder: function(data, actions) {
      return actions.order.create({
        purchase_units: [{
          amount: {
            value: amount.toFixed(2)
          }
        }]
      });
    },
    onApprove: function(data, actions) {
      return actions.order.capture().then(function(details) {
        alert("Payment completed by " + details.payer.name.given_name);
        if (typeof onApproveCallback === "function") {
          onApproveCallback(details);
        }
      });
    },
    onError: function(err) {
      console.error(err);
      alert("Payment failed. Check console for details.");
    }
  }).render(`#${containerId}`);
}

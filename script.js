let cartItems = [];
let totalPrice = 0;

// Function to add item to cart
function addToCart(item, price) {
    cartItems.push({ item, price });
    totalPrice += price;
    updateCartDisplay();
    document.getElementById('cart').classList.add('open');
}

// Function to update cart display
function updateCartDisplay() {
    const cartList = document.getElementById('cart-items');
    const totalDisplay = document.getElementById('total-price');
    cartList.innerHTML = '';
    cartItems.forEach((cartItem, index) => {
        cartList.innerHTML += `<li>${cartItem.item} - $${cartItem.price} <button onclick="removeFromCart(${index})">Remove</button></li>`;
    });
    totalDisplay.textContent = totalPrice.toFixed(2);
}

// Function to remove item from cart
function removeFromCart(index) {
    totalPrice -= cartItems[index].price;
    cartItems.splice(index, 1);
    updateCartDisplay();
}

// Toggle cart visibility
document.getElementById('cart-icon').addEventListener('click', function (e) {
    e.preventDefault();
    document.getElementById('cart').classList.toggle('open');
});

// Close the cart
document.getElementById('close-cart').addEventListener('click', function () {
    document.getElementById('cart').classList.remove('open');
});

// PayPal integration
function initPayPalButton() {
    paypal.Buttons({
        style: {
            shape: 'rect',
            color: 'gold',
            layout: 'vertical',
            label: 'paypal',
        },
        createOrder: function (data, actions) {
            return actions.order.create({
                purchase_units: [{ "amount": { "currency_code": "USD", "value": totalPrice.toFixed(2) } }]
            });
        },
        onApprove: function (data, actions) {
            return actions.order.capture().then(function (orderData) {
                const element = document.getElementById('paypal-button-container');
                element.innerHTML = '';
                element.innerHTML = '<h3>Thank you for your payment!</h3>';
            });
        },
        onError: function (err) {
            console.log(err);
        }
    }).render('#paypal-button-container');
}
initPayPalButton();
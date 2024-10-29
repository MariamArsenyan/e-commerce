// If you have time, you can move this variable "products" to a json or js file and load the data in this js. It will look more professional
var products = [
    {
        id: 1,
        name: 'cooking oil',
        price: 10.5,
        type: 'grocery',
        offer: {
            number: 3,
            percent: 20
        }
    },
    {
        id: 2,
        name: 'Pasta',
        price: 6.25,
        type: 'grocery'
    },
    {
        id: 3,
        name: 'Instant cupcake mixture',
        price: 5,
        type: 'grocery',
        offer: {
            number: 10,
            percent: 30
        }
    },
    {
        id: 4,
        name: 'All-in-one',
        price: 260,
        type: 'beauty'
    },
    {
        id: 5,
        name: 'Zero Make-up Kit',
        price: 20.5,
        type: 'beauty'
    },
    {
        id: 6,
        name: 'Lip Tints',
        price: 12.75,
        type: 'beauty'
    },
    {
        id: 7,
        name: 'Lawn Dress',
        price: 15,
        type: 'clothes'
    },
    {
        id: 8,
        name: 'Lawn-Chiffon Combo',
        price: 19.99,
        type: 'clothes'
    },
    {
        id: 9,
        name: 'Toddler Frock',
        price: 9.99,
        type: 'clothes'
    }
]

// => Reminder, it's extremely important that you debug your code. 
// ** It will save you a lot of time and frustration!
// ** You'll understand the code better than with console.log(), and you'll also find errors faster. 
// ** Don't hesitate to seek help from your peers or your mentor if you still struggle with debugging.

// Improved version of cartList. Cart is an array of products (objects), but each one has a quantity field to define its quantity, so these products are not repeated.
var cart = [];

var total = 0;

// Exercise 1
function buy(id) {
    let product = products.find(item => item.id === id);
    let cartItem = cart.find(item => item.id === id);
    
    if (cartItem) {
        cartItem.quantity++;
    } else {
        cart.push({ ...product, quantity: 1 });
    }
    
    calculateTotal();
    printCart();
}


// Exercise 2
function cleanCart() {
    cart = [];
    calculateTotal();
    printCart();
}

// Exercise 3
function calculateTotal() {
    total = 0; 
    for (let item of cart) {
        total += item.price * item.quantity;
    }
    document.getElementById("total_price").innerText = total.toFixed(2); 
}


// Exercise 4
function applyPromotionsCart() {
    for (let item of cart) {
        if (item.id === 1 && item.quantity >= 3) { 
            item.subtotalWithDiscount = item.quantity * item.price * (1 - 0.20);
        } else if (item.id === 3 && item.quantity >= 10) { 
            item.subtotalWithDiscount = item.quantity * item.price * (1 - 0.30);
        } else {
            delete item.subtotalWithDiscount; 
        }
    }
}


// Exercise 5
function printCart() {
    const cartList = document.getElementById("cart_list");
    cartList.innerHTML = ""; 
    applyPromotionsCart();

    for (let item of cart) {
        const totalPrice = item.subtotalWithDiscount || item.price * item.quantity; 
        const row = document.createElement("tr");
        row.innerHTML = `
            <th scope="row">${item.name}</th>
            <td>$${item.price.toFixed(2)}</td>
            <td>${item.quantity}</td>
            <td>$${totalPrice.toFixed(2)}</td>
        `;
        cartList.appendChild(row);
    }
    
    calculateTotal();
    document.getElementById("count_product").innerText = cart.reduce((sum, item) => sum + item.quantity, 0); 
}



// ** Nivell II **

// Exercise 7
function removeFromCart(productId) {
    const product = cart.find(item => item.id === productId);
    if (product) {
        if (product.quantity > 1) {
            product.quantity -= 1;
        } else {
            const productIndex = cart.indexOf(product);
            cart.splice(productIndex, 1);
        }
    }
    applyPromotionsCart();
    printCart();
}

function open_modal() {
    printCart();
}
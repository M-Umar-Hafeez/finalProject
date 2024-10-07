let totalItems = 0;
let totalPrice = 0.0;
const cartToggleBtn = document.getElementById('cartToggleBtn');
const closeBtn = document.getElementById('closeBtn');
const cartSidebar = document.getElementById('cart');
const overlay = document.getElementById('overlay');
const cartContent = document.querySelector('.cart-content');
const removeAllBtn = document.querySelector('.removeall-btn');

function loadCart() {
    const storedCart = JSON.parse(localStorage.getItem('cartItems')) || [];
    const storedPrice = parseFloat(localStorage.getItem('cartTotalPrice')) || 0;
    const storedCount = parseInt(localStorage.getItem('cartTotalItems')) || 0;

    totalItems = storedCount;
    totalPrice = storedPrice;

    document.getElementById('citems').innerText = totalItems;
    document.getElementById('price').innerText = totalPrice.toFixed(2);

    if (storedCart.length > 0) {
        cartContent.innerHTML = '';
        storedCart.forEach(item => {
            const productDiv = document.createElement('div');
            productDiv.classList.add('cart-product');
            productDiv.innerHTML = `
                <img src="${item.imgSrc}" alt="${item.productName}" class="cart-product-img" />
                <div class="cart-product-details">
                    <h4>${item.productName}</h4>
                    <p>Price: $${item.price}</p>
                </div>
            `;
            cartContent.appendChild(productDiv);
        });

        if (totalItems > 0) {
            removeAllBtn.style.display = 'block';
        }
    } else {
        cartContent.innerHTML = '<p>No product in the cart</p>';
    }
    
}

function addToCart(price, imgSrc, productName) {
    totalItems++;
    totalPrice += price;

    document.getElementById('citems').innerText = totalItems;
    document.getElementById('price').innerText = totalPrice.toFixed(2);

    const productDiv = document.createElement('div');
    productDiv.classList.add('cart-product');
    productDiv.innerHTML = `
        <img src="${imgSrc}" alt="${productName}" class="cart-product-img" />
        <div class="cart-product-details">
            <h4>${productName}</h4>
            <p>Price: $${price}</p>
        </div>
    `;

    cartContent.appendChild(productDiv);

    removeAllBtn.style.display = 'block';

    let cartItems = JSON.parse(localStorage.getItem('cartItems')) || [];
    cartItems.push({ price, imgSrc, productName });
    localStorage.setItem('cartItems', JSON.stringify(cartItems));
    localStorage.setItem('cartTotalItems', totalItems);
    localStorage.setItem('cartTotalPrice', totalPrice.toFixed(2));
}



function removeall() {
    totalItems = 0;
    totalPrice = 0.0;

    document.getElementById('citems').innerText = totalItems;
    document.getElementById('price').innerText = totalPrice.toFixed(2);
    cartContent.innerHTML = '<p>No product in the cart</p>';

    removeAllBtn.style.display = 'none';

    localStorage.removeItem('cartItems');
    localStorage.removeItem('cartTotalItems');
    localStorage.removeItem('cartTotalPrice');

}

function toggleCart() {
    cartSidebar.classList.toggle('active');
    overlay.classList.toggle('active');
}

cartToggleBtn.addEventListener('click', toggleCart);
closeBtn.addEventListener('click', toggleCart);
overlay.addEventListener('click', toggleCart);

window.onload = loadCart;


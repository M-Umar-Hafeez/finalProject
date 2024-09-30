
let totalItems = 0; 
let totalPrice = 0.0; 
const cartContent = document.querySelector('.cart-content');
const removeAllBtn = document.querySelector('.removeall-btn');

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

    if (cartContent.children.length === 1) {
        cartContent.innerHTML = ''; 
    }

    removeAllBtn.style.display = 'block';
}


function removeall() {
    totalItems = 0;
    totalPrice = 0.0;
    document.getElementById('citems').innerText = totalItems;
    document.getElementById('price').innerText = totalPrice.toFixed(2);

    cartContent.innerHTML = '<p>No products in the cart.</p>';

    removeAllBtn.style.display = 'none';
}

const cartToggleBtn = document.getElementById('cartToggleBtn');
const closeBtn = document.getElementById('closeBtn');
const cartSidebar = document.getElementById('cart');
const overlay = document.getElementById('overlay');


  function toggleCart() {
    cartSidebar.classList.toggle('active');
    overlay.classList.toggle('active');
  }
  
  cartToggleBtn.addEventListener('click', toggleCart);
  closeBtn.addEventListener('click', toggleCart);
  overlay.addEventListener('click', toggleCart);
// Single-file JS for the arcade store
const PRODUCTS = [
  {
    id: 'p1',
    title: 'Space Invaders',
    price: 4.99,
    img: 'https://picsum.photos/seed/space/400/300',
  },
  {
    id: 'p2',
    title: 'Pac Runner',
    price: 3.49,
    img: 'https://picsum.photos/seed/pac/400/300',
  },
  {
    id: 'p3',
    title: 'Neon Racer',
    price: 5.99,
    img: 'https://picsum.photos/seed/racer/400/300',
  },
  {
    id: 'p4',
    title: 'Bubble Pop',
    price: 2.99,
    img: 'https://picsum.photos/seed/bubble/400/300',
  },
  {
    id: 'p5',
    title: 'Alien Shooter',
    price: 6.99,
    img: 'https://picsum.photos/seed/alien/400/300',
  },
];

const $products = document.getElementById('products');
const $template = document.getElementById('product-template');
const $cartToggle = document.getElementById('cart-toggle');
const $cart = document.getElementById('cart');
const $cartItems = document.getElementById('cart-items');
const $cartCount = document.getElementById('cart-count');
const $cartTotal = document.getElementById('cart-total');
const $checkout = document.getElementById('checkout');

let cart = {};

function format(n) {
  return n.toFixed(2);
}

function renderProducts() {
  $products.innerHTML = '';
  PRODUCTS.forEach((p) => {
    const el = $template.content.cloneNode(true);
    el.querySelector('.product-image').src = p.img;
    el.querySelector('.product-image').alt = p.title;
    el.querySelector('.product-title').textContent = p.title;
    el.querySelector('.product-price').textContent = `$${format(p.price)}`;
    el.querySelector('.add-btn').addEventListener('click', () => addToCart(p));
    $products.appendChild(el);
  });
}

function updateCartUI() {
  $cartItems.innerHTML = '';
  const keys = Object.keys(cart);
  if (keys.length === 0) {
    $cartItems.innerHTML = '<div class="empty">Your cart is empty</div>';
    $cartCount.textContent = '0';
    $cartTotal.textContent = format(0);
    return;
  }

  let total = 0;
  keys.forEach((id) => {
    const item = cart[id];
    total += item.qty * item.price;
    const li = document.createElement('li');
    li.innerHTML = `
      <div>${item.title} <small class="muted">x${item.qty}</small></div>
      <div>$${format(
        item.price * item.qty
      )} <button data-id="${id}" class="remove">✖</button></div>
    `;
    li.querySelector('.remove').addEventListener('click', (e) => {
      removeFromCart(id);
    });
    $cartItems.appendChild(li);
  });
  $cartCount.textContent = keys.reduce((s, k) => s + cart[k].qty, 0);
  $cartTotal.textContent = format(total);
}

function addToCart(p) {
  if (!cart[p.id]) cart[p.id] = { ...p, qty: 0 };
  cart[p.id].qty += 1;
  updateCartUI();
}

function removeFromCart(id) {
  if (!cart[id]) return;
  cart[id].qty -= 1;
  if (cart[id].qty <= 0) delete cart[id];
  updateCartUI();
}

$cartToggle.addEventListener('click', () => {
  $cart.classList.toggle('open');
});

$checkout.addEventListener('click', () => {
  if (Object.keys(cart).length === 0) {
    alert('Your cart is empty. Add some games first!');
    return;
  }
  const total = Object.values(cart).reduce((s, i) => s + i.qty * i.price, 0);
  // Simulate checkout
  alert(`Thanks for your purchase! Total: $${format(total)}`);
  cart = {};
  updateCartUI();
});

renderProducts();
updateCartUI();

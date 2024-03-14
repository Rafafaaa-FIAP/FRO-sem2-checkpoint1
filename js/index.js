
showProducts();

function showProducts() {
  let html = '';
  for (let i = 0; i < 12; i++) {
    html += `
      <div class="card">
        <h3>Creme</h3>
        <picture>
          <img src="./images/product-example.jpg" alt="">
        </picture>
        <p>R$ 250,00</p>
        <a href="./product.html">
          <button>Comprar</button>
        </a>
      </div>
    `
  }
  document.querySelector('section#products').innerHTML = html;
}

//profile
async function fetchData() {
  const response = await fetch('https://65261c4e67cfb1e59ce7e741.mockapi.io/users');
  const data = await response.json();

  const navbarProfile = document.getElementById('profile');
  const user = data[0];
  const profile = document.createElement('p');
  profile.textContent = `Hello, ${user.nama}!`;
  navbarProfile.appendChild(profile);
}
fetchData();

// // form quantity
//   const plusButton = document.querySelector('.plus');
//   const minusButton = document.querySelector('.minus');
//   const quantityElement = document.querySelector('.num');
//   const priceElement = document.querySelector('.total-price');

//   // Harga per produk
//   const hargaProduk = 58000;

//   plusButton.addEventListener('click', function () {
//     let jumlah = parseInt(quantityElement.textContent);
//     jumlah++;
//     quantityElement.textContent = jumlah;

//     let hargaTotal = jumlah * hargaProduk;
//     priceElement.textContent = 'Total: Rp ' + hargaTotal.toLocaleString();
//   });


//   minusButton.addEventListener('click', function () {
//     let jumlah = parseInt(quantityElement.textContent);
//     if (jumlah > 1) {
//       jumlah--;
//       quantityElement.textContent = jumlah;

//       let hargaTotal = jumlah * hargaProduk;
//       priceElement.textContent = 'Total: Rp ' + hargaTotal.toLocaleString();
//     }
//   });



function fetchCartData() {
  fetch('https://652760d5917d673fd76d9d06.mockapi.io/api/v1/product-list-kelontong/cart')
    .then(response => response.json())
    .then(data => {
      const cartItems = document.getElementById('cartItems');
      cartItems.innerHTML = '';

      data.forEach(item => {
        const cartItem = document.createElement('div');
        cartItem.innerHTML = `
        <div class="card" style="max-width: 540px;">
        <div class="row g-0">
            <div class="col-md-4">
                <img src=${item.image} class="img-fluid" alt=${item.name}>
            </div>
            <div class="col-md-8">
                <div class="card-body">
                    <h1 class="fw-bold fs-3 text lh-lg">${item.name}</h1>
                    <h2 class="fw-normal fs-5 text lh-lg">${item.price}</h2>
                    <div class="qty container mt-5"> Qty: ${item.qty}
                        <div class="row">
                            <div class="col-md-10">
                                <div class=" quantity input-group d-flex justify-content-evenly">
                                    <span class="delete" style="width: 2 rem;"><img src="../assets/img/majesticons_delete-bin-line.png" alt=""></span>
                                    <span class="minus btn">-</span>
                                    <span class="num">${item.qty}</span>
                                    <span class="plus btn">+</span>
                                </div>
                            </div>
                        </div>
                    </div>
                </div>
            </div>
        </div>
    </div>
        `;
        cartItems.appendChild(cartItem);
      });
    })
    .catch(error => {
      console.error('Error:', error);
    });
}

fetchCartData();

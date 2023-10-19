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

// form quantity
  const plusButton = document.querySelector('.plus');
  const minusButton = document.querySelector('.minus');
  const quantityElement = document.querySelector('.num');
  const priceElement = document.querySelector('.total-price');

  // Harga per produk
  const hargaProduk = 58000;

  plusButton.addEventListener('click', function () {
    let jumlah = parseInt(quantityElement.textContent);
    jumlah++;
    quantityElement.textContent = jumlah;

    let hargaTotal = jumlah * hargaProduk;
    priceElement.textContent = 'Total: Rp ' + hargaTotal.toLocaleString();
  });


  minusButton.addEventListener('click', function () {
    let jumlah = parseInt(quantityElement.textContent);
    if (jumlah > 1) {
      jumlah--;
      quantityElement.textContent = jumlah;

      let hargaTotal = jumlah * hargaProduk;
      priceElement.textContent = 'Total: Rp ' + hargaTotal.toLocaleString();
    }
  });


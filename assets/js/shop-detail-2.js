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
const minus = document.querySelector(".minus"),
plus = document.querySelector(".plus"),
num = document.querySelector(".num");

let a = 1;

plus.addEventListener("click",()=> {
    a++;
    a = (a < 10) ? "" + a : a;
    num.innerText = a;
    console.log(a);
});

minus.addEventListener("click",()=> {
  if (a > 1){
    a--;
    a = (a < 10) ? "" + a : a;
    num.innerText = a;
  }
});

//get data products in API
let products = null;

fetch ('https://652760d5917d673fd76d9d06.mockapi.io/api/v1/product-list-kelontong/product')
.then (res => res.json())
.then(data => {
  products = data;
  showDetail();
})

//find this product
function showDetail (){
  let detail = document.querySelector('.detail');
  let productId = new URLSearchParams(window.location.search).get('id')
  let thisProduct = products.filter(item => {
    return item.id == productId
  })[0];


  
  var img = detail.querySelector('.product-img img').src = thisProduct.image;
  var name = detail.querySelector('.name').innerText = thisProduct.name;
  var price = detail.querySelector('.price').innerText = thisProduct.price;
  var desc = detail.querySelector('.desc-2').innerText = thisProduct.desc;


}

// Fungsi untuk menambahkan produk ke keranjang
function cart(productId) {
  var img = document.querySelector('.product-img img').src;
  var name = document.querySelector('.name').innerText;
  var price = document.querySelector('.price').innerText;
  var qty = num.innerText;
  var total = parseFloat(price.replace('Rp ', '').replace(',', '')) * parseInt(qty);

  // Mengirim data ke server dengan metode POST
  fetch('https://652760d5917d673fd76d9d06.mockapi.io/api/v1/product-list-kelontong/cart', {
    method: 'POST',
    body: JSON.stringify({
      id: productId,
      name: name,
      img: img,
      price: price,
      qty: qty,
      total: total,
    }),
    headers: {
      'Content-Type': 'application/json'
    }
  })
  .then(response => response.json())
  .then(data => {
    alert(`${data} sukses dimasukkan ke keranjang`)
  })
  .catch(error => {
    console.error('Error:', error);
  });
}


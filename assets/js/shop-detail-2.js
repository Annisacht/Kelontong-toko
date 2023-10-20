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


  detail.querySelector('.product-img img').src = thisProduct.image;
  detail.querySelector('.name').innerText = thisProduct.name;
  detail.querySelector('.price').innerText = thisProduct.price;
  detail.querySelector('.desc-2').innerText = thisProduct.desc;
  
  // add stas product similiar
  let listProduct = document.querySelector('.listProduct');
  (products.filter(item.id != productId))
  .forEach(product => {
    let newProduct = document.createElement('a');
    newProduct.href= 'shop-detail-2.html?id' = product.id;
    newProduct.classliast.add('item');
    newProduct.innerHTML = `<div class="card-body col-md-2 col-sm-2 text-align-center p-3 border border-2 border-info rounded">
        <img src="${item.img}" alt="">
        <h5 class="card-title">${item.name}</h5>
        <p class="card-text">${item.price}</p>
   </div>`;
    listProduct.appendChild(newProduct)
  })

}

// Fungsi untuk menambahkan produk ke keranjang
function cart(productId) {
  fetch('https://652760d5917d673fd76d9d06.mockapi.io/api/v1/product-list-kelontong/cart/add', {
      method: 'POST',
      body: JSON.stringify({ productId }),
      headers: {
          'Content-Type': 'application/json'
      }
  })
  .then(response => response.json())
  .then(data => {
    alert (`${data} sukses dimasukkan ke keranjang`)
  })
  .catch(error => {
      console.error('Error:', error);
  });
}

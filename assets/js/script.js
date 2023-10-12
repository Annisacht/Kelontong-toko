// ambil data dari api
// pastikan response sudah json
// lalu gunakan methode .slice untuk menyortir product sebanyak 10 product
// looping productnya
// tampilkan hasil looping ke dalam html dengan innerhtml
// set cookie agar jika user belum login dan ingin mengecek detail product maka wajib login terbelih dahulu

// ambil cookie
function getCookie(name) {
    const value = `; ${document.cookie}`;
    const parts = value.split(`; ${name}=`);
    if (parts.length === 2) return parts.pop().split(';').shift();
    return null;
}

function filterProduct() {
    const url = 'https://652760d5917d673fd76d9d06.mockapi.io/api/v1/product-list-kelontong/product';

    fetch(url, {
        method: 'GET',
        headers: {'content-type': 'application/json'},
    }).then(res => {
        if (res.ok) {
            return res.json();
        }
        throw new Error("Failed to fetch data from the server");
    }).then(products => {
        const firstTenProducts = products.slice(0, 10);
        const productsRow = document.getElementById('productsRow');
        
        // Mengosongkan elemen yang ada
        productsRow.innerHTML = '';

        // Menambahkan setiap produk ke dalam row
        firstTenProducts.forEach(product => {
            productsRow.innerHTML += `
                <div class="col">
                    <div class="card" style="width: 18rem;">
                        <img src="assets/img/${product.image}" class="card-img-top" alt="${product.name}">
                        <div class="card-body">
                          <h5 class="card-title">${product.name}</h5>
                          <p class="card-text">${product.desc}</p>
                          <p class="card-text">Stok:${product.stock}</p>
                          <a href="product-detail.html?product_id=${product.id}" class="btn btn-primary product-detail-btn">Detail</a>
                        </div>
                    </div>
                </div>
            `;
        });
    

        // looping setiap tombol detail
document.querySelectorAll('.product-detail-btn').forEach(button => {
    button.addEventListener('click', function(event) {
        event.preventDefault();

        // validasi user login by cookie
        if (!getCookie('userLoggedIn')) {
            window.location.href = 'pages/login.html';
        } else {
            window.location.href = event.target.href;
        }
    });
});
    }).catch(error => {
        console.log(error);
    });
}

filterProduct();

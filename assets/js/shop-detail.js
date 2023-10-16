// data API buat card
function getData() {
    const getDataApi = "https://652760d5917d673fd76d9d06.mockapi.io/api/v1/product-list-kelontong/product"

    fetch(getDataApi).then((data) => {
        // console.log(data)
        return data.json();
    })
        .then((completedata) => {
            // console.log(completedata[2].name);
            let item1 = "";
            completedata = completedata.slice(0, 20);
            completedata.map((item) => {
                item1 += `<div class="card-body col-md-2 col-sm-2 text-align-center p-3 border border-2 border-info rounded ">
            <img src="${item.img}" alt="">
            <h5 class="card-title">${item.name}</h5>
            <p class="card-text">${item.price}</p>
        </div>`
            });
            document.getElementById("cardContainer").innerHTML = item1;
            callProducts()
        }) 
        .catch((err) => {
            console.log(err);
        })

}
getData();
function callProducts() {
    const products = document.querySelectorAll(".card-body")
// Select all elements with the class "card"

    // Loop through each card and add a click event
    products.forEach(item => {
        item.addEventListener("click", (event) => {
            const cardClicked = event.target;
            if (cardClicked.classList.contains("card-body")) {
                const productId = cardClicked.dataset.productId; // Ambil ID atau informasi lain dari data-attribute
                window.location.href = `shop-detail-2.html?id=${productId}`;
            }
        });
    });
    }


document.getElementById("cardContainer").addEventListener("click", (event) => {
    const cardClicked = event.target;
    if (cardClicked.classList.contains("card-body")) {
        const productId = cardClicked.dataset.productId; // Ambil ID atau informasi lain dari data-attribute
        window.location.href = `shop-detail-2.html?id=${productId}`;
    }
});

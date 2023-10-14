// data API buat card
function getData() {
    const getDataApi = "https://652760d5917d673fd76d9d06.mockapi.io/api/v1/product-list-kelontong/product"

    fetch(getDataApi)
        .then(response => response.json())
        .then(data => {

            data.slice(0, 20).forEach(item => {
                const card = document.createElement("div");
                card.className = "card card-product col-md-2";
                card.innerHTML = `
            <div class="card-body">
                <img src="${item.img}" alt="">
                <h5 class="card-title">${item.name}</h5>
                <p class="card-text">${item.price}</p>
            </div>
          `;
                document.getElementById("cardContainer").appendChild(card);
            });
        })
        .catch(error => console.error("Error:", error))
}
getData();

function getIdFromProduct() {
    const products = document.getElementsByClassName('.card-product')
    products.map((item) => {
        console.log(item)
    })
}
getIdFromProduct();


// form quantity
const quantityInput = document.getElementById("quantity");
const decrementButton = document.getElementById("decrement");
const incrementButton = document.getElementById("increment");

        decrementButton.addEventListener("click", () => {
            let currentValue = parseInt(quantityInput.value, 10);
            if (currentValue >= 1) {
                quantityInput.value = (currentValue - 1);
            }
        });

        incrementButton.addEventListener("click", () => {
            let currentValue = parseInt(quantityInput.value, 10);
            quantityInput.value = (currentValue + 1);
        });
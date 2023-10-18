getDataCheckout();

async function getDataCheckout() {
  try {
    const url = "https://65276f59917d673fd76db11a.mockapi.io/api/v1/checkout";

    const response = await fetch(url);
    if (!response.ok) {
      throw new Error("Network response was not ok");
    }

    const datas = await response.json();

    datas.map((data) => {
      // Get data user from api
      let dataUser = `
        <h5 class="fw-bolder mb-2">${data.customer.name}</h5>
        <h5 class="mb-2">${data.customer.phone_number}</h5>
        <h6 class="fw-light">
        ${data.customer.address}
        </h6>

        `;
      document.querySelector("#address-content").innerHTML = dataUser;

      // Get products
      let products = data.cart.items;
      products.map((product) => {
        let dataProducts = `
        <div class="card mb-3 product__card">
        <div class="row g-0">
            <div class="col-md-2">
                <img src="${
                  product.image
                }" class="img-fluid rounded-start" alt="..." />
            </div>
            <div class="col-md-10">
                <div class="card-body">
                    <h5 class="card-title">
                    ${product.product_name}
                    </h5>
                    <p class="card-text">
                        Jumlah barang: <b>${product.quantity} Barang</b>
                    </p>
                    <p class="card-text">
                    <h3 class="fw-bold"><span id="price-product">${formatNumber(
                      product.price
                    )}</span></h3>
                    </p>
                </div>
            </div>
        </div>
    </div>
        `;

        document.querySelector("#product-content").innerHTML += dataProducts;
      });

      //Get shipping
      let shippings = data.shipping;
      shippings.map((shipping) => {
        let dataShipping = `
        <li><button class="dropdown-item" type="button">${shipping.method}</button></li>
        `;

        document.querySelector("#shipping-content").innerHTML += dataShipping;
      });
    });
  } catch (error) {
    console.error("Error when geting data: " + error);
  }
}

// Calculate the total cost
const totalElement = document.getElementById("total");

// Initialize the initial total to 0
let initialTotal = 0;

// Run the code after the web page is fully loaded
window.addEventListener("load", () => {
  const priceProduct = document.querySelectorAll("#price-product");
  priceProduct.forEach((element) => {
    // Sum the product prices from each element
    initialTotal += parseInt(element.textContent);
  });
  totalElement.textContent = formatNumber(initialTotal);

  // Get all elements with the ID "price-from-product"
  const displayCost = document.querySelectorAll("#price-from-product");
  displayCost.forEach((element) => {
    // Display the total price with formatting
    element.innerHTML = formatNumber(initialTotal);
  });
});

let selectedDuration = null;

// Store delivery prices for each duration
const deliveryPrices = {
  "Durasi 1": 10000,
  "Durasi 2": 15000,
  "Durasi 3": 20000,
};

// Function to update the total price
function updateTotalPrice() {
  if (selectedDuration) {
    const deliveryPrice = deliveryPrices[selectedDuration];
    const totalPrice = initialTotal + deliveryPrice;
    totalElement.textContent = formatNumber(totalPrice);
    document.querySelectorAll(".midtrans__total").forEach((item) => {
      item.textContent = formatNumber(totalPrice);
    });
  }
}

// Function to update the cost price
function updateCostPrice() {
  const price = document.querySelector("#cost-price");
  const deliveryPrice = deliveryPrices[selectedDuration];
  price.innerHTML = `
    <h5 class="fw-semibold ms-3">
    Ongkos Kirim
</h5>
<h5 class="fw-semibold">
    ${formatNumber(deliveryPrice)}
</h5>
    `;
}

// Function to update the selected cost duration
function updateSelectedCost() {
  const btnCost = document.querySelector("#btn-send");
  btnCost.textContent = selectedDuration;
}

// Handle the change of selected delivery duration
document.querySelector(".dropdown").addEventListener("click", function (e) {
  if (e.target.classList.contains("dropdown-item")) {
    selectedDuration = e.target.textContent;
    updateSelectedCost();
    updateCostPrice();
    updateTotalPrice();
    document.querySelector("#pay-button").classList.remove("disabled");
  }
});

// Function to format a number into Indonesian Rupiah currency format
function formatNumber(number) {
  const formattedNumber = number.toLocaleString("id-ID", {
    style: "currency",
    currency: "IDR",
    minimumFractionDigits: 0,
    maximumFractionDigits: 0,
  });
  return formattedNumber;
}

// Midtrans
// Event when click payment method
document.querySelectorAll(".payment__item").forEach((payment) => {
  payment.addEventListener("click", showBarcode);
});

// function to show barcode
function showBarcode() {
  document.querySelector("#payments").classList.add("d-none");
  document.querySelector("#barcode").classList.remove("d-none");
  document.querySelector("#midtrans-footer").classList.add("d-none");
}

// event to see how to pay
document.querySelector("#how-to").addEventListener("click", showHowToContent);
function showHowToContent() {
  document.querySelector("#how-to-content").classList.toggle("d-none");
}

// Event when pay
document.querySelector("#qr-image").addEventListener("click", showSuccess);
function showSuccess() {
  let time = 3;
  document.querySelector("#time-left").innerHTML = time;
  const intervalId = setInterval(() => {
    time--;
    document.querySelector("#time-left").innerHTML = time;

    if (time === 0) {
      clearInterval(intervalId);
      window.location.href = "pay-success-page.html";
    }
  }, 1000);

  document.querySelectorAll(".modal-items").forEach((item) => {
    item.classList.add("d-none");
    document.querySelector("#success-midtrans").classList.remove("d-none");
  });
}

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
    document.querySelector("#choose-payment").classList.remove("disabled");
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

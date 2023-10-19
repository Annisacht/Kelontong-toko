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


// data API buat card
const itemsPerPage = 20;
let currentPage = 1;
let completedata = [];
let search = '';

function renderPage(page) {
    const start = (page - 1) * itemsPerPage;
    const end = start + itemsPerPage;
    const itemsToDisplay = completedata.slice(start, end);

    let item1 = "";
    itemsToDisplay.forEach((item) => {
        item1 += `<div class="card-body col-md-2 col-sm-2 text-align-center p-3 border border-2 border-info rounded">
             <a href="shop-detail-2.html?id=${item.id}">
                 <img src="${item.img}" alt="">
                 <h5 class="card-title">${item.name}</h5>
                 <p class="card-text">${item.price}</p>
             </a>
            </div>`;
    });
    document.getElementById("cardContainer").innerHTML = item1;
}

function updatePagination() {
    const totalPages = Math.ceil(completedata.length / itemsPerPage);
    const paginationElement = document.getElementById("pagination");
    paginationElement.innerHTML = "";

    for (let i = 1; i <= totalPages; i++) {
        const li = document.createElement("li");
        li.classList.add("page-item");
        const a = document.createElement("a");
        a.classList.add("page-link");
        a.href = "#";
        a.textContent = i;

        a.addEventListener("click", () => {
            currentPage = i;
            renderPage(currentPage);
        });

        li.appendChild(a);
        paginationElement.appendChild(li);
    }
}

async function getData() {
    const getDataApi = "https://652760d5917d673fd76d9d06.mockapi.io/api/v1/product-list-kelontong/product";

    if (search && search !== '') {
        await fetch(`${getDataApi}?search=${search}`)
            .then((data) => data.json())
            .then((data) => {
                completedata = data;
                renderPage(currentPage);
                updatePagination();
            })
            .catch((err) => {
                console.log(err);
            });
    } else {

        await fetch(getDataApi)
            .then((data) => data.json())
            .then((data) => {
                completedata = data;
                renderPage(currentPage);
                updatePagination();
            })
            .catch((err) => {
                console.log(err);
            });
    }
}

// on search
const elmInputSearch = document.getElementById('searchInput');

elmInputSearch.addEventListener('keyup', (e) => {
    search = e.target.value;
    currentPage = 1;
    getData();
});

getData();

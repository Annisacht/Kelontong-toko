// const getDataApi = "https://65261c4e67cfb1e59ce7e741.mockapi.io/users"

// fetch (getDataApi, {
//     method: "POST",

// })
// .then((result) => result.json())
// .then((data) => console.log(data))


async function fetchData() {
    const response = await fetch('https://65261c4e67cfb1e59ce7e741.mockapi.io/users');
    const data = await response.json();

    const profile = document.getElementById('profile');
    data.forEach(data => {
        const profile = document.createElement('p');
        profile.textContent = `${data.nama}`;
        dataList.appendChild(profile);
    });
}

fetchData();

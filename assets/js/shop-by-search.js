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

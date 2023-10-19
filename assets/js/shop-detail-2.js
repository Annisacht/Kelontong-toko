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
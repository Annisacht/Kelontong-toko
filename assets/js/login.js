// dapatkan id btn dan input didalamnya
// ambil data api
// ketika data api sudah didaptkan email dan password field di api bandingkan dengan yang di inputkan user dan buat validasi sebagai unique field gunakan email
let usersData = [];

async function getData ()
{
    try {
        usersData = await fetch('https://65261c4e67cfb1e59ce7e741.mockapi.io/users').then((response) => response.json())
        console.log(usersData);
    } catch (error) {
        console.log(error)
    }
}


let BtnSubmit = document.getElementById('btn_submit').addEventListener('click', function(event){
    event.preventDefault()

    let elementEmail = document.getElementById('email').value;
    console.log(elementEmail);
    let elementPassword = document.getElementById('password').value;
    console.log(elementPassword);

    let userisTrue = usersData.find(user => user.email === elementEmail && user.password === elementPassword);

    if (userisTrue) {
        alert('Login berhasil!');
        window.location.href = '../index.html';
    } else {
        alert('Email atau password salah.');
    }
});

getData()


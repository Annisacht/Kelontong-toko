// dapatkan id btn dan input didalamnya
// ambil data api
// ketika data api sudah didaptkan email dan password field di api bandingkan dengan yang di inputkan user dan buat validasi sebagai unique field gunakan email
// set cookie
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

function setCookie(name, value, days) {
    let expires = "";
    if (days) {
        let date = new Date();
        date.setTime(date.getTime() + (days * 24 * 60 * 60 * 1000));
        expires = "; expires=" + date.toUTCString();
    }
    document.cookie = name + "=" + (value || "") + expires + "; path=/";
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
        setCookie("userEmail", elementEmail, 7);
        setCookie("userID", userisTrue.id, 7); 
        setCookie("userNAMA", userisTrue.nama, 7); 
        window.location.href = '../index.html';
    } else {
        alert('Email atau password salah.');
    }
});

getData()


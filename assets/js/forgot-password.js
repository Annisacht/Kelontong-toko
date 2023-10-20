// dapatkan data api users
// dapatkan id users
// validasi email users di api
// buat jika ada email users segara ambil dan lempar id email users ke halaman berikutnya
function setCookie(name, value, days) {
    let expires = "";
    if (days) {
        let date = new Date();
        date.setTime(date.getTime() + (days * 24 * 60 * 60 * 1000));
        expires = "; expires=" + date.toUTCString();
    }
    document.cookie = name + "=" + (value || "") + expires + "; path=/";
}

function setLocalStorage(params)
{
    localStorage.setItem('user-data', JSON.stringify(params))
}

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
    let userID = document.getElementById("user_id").value;

    let elementEmail = document.getElementById('email').value;

    let userisTrue = usersData.find(user => user.email === elementEmail);

    if (userisTrue) {
        alert('email ada');
        setCookie("Email_user", elementEmail, 7);
        setCookie("ID_user", userisTrue.id, 7); 
        setCookie("Nama_user", userisTrue.nama, 7); 
        window.location.href = "change-password.html"
    } else {
        alert('Email tidak ada');
        return;
    }
});

getData()
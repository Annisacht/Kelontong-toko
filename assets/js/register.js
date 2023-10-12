function setLocalStorage(params)
{
    localStorage.setItem('user-data', JSON.stringify(params))
}

let btnSubmit = document.getElementById('button_submit').addEventListener('click', function(event) {
    event.preventDefault();
    let nama = document.getElementById('nama').value;
    let email = document.getElementById('email').value;
    let password = document.getElementById('password').value;
    let password_2 = document.getElementById('password_2').value;

    if (!validatePasswords(password, password_2)) {
        alert("Password dan konfirmasi password tidak cocok!"); 
        return; 
    }

    if (!validateEmail(email)) {
        alert("Email tidak valid!");
        return;
    }

    if (nama  == "" || email == "" || password == "" || password_2 == "") {
        alert('ga boleh kosong');
        return
    }

    let dataUsers = {
        nama: nama,
        email: email,
        password: password
    };

    sendDataToAPI(dataUsers);
    setLocalStorage(dataUsers); 
});


function validatePasswords(password, password_2) {
    return password === password_2;
}

function validateEmail(email) {
    let validRegex = /^[a-zA-Z0-9._-]+@[a-zA-Z0-9.-]+\.[a-zA-Z]{2,6}$/;
    return validRegex.test(email);
}


function sendDataToAPI(data) {
    fetch('https://65261c4e67cfb1e59ce7e741.mockapi.io/users', {
        method: 'POST',
        headers: {
            'Content-Type': 'application/json'
        },
        body: JSON.stringify(data)
    })
    .then(response => response.json())
    .then(data => {
        alert('Success: Data berhasil di registrasi akan di redirect ke Login', data);
        window.location.href = 'login.html';
    })
    .catch((error) => {
        console.error('Error:', error);
    });
}

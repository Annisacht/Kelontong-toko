function setLocalStorage(params)
{
    localStorage.setItem('user-data', JSON.stringify(params))
}

let btnSubmit = document.getElementById('button_submit').addEventListener('click', function(event) {
    event.preventDefault()
    let elementNama = document.getElementById('nama').value;
    let elementEmail = document.getElementById('email').value;
    let elementPassword1 = document.getElementById('password').value;
    let elementPassword2 = document.getElementById('password_2').value;

    let dataUsers = 
    {
        elementNama:elementNama,
        elementEmail:elementEmail,
        elementPassword1:elementPassword1,
        elementPassword2:elementPassword2
    }

    setLocalStorage(dataUsers);
})
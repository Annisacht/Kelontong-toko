// dapatkan id btn dan input didalamnya
// ambil data api
// ketika data api sudah didaptkan email dan password field di api bandingkan dengan yang di inputkan user dan buat validasi

let BtnSubmit = document.getElementById('btn_submit').addEventListener('click', function(event){
    event.preventDefault()

    let elementEmail = document.getElementById('email').value;
    console.log(elementEmail);
    let elementPassword = document.getElementById('password').value;
    console.log(elementPassword);
});

async function getData ()
{
    try {
        let dataUserApi = await fetch('https://65261c4e67cfb1e59ce7e741.mockapi.io/users').then((response) => response.json())
        console.log(dataUserApi);
    } catch (error) {
        console.log(error)
    }
}

getData()
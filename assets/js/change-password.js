//get id from cookie
// passing to api 
// and update the password

// get cookie function
function getCookie(name) {
    let value = "; " + document.cookie;
    let parts = value.split("; " + name + "=");
    if (parts.length === 2) return parts.pop().split(";").shift();
}

document.getElementById('btn_submit').addEventListener('click', async function(event) {
    event.preventDefault();

    // Ambil ID pengguna dari cookie
    const userId = getCookie("ID_user");

    const newPassword = document.getElementById("password").value;
    const confirmPassword = document.getElementById("password_2").value;

    // cek password jika sama
    if (newPassword !== confirmPassword) {
        alert("Password dan konfirmasi password tidak sama!");
        return;
    }

    try {
        const response = await fetch(`https://65261c4e67cfb1e59ce7e741.mockapi.io/users/${userId}`, {
            method: 'PUT',
            headers: {
                'Content-Type': 'application/json'
            },
            body: JSON.stringify({
                password: newPassword
            })
        });

        if (response.ok) {
            const result = await response.json();
            alert('Password berhasil diupdate!');
            window.location.href = "login.html"
        } else {
            alert('Terjadi kesalahan saat mengupdate password.');
        }
    } catch (error) {
        console.log(error);
        alert('Terjadi kesalahan saat mengupdate password.');
    }
});

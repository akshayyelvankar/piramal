
const formE1 = document.getElementById("user_data")

formE1.addEventListener('submit', function (e) {
    e.preventDefault();
    const formData = new FormData(formE1)
    const data = Object.fromEntries(formData)

    fetch('https://reqres.in/api/users', {
        method: 'POST',
        headers: {
            'Content-Type': 'application/json'
        },
        body: JSON.stringify(data)
    }).then(res => res.json())
        .then(data => console.log(data))
        .then(error => console.log(error))
})



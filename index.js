// Add your code here
function submitData(name, email) {
    return fetch("http://localhost:3000/users", {
        method: "POST",
        headers: {
            "content-type": "application/json",
            'accept': 'application/json'
        },
        body: JSON.stringify({
            name: name,
            email: email
        })
    })
    .then(resp => resp.json())
    .then(data => {
        const newId = data.id
        const p = document.createElement('p')
        p.textContent = newId
        document.querySelector('body').appendChild(p)
    })
    .catch(error => {
        const msg = error.message
        const p = document.createElement('p')
        p.textContent = msg
        document.querySelector('body').appendChild(p)
    })
}

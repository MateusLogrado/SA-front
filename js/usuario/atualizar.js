let res = document.getElementById("res")
let button = document.getElementById("button")

button.addEventListener("click", (e)=>{
    e.preventDefault()

    let usuarioId = Number(document.getElementById("usuarioId").value)
    let firstName = document.getElementById("firstName").value
    let lastName = document.getElementById("lastName").value
    let age = Number(document.getElementById("age").value)
    let email = document.getElementById("email").value
    let phone = document.getElementById("phone").value
    let address = document.getElementById("address").value
    let city = document.getElementById("city").value
    let state = document.getElementById("state").value
    let birthDate = document.getElementById("birthDate").value

    const valores = {
        firstName: firstName,
        lastName: lastName,
        age: age,
        email: email,
        phone: phone,
        address: address,
        city: city,
        state: state,
        birthDate: birthDate
    }

    fetch(`http://localhost:3000/usuario/${usuarioId}`, {
        method: "PUT",
        headers: { "content-type":"application/json" },
        body: JSON.stringify(valores)
    })
    .then(resp => resp.body)
    .then(()=>{
        res.innerHTML = `
                <table border="1" cellpadding="8">
            <tr>
                <th>Codigo Unico</th>
                <th>Nome</th>
                <th>Sobrenome</th>
                <th>Idade</th>
                <th>Email</th>
                <th>Telefone</th>
                <th>Endereço</th>
                <th>Cidade</th>
                <th>Estado</th>
                <th>Data de Nascimento</th>
            </tr>
            <tr>
                <td>${usuarioId}</td>
                <td>${firstName}</td>
                <td>${lastName}</td>
                <td>${age}</td>
                <td>${email}</td>
                <td>${phone}</td>
                <td>${address}</td>
                <td>${city}</td>
                <td>${state}</td>
                <td>${birthDate}</td>
            </tr>
        </table>`
    })
})

let buscar = document.getElementById("buscar")

buscar.addEventListener("click", (e) => {
    e.preventDefault()

    let usuarioId = Number(document.getElementById("usuarioId").value)
    let firstName = document.getElementById("firstName")
    let lastName = document.getElementById("lastName")
    let age = document.getElementById("age")
    let email = document.getElementById("email")
    let phone = document.getElementById("phone")
    let address = document.getElementById("address")
    let city = document.getElementById("city")
    let state = document.getElementById("state")
    let birthDate = document.getElementById("birthDate")

    fetch(`http://localhost:3000/usuario/${usuarioId}`, {
        method: "GET",
        headers: { "content-type": "application/json" }
    })
        .then(resp => resp.json())
        .then(dados => {

            firstName.value = dados.firstName
            lastName.value = dados.lastName
            age.value = dados.age
            email.value = dados.email
            phone.value = dados.phone
            address.value = dados.address
            city.value = dados.city
            state.value = dados.state
            birthDate.value = dados.birthDate

        })
})
let resLote = document.getElementById("res")
let lote = document.getElementById("lote")

lote.addEventListener("click", (e)=>{
    e.preventDefault()

    fetch("https://dummyjson.com/users",{
        method: "GET",
        headers: { "content-type":"application/json" }
    })
    .then(resp => resp.json())
    .then(dados=> {
        dados.users.forEach(dad => {
            const valores = {
                firstName: dad.firtsName,
                lastName: dad.lastName,
                age: dad.age,
                email: dad.email,
                phone: dad.phone,
                city: dad.address.city,
                state: dad.address.state,
                birthDate: dad.birthDate
            }

            fetch(`http://localhost:3000/usuario`, {
                method: "POST",
                headers: { "content-type":"application/json" },
                body: JSON.stringify(valores)
            })
            .then(resp => resp.body)
            .then(()=>{
                resLote.innerHTML = "lote registrado com sucesso"
            })
        })
    })
    .catch((err)=>{
        console.error("erro: ", err)
    })
})
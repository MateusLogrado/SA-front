let res = document.getElementById("res")
let button = document.getElementById("button")

button.addEventListener("click", (e) => {
    e.preventDefault()

    let usuarioId = Number(document.getElementById("usuarioId").value)

    fetch(`http://localhost:3000/usuario/${usuarioId}`, {
        method: "DELETE",
        headers: { "content-type": "application/json" }
    })
        .then(resp => {
            res.innerHTML = "usuario apagado com sucesso"
        })
        .then()
})
let res = document.getElementById("res")
let button = document.getElementById("button")

button.addEventListener("click", (e) => {
    e.preventDefault()

    let compraId = Number(document.getElementById("compraId").value)

    fetch(`http://localhost:3000/compra/${compraId}`, {
        method: "DELETE",
        headers: { "content-type": "application/json" }
    })
        .then(resp => {
            if (resp.status === 204) {
                res.innerHTML = "compra apagado com sucesso"
            }
        })
        .then()
})
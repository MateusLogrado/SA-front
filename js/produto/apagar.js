let res = document.getElementById("res")
let button = document.getElementById("button")

button.addEventListener("click", (e) => {
    e.preventDefault()

    let produtoId = Number(document.getElementById("produtoId").value)

    fetch(`http://localhost:3000/produto/${produtoId}`, {
        method: "DELETE",
        headers: { "content-type": "application/json" }
    })
        .then(resp => {
            if (resp.status === 204) {
                res.innerHTML = "produto apagado com sucesso"
            }
        })
        .then()
})
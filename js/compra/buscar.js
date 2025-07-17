let buscar = document.getElementById("buscar")

buscar.addEventListener("click", (e) => {
    e.preventDefault()


    let produto_id = document.getElementById("produto_id").value
    let preco = document.getElementById("unitario")
    let desconto = document.getElementById("desconto")

    fetch(`http://localhost:3000/produto/${produto_id}`, {
        method: "GET",
        headers: { "content-type": "application/json" }
    })
        .then(resp => resp.json())
        .then(dados => {

            preco.value = dados.price
            desconto.value = dados.discountPercentage

        })
})
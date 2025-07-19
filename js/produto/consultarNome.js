let res = document.getElementById("res")
let button = document.getElementById("button")


button.addEventListener("click", (e) => {
    e.preventDefault()

    let nome = document.getElementById("nome").value

    fetch(`http://localhost:3000/produto`, {
        method: "GET",
        headers: { "content-type": "application/json" }
    })
        .then(resp => resp.json())
        .then(dados => {
            console.log(dados)
            let html = `<table border="1" cellpadding="8">
            <tr>
                <th>Nome</th>
                <th>descrição</th>
                <th>categoria</th>
                <th>Preço</th>
                <th>Desconto</th>
                <th>Estoque</th>
                <th>Marca</th>
                <th>Imagem</th>
            </tr>`

            const produtoNome = dados.find(pro =>
                `${pro.title}`.trim().toLowerCase() === nome.trim().toLowerCase()
            )

            console.log(produtoNome)


                html += `<tr>
                <td>${produtoNome.title}</td>
                <td>${produtoNome.description}</td>
                <td>${produtoNome.category}</td>
                <td>${produtoNome.price}</td>
                <td>${produtoNome.discountPercentage}</td>
                <td>${produtoNome.stock}</td>
                <td>${produtoNome.brand ? produtoNome.brand : "Marca não informada"}</td>
                <td><img src="${produtoNome.thumbnail}"></td>
            </tr>`



            html += `</table>`
            res.innerHTML = html
        })
})
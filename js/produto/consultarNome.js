let res = document.getElementById("res")
let button = document.getElementById("button")


button.addEventListener("click", (e) => {
    e.preventDefault()

    let marca

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
            if(dados.brand){
                marca = dados.brand
            }else{
                marca = "Marca não informada"
            }


                html += `<tr>
                <td>${dados.title}</td>
                <td>${dados.description}</td>
                <td>${dados.category}</td>
                <td>${dados.price}</td>
                <td>${dados.discountPercentage}</td>
                <td>${dados.stock}</td>
                <td>${marca}</td>
                <td><img src="${dados.thumbnail}"></td>
            </tr>`



            html += `</table>`
            res.innerHTML = html
        })
})
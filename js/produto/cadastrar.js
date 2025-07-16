let res = document.getElementById("res")
let button = document.getElementById("button")

button.addEventListener("click", (e)=>{
    e.preventDefault()

    let title = document.getElementById("title").value
    let description = document.getElementById("description").value
    let category = document.getElementById("category").value
    let price = document.getElementById("price").value
    let discountPercentage = document.getElementById("discountPercentage").value
    let precoFinal = price - (price * (discountPercentage / 100)) 
    let stock = document.getElementById("stock").value
    let brand = document.getElementById("brand").value
    let thumbnail = document.getElementById("thumbnail").value

    const valores = {
        title: title,
        description: description,
        category: category,
        price: price,
        discountPercentage: discountPercentage,
        stock: stock,
        brand: brand,
        thumbnail: thumbnail
    }

    fetch(`http://localhost:3000/produto`, {
        method: "POST",
        headers: { "content-type":"application/json" },
        body: JSON.stringify(valores)
    })
    .then(resp => resp.body)
    .then(()=>{
        res.innerHTML = `
                <table border="1" cellpadding="8">
            <tr>
                <th>Nome</th>
                <th>descrição</th>
                <th>categoria</th>
                <th>Preço</th>
                <th>Desconto</th>
                <th>Preço final</th>
                <th>Estoque</th>
                <th>Marca</th>
                <th>Imagem</th>
            </tr>
            <tr>
                <td>${title}</td>
                <td>${description}</td>
                <td>${category}</td>
                <td>${price}</td>
                <td>${discountPercentage}</td>
                <td>${precoFinal}</td>
                <td>${stock}</td>
                <td>${brand}</td>
                <td><img src="${thumbnail}"></td>
            </tr>
        </table>`
    })
})
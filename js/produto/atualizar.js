let res = document.getElementById("res")
let button = document.getElementById("button")

button.addEventListener("click", (e)=>{
    e.preventDefault()

    let produtoId = Number(document.getElementById("produtoId").value)
    let title = document.getElementById("title").value
    let description = document.getElementById("description").value
    let category = document.getElementById("category").value
    let price = document.getElementById("price").value
    let discountPercentage = document.getElementById("discountPercentage").value
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

    fetch(`http://localhost:3000/produto/${produtoId}`, {
        method: "PUT",
        headers: { "content-type":"application/json" },
        body: JSON.stringify(valores)
    })
    .then(resp => resp.body)
    .then(()=>{
        res.innerHTML = `
                <table border="1" cellpadding="8">
            <tr>
                <td>${title}</td>
                <td>${description}</td>
                <td>${category}</td>
                <td>${price}</td>
                <td>${discountPercentage}</td>
                <td>${stock}</td>
                <td>${brand}</td>
                <td><img src="${thumbnail}"></td>
            </tr>
            <tr>
                <td>${title}</td>
                <td>${description}</td>
                <td>${category}</td>
                <td>${price}</td>
                <td>${discountPercentage}</td>
                <td>${stock}</td>
                <td>${brand}</td>
                <td><img src="${thumbnail}"></td>
            </tr>
        </table>`
    })
})

let buscar = document.getElementById("buscar")

buscar.addEventListener("click", (e) => {
    e.preventDefault()

    let produtoId = Number(document.getElementById("produtoId").value)
    
    let title = document.getElementById("title")
    let description = document.getElementById("description")
    let category = document.getElementById("category")
    let price = document.getElementById("price")
    let discountPercentage = document.getElementById("discountPercentage")
    let stock = document.getElementById("stock")
    let brand = document.getElementById("brand")
    let thumbnail = document.getElementById("thumbnail")

    fetch(`http://localhost:3000/produto/${produtoId}`, {
        method: "GET",
        headers: { "content-type": "application/json" }
    })
        .then(resp => resp.json())
        .then(dados => {

            title.value = dados.title
            description.value = dados.description
            category.value = dados.category
            price.value = dados.price
            discountPercentage.value = dados.discountPercentage
            let precoFinal = price - (price * (discountPercentage / 100))
            precoFinal.value = dados.precoFinal
            stock.value = dados.stock
            brand.value = dados.brand
            thumbnail.value = dados.thumbnail

        })
})
let res = document.getElementById("res")
let button = document.getElementById("button")

button.addEventListener("click", (e)=>{
    e.preventDefault()

    let produto_id = document.getElementById("produto_id").value
    let usuario_id = document.getElementById("usuario_id").value
    let quant = document.getElementById("quant").value
    let dataCompra = document.getElementById("dataCompra").value
    let unitario = document.getElementById("unitario").value
    let desconto = document.getElementById("desconto").value
    let precoFinal = document.getElementById("precoFinal").value
    let formaPag = document.getElementById("formaPag").value
    let status = document.getElementById("status").value

    const valores = {
        produto_id: produto_id,
        usuario_id: usuario_id,
        quant: quant,
        dataCompra: dataCompra,
        unitario: unitario,
        desconto: desconto,
        precoFinal: precoFinal,
        formaPag: formaPag,
        status: status
    }

    fetch(`http://localhost:3000/compra`, {
        method: "POST",
        headers: { "content-type":"application/json" },
        body: JSON.stringify(valores)
    })
    .then(resp => resp.body)
    .then(()=>{
        res.innerHTML = `
                <table border="1" cellpadding="8">
            <tr>
                <th>Produto ID</th>
                <th>Usuário ID</th>
                <th>Quantidade</th>
                <th>Data da Compra</th>
                <th>Preço Unitário</th>
                <th>Desconto</th>
                <th>Preço Final</th>
                <th>Forma de Pagamento</th>
                <th>Status</th>
            </tr>
            <tr>
                <td>${produto_id}</td>
                <td>${usuario_id}</td>
                <td>${quant}</td>
                <td>${dataCompra}</td>
                <td>${unitario}</td>
                <td>${desconto}</td>
                <td>${precoFinal}</td>
                <td>${formaPag}</td>
                <td>${status}</td>
            </tr>
        </table>`
    })
})
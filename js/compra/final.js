let final = document.getElementById("final")

final.addEventListener("click", (e) => {
    e.preventDefault()

    let preco = document.getElementById("unitario").value
    let desconto = document.getElementById("desconto").value
    let quant = document.getElementById("quant").value
    let precoFinal = document.getElementById("precoFinal")

    let pFinal = (preco - (preco * desconto / 100)) * quant

    precoFinal.value = pFinal.toFixed(2)
})
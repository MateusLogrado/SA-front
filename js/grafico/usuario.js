const grafico = document.getElementById('grafico').getContext('2d');
const button = document.getElementById('button')
let meuGrafico

button.addEventListener("click", async (e) => {
  e.preventDefault()

  const num1 = Number(document.getElementById('num1').value)
  const num2 = Number(document.getElementById('num2').value)
  const array = []
  const array2 = []

  if (meuGrafico) {
    meuGrafico.destroy()
  }

  const promises = []

  for (let i = num1; i <= num2; i++) {
    promises.push(
      fetch(`http://localhost:3000/usuario/${i}`, {
        method: "GET",
        headers: {
          'Content-Type': 'application/json'
        }
      })
      .then(resp => resp.json())
      .then()
      .catch((err)=>{
        console.log("Erro: ", err)
      })
    )
  }

  const resultados = await Promise.all(promises);

  resultados.forEach(data => {
    array.push(data.firstName)
    array2.push(data.age)
  })

  meuGrafico = new Chart(grafico, {
    type: 'bar',
    data: {
      labels: array,
      datasets: [{
        label: 'Idade',
        data: array2,
        backgroundColor: 'rgba(75, 192, 192, 0.5)',
        borderColor: 'rgba(75, 192, 192, 1)',
        borderWidth: 1
      }]
    },
    options: {
      responsive: false,
      scales: {
        y: {
          beginAtZero: true
        }
      }
    }
  })
})

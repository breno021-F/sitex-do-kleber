async function quantidadedeUsuarios() {
    const url = 'https://raw.githubusercontent.com/silviosnjr/CienciaDeDados-CriandoGraficosDinamicosComJavaScript/refs/heads/Aula01/trabalho/trabalho-tipos-de-ocupacao.json'
    const res = await fetch(url)
    const dados = await res.json()
    const nomeDosPostos = Object.keys(dados)
  const quantidadeTrabalhadores = Object.values(dados)


  const data = [
    {
        x: nomeDosPostos,
        y: quantidadeTrabalhadores,
        type: 'bar'
    }
  ]

  const grafico = document.createElement('div')
  grafico.className = 'graficos'
  document.getElementById('graficos-container').appendChild(grafico)
  Plotly.newPlot(grafico, data)

}

quantidadedeUsuarios()
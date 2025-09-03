async function quantidadedeUsuarios() {
    try {
        const url = 'https://raw.githubusercontent.com/silviosnjr/CienciaDeDados-CriandoGraficosDinamicosComJavaScript/refs/heads/Aula01/trabalho/trabalho-tipos-de-ocupacao.json'
        const res = await fetch(url)
        
        if (!res.ok) {
            throw new Error(`Erro HTTP: ${res.status}`)
        }
        
        const dados = await res.json()
        console.log('Dados recebidos:', dados)
        
        const nomeDosPostos = Object.keys(dados)
        const quantidadeTrabalhadores = Object.values(dados)

        const data = [{
            x: nomeDosPostos,
            y: quantidadeTrabalhadores,
            type: 'bar',
            marker: {
                color: '#F05454'
            }
        }]

        const layout = {
            title: 'Tipos de Ocupação Profissional',
            plot_bgcolor: '#2d3748',
            paper_bgcolor: '#2d3748',
            font: {
                color: '#DDDDDD'
            },
            xaxis: {
                tickangle: -45
            }
        }

        const graficoDiv = document.createElement('div')
        graficoDiv.id = 'grafico-barras'
        graficoDiv.style.width = '100%'
        graficoDiv.style.height = '500px'
        graficoDiv.style.margin = '20px 0'
        
        const container = document.getElementById('graficos-container')
        container.appendChild(graficoDiv)
        
        Plotly.newPlot('grafico-barras', data, layout)
        console.log('Gráfico criado com sucesso!')

    } catch (error) {
        console.error('Erro ao carregar gráfico:', error)
        const erroDiv = document.createElement('div')
        erroDiv.innerHTML = `<p style="color: red;">Erro ao carregar gráfico: ${error.message}</p>`
        document.getElementById('graficos-container').appendChild(erroDiv)
    }
}

setTimeout(quantidadedeUsuarios, 100)
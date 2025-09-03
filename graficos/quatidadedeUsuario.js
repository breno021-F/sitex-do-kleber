async function quantidadedeUsuarios() {
    try {
        console.log('Carregando dados do gráfico...');
        
        const url = 'https://raw.githubusercontent.com/silviosnjr/CienciaDeDados-CriandoGraficosDinamicosComJavaScript/refs/heads/Aula01/trabalho/trabalho-tipos-de-ocupacao.json';
        const res = await fetch(url);
        
        if (!res.ok) {
            throw new Error(`Erro HTTP: ${res.status}`);
        }
        
        const dados = await res.json();
        console.log('Dados do gráfico:', dados);

        const nomeDosPostos = Object.keys(dados);
        const quantidadeTrabalhadores = Object.values(dados);

        const data = [{
            x: nomeDosPostos,
            y: quantidadeTrabalhadores,
            type: 'bar',
            marker: {
                color: '#F05454',
                line: {
                    color: '#DDDDDD',
                    width: 1
                }
            }
        }];

        const layout = {
            title: {
                text: 'Distribuição de Tipos de Ocupação Profissional',
                font: {
                    color: '#DDDDDD',
                    size: 18
                }
            },
            plot_bgcolor: '#2d3748',
            paper_bgcolor: '#2d3748',
            font: {
                color: '#DDDDDD',
                family: 'Bai Jamjuree, sans-serif'
            },
            xaxis: {
                tickangle: -45,
                tickfont: {
                    size: 10
                }
            },
            yaxis: {
                title: {
                    text: 'Quantidade de Pessoas',
                    font: {
                        size: 14
                    }
                }
            },
            margin: {
                l: 80,
                r: 50,
                b: 150,
                t: 80,
                pad: 4
            }
        };

        const graficoDiv = document.createElement('div');
        graficoDiv.className = 'grafico-plot';
        graficoDiv.id = 'grafico-ocupacao';

        const container = document.getElementById('graficos-container');
        container.appendChild(graficoDiv);

        Plotly.newPlot('grafico-ocupacao', data, layout);
        
        console.log('Gráfico criado com sucesso!');

    } catch (error) {
        console.error('Erro ao carregar gráfico:', error);
        
        const erroDiv = document.createElement('div');
        erroDiv.innerHTML = `
            <div style="color: white; background: #F05454; padding: 20px; margin: 20px; border-radius: 10px;">
                <h3>Erro ao carregar gráfico</h3>
                <p>${error.message}</p>
                <p>Dados de exemplo serão exibidos.</p>
            </div>
        `;
        
        const container = document.getElementById('graficos-container');
        container.appendChild(erroDiv);
        
        exibirGraficoExemplo();
    }
}

function exibirGraficoExemplo() {
    const dadosExemplo = {
        "Trabalho Formal": 1500000000,
        "Trabalho Informal": 2000000000,
        "Desempregados": 500000000,
        "Aposentados": 1000000000,
        "Estudantes": 800000000,
        "Trabalho Autônomo": 1200000000
    };

    const nomeDosPostos = Object.keys(dadosExemplo);
    const quantidadeTrabalhadores = Object.values(dadosExemplo);

    const data = [{
        x: nomeDosPostos,
        y: quantidadeTrabalhadores,
        type: 'bar',
        marker: {
            color: '#F05454'
        }
    }];

    const layout = {
        title: 'Dados de Exemplo - Distribuição de Ocupações',
        plot_bgcolor: '#2d3748',
        paper_bgcolor: '#2d3748',
        font: {
            color: '#DDDDDD'
        },
        xaxis: {
            tickangle: -45
        }
    };

    const graficoDiv = document.createElement('div');
    graficoDiv.className = 'grafico-plot';
    graficoDiv.id = 'grafico-exemplo';

    document.getElementById('graficos-container').appendChild(graficoDiv);
    Plotly.newPlot('grafico-exemplo', data, layout);
}

if (document.readyState === 'loading') {
    document.addEventListener('DOMContentLoaded', quantidadedeUsuarios);
} else {
    quantidadedeUsuarios();
}
const url='https://raw.githubusercontent.com/silviosnjr/CienciaDeDados-CriandoGraficosDinamicosComJavaScript/refs/heads/Aula01/transporte/transporte-dados-globais.json'


async function visualizarInformacoesGlobais() {

    const resposta = await fetch(url)

   const dados = await resposta.json()

   const pessoasMundo = (dados.total_pessoas_mundo/1e9)
   const trabalhadoresMundo = (dados.total_pessoas_mundo/1e9)
   const tempoDesTrabalho = parselnt (dados.tempo_medio_deslocamento_para_trabalho)
   const minutos = Math.round((dados.tempo_medio_deslocamento_para_trabalho - tempoDesTrabalho) * 60)



const paragrafo= document.createElement('p')

paragrafo.classList.add('graficos-container_texto')

paragrafo.innerHTML = `O mundo tem <span>${pessoasMundo}</span>  bilhões de pessoas, dessas pessoas, aproximadamente <span>${trabalhadoresMundo}</span>   bilhões estão empregadas e passam em média  <span>${tempoDesTrabalho}horas</span> e <span>${minutos} minutos</span> por dia no caminho para o trabalho. Temos, portanto, mais da metade da população mundial que não exerce trabalhos com vínculos empregatícios legais. O que pode significar que há longevidade e desse modo, muitas pessoas aposentadas. Porém, também pode significar muitos postos de trabalho chamados informais.`

const container=document.getElementById('graficos-container')
   container.appendChild(paragrafo);

}

visualizarInformacoesGlobais()
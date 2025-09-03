const url = 'https://raw.githubusercontent.com/silviosnjr/CienciaDeDados-CriandoGraficosDinamicosComJavaScript/refs/heads/Aula01/transporte/transporte-dados-globais.json';

async function visualizarInformacoesGlobais() {
    try {
        console.log('Carregando informações globais...');
        
        const resposta = await fetch(url);
        
        if (!resposta.ok) {
            throw new Error(`Erro HTTP: ${resposta.status}`);
        }
        
        const dados = await resposta.json();
        console.log('Dados recebidos:', dados);

        const pessoasMundo = (dados.total_pessoas_mundo / 1e9).toFixed(2);
        const trabalhadoresMundo = (dados.total_pessoas_trabalhando_mundo / 1e9).toFixed(2);
        const tempoDesTrabalho = parseInt(dados.tempo_medio_deslocamento_para_trabalho);
        const minutos = Math.round((dados.tempo_medio_deslocamento_para_trabalho - tempoDesTrabalho) * 60);

        const paragrafo = document.createElement('p');
        paragrafo.classList.add('graficos-container__texto');

        paragrafo.innerHTML = `O mundo tem <span>${pessoasMundo}</span> bilhões de pessoas, dessas pessoas, aproximadamente <span>${trabalhadoresMundo}</span> bilhões estão empregadas e passam em média <span>${tempoDesTrabalho} horas</span> e <span>${minutos} minutos</span> por dia no caminho para o trabalho. Temos, portanto, mais da metade da população mundial que não exerce trabalhos com vínculos empregatícios legais. O que pode significar que há longevidade e desse modo, muitas pessoas aposentadas. Porém, também pode significar muitos postos de trabalho chamados informais.`;

        const loading = document.querySelector('.loading');
        if (loading) {
            loading.remove();
        }

        const container = document.getElementById('graficos-container');
        container.appendChild(paragrafo);

        console.log('Informações globais carregadas com sucesso!');

    } catch (error) {
        console.error('Erro ao carregar informações globais:', error);
        
        const erroDiv = document.createElement('div');
        erroDiv.innerHTML = `
            <div style="color: white; background: #F05454; padding: 20px; margin: 20px; border-radius: 10px;">
                <h3>Erro ao carregar dados</h3>
                <p>${error.message}</p>
                <p>Verifique a conexão com a internet.</p>
            </div>
        `;
        
        const container = document.getElementById('graficos-container');
        const loading = document.querySelector('.loading');
        if (loading) {
            loading.remove();
        }
        container.appendChild(erroDiv);
    }
}

if (document.readyState === 'loading') {
    document.addEventListener('DOMContentLoaded', visualizarInformacoesGlobais);
} else {
    visualizarInformacoesGlobais();
}
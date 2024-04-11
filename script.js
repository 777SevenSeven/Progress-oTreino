document.addEventListener("DOMContentLoaded", function() {
    // Função para formatar a data como "dd/mm/yyyy"
    function formatDate(date) {
        const day = String(date.getDate()).padStart(2, '0');
        const month = String(date.getMonth() + 1).padStart(2, '0');
        const year = date.getFullYear();
        return `${day}/${month}/${year}`;
    }

    // Função para atualizar as datas e os valores de i
    function atualizarDados() {
        const dataAtual = new Date();
        const dataAtualFormatada = formatDate(dataAtual);

        const dataProximaSemana = new Date(dataAtual.getTime() + 7 * 24 * 60 * 60 * 1000);
        const dataProximaSemanaFormatada = formatDate(dataProximaSemana);

        document.getElementById('dataProximaSemana').textContent = dataProximaSemanaFormatada;

        const itensRecentes = document.querySelectorAll('.lista1 li');
        const itensProximaSemana = document.querySelectorAll('.lista2 li');

        let i = 16;
        let i2 = 16;
        let j = 16;
        let k = 18;
        let min = 6;
        itensRecentes.forEach((item, index) => {
            item.innerHTML = item.innerHTML.replace('[Date]', dataAtualFormatada)
                .replace('[i]', i += 0.5)
                .replace('[i2]', i2 += 0.5)
                .replace('[j]', j += 1)
                .replace('[k]', k += 1)
                .replace('[min]', min += 1);
        });

        let i3 = 17;
        let i4 = 17;
        let j2 = 17;
        let k2 = 19;
        let min2 = 6;
        itensProximaSemana.forEach((item, index) => {
            item.innerHTML = item.innerHTML.replace('[Date]', dataProximaSemanaFormatada)
                .replace('[i3]', i3 += 0.5)
                .replace('[i4]', i4 += 0.5)
                .replace('[j2]', j2 += 1)
                .replace('[k2]', k2 += 1)
                .replace('[min2]', min2 += 1);
        });
    }

    // Chama a função para atualizar as datas e os valores de i quando a página carrega
    atualizarDados();
});

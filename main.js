//A função abaixo vai verificar se o numero é primo e retornará um booleano
function ehPrimo(num) {
    if (num < 2) return false;
    for (let i = 2; i <= Math.sqrt(num); i++) {
        if (num % i === 0) return false;
    }
    return true;
}

const numerosDaTabela = document.getElementById('numeros'); //Pega o id no html para criar a tabela

let linha = document.createElement('tr'); // Variável para armazenar a linha atual
for (let i = 0; i <= 300; i++) { //Este for irá percorrer de 0 até 300, adicionando os numeros na tabela do html
    const celula = document.createElement('td');
    celula.textContent = i;

    if (ehPrimo(i)) { //Ainda no escopo do for, essa condicional irá verificar se o numero é primo e vai adicionar a estilização somente para os numeros primos
        celula.classList.add('primo');
        celula.style.textAlign = 'center'
    }

    linha.appendChild(celula);

    if ((i + 1) % 20 === 0) { // Verifica se chegou ao vigésimo número da linha
        numerosDaTabela.appendChild(linha); // Adiciona a linha atual à tabela
        linha = document.createElement('tr'); // Cria uma nova linha
    }
}

if (linha.children.length > 0) {
    numerosDaTabela.appendChild(linha); // Adiciona a última linha se houver números restantes
}

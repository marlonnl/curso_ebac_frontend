const form = document.getElementById('form');
const statusBar = document.getElementById('statusbar');

function checkNumeros(nA, nB) {
    nA = parseInt(nA);
    nB = parseInt(nB);

    return nA < nB ? true : false;
}

form.addEventListener('submit', function(event) {
    event.preventDefault();

    // zera os estilos da statusbar
    statusBar.classList.remove('checkOk');
    statusBar.classList.remove('checkNotOk');
    statusBar.innerHTML = '';

    // valores dos campos
    let numeroCampoA = document.querySelector('#campoA').value;
    let numeroCampoB = document.querySelector('#campoB').value;

    if (checkNumeros(numeroCampoA, numeroCampoB)) {
        statusBar.classList.add('checkOk');
        statusBar.innerHTML = `🎉 Parabéns! O número do <em>campo A</em> (<b>${numeroCampoA}</b>) é MENOR que o número do <em>campo B</em> (<b>${numeroCampoB}</b>).`;
    } else {
        statusBar.classList.add('checkNotOk');
        statusBar.innerHTML = `🚫 Erro! O número do <em>campo A</em> (<b>${numeroCampoA}</b>) é MAIOR ou IGUAL ao número do <em>campo B</em> (<b>${numeroCampoB}</b>). Tente novamente.`;
    }
})


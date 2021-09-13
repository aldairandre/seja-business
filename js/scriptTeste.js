//CALLBACK

function saudar (nome) {
    console.log(`Bom dia ${nome}`);
}

function processarInput(callback) {
    const nome = 'Aldair';
    callback(nome);
}

processarInput(saudar);
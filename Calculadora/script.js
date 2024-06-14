function converter() {
    let tipoDe = document.getElementById('tipoDe').value;
    let tipoPara = document.getElementById('tipoPara').value;

    let valorEntrada = document.getElementById('valorEntrada').value.trim();

    if (valorEntrada === '') {
        alert("Por favor, insira um valor para converter.");
        return;
    }

    let valorNumerico = parseFloat(valorEntrada);
    if (isNaN(valorNumerico)) {
        alert("Por favor, insira um valor numérico válido para converter.");
        return;
    }

    let resultado = '';

    if (tipoDe === 'decimal') {
        resultado = converterDeDecimal(valorNumerico, tipoPara);
    } else if (tipoDe === 'binario') {
        resultado = converterDeBinario(valorEntrada, tipoPara);
    } else if (tipoDe === 'octal') {
        resultado = converterDeOctal(valorEntrada, tipoPara);
    } else if (tipoDe === 'hexadecimal') {
        resultado = converterDeHexadecimal(valorEntrada, tipoPara);
    } else if (tipoDe === 'complemento2') {
        resultado = converterDeComplemento2(valorEntrada, tipoPara);
    } else {
        alert("Tipo de entrada inválido.");
        return;
    }

    document.getElementById('resultado').value = resultado;
}

function converterDeDecimal(valor, tipoPara) {
    return 'Converter de Decimal para ' + tipoPara;
}

function converterDeBinario(valor, tipoPara) {
    return 'Converter de Binário para ' + tipoPara;
}

function converterDeOctal(valor, tipoPara) {
    return 'Converter de Octal para ' + tipoPara;
}

function converterDeHexadecimal(valor, tipoPara) {
    return 'Converter de Hexadecimal para ' + tipoPara;
}

function converterDeComplemento2(valor, tipoPara) {
    return 'Converter de Complemento de 2 para ' + tipoPara;
}

function limpar() {
    document.getElementById('valorEntrada').value = '';
    document.getElementById('result').value = '';
}



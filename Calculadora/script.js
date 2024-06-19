function converter() {
    console.log(entrada)
    var de = document.getElementById('De').value;
    var para = document.getElementById('Para').value; // Base de destino
    var entrada = document.getElementById('entrada_conversor').value; // Número de entrada

    if (entrada === '') {
        alert('Preencha o campo de entrada!');
        return;
    }

    var switchString;
    console.log(de, para);

    // Convertendo entrada para decimal
    switch (de) {
        case 'dec':
            switchString = parseInt(entrada, 10);
            break;
        case 'bin':
            switchString = parseInt(entrada, 2);
            break;
        case 'oct':
            switchString = parseInt(entrada, 8);
            break;
        case 'hex':
            switchString = parseInt(entrada, 16);
            break;
        case 'com':
            switchString = complementoDe2ParaDecimal(entrada);
            break;
        default:
            return;
    }
   
    let resultado;

    // Convertendo de decimal para a base desejada
    switch (para) {
        case 'dec':
            resultado = switchString.toString(10);
            break;
        case 'bin':
            resultado = switchString.toString(2);
            break;
        case 'oct':
            resultado = switchString.toString(8);
            break;
        case 'hex':
            resultado = switchString.toString(16).toUpperCase();
            break;
        case 'com':
            resultado = decimalParaComplementoDe2(switchString);
            break;
        default:
            return;
    }

    document.getElementById('resultado_conversor').innerText = resultado;
}

function complementoDe2ParaDecimal(binario) {
    let isNegative = binario[0] === '1';
    if (isNegative) {
        let inverso = '';
        for (let i = 0; i < binario.length; i++) {
            inverso += binario[i] === '1' ? '0' : '1';
        }
        let decimal = parseInt(inverso, 2) + 1;
        return -decimal;
    } else {
        return parseInt(binario, 2);
    }
}

function decimalParaComplementoDe2(decimal) {
    if (decimal >= 0) {
        return decimal.toString(2);
    } else {
        let binario = Math.abs(decimal).toString(2);
        let complemento = '';
        for (let i = 0; i < binario.length; i++) {
            complemento += binario[i] === '1' ? '0' : '1';
        }
        let complemento2 = (parseInt(complemento, 2) + 1).toString(2);
        return complemento2.padStart(binario.length, '0');
    }
}

// --------------------------------------------------------------------------------------------------------------- //

function conversao_calc() {
    let binario1 = document.getElementById('calc_ent01').value;
    let binario2 = document.getElementById('calc_ent02').value;
    let operacao = document.getElementById('Operacao').value;

    if (binario1 === '' || binario2 === '') {
        alert('Preencha os dois números binários!');
        return;
    }

    switch (operacao) {
        case 'som':
            somarBinarios(binario1, binario2);
            break;
        case 'sub':
            subtrairBinarios(binario1, binario2);
            break;
        case 'mul':
            multiplicarBinarios(binario1, binario2);
            break;
        case 'div':
            dividirBinarios(binario1, binario2);
            break;
        default:
            alert('Operação inválida!');
            return;
    }

    function somarBinarios(binario1, binario2) {
        let decimal1 = parseInt(binario1, 2);
        let decimal2 = parseInt(binario2, 2);
        let resultadoDecimal = decimal1 + decimal2;
        let resultadoBinario = resultadoDecimal.toString(2);
        document.getElementById('resultado_calc').innerText = resultadoBinario;
    }

    function subtrairBinarios(binario1, binario2) {
        let decimal1 = parseInt(binario1, 2);
        let decimal2 = parseInt(binario2, 2);
        let resultadoDecimal = decimal1 - decimal2;
        let resultadoBinario = resultadoDecimal.toString(2);
        document.getElementById('resultado_calc').innerText = resultadoBinario;
    }

    function multiplicarBinarios(binario1, binario2) {
        let decimal1 = parseInt(binario1, 2);
        let decimal2 = parseInt(binario2, 2);
        let resultadoDecimal = decimal1 * decimal2;
        let resultadoBinario = resultadoDecimal.toString(2);
        document.getElementById('resultado_calc').innerText = resultadoBinario;
    }

    function dividirBinarios(binario1, binario2) {
        let decimal1 = parseInt(binario1, 2);
        let decimal2 = parseInt(binario2, 2);
        let resultadoDecimal = decimal1 / decimal2;
        let resultadoBinario = resultadoDecimal.toString(2);
        document.getElementById('resultado_calc').innerText = resultadoBinario;
    }
}

function limpar1() {
    document.getElementById('calc_ent01').value = ''; 
    document.getElementById('calc_ent02').value = ''; 
    document.getElementById('resultado_calc').innerText = ''; 
}

function limpar2() {
    document.getElementById('entrada_conversor').value = ''; 
    document.getElementById('resultado_conversor').innerText = ''; 
}

// Filtro que evita que outros números sejam escritos
// Usar essa função na TAG em HTML: oninput="filtro_calc(event)"
function filtro_calc(event) {  
    let input = event.target.value;  // Obter o valor atual do campo de entrada
    let filtro = input.replace(/[^01]/g, ''); // Tudo que não for 0 e 1 é substituído por "Nada"
    event.target.value = filtro;  // Atualizar o valor do campo de entrada com o valor filtrado
}

function filtro_conversor(event) {
    var conv_de = document.getElementById('De').value;
    switch (true) {
        case conv_de === 'dec':
            filtro_dec(event);
            break;
        case conv_de === 'bin':
            filtro_bin(event);
            break;
        case conv_de === 'oct':
            filtro_oct(event);
            break;
        case conv_de === 'hex':
            filtro_hex(event);
            break;
        case conv_de === 'com':
            filtro_com(event);
            break;
        default:
            break;
    }  
}

function filtro_dec(event) {
    let input = event.target.value;
    let filtro = input.replace(/[^-0-9]/g, '');
    event.target.value = filtro;
}

function filtro_bin(event) {
    let input = event.target.value;
    let filtro = input.replace(/[^01]/g, '');
    event.target.value = filtro;
}

function filtro_oct(event) {
    let input = event.target.value;
    let filtro = input.replace(/[^0-8]/g, '');
    event.target.value = filtro;
}

function filtro_hex(event) {
    let input = event.target.value;
    let filtro = input.toUpperCase().replace(/[^0-9A-Fa-f]/g, '');
    event.target.value = filtro;
}

function filtro_com(event) {
    let input = event.target.value;
    let filtro = input.replace(/[^01]/g, '');
    event.target.value = filtro;
}

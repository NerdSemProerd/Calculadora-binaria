// <!DOCTYPE html>
// <html lang="pt">
// <head>
//   <meta charset="UTF-8">
//   <meta name="viewport" content="width=device-width, initial-scale=1.0">
//   <title>Conversor Binário para Complemento de 2</title>
// </head>
// <body>
//   <h1>Conversor Binário para Complemento de 2</h1>
  
//   <label for="binario">Digite um número binário (8 bits):</label>
//   <input type="text" id="binario" maxlength="8">
//   <button onclick="converterBinarioParaComplemento2()">Converter</button>
  
//   <p>Complemento de 2: <span id="complemento2"></span></p>

//   <script>
//     function binarioParaComplemento2(binario) {
//         let binarioCompleto = binario.padStart(8, '0');
//         let complementoUm = binarioCompleto.split('').map(bit => bit === '0' ? '1' : '0').join('');
//         let complementoDois = (parseInt(complementoUm, 2) + 1).toString(2);
//         return complementoDois.padStart(8, '0');
//     }

//     function converterBinarioParaComplemento2() {
//         let binario = document.getElementById('binario').value;
//         let complemento2 = binarioParaComplemento2(binario);
//         document.getElementById('complemento2').textContent = complemento2;
//     }
//   </script>
// </body>
// </html>

function converter() {
    let de = document.getElementById('De').value; // Base de origem
    let para = document.getElementById('Para').value; // Base de destino
    let entrada = document.getElementById('entrada_conversor').value; // Número de entrada

    if (entrada === '') {
        alert('Preencha o campo de entrada!');
        return;
    }

    let switchString;

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
            switchString = ComToDec(entrada);
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
            resultado = DecToCom(switchString);
            break;
        default:
            return;
    }

    document.getElementById('resultado_conversor').innerText = resultado;

    function binarioParaComplemento2(binario) {
        let binarioCompleto = binario.padStart(8, '0');
        let complementoUm = binarioCompleto.split('').map(bit => bit === '0' ? '1' : '0').join('');
        let complementoDois = (parseInt(complementoUm, 2) + 1).toString(2);
        return complementoDois.padStart(8, '0');
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


//Filtro que evita que outros numeros sejam escritos
//Usar essa função na TAG em HTML: oninput="filtro_calc(event)"
function filtro_calc(event) {  
    let input = event.target.value;  // Obter o valor atual do campo de entrada
    let filtro = input.replace(/[^01]/g, ''); //Tudo que não for 0 e 1 é substituido por "Nada"
    event.target.value = filtro;  // Atualizar o valor do campo de entrada com o valor filtrado
}
function filtro_conversor(event){
    var conv_de = document.getElementById('De').value;
    switch (true) {
        case conv_de === 'dec':
            filtro_dec(event)
            break;
        case conv_de === 'bin':
            filtro_bin(event)
            break;
        case conv_de === 'oct':
            filtro_oct(event)
            break;
        case conv_de === 'hex':
            filtro_hex(event)
            break;
        case conv_de === 'com':
            filtro_com(event)
            break;
        
        default:
            break;
    }  
}
function filtro_dec(event){
    let input = event.target.value;
    let filtro = input.replace(/[^0-9]/g, '')
    event.target.value = filtro;
    
}
function filtro_bin(event){
    let input = event.target.value;
    let filtro = input.replace(/[^01]/g, '')
    event.target.value = filtro;
}
function filtro_oct(event){
    let input = event.target.value;
    let filtro = input.replace(/[^0-8]/g, '')
    event.target.value = filtro;
}
function filtro_hex(event){
    let input = event.target.value;
    let filtro = input.toUpperCase().replace(/[^0-9A-Fa-f]/g, '')
    event.target.value = filtro;
}
function filtro_com(event){
    let input = event.target.value;
    let filtro = input.replace(/[^01]/g, '')
    event.target.value = filtro;
}

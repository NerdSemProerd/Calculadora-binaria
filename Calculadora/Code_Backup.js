// function ComToDec(value) {
//     if (value.length === 0) return 0;
// // b1 b2-8
// // (-2 ^ n - 1) * b1 + b(2-8) 
//     const neg = value.charAt(0);
//     const bin = value.substring(1);

//     return Math.pow(2, value.length - 1) * parseInt(neg) + parseInt(bin, 2);
// }
var valorbin;
var textresult
function binTOcom(){
    textresult = valorbin + 1
}

function DecToCom(switchString){

}

function converter() {
    console.log(entrada)
    var de = document.getElementById('De').value
    var para = document.getElementById('Para').value; // Base de destino
    var entrada = document.getElementById('entrada_conversor').value; // Número de entrada

    if (entrada === '') {
        alert('Preencha o campo de entrada!');
        return;
    }

    var switchString;
    console.log(de, para)

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
            valorbin = switchString.toString(2);
            break;
        default:
            return;
    }

    document.getElementById('resultado_conversor').innerText = resultado;

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

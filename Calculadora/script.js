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

function conversao_calc() {
    let operacao = document.getElementById('operacao').value;
    let val_bin1 = document.getElementById('calc_ent01').value;
    let val_bin2 = document.getElementById('calc_ent02').value;
    let valor1_bin = parseInt(val_bin1, 2)
    let valor2_bin = parseInt(val_bin2, 2)
    console.log("Valor 1 ", valor1_bin, " Valor 2 ", valor2_bin)

    switch (true) {
        case value:
            
            break;
    
        default:
            break;
    }

}  

function converter(event){
    var conv_para = document.getElementById('Para').value;
    
    switch (conv_para) {
        case 'dec':
            event.target.value = convertToDecimal(input, conv_de);
            break;
        case 'bin':
            event.target.value = convertToBinary(input, conv_de);
            break;
        case 'oct':
            event.target.value = convertToOctal(input, conv_de);
            break;
        case 'hex':
            event.target.value = convertToHexadecimal(input, conv_de);
            break;
        case 'com':
            event.target.value = convertToComplementoDeDois(input, conv_de);
            break;
        default:
            break;
    }
}


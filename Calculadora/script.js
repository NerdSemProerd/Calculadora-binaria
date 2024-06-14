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



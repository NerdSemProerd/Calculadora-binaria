//Filtro que evita que outros numeros sejam escritos
//Usar essa função na TAG em HTML: oninput="filtro_calc(event)"
function filtro_calc(event) {  
    let input = event.target.value;  // Obter o valor atual do campo de entrada
    let filtro = input.replace(/[^01]/g, ''); //Tudo que não for 0 e 1 é substituido por "Nada"
    event.target.value = filtro;  // Atualizar o valor do campo de entrada com o valor filtrado
}
function filtro_conversor(event){
    var conv_de = document.getElementById('De').value;
    console.log(conv_de)
    switch (true) {
        case conv_de === 'dec':
            let input = event.target.value;
            let filtro = input.replace(/[^0-9]/g, '')
            event.target.value = filtro;
            break;
            
        default:
            break;
    }
}

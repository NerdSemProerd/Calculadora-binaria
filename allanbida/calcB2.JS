function convert(){
    const qualconversao = document.getElementById('qualconversao').value;
    const valorinserido = document.getElementById('valorinserido').value;
    const resultado = document.getElementById('resultado');

    const val_decimalnc = document.getElementById(`decimalnc`).value;
    const val_decimalc = convert(val_decimalc);





    resultado.innerHTML = '';

    if (qualconversao === 'hextobin'){
        if (!/^[0-9A-Fa-f]+$/.test(valorinserido)) {
            resultado.innerHTML = 'Por favor, insira um número hexadecimal válido.';
            return;
        }
        const valordecimal = parseInt(valorinserido, 16);
        const valorbinario = valordecimal.toString(2);
        resultado.innerHTML = `Binário: ${valorbinario}`;
    } else if (qualconversao === 'bintohex'){
        if (!/^[01]+$/.test(valorinserido)){
            resultado.innerHTML = 'Por favor, insira um número binário válido.';
            return;
        }

        const valordecimal = parseInt(valorinserido, 2);
        const valorhexa = valordecimal.toString(16).toUpperCase();
        resultado.innerHTML = `Hexadecimal: ${valorhexa}`;
    }
}

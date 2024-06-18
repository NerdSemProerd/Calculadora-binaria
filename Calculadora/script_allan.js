

    function binarioParaComplemento2(binario) {
        let binarioCompleto = binario.padStart(8, '0');
        let complementoUm = binarioCompleto.split('').map(bit => bit === '0' ? '1' : '0').join('');
        let complementoDois = (parseInt(complementoUm, 2) + 1).toString(2);
        return complementoDois.padStart(8, '0');
    }

    function converterBinarioParaComplemento2() {
        let binario = document.getElementById('binario').value;
        let complemento2 = binarioParaComplemento2(binario);
        document.getElementById('complemento2').textContent = complemento2;
    }


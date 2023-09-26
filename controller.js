'use restrict'; //modo restrito

//limpar formulario
const limparFormulario = (endereco) =>{
    document.getElementById('rua').value = '';
    document.getElementById('estado').value = '';
    document.getElementById('cidade').value = '';
    document.getElementById('bairro').value = '';
}

// verifica se o cep é valido
const eNumero = (numero) => /^[0-9]+$/.test(numero);
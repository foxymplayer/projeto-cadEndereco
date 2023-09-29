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
const cepValido = (cep) => cep.length == 8 && eNumero(cep);

//preenche campos do formulario
const preencherFormulario = (endereco) =>{
    document.getElementById('rua').value = endereco.logradouro;
    document.getElementById('estado').value = endereco.bairro;
    document.getElementById('cidade').value = endereco.localidade;
    document.getElementById('bairro').value = endereco.uf;

}

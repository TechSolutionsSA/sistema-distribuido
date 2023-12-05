const btnEnviar = document.querySelector('.btn');

const cepInput = document.getElementById('cep')
const logradouroInput = document.getElementById('logradouro')
const cidadeInput = document.getElementById('cidade')
const bairroInput = document.getElementById('bairro')
const estado = document.getElementById('estado')

btnEnviar.addEventListener('click', (e) => {
  e.preventDefault();
  EnviarRequisicaoViaCep();
})

function EnviarRequisicaoViaCep(){
  fetch(`https://viacep.com.br/ws/${cepInput.value}/json/`)
  .then(res => res.json())
  .then(dados => {
    logradouroInput.value = dados.logradouro;
    cidadeInput.value = dados.localidade;
    bairroInput.value = dados.bairro;
    estado.value = dados.uf
  })
}


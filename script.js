async function buscarCep() {

  let cep = document.getElementById('cep').value;

  if (cep == '') {
    alert('Preencha o campo do CEP.');
  }


  let req = `https://viacep.com.br/ws/${cep}/json/`  
  let resp = await fetch(req);
  let result = await resp.json();

  montarDados(result);
    
}

function montarDados(json) {
  for (let i in json) {
    document.getElementById("logradouro").innerHTML = "Endereço: " + json.logradouro;
    document.getElementById("cidade").innerHTML = "Cidade: " + json.localidade;
    document.getElementById("ibge").innerHTML = "Cód. IBGE: " + json.ibge;
    document.getElementById("bairro").innerHTML = "Bairro: " + json.bairro;
    document.getElementById("uf").innerHTML = "Estado: " + json.uf;
  }
}

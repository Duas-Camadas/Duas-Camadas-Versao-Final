const formulario = document.querySelector("form");
const btn = document.querySelector("#btn");
const inome = document.querySelector(".nome");
const icontato = document.querySelector(".contato");
const icep = document.querySelector(".cep");
const ipessoa = document.forms.pessoa

function botao(){

    window.location = "./tela01/index.html"
}

btn.addEventListener('click', (event) => {
    event.preventDefault();
    

    function cadastrar() {

        const body = JSON.stringify({
            nome: inome.value,
            contato: icontato.value,
            cep: icep.value,
            cliente: ipessoa.value
        })
        

        fetch('http://localhost:8080/cadastro',
            {
                headers: {
                    'Accept': 'application/json',
                    'Content-Type': 'application/json'
                },
                method: "POST",
                body
            })
            .then(function (res) { console.log(res) })
            .catch(function (res) { console.log(res) })
    };

    function limpar() {
        inome.value = "",
        icontato.value = "",
        icep.value = ""
        
    };

    

    cadastrar();
    limpar();
    botao();
   

});
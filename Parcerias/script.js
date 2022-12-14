const perguntas = document.querySelectorAll('.pergunta');
const resposta = document.querySelectorAll('.resposta')

for(let i = 0; i <perguntas.length; i++){
  perguntas[i].addEventListener('click', () => {
    if(perguntas[i].classList.contains('fechar')){
      perguntas[i].classList.toggle('fechar')
      resposta[i].classList.toggle('ativar')

    }else{
      perguntas[i].classList.add('fechar')
      resposta[i].classList.add('ativar')
    }
  })
}
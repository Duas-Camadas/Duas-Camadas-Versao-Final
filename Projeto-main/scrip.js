let subMenu =  document.getElementById("subMenu");

function toggleMenu(){
  subMenu.classList.toggle("open-menu");
}


/*barra de pesquisa */
/*---------------------------------------------------------*/ 

const perguntas = document.querySelectorAll('.perguntas')
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

const productContainers = [...document.querySelectorAll('.product-container')];
const nxtBtn = [...document.querySelectorAll('.nxt-btn')];
const preBtn = [...document.querySelectorAll('.pre-btn')];

productContainers.forEach((item, i) => {
    let containerDimensions = item.getBoundingClientRect();
    let containerWidth = containerDimensions.width;

    nxtBtn[i].addEventListener('click', () => {
        item.scrollLeft += containerWidth;
    })

    preBtn[i].addEventListener('click', () => {
        item.scrollLeft -= containerWidth;
    })
})



// api

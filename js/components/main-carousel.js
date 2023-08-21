//1 acessar a janela (navegador)
//2 pegar HTML
//3 pegar botão
//4 saber que esta sendo clicado no botão
//acessar a janela
//pegar o htrml todo
// pegar o elements
// mover o elements para direita
const btnRight = window.document.querySelector('.button-arrow.-right');
const btnLeft = window.document.querySelector('.button-arrow.-left');
const elements = window.document.querySelector('.elements');
let pixels = 0;

btnRight.addEventListener('click', function(){
    pixels = pixels + 50;
    elements.style = `transform: translateX(${pixels}px) `;
});


btnLeft.addEventListener('click', function(){
    pixels = pixels - 50;
    elements.style = `transform: translateX(${pixels}px) `;
});


const header = document.querySelector('header')

const logo = document.querySelector('.logo')

const menu = document.querySelector('.fixed__logo')

menu.addEventListener('click',() => {
    menu.classList.toggle('menu-ative')
})


function menuDark(estado,imagem){
    if(window.pageYOffset > 30){
        estado.classList.add('ative')
        imagem.src = './svg_img/logo-seja-business-dark.png';
    }else {
        estado.classList.remove('ative')
        imagem.src = './svg_img/logo-seja-business.png';
    }
}

window.addEventListener('scroll',() => menuDark(header,logo))
//window.addEventListener('scroll',function (){menuDark(header,logo)})





/**
 * const janela = window.addEventListener('scroll',function(){
    const y = window.scrollY;
    return console.log(y)
})

console.log(janela);
 */
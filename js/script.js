const header = document.querySelector('header')

const logo = document.querySelectorAll('.logo')

const menu = document.querySelector('.nav-lista')

menu.addEventListener('click',() => {
    menu.classList.toggle('menu-ative')
})

window.addEventListener('scroll',() => {
    if(window.pageYOffset > 30){
        header.classList.add('ative')
        logo[0].attributes.src = "../svg_img/logo-seja-business-dark.png"

    }else if(window.scrollY == 0) {
        header.classList.remove('ative')
    }
})






/**
 * const janela = window.addEventListener('scroll',function(){
    const y = window.scrollY;
    return console.log(y)
})

console.log(janela);
 */
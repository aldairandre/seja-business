"use strict"

const header = document.querySelector('header')

const logo = document.getElementById('logo')

const iconeDeMenu = document.getElementById('icone')

iconeDeMenu.addEventListener('click',() => {
    const nav_list = document.querySelector('.nav-lista')
    nav_list.classList.add('menu-ative')
    const apagar = document.getElementById('apagar')
    apagar.addEventListener('click',function() {
        nav_list.classList.remove('menu-ative')
    })
    
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

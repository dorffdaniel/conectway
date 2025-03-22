let hamburguer = document.querySelector('.hamburguer');

let navList = document.querySelector('.navList')

hamburguer.addEventListener('click', ()=>{
    hamburguer.classList.toggle('ativado')
    navList.classList.toggle('mostrar')
})

function conteudos(index){
    let conteudoLi = document.querySelectorAll('.conteudosLi');

    conteudoLi.forEach((event) =>{
        event.classList.remove('aparecer');
    })

    conteudoLi[index].classList.add('aparecer');
}
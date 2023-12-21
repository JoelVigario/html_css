const btnMobile = document.querySelector('#btn-mobile')

function toggleMenu() {
    const nav = document.querySelector('#nav')
    nav.classList.toggle('active') // classList.add() / adiciona uma classe a lista / toggle - adiciona se não tiver e remove caso tenha 
}

btnMobile.addEventListener('click', toggleMenu)
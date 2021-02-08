const menu = document.querySelector('.menu')
const overlay = document.querySelector('.overlay')
const drop_menu = document.querySelector('.drop__menu')
const body = document.querySelector('body')

export const btnMenu = menu.addEventListener('click', () => {
    menu.classList.toggle('open')
    
    if (menu.classList.contains('open')) {
        // overlay
        overlay.classList.remove('invisible')
        overlay.classList.add('visible')
        // drop menu
        drop_menu.classList.remove('invisible')
        drop_menu.classList.add('visible')

        body.classList.add('noscroll')
    } 

    if (!menu.classList.contains('open')) {
        // overlay
        overlay.classList.remove('visible')
        overlay.classList.add('invisible')
        // drop menu
        drop_menu.classList.remove('visible')
        drop_menu.classList.add('invisible')

        body.classList.remove('noscroll')
    }
})


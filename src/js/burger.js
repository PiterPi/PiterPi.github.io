const btnBurger = document.querySelector('.header_burger')
const menuBurger = document.querySelector('.header_menu')
const menuClose = document.querySelector('.header_menu_close')

const mobMenuOn = () => {

    btnBurger.addEventListener('click', () => {
        menuBurger.style.display = 'flex'
    })
}

const mobMenuOff = () => {

    menuClose.addEventListener('click', () => {
        menuBurger.style.display = 'none'
    })
}

mobMenuOn()
mobMenuOff()

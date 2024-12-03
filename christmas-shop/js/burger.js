export function showBurger() {
    const burgerIcon = document.querySelector('.burger-wrap')
    const destiny = document.querySelector('header')
    const body = document.querySelector('body')
    const burgerMenu = document.querySelector('.burger__menu')

    burgerIcon.addEventListener('click', () => {
        if (burgerMenu) {
            burgerMenu.remove()
            document.querySelector('.burger-icon').classList.remove('active')
        } else {
            document.querySelector('.burger-icon').classList.toggle('active')
            body.classList.add('no-scroll')
            destiny.insertAdjacentHTML("beforeend", `
            <div class="burger__menu">
              <nav>
                <ul class="menu">
                  <li><a href="gifts.html">gifts</a></li>
                  <li><a href="#about">about</a></li>
                  <li><a href="#gifts">best</a></li>
                  <li><a href="#contacts">contacts</a></li>
                </ul>
              </nav>
            </div>
        `)

            const menuLinks = document.querySelectorAll('.burger__menu a')
            menuLinks.forEach( link => {
                link.addEventListener('click', () => {
                    closeBurgerMenu()
                })
            })
        }
    })

    function closeBurgerMenu() {
        const burgerMenu = document.querySelector('.burger__menu')
        if (burgerMenu) {
            burgerMenu.remove()
            document.querySelector('.burger-icon').classList.remove('active');
            document.querySelector('body').classList.remove('no-scroll');
        }
    }
}
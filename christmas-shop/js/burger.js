export function showBurger() {
    const burgerIcon = document.querySelector('.burger-icon')
    const destiny = document.querySelector('header')
    const body = document.querySelector('body')

    burgerIcon.addEventListener('click', () => {
        if(burgerIcon.classList.contains('active')){
            document.querySelector('.burger__menu').remove()
            document.querySelector('.burger-icon').classList.remove('active');
            document.querySelector('body').classList.remove('no-scroll');
        } else {
            burgerIcon.classList.add('active')
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
        }
        const menuLinks = document.querySelectorAll('.burger__menu a')
        menuLinks.forEach( link => {
            link.addEventListener('click', () => {
                document.querySelector('.burger__menu').remove()
                document.querySelector('.burger-icon').classList.remove('active');
                document.querySelector('body').classList.remove('no-scroll');
            })
            })
    })
}
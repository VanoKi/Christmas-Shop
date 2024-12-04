export function showBurger() {
    const burgerIcon = document.querySelector('.burger-icon')
    const destiny = document.querySelector('header')
    const body = document.querySelector('body')

    burgerIcon.addEventListener('click', () => {
        const burgerMenu = document.querySelector('.burger__menu');
        if (burgerIcon.classList.contains('active')) {
            burgerIcon.classList.remove('active');
            body.classList.remove('no-scroll');

            if (burgerMenu) {
                burgerMenu.classList.remove('active');
                burgerMenu.addEventListener('transitionend', () => {
                    burgerMenu.remove();
                }, { once: true });
            }
        } else {
            burgerIcon.classList.add('active');
            body.classList.add('no-scroll');
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
        `);
            const burgerMenu = document.querySelector('.burger__menu')
            setTimeout(burgerMenu.classList.add('active'), 500)

            const menuLinks = document.querySelectorAll('.burger__menu a');
            menuLinks.forEach(link => {
                link.addEventListener('click', () => {
                    burgerIcon.classList.remove('active');
                    body.classList.remove('no-scroll');

                    const burgerMenu = document.querySelector('.burger__menu');
                    if (burgerMenu) {
                        burgerMenu.classList.remove('active');
                        burgerMenu.addEventListener('transitionend', () => {
                            burgerMenu.remove();
                        }, { once: true });
                    }
                });
            });
        }
    });
    }
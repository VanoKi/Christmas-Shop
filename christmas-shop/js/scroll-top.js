export function scrollTop() {
    const element = document.querySelector('.scroll-top')
    function show() {
      element.classList.remove('scroll-top_hide')
    }
    function hide() {
      element.classList.add('scroll-top_hide')
    }


    window.addEventListener('scroll', () => {
        const scrollY = window.scrollY || document.documentElement.scrollTop
        scrollY > 300 ? show() : hide()
    })

    element.addEventListener('click', () => {
        window.scrollTo({
            top: 0,
            left: 0,
            behavior: 'smooth'
        })
    })


}
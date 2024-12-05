export function slider() {
    const row = document.querySelector('.row')
    const slider = document.querySelector('.slider')
    const btnLeft = document.querySelector('#left')
    const btnRight = document.querySelector('#right')
    let width = 0
    let step = 0
    let position = 0

    function calc() {
        width = row.scrollWidth
        const visibleWidth = slider.offsetWidth
        const size = window.innerWidth > 768 ? 3 : 6
        step = (width - visibleWidth) / size
        position = 0
        row.style.transform = `translateX(${position}px)`
        updateBtns()
    }

    function updateBtns() {
        if (position === 0) {
            btnLeft.classList.add('disabled')
        } else {
            btnLeft.classList.remove('disabled')
        }
        const maxPosition = -(width - slider.offsetWidth)
        if (position <= maxPosition) {
            btnRight.classList.add('disabled')
        } else {
            btnRight.classList.remove('disabled')
        }
    }

    function move(direction) {
        const maxPosition = -(width - row.parentElement.offsetWidth)
        if (direction === 'right' && position > maxPosition) {
            position -= step
            if (position < maxPosition) {
                position = maxPosition
            }
        }else  if(direction === 'left' && position < 0) {
            position += step
            if (position > 0) {
                position = 0
            }
        }
        row.style.transform = `translateX(${position}px)`
        row.style.transition = `transform 0.5s ease`
        updateBtns()
    }

    btnLeft.addEventListener('click', () => move('left'))
    btnRight.addEventListener('click', () => move('right'))
    window.addEventListener('resize', calc)
    calc()
}
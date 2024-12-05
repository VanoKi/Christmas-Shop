export function slider() {
    const row = document.querySelector('.row')
    const slider = document.querySelector('.slider')

    const btnRight = document.querySelector('#right')
    const btnLeft = document.querySelector('#left')

    let count = 3
    // console.log(row.offsetWidth)
    let width = window.innerWidth > 768 ? 3 : 6
    // let width = 135
    console.log(width)
    let position = 0

    btnRight.addEventListener('click', () => {
        position -= width * count
        position = Math.max(position, -width * (row.childElementCount - count))
        row.style.transform = `translateX(${position + 'px'})`
    })

    btnLeft.addEventListener('click', () => {
        position += width * count
        position = Math.max(position, 0)
        // row.style.marginLeft = position + 'px'
    })

    // console.log(row.childElementCount)

}
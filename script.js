const item = document.querySelector('.item')
const placeholders = document.querySelectorAll('.placeholder')

item.addEventListener('dragstart', (e) => {
    e.target.classList.add('hold')
    setTimeout(() => e.target.classList.add('hide'), 0)
})

item.addEventListener('dragend', (e) => {
    e.target.classList.remove('hold', 'hide')
})

// iterate over all listeners and launch the one that worked
placeholders.forEach(placeholder => {
    placeholder.addEventListener('dragover', (e) => {
        e.preventDefault()
    })

    placeholder.addEventListener('dragenter', (e) => {
        e.target.classList.add('hovered')
    })

    placeholder.addEventListener('dragleave', (e) => {
        e.target.classList.remove('hovered')
    })

    placeholder.addEventListener('drop', (e) => {
        e.target.classList.remove('hovered')
        e.target.append(item)
    })
})
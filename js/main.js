// show/hide nav
const toggler = document.querySelector('.header__toggler')
const bars = document.querySelectorAll('.header__bar')
const nav = document.querySelector('.header__nav')

const toggleNavDisplay = () => {
    nav.classList.toggle('active')
    bars.forEach(bar => bar.classList.toggle('active'))
}

toggler.addEventListener('click', toggleNavDisplay)


// scroll to top btn
const toTopBtn = document.querySelector('.scroll-to-top-btn')
toTopBtn.addEventListener('click', () => {
    document.body.scrollTop = 0; // For Safari
    document.documentElement.scrollTop = 0; // For Chrome, Firefox, IE and Opera
})

// counter
const counterSection = document.querySelector('.counter')
const counters = document.querySelectorAll('.counter__heading4')
const speed = 250 

// counterSection.offsetTop ->  returns counterSection distance from the window top in px         
// counterSection.clientHeight -> actual counterSection height is divided by 3 in order for counter to start when we are on the third of the height of that section
const elementDistance = counterSection.offsetTop - (counterSection.clientHeight / 3) 

window.onscroll = () => {
    // counters settings
    if(document.body.scrollTop >= elementDistance || document.documentElement.scrollTop >= elementDistance) {
        counters.forEach(counter => {
            const updateCount = () => {
                const spanElement = counter.children[0]
                const target = parseInt(counter.getAttribute('data-target'))
                const count = parseInt(spanElement.innerHTML)                                 // it's 0 at the start
                const increment = Math.trunc(target / speed)                                 // round returned value
                if(count < target) {
                    spanElement.innerHTML = count + increment
                    setTimeout(updateCount, 1)
                } else {
                    spanElement.innerHTML = target
                }      
            }
        updateCount()
        })
    }
    // scroll to top btn settings
    // if the user scrolls down 20px from the top of the document, show the button
    if(document.body.scrollTop > 20 || document.documentElement.scrollTop > 20) {
        toTopBtn.classList.add('displayed')
    } else {
        toTopBtn.classList.remove('displayed')
    }
}



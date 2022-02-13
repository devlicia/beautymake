/***** ABRE E FECHA O MENU QUANDO CLICAR NOS ICONES: HAMBURGUER E X *******/
const nav = document.querySelector('#header nav')
const toggle = document.querySelectorAll('nav .toggle')

for (const element of toggle) {
  element.addEventListener('click', function () {
    nav.classList.toggle('show')
  })
}

/****** QUANDO CLICAR EM UM ITEM DO MENU, ESCONDER MENU ******/
const links = document.querySelectorAll('nav ul li a')

for (const link of links) {
  link.addEventListener('click', function () {
    nav.classList.remove('show')
  })
}

/************* MUDAR HEADER DA PAGINA QUANDO SCROLL ***************/

const header = document.querySelector('#header')
const navHeight = header.offsetHeight

window.addEventListener('scroll', function () {
  /******** MENOR QUE A ALTURA DO HEADER *******/
  if (window.scrollY >= navHeight) {
    header.classList.add('scroll')
    /******** MENOR QUE A ALTURA DO HEADER *******/
  } else {
    header.classList.remove('scroll')
  }
})

/************* TESTIMONIALS CAROUSEL ***************/

const swiper = new Swiper('.swiper', {
  slidesPerView: 1,
  pagination: {
    el: '.swiper-pagination'
  },
  mousewheel: true,
  keyboard: true,
  breakpoints: {
    767: {
      slidesPerView: 2,
      setWrapperSize: true
    }
  }
})

/******* SCROLLREVEAL ********/
const scrollReveal = ScrollReveal({
  origin: 'top',
  distance: '30px',
  duration: 700,
  reset: true
})

scrollReveal.reveal(
  `#home .text, #home .image, #about .image, #about .text, #services header, #services .card, #testimonials header, #testiominals .testiominals, #testiominals .testiominal, #contact .text, #contact .links, footer .brand, footer .social`,
  {
    interval: 100
  }
)

/********** BOTÃO VOLTAR PARA O TOPO ***********/

const backToTopButton = document.querySelector('.back-to-top')
window.addEventListener('scroll', function () {
  if (window.scrollY >= 1600) {
    backToTopButton.classList.add('show')
  } else {
    backToTopButton.classList.remove('show')
  }
})

/********* MENU LINK ATIVO  **********/

const sections = document.querySelectorAll('main section[id]')
function activateMenuAtCurrentSection() {
  const checkpoint = window.pageYOffset + (window.innerHeight / 8) * 4

  for (const section of sections) {
    const sectionTop = section.offsetTop
    const sectionHeight = section.offsetHeight
    const sectionId = section.getAttribute('id')

    const checkpointStart = checkpoint >= sectionTop
    const checkpointEnd = checkpoint <= sectionTop + sectionHeight

    if (checkpointStart && checkpointEnd) {
      document
        .querySelector('nav ul li a[href*=' + sectionId + ']')
        .classList.add('active')
    } else {
      document
        .querySelector('nav ul li a[href*=' + sectionId + ']')
        .classList.remove('active')
    }
  }
}
/****** WHEN SCROLL *******/
window.addEventListener('scroll', function () {
  activateMenuAtCurrentSection()
})

/*=============== MOSTRAR MENU ===============*/
const navMenu = document.getElementById('nav-menu'),
      navToggle = document.getElementById('nav-toggle'),
      navFechar = document.getElementById('nav-fechar')

if(navToggle){
    navToggle.addEventListener('click', () =>{
        navMenu.classList.add('mostrar-menu')
    })
}

if(navFechar){
    navFechar.addEventListener('click', () => {
        navMenu.classList.remove('mostrar-menu')
    })
}

/*=============== REMOVER MENU MOBILE ===============*/
const navLink = document.querySelectorAll('.nav__link')

function linkAction(){
    const navMenu = document.getElementById('nav-menu')

    navMenu.classList.remove('mostrar-menu')
}
navLink.forEach(n => n.addEventListener('click', linkAction))

/*=============== MUDAR FUNDO CABEÇALHO ===============*/
const scrollHeader = () => {
    const header = document.getElementById('header');
    this.scrollY >= 50 ? header.classList.add('bg-header')
                       : header.classList.remove('bg-header')
}

window.addEventListener('scroll', scrollHeader)

/*=============== ANIMAÇÃO LÂMPADA ===============*/
const interruptorCheckbox = document.getElementById('interruptor');
const homeLuz = document.querySelector('.home__luz');

// Verifique se há um estado salvo no localStorage
const estadoInterruptor = localStorage.getItem('interruptor');

// Se o estado for 'ligado', marque o checkbox e exiba a .home__luz
if (estadoInterruptor === 'ligado') {
    interruptorCheckbox.checked = true;
    homeLuz.style.opacity = '0.4';
}
  
interruptorCheckbox.addEventListener('change', function() {
    if (this.checked) {
        homeLuz.style.transition = 'opacity 1s ease';
        homeLuz.style.opacity = '0.4';
        // Salve o estado 'ligado' no localStorage
        localStorage.setItem('interruptor', 'ligado');
    } else {
        homeLuz.style.transition = 'opacity 1s ease';
        homeLuz.style.opacity = '0';
        // Salve o estado 'desligado' no localStorage
        localStorage.setItem('interruptor', 'desligado');
    }
});

/*=============== ESCOLHA ACCORDION ===============*/
const accordionItems = document.querySelectorAll('.escolha__accordion-item')

accordionItems.forEach((item) => {
    const accordionHeader = item.querySelector('.escolha__accordion-header')

    accordionHeader.addEventListener('click', () => {
        const openItem = document.querySelector('.accordion-open')

        toggleItem(item)

        if(openItem !== item){
            toggleItem(openItem)
        }
    })
})

const toggleItem = (item) =>{
    const accordionContent = item.querySelector('.escolha__accordion-content')

    if(item.classList.contains('accordion-open')){
        accordionContent.removeAttribute('style')
        item.classList.remove('accordion-open')
    }else{
        accordionContent.style.height = accordionContent.scrollHeight + 'px'
    item.classList.add('accordion-open')
    }
}

/*================== SLIDER SOBRE ==================*/
let swiperDepoimento = new Swiper(".swiper__sobre", {
    effect: "coverflow",
    autoplay: {
        delay: 2500,
        disableOnInteraction: false,
    },
    grabCursor: true,
    centeredSlides: true,
    slidesPerView: "auto",
    coverflowEffect: {
      rotate: 50,
      stretch: 0,
      depth: 100,
      modifier: 1,
      slideShadows: true,
    },
    pagination: {
      el: ".swiper-pagination-sobre",
      clickable: true,
    }
  });


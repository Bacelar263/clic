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
let swiperSobre = new Swiper(".swiper__sobre", {
    effect: "coverflow",
    autoplay: {
        delay: 2500,
        disableOnInteraction: false,
    },
    grabCursor: true,
    centeredSlides: true,
    loop: true,
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

/*================== SLIDER PRODUTOS ==================*/
let swiperProdutos = new Swiper(".produtos__conteudo", {
    slidesPerView: 'auto',
    centeredSlides: true,
    loop: true,
    grabCursor: true,
    navigation: {
        nextEl: '.swiper-button-next',
        prevEl: '.swiper-button-prev',
    },
    breakpoints: {
        768: {
            centeredSlides: false,
        }
    }
})

/*================== SLIDER DEPOIMENTOS ==================*/
let swiperDepoimento = new Swiper(".swiper__depoimentos", {
    effect: "cube",
    loop: true,
    grabCursor: true,
    cubeEffect: {
      shadow: false
    },
    pagination: {
      el: ".swiper-pagination-depoimentos",
      clickable: true,
    }
  });

/*=============== MODAL ===============*/
const modalViews = document.querySelectorAll('.habilidade__modal'),
modalBtns = document.querySelectorAll('.btn__depoimento'),
modalCloses = document.querySelectorAll('.habilidade__modal-close')

let modal = function(modalClick) {
modalViews[modalClick].classList.add('active-modal')
}

modalBtns.forEach((modalBtn, i) => {
modalBtn.addEventListener('click', () => {
  modal(i);
})
})

modalCloses.forEach((modalClose) => {
modalClose.addEventListener('click', () => {
  modalViews.forEach((modalView) => {
      modalView.classList.remove('active-modal')
  })
})
})

/*=============== CARACTERES ===============*/
let textArea = document.querySelector("#depoimento_mensagem"),
numero_minimo = document.querySelector(".numero_minimo");

textArea.addEventListener("input", () => {
    let tamanho = textArea.value.length;
    numero_minimo.innerHTML = tamanho;

    if (tamanho >= 300) {
        textArea.value = textArea.value.substr(0, 299);
    } else {
        textArea.disabled = false;
    }
});

/*=============== DÚVDAS FREQUENTES ===============*/
const duvidasItens = document.querySelectorAll('.duvidas__item');

duvidasItens.forEach((item) => {
    const duvidasheader = item.querySelector('.duvidas__header');

    duvidasheader.addEventListener('click', () => {
        const abrirItem = document.querySelector('.duvidas-aberto')

        toggleDuvidas(item)

        if(abrirItem && abrirItem !== item) {
            toggleItem(abrirItem)
        }
    })
})

const toggleDuvidas = (item) => {
    const duvidasConteudo = item.querySelector('.duvidas__conteudo');

    if(item.classList.contains('duvidas-aberto')) {
        duvidasConteudo.removeAttribute('style')
        item.classList.remove('duvidas-aberto')
    } else {
        duvidasConteudo.style.height = duvidasConteudo.scrollHeight + 'px';
        item.classList.add('duvidas-aberto')
    }
}
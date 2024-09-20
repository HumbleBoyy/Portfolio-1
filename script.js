window.addEventListener('DOMContentLoaded', function () {
  window.addEventListener('scroll', function() {
    const header = document.querySelector('header');
    header.classList.toggle('sticky', window.scrollY > 0)
  })

    // Loader
    const loader = document.querySelector('.loader')
    
    setTimeout(()=> {
    loader.style.opacity = '0'
             setTimeout(()=> { 
             loader.style.display = 'none'
             }, 5000)
           }, 2000)
    // Loader

  const menuBtn = document.querySelector('.menu-btn')
  const navigation = document.querySelector('.navigation')
  const navigationItems = document.querySelectorAll('.navigation a')

  menuBtn.addEventListener('click', () => {
    menuBtn.classList.toggle('active')
    navigation.classList.toggle('active')
  })

  navigationItems.forEach(navItem => {
    navItem.addEventListener('click', () => {
      menuBtn.classList.remove('active')
      navigation.classList.remove('active')
    })
  })

  const scrollBtn = document.querySelector('.scrollToTop-btn')
  window.addEventListener('scroll', () => {
    scrollBtn.classList.toggle('active', window.scrollY > 500)
  })
  scrollBtn.addEventListener('click', () => {
    document.body.scrollTop = 0;
    document.documentElement.scrollTop = 0;
  })

  window.addEventListener('scroll', () => {
    let reveals = document.querySelectorAll('.reveal')

    for(let i = 0; i< reveals.length; i++) {
      let windowHeight = window.innerHeight;
      let revealTop = reveals[i].getBoundingClientRect().top;
      let revealPoint = 50;

      if(revealTop < windowHeight - revealPoint) {
        reveals[i].classList.add('active')
      }
    }
  })

    //   //See all 
    const box2 = document.querySelector('.box');
    const btns = document.querySelector('.see_all');

    let isBoxExpandeda = false;

    btns.addEventListener('click', ()=> {
        if(isBoxExpandeda){
            //If the box is currently expanded, collapse it
            box2.style.height = '600px';
        }else{
            // if the box is currently collapsed, expand it to its full content height
            box2.style.height = box2.scrollHeight
             + 'px';
        }

        // Toggle the state for the next click

        isBoxExpandeda = !isBoxExpandeda
    })
    //   //See all 
})
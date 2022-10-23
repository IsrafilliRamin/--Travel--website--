var swiper = new Swiper(".slide-content", {
  autoplay: {
    delay: 2000,
  },
  slidesPerView: 28,
  spaceBetween: 129,
  loop: true,
  centerSlide: 'true',
  fade: 'true',
  grabCursor: 'true',
  pagination: {
    el: ".swiper-pagination",
    clickable: true,
    dynamicBullets: true,
  },
  navigation: {
    nextEl: ".swiper-button-next",
    prevEl: ".swiper-button-prev",
  },

  breakpoints:{
      0: {
          slidesPerView: 1,
      },
      520: {
          slidesPerView: 2,
      },
      950: {
          slidesPerView: 3,
      },
  },
});


  var swiper = new Swiper(".mySwiper", {
    autoplay: {
      delay: 4000,
    },
   
    centeredSlides: true,
    spaceBetween:70
  });


  const burgerMenu = document.querySelector(".fa-bars");
  const menu = document.querySelector(".ul-header");
  const menuX = document.querySelector(".fa-x")
  const videoh1 = document.querySelector(".video .text-container h1");
  const videop = document.querySelector(".video .text-container p")
  const imgleft = document.querySelector(".gallery .containerimg .boxleft img")
  const imgright = document.querySelector(".gallery .containerimg .boxright")
  const headerH = document.querySelector(".header .textcenter h1")
  const headerP = document.querySelector(".header .textcenter p")



 window.addEventListener("load",()=>{
  window.addEventListener("scroll",()=>{
   let mesafe = window.scrollY;
   console.log(mesafe);
   if(mesafe >= 0){
    headerH.style.left = "0"
    headerP.style.left = "0"
   }
    if(mesafe > 1400){
      videop.style.left = "0"
      videoh1.style.left = "0"
     
    }else{
      videoh1.style.left = "-160%"
      videop.style.left = "-160%"
      
    }
    if(mesafe>2100){
      imgleft.style.left = "0"
      imgright.style.left = "0"
    }else{
      imgleft.style.left = "-100%"
      imgright.style.left = "100%"
    }
  })
 })

  

  burgerMenu.addEventListener("click",()=>{
    burgerMenu.style.display = "none";
    menu.style.right= "0";
    menuX.style.display= "block";
    menuX.style.right = "150px";
    
  })


  menuX.addEventListener("click",()=>{
      burgerMenu.style.display= "block"
      menu.style.right= "-150px"
      menuX.style.display = "none"
    
  })


    // HOME PAGE

  let toggle=document.querySelector(".toggle");
  let nav=document.querySelector(".nav");
  let main=document.querySelector(".main");
  let small=document.querySelector(".small");

    toggle.addEventListener('click',function () {
     nav.classList.toggle("active")
     main.classList.toggle("active")
     small.classList.toggle("active")

  })

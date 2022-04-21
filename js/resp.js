Burger=document.querySelector('.burger')
Navbar=document.querySelector('.navbar')
navlist=document.querySelector('.nav-list')
Rightnav=document.querySelector('.rightnav')



Burger.addEventListener('click',()=>{
    Rightnav.classList.toggle('v-class-resp');
    navlist.classList.toggle('v-class-resp');
    Navbar.classList.toggle('h-nav-resp');

})
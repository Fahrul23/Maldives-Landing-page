const MenuToogle = document.getElementById('toogle');
const navMobile = document.getElementById('nav-mobile');
const nav = document.getElementById('navbar');
MenuToogle.addEventListener('click',function(){
    navMobile.classList.toggle('show');
});

window.addEventListener("scroll",function(){
    var nav = document.getElementById("navbar");
    if(window.scrollY > 550){
        nav.classList.add("nav-blue");
    }else if(window.scrollY < 500){
        nav.classList.remove("nav-blue")
    }

})

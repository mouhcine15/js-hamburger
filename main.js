const btn_open = document.querySelector(".header-right .fa-bars");
const btn_close = document.querySelector(".hamburger-menu .close .fa-times");
const hamburger = document.querySelector(".hamburger-menu");

btn_open.addEventListener('click',
    function(){
        hamburger.classList.add("active");
    }
);

btn_close.addEventListener('click',
    function() {
        hamburger.classList.remove("active");
    }
);
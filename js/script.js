!function(){var s=document.querySelector("#form-request-demo form");s.onsubmit=function(e){e.preventDefault();for(var o,a,t=!0,l=["name","company","email"],n=0;n<l.length;n++)if(o=l[n],a=void 0,!((a=document.getElementById(o)).value?(a.parentNode.classList.contains("input-anim--error")&&a.parentNode.classList.remove("input-anim--error"),1):(a.parentNode.classList.add("input-anim--error"),0))){t=!1;break}t&&s.submit()}}();var forEach=function(e,o,a){if("[object Object]"===Object.prototype.toString.call(e))for(var t in e)Object.prototype.hasOwnProperty.call(e,t)&&o.call(a,e[t],t,e);else for(var l=0,n=e.length;l<n;l++)o.call(a,e[l],l,e)},hamburgers=document.querySelectorAll(".hamburger");0<hamburgers.length&&forEach(hamburgers,function(e){e.addEventListener("click",function(){this.classList.toggle("is-active")},!1)}),$(document).ready(function(){$(".header__hamburger span").click(function(){$(".menu-mobile").addClass("menu-mobile--open")}),$(".menu-mobile__close").click(function(){$(".menu-mobile").removeClass("menu-mobile--open")}),$(".menu-mobile__link--sub").click(function(){$(".menu-mobile__body--2").addClass("menu-mobile__body--open")}),$(".menu-mobile__link--back").click(function(){$(".menu-mobile__body--2").removeClass("menu-mobile__body--open")}),285<$(this).scrollTop()?$(".header__bottom").addClass("header__bottom--scrolled"):$(".header__bottom").removeClass("header__bottom--scrolled"),$(window).scroll(function(){285<$(this).scrollTop()?$(".header__bottom").addClass("header__bottom--scrolled"):$(".header__bottom").removeClass("header__bottom--scrolled")})}),$(document).ready(function(){new Swiper(".home-banner__right",{centeredSlides:!0,spaceBetween:800,speed:800,effect:"fade",autoplay:{delay:1e4,disableOnInteraction:!1},pagination:{el:".swiper-pagination",clickable:!0}})});var modal,modalBtn=document.querySelectorAll(".modal-btn"),overlay=document.querySelector(".modal-overlay"),modalClose=document.querySelectorAll(".modal__close");modalBtn&&[].forEach.call(modalBtn,function(o){o.addEventListener("click",function(e){e.preventDefault(),(modal=document.getElementById(o.getAttribute("data-target"))).classList.add("modal--show"),overlay.classList.add("modal-overlay--show")})}),modalClose&&[].forEach.call(modalClose,function(e){e.addEventListener("click",function(e){e.preventDefault(),modal.classList.contains("modal--show")&&(modal.classList.remove("modal--show"),overlay.classList.remove("modal-overlay--show"))})}),overlay&&overlay.addEventListener("click",function(e){modal.classList.contains("modal--show")&&(modal.classList.remove("modal--show"),overlay.classList.remove("modal-overlay--show"))}),window.addEventListener("keydown",function(e){27===e.keyCode&&modal.classList.contains("modal--show")&&(modal.classList.remove("modal--show"),overlay.classList.remove("modal-overlay--show"))}),$(document).ready(function(){new Swiper(".testimonials-block__body",{slidesPerView:3,spaceBetween:0,pagination:{el:".testimonials-block__pag",clickable:!0},breakpoints:{1024:{slidesPerView:3},991:{slidesPerView:2},767:{slidesPerView:1},320:{slidesPerView:1}}})});var textareaAdaptiveHeight=document.querySelectorAll(".textarea-anim--adaptive-height textarea");textareaAdaptiveHeight&&[].forEach.call(textareaAdaptiveHeight,function(e){e.addEventListener("keyup",function(e){0<this.scrollTop&&(this.style.height=this.scrollHeight+"px")})});
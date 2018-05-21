(function(){
	var formRequestDemoForm = document.querySelector('#form-request-demo form');

	function validForm(el) {
		var element = document.getElementById(el);
		
		if(!element.value) {
			element.parentNode.classList.add("input-anim--error");

			return false;
		} else {
			if(element.parentNode.classList.contains("input-anim--error")) {
				element.parentNode.classList.remove("input-anim--error");
			}

			return true;
		}
	}

	formRequestDemoForm.onsubmit = function(e) {
		e.preventDefault();

		var err = true;

		var element = ["name", "company", "email"];

		for(var i = 0; i < element.length; i++) {
		  if(!validForm(element[i])) {		  	
		  	err = false;
		  	break;
		  }
		}

		if(err) formRequestDemoForm.submit();
	}
})();
var forEach=function(t,o,r){if("[object Object]"===Object.prototype.toString.call(t))for(var c in t)Object.prototype.hasOwnProperty.call(t,c)&&o.call(r,t[c],c,t);else for(var e=0,l=t.length;l>e;e++)o.call(r,t[e],e,t)};
var hamburgers = document.querySelectorAll(".hamburger");
if (hamburgers.length > 0) {
  forEach(hamburgers, function(hamburger) {
    hamburger.addEventListener("click", function() {
      this.classList.toggle("is-active");
    }, false);
  });
}
$(document).ready(function() {
	$('.header__hamburger span').click(function () {
		$('.menu-mobile').addClass('menu-mobile--open');
	});

	$('.menu-mobile__close').click(function () {
		$('.menu-mobile').removeClass('menu-mobile--open');
	});

	$('.menu-mobile__link--sub').click(function () {
		$('.menu-mobile__body--2').addClass('menu-mobile__body--open');
	});

	$('.menu-mobile__link--back').click(function () {
		$('.menu-mobile__body--2').removeClass('menu-mobile__body--open');
	});
	
	var $this = $(this),
		 	st = $this.scrollTop();

	if( st > 285 ){
		$('.header__bottom').addClass('header__bottom--scrolled');
	}else{
		$('.header__bottom').removeClass('header__bottom--scrolled');
	}
		
	$(window).scroll(function(){
		var $this = $(this),
			 	st = $this.scrollTop();

		if( st > 285 ){
			$('.header__bottom').addClass('header__bottom--scrolled');
		}else{
			$('.header__bottom').removeClass('header__bottom--scrolled');
		}
	});	
});
var modalBtn = document.querySelectorAll('.modal-btn');
var overlay = document.querySelector(".modal-overlay");
var modalClose = document.querySelectorAll(".modal__close");
var modal;

if(modalBtn) {
	[].forEach.call(modalBtn, function(el) {
    el.addEventListener('click', function(event) {
    	event.preventDefault();

    	modal = document.getElementById(el.getAttribute('data-target'));
    	modal.classList.add("modal--show");

    	overlay.classList.add("modal-overlay--show");
    });
	});
}

if(modalClose) {
	[].forEach.call(modalClose, function(el) {
    el.addEventListener('click', function(event) {
    	event.preventDefault();

    	if (modal.classList.contains("modal--show")) {
				modal.classList.remove("modal--show");
				overlay.classList.remove("modal-overlay--show");
			}
    });
	});
}

if(overlay) {
	overlay.addEventListener("click", function(event) {
		if (modal.classList.contains("modal--show")) {
			modal.classList.remove("modal--show");
			overlay.classList.remove("modal-overlay--show");
		}
	});
}

window.addEventListener("keydown", function(event) {
	if (event.keyCode === 27) {
		if (modal.classList.contains("modal--show")) {
			modal.classList.remove("modal--show");
			overlay.classList.remove("modal-overlay--show");
		}
	}
});
$(document).ready(function() {
	var swiper = new Swiper('.testimonials-block__body', {
    slidesPerView: 3,
    spaceBetween: 0,

    pagination: {
      el: '.testimonials-block__pag',
      clickable: true,
    },

    breakpoints: {
    	1024: {
        slidesPerView: 3,
      },
      991: {
        slidesPerView: 2,
      },
      767: {
        slidesPerView: 1,
      },
      320: {
        slidesPerView: 1,
      }
    }
  });
});
var textareaAdaptiveHeight = document.querySelectorAll('.textarea-anim--adaptive-height textarea');

if(textareaAdaptiveHeight) {
	[].forEach.call(textareaAdaptiveHeight, function(el) {
    el.addEventListener('keyup', function(e) {
    	if(this.scrollTop > 0) {
				this.style.height = this.scrollHeight + "px";
			}
    });
	});
}
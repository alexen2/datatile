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
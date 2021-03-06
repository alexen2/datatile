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

		  if(element[i] == 'email') {
		  	var reg = /^([A-Za-z0-9_\-\.])+\@([A-Za-z0-9_\-\.])+\.([A-Za-z]{2,4})$/;
		  	var address = document.getElementById(element[i]);
				
		  	if(!address.value.match(reg)) {
		  		address.parentNode.classList.add("input-anim--error");
		  		err = false;
		  		break;
		  	}
		  }
		}

		if(err) formRequestDemoForm.submit();
	}
})();
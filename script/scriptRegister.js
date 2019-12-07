$(function() {
	let mainContent = $('#mainContent');
	let form = mainContent.find('#form');

	form.submit(function(registrate) {
		let successMessage = mainContent.find('h2');
		let formBackground = mainContent.find('#formBackground');
		if (form.valid() == true) {
			registrate.preventDefault();
			form.fadeOut();
			formBackground.fadeOut();
			
			successMessage.fadeIn(1500);

		} else {
			registrate.preventDefault();
		}
	});
	
	jQuery.validator.addMethod("someDigit", function(value, element) {
		for (let i = 0; i < value.length; i++) {

			let userSymbolCode = value[i].charCodeAt();
			let passwordHasDigit = (48 <= userSymbolCode && userSymbolCode <= 57);
			if(passwordHasDigit) {
				return true;
				break;
			}
		}
	});

	form.validate({

		rules: {
			email: {
				required: true,
				email: true
			},
			username: {
				required: true,
				minlength: 6,
				maxlength: 15,
				pattern: /^[a-zA-Z0-9_' -]{1,}$/
			},
			fullname: {
				required: true,
				minlength: 3,
				maxlength: 30,
				pattern: /^[^0-9\.\,\"\?\!\;\:\#\$\%\&\(\)\*\+\-\/\<\>\=\@\[\]\\\^\_\{\}\|\~]+$/
			},
			password: {
				required: true,
				minlength: 6,
				someDigit: true
			},
			confirmPass: {
				equalTo: "#password"
			}
		},

		messages: {
			email: {
				email: 'Please enter a valid e-mail address'
			},
			username: {
				pattern: 'Only "a-z A-Z _ \' . -" are permitted',
				minlength: 'Username must be at least 6 characters',
				maxlength: 'Usename must be maximum 15 characters'
			},
			fullname: {
				required: 'Please enter your name and family name',
				minlength: 'Name must be at least 3 characters',
				maxlength: 'Name must be maximum 30 characters',
				pattern: 'Please enter your name and family name',
			},
			password: {
				minlength: 'Password must be at least 6 symbols',
				someDigit: 'Password must contain at least one digit'
			},
			confirmPass: {
				minlength: 'Password must be at least 6 symbols',
				equalTo: 'Please enter the same password as above'
			}
		},
	});
});


//Това не го гледайте, моля.
/*
$.validator.setDefaults({
	submitHandler: function() {
		alert("submitted!");
	}
});
*/
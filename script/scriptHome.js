function loginTip() {
	alert('Admin login link is in footer');
}

loginTip();

$(document).ready(function() {
	$('#menu').menu();
});

$(function() {
	$('.carousel').carousel({
		interval: 2500
	});
});

$(document).ready(function() {
	let stickyMenuTop = $('.sticky-menu').offset().top;
	let stickyNav = function(){
		let scrollTop = $(window).scrollTop();
		if (scrollTop > stickyMenuTop) { 
			$('.sticky-menu').addClass('sticky');
		} else {
			$('.sticky-menu').removeClass('sticky'); 
		}
	};
	stickyNav();
	$(window).scroll(function() {
		stickyNav();
	});
});

$(document).ready(function() {
	let date = new Date();
	let dateAndHour = date.getDate() + '/' + (date.getMonth()+1) + '/' + date.getFullYear() + ', ' + date.getHours() + ':' + date.getMinutes();
	$('.text-muted').text(dateAndHour);
});

$(function() {
	let loadedEmails = [];

	$(function() {
		let subscribtionForm = $('#formSubscribe');
		let subscribtionInput = subscribtionForm.find('#inputSubscribe');
		let subscribtionBtn = subscribtionForm.find('#btnSubscribe');
		let addMailBtn = subscribtionForm.find('#btnAddMail');		

		subscribtionForm.submit(function(subscribe) {
			subscribe.preventDefault();
			let emailRegEx = /^[a-z\d]+([\.\_]?[a-z\d]+)+@[a-z\d]+(\.[a-z]+)+$/i;
			let lowerCaseMail = subscribtionInput.val().toLowerCase();
			let emailIsCorrect = (emailRegEx.test(lowerCaseMail));
			//console.log(emailIsCorrect);

			function scrollToBottom() {
				window.scrollBy(0, 100);
			}

			if (emailIsCorrect == true) {
				//debugger
				let subscribtionList = $('#subscribtionList');

				subscribtionInput.removeClass('error-style');
				subscribtionForm.find('.error-message').hide();

				function addMailsToList() {
					loadedEmails.push(lowerCaseMail);
					let emailList = loadedEmails.join('<br/>');
					subscribtionList.find('#loadedEmails').html(emailList);
					subscribtionList.show();
					subscribtionInput.val('').focus();
					//console.log(loadedEmails);
				}

				addMailsToList();
				scrollToBottom();

			} else {
				subscribtionInput.addClass('error-style');
				subscribtionForm.find('.error-message').show();
				scrollToBottom();
			}
		});
	});
});
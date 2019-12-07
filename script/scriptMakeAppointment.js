
$(document).ready(function() {
    $('#menu').menu();
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

$(function() {
	let theWholePage = $('#theWholePage');
	let calendar = theWholePage.find('#calendar');
	let takenDates = ['2019-07-02', '2019-07-05', '2019-07-10', '2019-07-11', '2019-07-15', '2019-07-17', '2019-07-24', '2019-07-25', '2019-08-01', '2019-08-05', '2019-08-07', '2019-08-08'];

	calendar.datepicker({
		firstDay: 1,
		minDate: new Date(),
		maxDate: '+4m',
		
		beforeShowDay: function(date) {
			let day = date.getDay();
			let disable = $.datepicker.formatDate('yy-mm-dd', date);

			return [day != 0 && day != 6 && takenDates.indexOf(disable) == -1];
		},

		onSelect: function() {
			let chosenDate = calendar.datepicker('getDate');
			let chosenDateText = theWholePage.find('.instructions');
			let normalFormatDate = $.datepicker.formatDate('DD, d MM yy', chosenDate);

			chosenDateText.text(normalFormatDate);
			chosenDateText
				.css('border-width', '1.5px')
				.css('font-weight', 'bold');
		}

	});
});
		$(document).ready(function(){
			$('#login_button').click(function () {
				$(location).attr('href',"login.html");
			});

			$('.btn-close').click(function(event) {
				event.preventDefault();
				$(this).closest('.close-effect').hide(1000);
			});

			$('.btn-minimize').click(function(event) {
				event.preventDefault();
				$(this).closest('.table-div').next('.slide-toggle').slideToggle(1000).focus();
				$(this).find('.fa-chevron-up').toggleClass("fa-chevron-down");
			});			
		});

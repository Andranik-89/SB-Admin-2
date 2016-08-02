		$(document).ready(function(){
			$('#login_button').click(function () {
				$(location).attr('href',"login.html");
			});
			$('#minimize').click(function() {
				$('#main_table').slideToggle(1000).focus();
				$('.fa-chevron-up').toggleClass("fa-chevron-down");

			});
			$('#delete').click(function() {
				$('#div_table').hide(1000);
			});

			$('.table_close').click(function() {
				$(this).parent().parent().parent().hide(500);
			});

			$('.table_min').click(function() {
				$(this).parent().parent().next().slideToggle(500).focus();
				$('.fa-chevron-up').toggleClass("fa-chevron-down");
			});


		});

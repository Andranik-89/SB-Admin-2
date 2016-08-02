		$(document).ready(function(){

			$("#datepicker").datepicker();

			$('#calendar').fullCalendar({
				header: {
					left: 'prev,next today',
					center: 'title',
					right: 'month,agendaWeek,agendaDay'
				},
				defaultDate: '2016-07-28',
				editable: true,
			eventLimit: true, // allow "more" link when too many events
			events: [
			{
				title: "First day of the Month",
				start: '2016-07-01'
			},
			{
				title: "Andrew's day",
				start: '2016-07-28'
			},
			{
				title: "Several day's event",
				start: '2016-07-17',
				end: '2016-07-28'
			},
			{
				id: 99,
				title: 'The same Event',
				start: '2016-07-26T16:00:00'
			},
			{
				id: 99,
				title: 'The same Event',
				start: '2016-07-26T16:00:00'
			},
			{
				title: 'Conference',
				start: '2016-07-11',
				end: '2016-07-13'
			},
			{
				title: 'Meeting',
				start: '2016-07-12T10:30:00',
				end: '2016-07-12T12:30:00'
			},
			{
				title: 'Lunch',
				start: '2016-07-12T12:00:00'
			},
			{
				title: 'Meeting',
				start: '2016-07-12T14:30:00'
			},
			{
				title: 'Happy Hour',
				start: '2016-07-12T17:30:00'
			},
			{
				title: 'Dinner',
				start: '2016-07-12T20:00:00'
			},
			{
				title: 'Birthday Party',
				start: '2016-07-13T07:00:00'
			},
			{
				title: 'Click for Google',
				url: 'http://google.com/',
				start: '2016-07-01'
			}
			]
		});			

			$(function(){

				$("#datepicker").datepicker();
			});

		});
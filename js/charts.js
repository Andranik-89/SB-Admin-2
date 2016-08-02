var randomScalingFactor = function(){ return Math.round(Math.random()*1000)};
	
	var lineChartData = {
			labels : ["Andranik","Abghar","Vahe","Anahit","Serj","Gurgen"],
			datasets : [
				{
					label: "Andranik's data1",

					data : [randomScalingFactor(),randomScalingFactor(),randomScalingFactor(),randomScalingFactor(), 67, 89],
					backgroundColor: 'rgba(255,0,50,0.5)',
            		borderWidth: 7
       			}
        	]				
	}

	var lineChartData1 = {
			labels : ["Andranik","Abghar","Vahe","Anahit","Serj","Gurgen"],
			datasets : [
				{
					label: "Andranik's data2",
					data : [randomScalingFactor(),randomScalingFactor(),randomScalingFactor(),randomScalingFactor(), 67, 89],
					backgroundColor: 'rgba(25,250,50,0.5)',
					borderColor: 'rgba(75,192,192,1)',
           			pointBorderColor: "aqua",
            		pointHoverRadius: 7,
           		    pointHoverBackgroundColor: "rgba(75,192,192,1)",
           		    pointHoverBorderColor: "rgba(220,220,220,1)",
           			borderWidth: 7
        		},
        		{
					label: "Andranik's data2_2",
					data : [randomScalingFactor(),randomScalingFactor(),randomScalingFactor(),randomScalingFactor(), 67, 89],
					borderColor: 'rgba(75,92,92,0.4)',
           			pointBorderColor: "magenta",
            		pointHoverRadius: 10,
            	}
        	]				
	}
		
	var barChartData = {
			labels : ["January","February","March","April","May","June",],
			datasets : [
				{
            label: "My First dataset",
            backgroundColor: [
                'rgba(255, 99, 132, 0.2)',
                'rgba(54, 162, 235, 0.3)',
                'rgba(255, 206, 86, 0.4)',
                'rgba(75, 192, 192, 0.5)',
                'rgba(153, 102, 255, 0.6)',
                'rgba(255, 159, 64, 0.7)'
            ],
            borderColor: [
                'rgba(255,99,132,1)',
                'rgba(54, 162, 235, 1)',
                'rgba(255, 206, 86, 1)',
                'rgba(75, 192, 192, 1)',
                'rgba(153, 102, 255, 1)',
                'rgba(255, 159, 64, 1)'
            ],            
            hoverBackgroundColor: [
                'rgba(55,99,132,1)',
                'rgba(54, 162, 35, 1)',
                'rgba(255, 6, 86, 1)',
                'rgba(75, 92, 192, 1)',
                'rgba(153, 102, 25, 1)',
                'rgba(255, 59, 64, 1)'
            ],
            borderWidth: 4,
 			data : [randomScalingFactor(),randomScalingFactor(),randomScalingFactor(),randomScalingFactor(),randomScalingFactor(),randomScalingFactor()]
				}
			]
	
	}

	var barChartData2 = {
			labels : ["Apple","Banana","Coconat","Melon","Pear","Peach",],
			datasets : [
				{
            label: "Fruit dataset",
            backgroundColor: [
                'rgba(155, 99, 132, 0.2)',
                'rgba(154, 162, 235, 0.3)',
                'rgba(255, 206, 186, 0.4)',
                'rgba(175, 12, 192, 0.5)',
                'rgba(13, 102, 25, 0.6)',
                'rgba(255, 19, 164, 0.7)'
            ],
            borderWidth: 2,
 			data : [randomScalingFactor(),randomScalingFactor(),randomScalingFactor(),randomScalingFactor(),randomScalingFactor(),randomScalingFactor()]
				},

			]
	
	}

	var radarChartData = {
		    labels: ["Eating", "Drinking", "Sleeping", "Designing", "Coding", "Cycling", "Running"],
    datasets: [
        {
            label: "My First dataset",
            backgroundColor: "rgba(179,181,198,0.2)",
            borderColor: "rgba(179,181,198,1)",
            pointBackgroundColor: "rgba(179,181,198,1)",
            pointBorderColor: "#fff",
            pointHoverBackgroundColor: "#fff",
            pointHoverBorderColor: "rgba(179,181,198,1)",
            data: [randomScalingFactor(), randomScalingFactor(), randomScalingFactor(), randomScalingFactor(), randomScalingFactor(), randomScalingFactor(), randomScalingFactor()]
        },
        {
            label: "My Second dataset",
            backgroundColor: "rgba(255,99,132,0.2)",
            borderColor: "rgba(255,99,132,1)",
            pointBackgroundColor: "rgba(255,99,132,1)",
            pointBorderColor: "#fff",
            pointHoverBackgroundColor: "#fff",
            pointHoverBorderColor: "rgba(255,99,132,1)",
            data: [randomScalingFactor(), randomScalingFactor(), randomScalingFactor(), randomScalingFactor(), randomScalingFactor(), randomScalingFactor(), randomScalingFactor()]
        }
    ]
	};

	var polarChartData = {
		    labels: ["Mars", "Venus", "Uranus", "Moon", "Earth", "Mercury", "Pluto"],
    datasets: [
    	{
       	    backgroundColor: [
            "#FF6384",
            "#4BC0C0",
            "black",
            "#E7E9ED",
            "#36A2EB",
            "#96C2EB",
            "azure"
        ],
        hoverBackgroundColor: [
                'rgba(155, 99, 132, 0.2)',
                'rgba(154, 162, 235, 0.3)',
                'rgba(255, 206, 186, 0.4)',
                'rgba(175, 12, 192, 0.5)',
                'rgba(213, 102, 225, 0.6)',
                'rgba(255, 19, 164, 0.7)',
                'purple'
        ],
        label: 'My polar chart',
        data: [randomScalingFactor(),randomScalingFactor(), randomScalingFactor(), randomScalingFactor(), randomScalingFactor(), randomScalingFactor(), randomScalingFactor()],
    	}
    ]

	};


	var pieChartData = {
	datasets: [{
            data: [randomScalingFactor(),randomScalingFactor(), randomScalingFactor(), randomScalingFactor(), randomScalingFactor(), randomScalingFactor(), randomScalingFactor()],
 			backgroundColor: ["red", "blue", "aqua", "magenta", "black", "azure", "green"],
 			hoverBackgroundColor: ["rgba(175, 12, 192, 0.5)", "rgba(95, 212, 192, 0.4)", "rgba(45, 112, 192, 0.2)", "rgba(75, 92, 52, 0.8)", "rgba(95, 42, 2, 0.9)", "rgba(55, 88, 66, 0.5)", "purple"],
 			borderWidth: 4
        }
        ],
        labels: ["Camel", "Cangooroo", "Crocodile", "Dinosaur", "Mouse", "Wolf", "Bear"]
	};
			
	var doughnutChartData = {
	datasets: [{
            data: [randomScalingFactor(),randomScalingFactor(), randomScalingFactor(), randomScalingFactor(), randomScalingFactor(), randomScalingFactor(), randomScalingFactor()],
 			backgroundColor: ["red", "blue", "aqua", "magenta", "black", "azure", "green"],
 			hoverBackgroundColor: ["rgba(175, 12, 192, 0.5)", "rgba(95, 212, 192, 0.4)", "rgba(45, 112, 192, 0.2)", "rgba(75, 92, 52, 0.8)", "rgba(95, 42, 2, 0.9)", "rgba(55, 88, 66, 0.5)", "purple"],
 			borderWidth: 4
        }
        ],
        labels: ["Vasya", "Masha", "Katya", "Sasha", "Anya", "Misha", "Pasha"]
	};

window.onload = function(){

	if (document.getElementById("line_chart") != null) {
		var chart1 = document.getElementById("line_chart").getContext("2d");
		window.myLine = new Chart(chart1, {
			type: 'line',
			data: lineChartData
		});

		var chart2 = document.getElementById("line_chart1").getContext("2d");
		window.myLine2 = new Chart(chart2, {
			type: 'line',
			data: lineChartData1
		});
	}

	if (document.getElementById("bar_chart1") != null) {
		var chart3 = document.getElementById("bar_chart1").getContext("2d");
		window.myBar = new Chart(chart3, {
			type: 'horizontalBar',
			data: barChartData
		});
		var chart4 = document.getElementById("bar_chart2").getContext("2d");
		window.myBar2 = new Chart(chart4, {
			type: 'bar',
			data: barChartData2
		});
	}

	if (document.getElementById("radar_chart1") != null) {
		var chart5 = document.getElementById("radar_chart1").getContext("2d");
		window.myRadar = new Chart(chart5, {
			type: 'radar',
			data: radarChartData
		});
		var chart6 = document.getElementById("polar_chart1").getContext("2d");
		window.myPolar = new Chart(chart6, {
			type: 'polarArea',
			data: polarChartData
		});
	}

	if (document.getElementById("radar_chart1") != null) {
		var chart5 = document.getElementById("radar_chart1").getContext("2d");
		window.myRadar = new Chart(chart5, {
			type: 'radar',
			data: radarChartData
		});
		var chart6 = document.getElementById("polar_chart1").getContext("2d");
		window.myPolar = new Chart(chart6, {
			type: 'polarArea',
			data: polarChartData
		});
	}

	if (document.getElementById("pie_chart1") != null) {
		var chart7 = document.getElementById("pie_chart1").getContext("2d");
		window.myPie = new Chart(chart7, {
			type: 'pie',
			data: pieChartData
		});
		var chart8 = document.getElementById("doughnut_chart1").getContext("2d");
		window.myDoughnat = new Chart(chart8, {
			type: 'doughnut',
			data: doughnutChartData
		});
	}
	
};
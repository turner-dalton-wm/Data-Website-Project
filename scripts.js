google.load('visualization', '1', {packages: ['corechart', 'bar']});
google.setOnLoadCallback(drawBasic);

function drawBasic() {

    var data = google.visualization.arrayToDataTable([
        ['Car', 'Number Sold'],
        ['Toyota Corolla', 1020000],
        ['Hyundai Elantra', 1010000],
        ['Wuling Sunshine', 943000],
        ['Ford Focus', 919000],
        ['Kia Rio', 815000],
        ['Ford Fiesta', 787000],
        ['Volkswagen Jetta', 745000],
        ['Toyota Camry', 726000],
        ['Chevrolet Cruze', 691000],
        ['Volkswagen Golf', 648000],
        ['Volkswagen Passat', 565000]
    ]);

    var options = {
        title: 'Highest Selling Cars (2011)',
        chartArea: {width: '60%', height: '80%'},
        hAxis: {
            minValue: 0
        },
        vAxis: {

        },
        backgroundColor: 'white',
        colors: ['#2E8B57']
    };

    var chart = new google.visualization.BarChart(document.getElementById('chart_div'));

    chart.draw(data, options);
}

google.load('visualization', '1', {packages: ['corechart']});
google.setOnLoadCallback(drawBasic1);

function drawBasic1() {

    var data = google.visualization.arrayToDataTable([
        ['State', 'Car Sold'],
        ['Toyota', 10230000],
        ['Volkswagen', 10140000],
        ['General Motors', 9920000],
        ['Nissan', 8470000],
        ['Hyundai', 7710000],
        ['Ford', 6320000],
        ['Chrysler', 4750000],
        ['Honda', 4360000],
        ['Suzuki', 2880000],
        ['BMW', 2120000],
        ['Mazda', 1380000]
    ]);

    var options = {
        title: 'Highest Car Company Sales (2014)',
        chartArea: {width: '60%', height: '80%'},
        hAxis: {
            minValue: 0
        },
        vAxis: {

        },
        backgroundColor: 'white',
        colors: ['#2E8B57']
    };

    var chart = new google.visualization.BarChart(document.getElementById('chart_div1'));

    chart.draw(data, options);
}

function start() {
    alert("Welcome, let's compare car sales!")
}

var num = 0;
var mode = 0;
var div = document.getElementById("body");
div.addEventListener("mousemove", function() {
    if(mode == 0) num++;
    else num--;
    if(num > 255 || num < 0) {
        if(mode == 0) mode = 1;
        else mode = 0;
    }
    div.style.backgroundColor = "rgba("+num+",128,"+num+",.3)";
}, false);

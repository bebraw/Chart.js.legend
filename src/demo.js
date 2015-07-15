if(!!(window.addEventListener)) window.addEventListener('DOMContentLoaded', main);
else window.attachEvent('onload', main);

function main() {
    lineChart();
    pieChart();
    doughnutChart();
    doughnutChartWithCustomLegend();
}

function lineChart() {
    var data = {
        labels : ["January","February","March","April","May","June","July"],
        datasets : [
            {
            fillColor : "rgba(220,220,220,0.5)",
            strokeColor : "rgba(220,220,220,1)",
            pointColor : "rgba(220,220,220,1)",
            pointStrokeColor : "#fff",
            data : [65,59,90,81,56,55,40],
            label : 'Tigers'
        },
        {
            fillColor : "rgba(151,187,205,0.5)",
            strokeColor : "rgba(151,187,205,1)",
            pointColor : "rgba(151,187,205,1)",
            pointStrokeColor : "#fff",
            data : [28,48,40,19,96,27,100],
            label : 'Bears'
        }
        ]
    };

    var ctx = document.getElementById("lineChart").getContext("2d");
    new Chart(ctx).Line(data);

    legend(document.getElementById("lineLegend"), data);

    // testing adding twice (should get same result)
    legend(document.getElementById("lineLegend"), data);
}

function pieChart() {
    var data = [
        {
            value: 30,
            color:"#F38630",
            label: 'Bears'
        },
        {
            value : 50,
            color : "#E0E4CC",
            label: 'Lynxes'
        },
        {
            value : 100,
            color : "#69D2E7",
            label: 'Reindeer'
        }
    ];

    var ctx = document.getElementById("pieChart").getContext("2d");
    var pieChart = new Chart(ctx).Pie(data);

    legend(document.getElementById("pieLegend"), data, pieChart);
}

function doughnutChart() {
    var data = [
        {
            value: 40,
            color:"#F38630",
            label: 'Animals'
        },
        {
            value : 20,
            color : "#E0E4CC",
            label: 'People'
        },
        {
            value : 30,
            color : "#69D2E7",
            label: 'Aliens'
        }
    ];

    var ctx = document.getElementById("doughnutChart").getContext("2d");
    var doughnutChart = new Chart(ctx).Doughnut(data);

    legend(document.getElementById("doughnutLegend"), data, doughnutChart);
}



function doughnutChartWithCustomLegend() {
    var data = [
        {
            value: 40,
            color:"#F38630",
            label: 'Chocolate'
        },
        {
            value : 20,
            color : "#E0E4CC",
            label: 'Floor'
        },
        {
            value : 30,
            color : "#69D2E7",
            label: 'Butter'
        }
    ];

    var ctx = document.getElementById("doughnutChartWithCustomLegend").getContext("2d");
    var doughnutChartWithCustomLegend = new Chart(ctx).Doughnut(data,{tooltipTemplate:"<%=label%>: <%=value%>g"});

    legend(document.getElementById("doughnutChartCustomLegend"), data, doughnutChartWithCustomLegend, "<%=label%>: <%=value%>g");
}
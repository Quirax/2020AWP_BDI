var config = {
    type: 'line',
    data: {
        labels: ["2014년", "2015년", "2016년", "2017년", "2018년", "2019년", "2020년"],
        datasets: [{
            label: "전체",
            backgroundColor: "#ff0000",
            borderColor: "#ff0000",
            data: [
                586916, 601234, 656789, 701234,
                751930, 802468, 857913
            ],
            fill: false,
        }, {
            label: "여성",
            backgroundColor: "#00ff00",
            borderColor: "#00ff00",
            data: [
                401852, 425678, 450123, 475791,
                500282, 525814, 550246
            ],
            fill: false,
        }, {
            label: "남성",
            backgroundColor: "#0000ff",
            borderColor: "#0000ff",
            data: [
                185064, 201234, 223456, 245678,
                251648, 278901, 290123
            ],
            fill: false,
        }]
    },
    options: {
        maintainAspectRatio: false,
        responsive: true,
        title: {
            position: 'bottom',
            display: true,
            text:'자료: 보건복지부, 건강보험심사평가원'
        },
        tooltips: {
            mode: 'index',
            intersect: false,
        },
        hover: {
            mode: 'nearest',
            intersect: true
        },
        scales: {
            xAxes: [{
                display: true,
                scaleLabel: {
                    display: true,
                    labelString: '연도'
                }
            }],
            yAxes: [{
                display: true,
                scaleLabel: {
                    display: true,
                    labelString: '치료환자(명)'
                }
            }]
        }
    }
};

onLoad(function() {
    var ctx = document.getElementById("graph_canvas").getContext("2d");
    var chart = new Chart(ctx, config);
});
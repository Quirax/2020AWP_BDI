var config = {
    type: 'line',
    data: {
        labels: [],
        datasets: []
    },
    options: {
        maintainAspectRatio: false,
        responsive: true,
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
    $.getJSON("data/statistics.json", function(data) {
        var ctx = document.getElementById("graph_canvas").getContext("2d");
        var cfg = Object.assign({}, config);
        cfg.data.labels = data.columns;
        cfg.data.datasets = [];
        for(var i in data.rows) {
            var row = data.rows[i];
            cfg.data.datasets.push({
                label: row.name,
                backgroundColor: row.color,
                borderColor: row.color,
                data: row.values,
                fill: false,
            });
        }
        var chart = new Chart(ctx, config);
    });
});
// Bar chart

/*
   Hide or shown chart - see value of "selected_chart_id" parameter:
*/

function actualizaGrafica(id) {
    let all_types = ["grafica1", "grafica2", "grafica3"];
    for (let i = 0; i < all_types.length; i++) {
        if (all_types[i] === id) {
            document.getElementById(all_types[i]).style.display = "block";
        } else {
            document.getElementById(all_types[i]).style.display = "none";
        }
    }
}

// Carga Graficas:
$(document).ready(function () {
    load_instagram();
    load_buttons();
    load_twitter();
});

function load_instagram() {
    let ctx = document.getElementById('grafica1');
    let myChart = new Chart(ctx, {
        type: "bar",
        data: {
            labels: ["2018", "2019", "2020", "2021", "2022"],
            datasets: [{
                label: "LIKES",
                backgroundColor: "rgba(179,181,198,0.2)",
                data: [55.61, 8.77, 6.62, 21.69, 6.82]
            }, {
                label: "FOLLOWS",
                backgroundColor: "rgba(137,195,238,0.71)",
                data: [54.16, 25.48, 7.61, 4.45, 8.06]
            }],
            options: {
                responsive: true,
            }
        }
    });
}


function load_buttons() {
    let ctx = document.getElementById('grafica2');
    let myChart = new Chart(ctx, {
        type: "bar",
        data: {
            labels: ["2018", "2019", "2020", "2021", "2022"],
            datasets: [{
                label: "LIKES",
                backgroundColor: "rgba(179,181,198,0.2)",
                data: [8.77, 55.61, 21.69, 6.62, 6.82]
            }, {
                label: "FOLLOWS",
                backgroundColor: "rgba(137,195,238,0.71)",
                data: [25.48, 54.16, 7.61, 8.06, 4.45]
            }]
        },
        options: {
            responsive: true,
        }
    });
}


function load_twitter() {
    let ctx = document.getElementById('grafica3');
    let myChart = new Chart(ctx, {
        type: "bar",
        data: {
            labels: ["2018", "2019", "2020", "2021", "2022"],
            datasets: [{
                label: "LIKES",
                backgroundColor: "rgba(179,181,198,0.2)",
                data: [66.2, 87.57, 54.51, 76.82, 41.69]
            }, {
                label: "FOLLOWS",
                backgroundColor: "rgba(137,195,238,0.71)",
                data: [41.69, 54.16, 34.48, 67.61, 54.45,]
            }],

            options: {
                responsive: true,
            }
        }
    });
}
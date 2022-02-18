let canvas = document.querySelector("#soda-chart")
let ctx = canvas.getContext("2d")

let chart = new Chart(ctx, {
    type: "bar",
    data: {
        labels: ["Coke", "Pepsi", "Rootbear","Seara Mist","Any", "None"],
        datasets: [{
            label: "Number of votes",
            data: [23,26,33,55,15,10],
            backgroundColor : ["red","blue","saddlebrown","#24ff24","#d4d4d4","#969696"]
        }],
        options: {
            scales: {
                yAxis: [{
                    ticks: {
                        beginAtZero : true
                    }
                }]
            }
        }
    }
})
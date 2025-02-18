import { Chart } from "chart.js"

const data =[ 
    {
        topic: "Data Science",
        score : 29
    }
]
const chart = new Chart(ctx, {
    type:"pie",
    data,
})

export default chart;
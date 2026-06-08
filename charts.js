// Consumo Energético

new Chart(
document.getElementById("energyChart"),
{
    type:"bar",

    data:{

        labels:[
            "Enero",
            "Febrero",
            "Marzo",
            "Abril",
            "Mayo"
        ],

        datasets:[{

            label:"kWh",

            data:[
                400,
                350,
                320,
                280,
                240
            ]
        }]
    }
});

// CO2

new Chart(
document.getElementById("co2Chart"),
{
    type:"line",

    data:{

        labels:[
            "2022",
            "2023",
            "2024",
            "2025",
            "2026"
        ],

        datasets:[{

            label:"Toneladas",

            data:[
                120,
                105,
                92,
                80,
                65
            ]
        }]
    }
});

// Agua

new Chart(
document.getElementById("waterChart"),
{
    type:"pie",

    data:{

        labels:[
            "Reutilizada",
            "Consumida"
        ],

        datasets:[{

            data:[
                35,
                65
            ]
        }]
    }
});

// Reciclaje

new Chart(
document.getElementById("recycleChart"),
{
    type:"doughnut",

    data:{

        labels:[
            "Reciclado",
            "No Reciclado"
        ],

        datasets:[{

            data:[
                70,
                30
            ]
        }]
    }
});
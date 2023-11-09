
let table1 = document.getElementById('table1');
let data = [];

// Obtenez les années à partir de la première ligne (en-têtes) du tableau
let years = Array.from(table1.rows[1].cells).slice(2).map(cell => cell.textContent.trim());

// Parcourez les lignes du tableau (à partir de la deuxième ligne)
for (let i = 2; i < table1.rows.length; i++) {
    let cells = table1.rows[i].cells;
    let crimeData = Array.from(cells).slice(2).map(cell => parseInt(cell.textContent.replace(',',',').trim())); // Obtenez les données sur les crimes pour chaque année
    let country = cells[1].textContent.trim().replace(/\(.*\)/, ''); // Obtenez le nom du pays en enlevant les annotations entre parenthèses


    // Ajoutez les données du pays dans le format requis pour le graphique
    crimeData.forEach((crimeCount, index) => {
        let dataPoint = {
            Country: country,
            Year: years[index],
            Crimes: crimeCount
        };
        data.push(dataPoint);
    });
}

let labels = data.map(item => item.Country + ' - ' + item.Year);
let crimeCounts = data.map(item => item.Crimes);
let uniqueLabels = Array.from(new Set(data.map(item => item.Country + ' - ' + item.Year)));

// Générez un objet de couleurs pour chaque label
let labelColors = generateLabelColors(uniqueLabels);

let config = {
    type: 'bar',
    data: {
        labels: labels,
        datasets: [{
            label : "Country",
            data: crimeCounts,
            backgroundColor: uniqueLabels.map(label => labelColors[label]),
            borderColor:uniqueLabels.map(label => labelColors[label]) ,
            borderWidth: 2,
        }]
    },
    options: {
        indexAxis: 'x', // Spécifiez l'axe des étiquettes
        scales: {
            x: {
                beginAtZero: true,
                
            }
        }
    }
};
function generateLabelColors(labels) {
   let colors = {};
   let availableColors = ['#FF5733', '#FFC300', '#C70039', '#900C3F', '#581845', '#2E86C1', '#17A589', '#229954', '#D4AC0D', '#BA4A00']; // Liste de couleurs disponibles

   labels.forEach((label, index) => {
       colors[label] = availableColors[index % availableColors.length]; // Assignez une couleur à chaque label
   });

   return colors;
}
let canvas1 = document.createElement('canvas');
canvas1.width = 800;
canvas1.height = 800;
let ctx1 = canvas1.getContext('2d');

let parentElement = table1.parentNode;

// Insérez le canvas avant la table
parentElement.insertBefore(canvas1, table1);

// Créez le graphique dans le contexte du canvas
new Chart(ctx1, config);












//table2
// Récupérez le tableau HTML par son ID
let table = document.getElementById('table2');

// Préparez les données pour Chart.js
let countries = [];
let data2007_09 = [];
let data2010_12 = [];

// Parcourez les lignes du tableau (à partir de la deuxième ligne)
for (let i = 1; i < table.rows.length; i++) {
    let cells = table.rows[i].cells;
    countries.push(cells[1].textContent);
    data2007_09.push(parseInt(cells[2].textContent));
    data2010_12.push(parseInt(cells[3].textContent));
}

// Créez le graphique à l'aide de Chart.js
let canvas2 = document.createElement('canvas');
canvas2.width = 800;
canvas2.height = 800;
let ctx2 = canvas2.getContext('2d');
let parentElement2 = table2.parentNode;
parentElement2.insertBefore(canvas2, table2);

let myChart = new Chart(ctx2, {
    type: 'line',
    data: {
        labels: countries,
        datasets: [{
            label: '2007-09',
            data: data2007_09,
            backgroundColor: 'rgba(75, 192, 192, 0.2)',
            borderColor: 'rgba(75, 192, 192, 1)',
            borderWidth: 1
        },
        {
            label: '2010-12',
            data: data2010_12,
            backgroundColor: 'rgba(255, 99, 132, 0.2)',
            borderColor: 'rgba(255, 99, 132, 1)',
            borderWidth: 1
        }]
    },
    options: {
        scales: {
            y: {
                beginAtZero: true
                }
        }
}});






let canvas = document.createElement('canvas');
canvas.width = 800;
canvas.height = 800;
let ctx = canvas.getContext('2d');
let parentElement3 = document.querySelector('h1').parentNode;
parentElement3.insertBefore(canvas, document.querySelector('h1'));

let chart;

function fetchDataAndRenderChart() {
    console.log('Fetching data...');

    // Ajoutez un cachebuster unique à l'URL de l'API pour forcer le rafraîchissement des données
    const cachebuster = new Date().getTime();
    const apiUrl = `https://canvasjs.com/services/data/datapoints.php?cb=${cachebuster}`;
    // Fetch data from the URL using AJAX
    fetch(apiUrl)
        .then(response => response.json())
        .then(data => {
        console.log('Data fetched:', data);

            // Extract x and y values from the fetched data
            const xValues = data.map(point => point[0]);
            const yValues = data.map(point => point[1]);

            // Mettez à jour les données du graphique existant
            if (chart) {
                // Mettez à jour les données du graphique
                chart.data.labels = xValues;
                chart.data.datasets[0].data = yValues;
                chart.update(); // Mettez à jour le graphique
            } else {
                // Créez le graphique à l'aide de Chart.js si le graphique n'existe pas encore
                chart = new Chart(ctx, {
                    type: 'bar',
                    data: {
                        labels: xValues,
                        datasets: [{
                            label: 'Data Points',
                            data: yValues,
                            backgroundColor: 'rgba(75, 192, 192, 0.2)',
                            borderColor: 'rgba(75, 192, 192, 1)',
                            borderWidth: 1
                        }]
                    },
                    options: {
                        scales: {
                            x: {
                                type: 'linear',
                                position: 'bottom'
                            }
                        }
                    }
                });
            }
        })
        .catch(error => console.error('Error fetching data:', error));
}

// Actualisez les données et le graphique toutes les secondes (1000 millisecondes)
setInterval(() => {
    fetchDataAndRenderChart();
}, 1000);







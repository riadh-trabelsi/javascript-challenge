// const main = async () => {
//     const url = "https://jsonplaceholder.typicode.com/users";
//     const response = await fetch(url);
//     const data = await response.json();
//     console.log(data);
// };

// const table = document.getElementById('table1');
// const labels = [];
// const datasets = [];

// // Parcourir les lignes de la table (à partir de la deuxième ligne)
// for (let i = 1; i < table.rows.length; i++) {
//     const row = table.rows[i];
//     labels.push(row.cells[1].textContent); // Le nom du pays est dans la deuxième colonne
    
//     const data = [];
//     for (let j = 2; j < row.cells.length; j++) {
//         data.push(parseFloat(row.cells[j].textContent.replace(',', '.'))); // Convertir les nombres en float
//     }

//     datasets.push({
//         label: `Year ${i - 1}`, // Étiquette du jeu de données
//         data: data
//     });
// }
// const ctx = document.getElementById('myChart').getContext('2d');
// const myChart = new Chart(ctx, {
//     type: 'bar',
//     data: {
//         labels: labels,
//         datasets: datasets
//     },
//     options: {
//         scales: {
//             x: {
//                 stacked: true // Empiler les barres horizontalement
//             },
//             y: {
//                 beginAtZero: true // Commencer l'axe y à 0
//             }
//         }
//     }
// });

// Fonction pour récupérer les données du service en ligne

/*async function recuperationData() {
    const response = await fetch("https://canvasjs.com/services/data/datapoints.php");
    const data = await response.json();
    let tab=[]
    data.forEach(el => tab.push(el[0],el[1]))

    return data

  }
  recuperationData()


// // Fonction pour créer le graphique avec Chart.js
// function createChart(tableId, chartType, data) {
//     let ctx = document.createElement('canvas');
//     document.getElementById(tableId).parentNode.insertBefore(ctx, document.getElementById(tableId));

//     new Chart(ctx, {
//         type: chartType,
//         data: data,
//     });
// }

// // Utilisez la fonction getChartData pour récupérer les données du service en ligne
// getChartData('https://canvasjs.com/services/data/datapoints.php')
//     .then(data => {
//         // Créez un graphique pour le premier tableau (table1)
//         createChart('table1', 'bar', {
//             labels: data.map(entry => entry[0]), // Les labels pour l'axe X
//             datasets: [{
//                 label: 'Valeurs',
//                 data: data.map(entry => entry[1]), // Les données pour l'axe Y
//                 backgroundColor: 'rgba(75, 192, 192, 0.2)', // Couleur de remplissage du graphique
//                 borderColor: 'rgba(75, 192, 192, 1)', // Couleur de la bordure du graphique
//                 borderWidth: 1 // Largeur de la bordure du graphique
//             }]
//         });
//     })
//     .catch(error => {
//         console.error('Erreur lors de la récupération des données :', error);
//     });
*/
// Créez un nouvel élément canvas
/*let table1 = document.getElementById('table1');


// Récupérez les données du tableau et préparez-les pour Chart.js
let labels = []; // Tableau pour les étiquettes du graphique
let data = [];   // Tableau pour les valeurs du graphique

// Parcourez les lignes du tableau (sautez la première ligne contenant les en-têtes)
for (let i = 0; i < table1.rows.length; i++) {
   // Récupérez les cellules de chaque ligne
   let cells = table1.rows[i].cells;

   // La deuxième cellule contient les pays (étiquettes)
   labels.push(cells[1].textContent);

   // Les cellules suivantes contiennent les données (nombre en milliers)
   data.push(parseFloat(cells[2].textContent.replace(',', '.'))); // Utilisez parseFloat pour convertir la chaîne en nombre
}

// Créez un objet de configuration pour le graphique
let config = {
   type: 'bar',
   data: {
      labels: labels,
      datasets: [{
         label: 'Nombre (en milliers)',
         data: data,
         backgroundColor: 'rgba(75, 192, 192, 0.2)', // Couleur de fond des barres
         borderColor: 'rgba(75, 192, 192, 1)',     // Couleur de la bordure des barres
         borderWidth: 1                             // Largeur de la bordure des barres
      }]
   },
   options: {
      scales: {
         y: {
            beginAtZero: true // Commencez l'axe y à zéro
         }
      }
   }
};
let canvas = document.createElement('canvas');

// Définissez la largeur et la hauteur du canvas
canvas.width = 1200;
canvas.height = 1200;

// Obtenez le contexte de dessin 2D du canvas
let ctx = canvas.getContext('2d');

let parentElement = table1.parentNode;

// Insérez le canvas avant la table
parentElement.insertBefore(canvas, table1);
// Récupérez le tableau HTML

// Récupérez le contexte du canvas


// Créez le graphique dans le contexte du canvas
new Chart(ctx, config);

// Insérez le canvas avec le graphique après le tableau
table.insertAdjacentElement('afterend', ctx.canvas);
*/
/*let table1 = document.getElementById('table1');
let labels = [];
let data = [];

// Parcourez les lignes du tableau (y compris la première ligne avec les en-têtes)
for (let i = 1; i < table1.rows.length; i++) {
   let cells = table1.rows[i].cells;
   labels.push(cells[1].textContent);
   data.push(parseFloat(cells[2].textContent.replace(',', '.')));
}
console.table(data)

let config = {
   type: 'bar',
   data: {
      labels: labels,
      datasets: [{
         label: 'Nombre (en milliers)',
         data: data,
         backgroundColor: 'rgba(75, 192, 192, 0.2)',
         borderColor: 'rgba(75, 192, 192, 1)',
         borderWidth: 1
      }]
   },
   options: {
      indexAxis: 'y', // Spécifiez l'axe des étiquettes
      scales: {
         x: {
            beginAtZero: true
         }
      }
   }
};

let canvas = document.createElement('canvas');
canvas.width = 1200;
canvas.height = 1200;
let ctx = canvas.getContext('2d');
let parentElement = table1.parentNode;

// Insérez le canvas avant la table
parentElement.insertBefore(canvas, table1);

// Créez le graphique dans le contexte du canvas
new Chart(ctx, config);*/
/*let table1 = document.getElementById('table1');
let labels = [];
let data = [];
let years = [];

// Parcourez les lignes du tableau (y compris la première ligne avec les en-têtes)
/*for (let i = 1; i < table1.rows.length; i++) {
   let cells = table1.rows[i].cells;
   labels.push(cells[1].textContent); // Récupérer les données de la première colonne (les annees)
   data.push(parseFloat(cells[2].textContent.replace(',', '.')));
}

years = Array.from(table1.rows[1].cells).map(cell => cell.textContent);

document.querySelectorAll('#table1 tbody tr').forEach((col) => {
    let country
    col.querySelectorAll('td').forEach((row, j) => {
      if (j==0) {
        country = row.textContent
        if(country.indexOf("(") > 0)
          country = country.slice(0, country.indexOf("("))
      } else {
        let dataPoint = {}
        dataPoint.Country = country
        dataPoint.Year = years[j+1]
        dataPoint.Crimes = parseInt(row.textContent)
        data.push(dataPoint)
      }
    })
})



let config = {
   type: 'bar',
   data: {
      labels: labels,
      datasets: [{
         label: 'Nombre (en milliers)',
         data: data,
         backgroundColor: 'rgba(75, 192, 192, 0.2)',
         borderColor: 'rgba(75, 192, 192, 1)',
         borderWidth: 1
      }]
   },
   options: {
      indexAxis: 'y', // Spécifiez l'axe des étiquettes
      scales: {
         x: {
            beginAtZero: true
         }
      }
   }
};

let canvas = document.createElement('canvas');
canvas.width = 1200;
canvas.height = 1200;
let ctx = canvas.getContext('2d');

let parentElement = table1.parentNode;

// Insérez le canvas avant la table
parentElement.insertBefore(canvas, table1);

// Créez le graphique dans le contexte du canvas
new Chart(ctx, config);

let table1 = document.getElementById('table1');
let data = [];

// Obtenez les années à partir de la première ligne (en-têtes) du tableau
let years = Array.from(table1.rows[0].cells).slice(2).map(cell => cell.textContent.trim());

// Parcourez les lignes du tableau (à partir de la deuxième ligne)
for (let i = 1; i < table1.rows.length; i++) {
    let cells = table1.rows[i].cells;
    let country = cells[1].textContent.trim().replace(/\(.*\)/, ''); // Obtenez le nom du pays en enlevant les annotations entre parenthèses
    let crimeData = Array.from(cells).slice(2).map(cell => parseInt(cell.textContent.replace(',', '').trim())); // Obtenez les données sur les crimes pour chaque année

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

let config = {
    type: 'bar',
    data: {
        labels: labels,
        datasets: [{
            label: 'Nombre (en milliers)',
            data: crimeCounts,
            backgroundColor: 'rgba(75, 192, 192, 0.2)',
            borderColor: 'rgba(75, 192, 192, 1)',
            borderWidth: 1
        }]
    },
    options: {
        indexAxis: 'y', // Spécifiez l'axe des étiquettes
        scales: {
            x: {
                beginAtZero: true
            }
        }
    }
};

let canvas = document.createElement('canvas');
canvas.width = 1200;
canvas.height = 600;
let ctx = canvas.getContext('2d');

let parentElement = table1.parentNode;

// Insérez le canvas avant la table
parentElement.insertBefore(canvas, table1);

// Créez le graphique dans le contexte du canvas
new Chart(ctx, config);
let table1 = document.getElementById('table1');
let data = [];

// Obtenez les années à partir de la première ligne (en-têtes) du tableau
let years = Array.from(table1.rows[0].cells).slice(2).map(cell => cell.textContent.trim());

// Parcourez les lignes du tableau (à partir de la deuxième ligne)
for (let i = 1; i < table1.rows.length; i++) {
    let cells = table1.rows[i].cells;
    let country = cells[1].textContent.trim().replace(/\(.*\)/, ''); // Obtenez le nom du pays en enlevant les annotations entre parenthèses
    let crimeData = Array.from(cells).slice(2).map(cell => parseInt(cell.textContent.replace(',', '').trim())); // Obtenez les données sur les crimes pour chaque année

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

let config = {
    type: 'bar',
    data: {
        labels: labels,
        datasets: [{
            label: 'Nombre (en milliers)',
            data: crimeCounts,
            backgroundColor: 'rgba(75, 192, 192, 0.2)',
            borderColor: 'rgba(75, 192, 192, 1)',
            borderWidth: 1
        }]
    },
    options: {
        indexAxis: 'y', // Spécifiez l'axe des étiquettes
        scales: {
            x: {
                beginAtZero: true
            }
        }
    }
};

let canvas = document.createElement('canvas');
canvas.width = 1200;
canvas.height = 600;
let ctx = canvas.getContext('2d');

let parentElement = table1.parentNode;

// Insérez le canvas avant la table
parentElement.insertBefore(canvas, table1);

// Créez le graphique dans le contexte du canvas
new Chart(ctx, config);*/
let table1 = document.getElementById('table1');
let data = [];

// Obtenez les années à partir de la première ligne (en-têtes) du tableau
let years = Array.from(table1.rows[1].cells).slice(2).map(cell => cell.textContent.trim());

// Parcourez les lignes du tableau (à partir de la deuxième ligne)
for (let i = 2; i < table1.rows.length; i++) {
    let cells = table1.rows[i].cells;
    let crimeData = Array.from(cells).slice(2).map(cell => parseInt(cell.textContent.replace(',','').trim())); // Obtenez les données sur les crimes pour chaque année
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
            year: 'Nombre(en milliers)',
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
    type: 'bar',
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








/*
   function fetchDataAndRenderChart() {
       // Fetch data from the URL using AJAX
       fetch('https://canvasjs.com/services/data/datapoints.php')
           .then(response => response.json())
           .then(data => {
               // Extract x and y values from the fetched data
               const xValues = data.map(point => point[0]);
               const yValues = data.map(point => point[1]);
               let canvas3 = document.createElement('canvas');
               canvas3.width = 800;
               canvas3.height = 800;
               let ctx3 = canvas2.getContext('2d');
               let parentElement3 = table2.parentNode;
               parentElement3.insertBefore(canvas3, h1);
               
               
               const ctx = document.getElementById('myChart');
             
                  let chart = new Chart(ctx, {
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

   // Fetch data and render chart every second
   setInterval(fetchDataAndRenderChart, 1000);
*/






/*function fetchDataAndRenderChart() {
   // Fetch data from the URL using AJAX
   fetch('https://canvasjs.com/services/data/datapoints.php')
       .then(response => response.json())
       .then(data => {
           // Extract x and y values from the fetched data
           const xValues = data.map(point => point[0]);
           const yValues = data.map(point => point[1]);

           // Créez un nouvel élément canvas
           let canvas = document.createElement('canvas');
           canvas.width = 800;
           canvas.height = 800;
           let ctx = canvas.getContext('2d');

           // Récupérez le parent de h1 (le titre principal)
           let parentElement = document.querySelector('h1').parentNode;

           // Insérez le canvas avant le titre principal
           parentElement.insertBefore(canvas, document.querySelector('h1'));

           // Créez le graphique à l'aide de Chart.js
           let chart = new Chart(ctx, {
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
       })
       .catch(error => console.error('Error fetching data:', error));
}

// Fetch data and render chart every second
setInterval(fetchDataAndRenderChart, 1000);
*/
// Créez un canvas et un graphique une seule fois
let canvas = document.createElement('canvas');
canvas.width = 800;
canvas.height = 800;
let ctx = canvas.getContext('2d');

// Récupérez le parent de h1 (le titre principal)
let parentElement3 = document.querySelector('h1').parentNode;

// Insérez le canvas avant le titre principal
parentElement3.insertBefore(canvas, document.querySelector('h1'));

let chart; // Déclarez la variable du graphique à l'extérieur de la fonction

function fetchDataAndRenderChart() {
   console.log('Fetching data...'); // Add this line
    // Fetch data from the URL using AJAX
    fetch('https://canvasjs.com/services/data/datapoints.php')
        .then(response => response.json())
        .then(data => {
         console.log('Data fetched:', data); // Add this line
            // Extract x and y values from the fetched data
            const xValues = data.map(point => point[0]);
            const yValues = data.map(point => point[1]);

            // Mettez à jour les données du graphique existant
            if (chart) {
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

// Fetch data and render chart every second
setInterval(fetchDataAndRenderChart, 1000);






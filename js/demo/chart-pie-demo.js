// Set new default font family and font color to mimic Bootstrap's default styling
Chart.defaults.global.defaultFontFamily = 'Nunito', '-apple-system,system-ui,BlinkMacSystemFont,"Segoe UI",Roboto,"Helvetica Neue",Arial,sans-serif';
Chart.defaults.global.defaultFontColor = '#858796';

// Pie Chart Example
var ctx = document.getElementById("myPieChart");
var myPieChart = new Chart(ctx, {
  type: 'doughnut',
  data: {
    labels: ["Carta", "Plastica", "Vetro e alluminio", "Umido", "Altro"],
    datasets: [{
      data: [15, 33, 18, 17, 17],
      backgroundColor: ['#b3e4ec', '#ddff11', '#0b7610','#6c5e0a','#040b32'],
      hoverBackgroundColor: ['#b3e4ec', '#ddff11', '#0b7610','#6c5e0a','#040b32'],
      hoverBorderColor: "rgba(234, 236, 244, 1)",
    }],
  },
  options: {
    maintainAspectRatio: false,
    tooltips: {
      backgroundColor: "rgb(255,255,255)",
      bodyFontColor: "#858796",
      borderColor: '#dddfeb',
      borderWidth: 1,
      xPadding: 15,
      yPadding: 15,
      displayColors: false,
      caretPadding: 10,
      callbacks: {
        label: function (tooltipItem, data){
          var dataLabel = data.labels[tooltipItem.index];
          var value = ': ' + data.datasets[tooltipItem.datasetIndex].data[tooltipItem.index];

          return dataLabel + value +'%';
        }
      }
    },
    legend: {
      display: false
    },
    cutoutPercentage: 80,
  },
});

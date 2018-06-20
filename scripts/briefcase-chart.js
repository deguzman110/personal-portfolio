var ctx = document.getElementById("userResearchChart").getContext("2d");
var chart = new Chart(ctx, {
  type: 'pie',

  data: {
    labels: ["Yes", "No"],
    datasets: [{
      label: "Respondents (in Percent)",
      data: [81, 19],
      backgroundColor: [
        "rgba(0, 204, 102, 0.75)",
        "rgba(255, 99, 132, 0.75)"
      ],
      borderColor: [
        "rgba(0, 204, 102, 1)",
        "rgba(255, 99, 132, 1)"
      ],
      borderWidth: 1
    }]
  },
  options: {
    title: {
      display: true,
      position: 'top',
      fontSize: 20,
      fontColor: '#fff',
      fontFamily: "'Signika', sans-serif",
      fontStyle: 'normal',
      padding: 20,
      text: 'Utilization of Cloud Storage Services'
    },
    legend: {
      position: 'bottom',
      labels: {
        fontFamily: "'Open Sans', sans-serif",
        fontColor: '#ddd',
        padding: 20
      }
    },
    tooltips: {
      titleFontFamily: "'Open Sans', sans-serif",
      titleFontColor: '#ddd',
      titleMarginBottom: 14,
      bodyFontFamily: "'Open Sans', sans-serif",
      bodyFontColor: '#ddd',
      xPadding: 14,
      yPadding: 14
    }
  }
});

var ctx = document.getElementById("userResearchBreakdown").getContext("2d");
var chart = new Chart(ctx, {
  type: 'horizontalBar',

  data: {
    labels: ["Google Drive", "Dropbox", "iCloud", "OneDrive"],
    datasets: [{
      label: "Respondents (in Percent)",
      data: [83, 61, 61, 27.8],
      backgroundColor: [
        "rgba(72, 133, 237, 0.75)",
        "rgba(37, 113, 217, 0.75)",
        "rgba(145, 179, 208, 0.75)",
        "rgba(9, 74, 178, 0.75)"
      ],
      borderColor: [
        "rgba(72, 133, 237, 1)",
        "rgba(37, 113, 217, 1)",
        "rgba(145, 179, 208, 1)",
        "rgba(9, 74, 178, 1)"
      ],
      borderWidth: 1
    }]
  },
  options: {
    title: {
      display: true,
      position: 'top',
      fontSize: 20,
      fontColor: '#fff',
      fontFamily: "'Signika', sans-serif",
      fontStyle: 'normal',
      padding: 20,
      text: 'Usage of Cloud Storage Services'
    },
    legend: {
      position: 'bottom',
      labels: {
        fontFamily: "'Open Sans', sans-serif",
        fontColor: '#ddd',
        padding: 20
      }
    },
    tooltips: {
      titleFontFamily: "'Open Sans', sans-serif",
      titleFontColor: '#ddd',
      titleMarginBottom: 14,
      bodyFontFamily: "'Open Sans', sans-serif",
      bodyFontColor: '#ddd',
      xPadding: 14,
      yPadding: 14
    },
    scales: {
      xAxes: [{
        ticks: {
          beginAtZero: true,
          fontColor: '#ddd',
          fontFamily: "'Open Sans', sans-serif",
          max: 100,
        }
      }],
      yAxes: [{
        ticks: {
          fontColor: '#ddd',
          fontFamily: "'Open Sans', sans-serif"
        }
      }]
    }
  }
});

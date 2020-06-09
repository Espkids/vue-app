<script>
import { Line } from 'vue-chartjs'
export default {
  extends: Line,
  data: () => ({
    datacollection: {
      labels: ['January', 'February', 'March', 'April', 'May', 'June', 'July', 'August', 'September', 'October', 'November', 'December'],
      datasets: [
        {
          label: 'Data One',
          // backgroundColor: '#f87979',
          pointBackgroundColor: 'white',
          borderWidth: 1,
          pointBorderColor: '#249EBF',
          data: [60, 40, 20, 50, 90, 10, 20, 40, 50, 70, 90, 100]
        },
        {
          label: 'Data Two',
          // backgroundColor: '#f87979',
          pointBackgroundColor: 'white',
          borderWidth: 1,
          pointBorderColor: '#249EBF',
          data: [90, 40, 50, 70, 90, 60, 80, 40, 50, 80, 50, 20]
        }
      ]
    },
    options: {
      scales: {
        yAxes: [{
          ticks: {
            beginAtZero: true
          },
          gridLines: {
            display: true
          }
        }],
        xAxes: [{
          gridLines: {
            display: false
          }
        }]
      },
      legend: {
        display: true
      },
      responsive: true,
      maintainAspectRatio: false
    }
  }),
  mounted () {
    this.renderChart(this.datacollection, this.options)
  }
}
</script>

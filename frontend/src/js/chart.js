Vue.component(
  "my-bar-chart",
  {
    extends: VueChartJs.Bar,
    props: {
      chartdata: {
        type: Object,
        default: null,
      },
      options: {
        type: Object,
        default: null,
      },
    },

    mounted() {
      this.renderChart(this.chartdata, this.options);
    },

    watch: {
      barData() {
        console.log("bar data changed");
        this.renderChart(this.barData, this.chartOptions);
      },
      chartOptions() {
        this.renderChart(this.barData, this.chartOptions);
      },
    },
  },
  {
    responsive: true,
    maintainAspectRatio: false,
  }
);

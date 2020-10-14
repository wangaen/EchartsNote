export default {
  data () {
    return {
      chart: ''
    }
  },
  mounted() {
    window.addEventListener('resize', this.ChangeSize)
  },
  methods: {
    ChangeSize() {
      if (this.chart) {
        this.chart.resize()
      }
    }
  }
}
<template>
  <div>
    {{ showMin }} : {{ showSec }}
  </div>
</template>
  <script>
  export default {
    props: {
      pickedTime: {
        type: Number,
        default: null
      },
    },
    emits: ['timeExpired'],
    data () {
      return {
        time: 0,
        totalSeconds: 1,
        pomodoroInstance: null,
      }
    },
    computed: {
      showMin() {
        return Math.floor(this.totalSeconds/60)
      },
      showSec() {
        return Math.floor(this.totalSeconds%60)
      }
    },
    created () {
      this.time = JSON.parse(JSON.stringify(parseInt(this.pickedTime)))
      this.totalSeconds = this.time*60
      console.log(this.totalSeconds)
      console.log(this.time)
      this.start()
    },
    beforeUnmount() {
      clearInterval(this.timer)
    },
    methods: {
      start() {
        this.pomodoroInstance = setInterval(()=>{
          if(this.totalSeconds > 0) {
            this.totalSeconds -= 1
          }
        },1000)
      }
    }
  }
    </script>
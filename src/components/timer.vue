<template>
  <div
    v-show="isRunning"
  >
    {{ prettyTime }} 
  </div>
</template>
  <script>
  export default {
    props: {
      remainingTime: {
        type: Number,
        default: null
      },
    },
    emits: ['timeExpired'],
    data () {
      return {
        time: 0,
        totalSeconds: 0,
        pomodoroInstance: null,
      }
    },
    computed: {
    },
    created () {
      this.time = JSON.parse(JSON.stringify(parseInt(this.remainingTime)))
      this.totalSeconds = this.time*60
      this.start()
    },
    beforeUnmount() {
      clearInterval(this.timer)
    },
    methods: {
      this.pomodoroInstance = setInterval(()=>{
        if(this.totalSeconds > 0) {
          
        }
      })
    }
  }
    </script>
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
          isRunning: false,
          minutes: 0,
          secondes: 0,
          time: 0,
          timer: null
        }
      },
      computed: {
        prettify (value) {
          const data = value.split(':')
          let minutes = data[0]
          let secondes = data[1]
          if (minutes < 10) {
            minutes = '0' + minutes
          }
          if (secondes < 10) {
            secondes = '0' + secondes
          }
          return minutes + ':' + secondes
        },
        prettyTime () {
          const time = this.time / 60
          const minutes = parseInt(time)
          const secondes = Math.round((time - minutes) * 60)
          return minutes + ':' + secondes
        }
      },
      created () {
        this.time = JSON.parse(JSON.stringify(parseInt(this.remainingTime)))
        this.start()
      },
      beforeUnmount() {
        clearInterval(this.timer)
      },
      methods: {
        start () {
          this.isRunning = true
          if (!this.timer) {
            this.timer = setInterval(() => {
              if (this.time > 0) {
                this.time--
              } else {
                clearInterval(this.timer)
                this.$emit('timeExpired')
                this.reset()
              }
            }, 1000)
          }
        },
        stop () {
          this.isRunning = false
          clearInterval(this.timer)
          this.timer = null
        },
        reset () {
          this.stop()
          this.time = 0
          this.secondes = 0
          this.minutes = 0
        },
        setTime (payload) {
          this.time = (payload.minutes * 60 + payload.secondes)
        }
      }
    }
    </script>
<template>
  <div class="flex justify-center text-lg text-primary">
    <div> 
      <div
        v-if="isTime"
        class="mt-6 flex justify-center"
      > 
        <div> 
          <div class=" bg-white h-[280px] w-[280px] gap-x-2 rounded-2xl p-4">
            <div class="flex justify-around"> 
              <div class="w-[80px] h-fit flex justify-center">
                <div>
                  <div class="my-4 flex justify-center"> 
                    <button
                      @click="incHr"
                    >
                      <img
                        src="/public/plus.svg"
                        alt=""
                      >
                    </button> 
                  </div>
                  <div class="w-full text-secondary text-center">
                    <div class="">
                      {{ hour+1 > 12 ? 1 : hour+1 }}
                    </div> 
                    <div
                      class="text-4xl text-primary transform transition duration-300"
                      :class="hourChange ? 'scale-150' : 'scale-100'"
                    > 
                      {{ hour }}
                    </div>
                    <!-- <input
                                v-model="hour"
                                class="w-fit  text-4xl  rounded text-primary"
                            > -->
                    <div>
                      {{ hour-1 < 1 ? 12 : hour-1 }}
                    </div> 
                  </div>
                  <div class="my-4 flex justify-center"> 
                    <button
                      @click="decHr"
                    >
                      <img
                        src="/public/minus.svg"
                        alt=""
                      >
                    </button> 
                  </div>
                </div>
              </div>
              <div class=" w-[80px] h-fit flex justify-center">
                <div>
                  <div class="my-4 flex justify-center"> 
                    <button
                      @click="incMin"
                    >
                      <img
                        src="/public/plus.svg"
                        alt=""
                      >
                    </button> 
                  </div>
                  <div class="w-full text-secondary text-center">
                    <div class="">
                      {{ min+1 > 59 ? 0 : min+1 }}
                    </div> 
                    <div class="text-4xl text-primary"> 
                      {{ min <= 9 ? 0 : '' }}{{ min }}
                    </div>
                    <div>
                      {{ min-1 < 0 ? 59 : min-1 }}
                    </div> 
                  </div>
                  <div class="my-4 flex justify-center"> 
                    <button
                      @click="decMin"
                    >
                      <img
                        src="/public/minus.svg"
                        alt=""
                      >
                    </button> 
                  </div>
                </div>
              </div>
              <div class="mt-16">
                <div> 
                  <button
                    :class="format === 'AM' ? 'text-primary' : 'text-gray-300' "
                    class=" px-2 p-1 rounded text-base"
                    @click="format = 'AM'"
                  >
                    AM
                  </button>
                </div>
                <div> 
                  <button
                    :class="format === 'PM' ? 'text-primary' : 'text-gray-300' "
                    class="px-2 p-1 rounded text-base"
                    @click="format = 'PM'"
                  >
                    PM
                  </button>
                </div>
              </div>
            </div>
            <hr class="">
            <div class="flex justify-around items-center gap-x-4 mt-4">
              <div>
                <button
                  class="bg-white  rounded"
                  @click="cancel"
                >
                  cancel
                </button>
              </div>
              <div>
                <button
                  @click="save"
                >
                  save
                </button>
              </div>
            </div>
          </div>
        </div>
      </div>
    </div>
  </div>
</template>
  
  <script>
  export default {
    components: {
    },
    data () {
      return {
        vueTime: null,
        isTime: true,
        hour: 0,
        hourChange: false,
        min: 0,
        time: {
          hour: 0,
          min: 0,
        },
        format:'',
        timeStr: ''
      }
    },
    computed: {
      showTime() {
        if(this.hour == 0 && this.min == 0 && this.format === '') {
          return '00 : 00'
        } else {
          return ` ${this.hour} : ${this.min < 10 ? '0'+this.min : this.min }  ${ this.format }`
        }
      }
    },
    watch: {
      hour: {
        handler(newVal) {
          if(newVal) {
            // console.log(newVal)
            this.hourChange = true 
            let setTIme = setTimeout(()=>{
              this.hourChange = false
              clearTimeout(setTIme)
            },300)
          }
        },
        deep:true,
        immediate: true
      }
    },
    methods: {
      openTimePicker() {   
        this.isTime = !this.isTime
      },
      incMin() {
        this.min === 59 ? this.min = 0 : this.min++
      },
      decMin() {
        this.min === 0 ? this.min = 59 : this.min--
      },
      incHr() {
        // this.hourChange = false
        this.hour === 12 ? this.hour = 1 : this.hour++
      },
      decHr() {
        (this.hour === 1 || this.hour === 0) ? this.hour = 12 : this.hour--
      },
      save() {
        this.time.hour = this.hour
        this.time.min = this.min
        this.isTime = false
        this.convertTo24hr()
      },
      convertTo24hr() {
        console.log(this.time)
        if(this.time.hour === 12 && this.format === 'AM') {
          console.log('here')
          this.time.hour = '00'
        }
        if(this.time.hour !== 12 && this.format === 'PM') {
          this.time.hour += 12 
        }
        // this.createtimeStr()
      },
      // createtimeStr() {
      //     this.timeStr = this.time.hour + ':' + (this.time.min < 10 ? '0' + this.time.min : '')
      // },
      cancel() {
        this.hour = 0
        this.min = 0
        this.format = ''
        this.isTime = false
      }
    }
  }
  </script>
  
  <style>
  
  </style>
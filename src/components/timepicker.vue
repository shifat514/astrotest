<template>
  <div class="flex justify-center text-lg text-primary">
    <div> 
      <!--input field-->
      <div class="flex justify-center">
        <div class="relative">
          <div class="absolute top-[24px] left-5">
            <svg 
              fill="#396837"
              xmlns="http://www.w3.org/2000/svg"
              x="0px"
              y="0px"
              width="24"
              height="24"
              viewBox="0 0 24 24"
            >
              <path d="M 12 2 C 6.4889971 2 2 6.4889971 2 12 C 2 17.511003 6.4889971 22 12 22 C 17.511003 22 22 17.511003 22 12 C 22 6.4889971 17.511003 2 12 2 z M 12 4 C 16.430123 4 20 7.5698774 20 12 C 20 16.430123 16.430123 20 12 20 C 7.5698774 20 4 16.430123 4 12 C 4 7.5698774 7.5698774 4 12 4 z M 11 6 L 11 12.414062 L 15.292969 16.707031 L 16.707031 15.292969 L 13 11.585938 L 13 6 L 11 6 z" />
            </svg>  
          </div>
          <input 
            v-model="showTime"
            type="text"
            placeholder="select time"
            class=" bg-white text-primary m-3 appearance-none focus-none outline-none input p-2 pl-10 rounded-lg disabled cursor-pointer"
            readonly
            @click="openTimePicker"
          >
        </div>
      </div> 
      <div class="flex justify-center text-accent px-4">
        Start Time : {{ time.hour }} : {{ time.min < 10 ? 0 : '' }}{{ time.min }} (24Hr)
      </div>
      <!--modal-->
      <div
        v-if="isTime"
        class="mt-6 flex justify-center"
      > 
        <div> 
          <div class=" bg-white h-[320px] w-[280px] gap-x-2 rounded-2xl px-2 py-6">
            <div class="flex justify-around"> 
              <div class="w-[80px] h-fit flex justify-center">
                <div>
                  <div class="my-4 flex justify-center"> 
                    <button
                      @click="incHr"
                    >
                      <img
                        class="hover:scale-125 transform transition ease-in-out duration-200"
                        src="/public/plus.svg"
                        alt=""
                      >
                    </button> 
                  </div>
                  <div class="w-full h-[120px] text-center ">
                    <div 
                      class=" text-primary  transform transition ease-in-out duration-300" 
                      :class="hourChange ? 'text-lg scale-75 -translate-y-2' : 'text-2xl scale-100 opacity-50 translate-y-2'"
                    >
                      {{ hour+1 > 12 ? 1 : hour+1 }}
                    </div> 
                    <div
                      class="  transform transition ease-in-out duration-300"
                      :class="hourChange ? 'text-2xl scale-100 text-primary opacity-50 -translate-y-2' : ' text-4xl text-primary scale-100 translate-y-2'"
                    > 
                      {{ hour }}
                    </div>
                   
                    <div 
                      class=" text-primary  transform transition ease-in-out duration-300" 
                      :class="hourChange ? 'text-4xl scale-125 -translate-y-2' : 'text-2xl scale-100 opacity-50 translate-y-2'"
                    >
                      {{ hour-1 < 1 ? 12 : hour-1 }}
                    </div> 
                    <!-- <div 
                      class="text-xs text-primary  transform transition ease-out duration-300" 
                      :class="hourChange ? 'text-4xl scale-150 ' : 'scale-100 opacity-40'"
                    >
                      {{ hour-2 < 1 ? 12 : hour-2 }}
                    </div>  -->
                  </div>
                  <div class="my-4 flex justify-center"> 
                    <button
                      @click="decHr"
                    >
                      <img
                        class="hover:scale-125 transform transition ease-in-out duration-200"
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
                        class="hover:scale-125 transform transition ease-in-out duration-200"
                        src="/public/plus.svg"
                        alt=""
                      >
                    </button> 
                  </div>
                  <div class="w-full h-[120px]  text-secondary text-center">
                    <div 
                      class=" text-primary  transform transition ease-in-out duration-300" 
                      :class="minChange ? 'text-lg scale-75 -translate-y-2' : 'text-2xl scale-100 opacity-50 translate-y-2'"
                    >
                      {{ min+1 > 59 ? 0 : min+1 }}
                    </div> 
                    <div
                      class="  transform transition ease-in-out duration-300"
                      :class="minChange ? 'text-2xl scale-100 text-primary opacity-50 -translate-y-2' : ' text-4xl text-primary scale-100 translate-y-2'"
                    > 
                      {{ min <= 9 ? 0 : '' }}{{ min }}
                    </div>
                    <div
                      class=" text-primary  transform transition ease-in-out duration-300" 
                      :class="minChange ? 'text-4xl scale-125 -translate-y-2' : 'text-2xl scale-100 opacity-50 translate-y-2'"
                    >
                      {{ min-1 < 0 ? 59 : min-1 }}
                    </div> 
                  </div>
                  <div class="my-4 flex justify-center"> 
                    <button
                      @click="decMin"
                    >
                      <img
                        class="hover:scale-125 transform transition ease-in-out duration-200"
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
//   import VueDatePicker from '@vuepic/vue-datepicker';
  export default {
    components: {
    //   VueDatePicker
    },
    data () {
      return {
        vueTime: null,
        isTime: true,
        hour: 0,
        // hour:['00','01','02','03','04','05','06','07','08','09','10','12'],
        hourChange: false,
        minChange: false,
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
            },400)
          }
        },
        deep:true,
        immediate: true
      },
      min: {
        handler(newVal) {
          if(newVal) {
            // console.log(newVal)
            this.minChange = true 
            let setTIme = setTimeout(()=>{
              this.minChange = false
              clearTimeout(setTIme)
            },400)
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
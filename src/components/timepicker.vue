<template>
  <div class="flex justify-center font-fredoka text-lg text-primary relative">
    <div class="relative flex justify-center">
      <div>
        <div>Start Time : {{ time }}</div>
        <div class="relative flex justify-center">
            <!--input field-->
          <div class="relative">
            <div class="absolute top-[22px] left-4">
              <svg
                fill="#8da8a4"
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
              class=" bg-white text-primary m-3 appearance-none focus-none outline-none input p-2 pl-8 rounded disabled cursor-pointer"
              readonly
              @click="openTimePicker"
            >
          </div>
          <!--modal-->
            <div
                v-if="isTime === true"
                class=" bg-white  rounded absolute top-16 left-0 right-0"
            >
                <div class="p-8">
                    <div class="flex justify-center gap-x-12 items-center">
                        <div class="flex  items-center gap-x-2 ">
                            <div class="flex  gap-x-10 items-center">
                                <div class="flex justify-center items-center flex-col gap-y-4">
                                <button
                                    class=" rounded cursor-pointer text-xl  h-10 w-10 flex justify-center items-center"
                                    @click="incHr"
                                >
                                    <svg
                                    id="Capa_1"
                                    xmlns="http://www.w3.org/2000/svg"
                                    xmlns:xlink="http://www.w3.org/1999/xlink"
                                    fill="#8da8a4"
                                    height="24"
                                    width="24"
                                    version="1.1"
                                    viewBox="0 0 60.364 60.364"
                                    xml:space="preserve"
                                    >
                                    <g>
                                        <path d="M54.454,23.18l-18.609-0.002L35.844,5.91C35.845,2.646,33.198,0,29.934,0c-3.263,0-5.909,2.646-5.909,5.91v17.269   L5.91,23.178C2.646,23.179,0,25.825,0,29.088c0.002,3.264,2.646,5.909,5.91,5.909h18.115v19.457c0,3.267,2.646,5.91,5.91,5.91   c3.264,0,5.909-2.646,5.91-5.908V34.997h18.611c3.262,0,5.908-2.645,5.908-5.907C60.367,25.824,57.718,23.178,54.454,23.18z" />
                                    </g>
                                    </svg>
                                </button>
                                <input
                                    v-model="hour"
                                    class="bg-inherit  w-10 text-2xl text-center rounded"
                                >
                                <button
                                    class=" rounded cursor-pointer text-xl px-2 h-10 w-10 flex justify-center items-center"
                                    @click="decHr"
                                >
                                    <svg
                                    id="Capa_1"
                                    fill="#8da8a4"
                                    xmlns="http://www.w3.org/2000/svg"
                                    xmlns:xlink="http://www.w3.org/1999/xlink"
                                    height="24"
                                    width="24"
                                    version="1.1"
                                    viewBox="0 0 52.161 52.161"
                                    xml:space="preserve"
                                    >
                                    <g>
                                        <path d="M52.161,26.081c0,3.246-2.63,5.875-5.875,5.875H5.875C2.63,31.956,0,29.327,0,26.081l0,0c0-3.245,2.63-5.875,5.875-5.875   h40.411C49.531,20.206,52.161,22.835,52.161,26.081L52.161,26.081z" />
                                    </g>
                                    </svg>
                                </button>
                                </div>
                                <div class="text-4xl">
                                :
                                </div>
                                <div class="flex justify-center items-center  flex-col gap-y-4">
                                <button
                                    class="rounded cursor-pointer text-xl px-2 h-10 w-10 flex justify-center items-center"
                                    @click="incMin"
                                >
                                    <svg
                                    id="Capa_1"
                                    xmlns="http://www.w3.org/2000/svg"
                                    xmlns:xlink="http://www.w3.org/1999/xlink"
                                    fill="#8da8a4"
                                    height="24"
                                    width="24"
                                    version="1.1"
                                    viewBox="0 0 60.364 60.364"
                                    xml:space="preserve"
                                    >
                                    <g>
                                        <path d="M54.454,23.18l-18.609-0.002L35.844,5.91C35.845,2.646,33.198,0,29.934,0c-3.263,0-5.909,2.646-5.909,5.91v17.269   L5.91,23.178C2.646,23.179,0,25.825,0,29.088c0.002,3.264,2.646,5.909,5.91,5.909h18.115v19.457c0,3.267,2.646,5.91,5.91,5.91   c3.264,0,5.909-2.646,5.91-5.908V34.997h18.611c3.262,0,5.908-2.645,5.908-5.907C60.367,25.824,57.718,23.178,54.454,23.18z" />
                                    </g>
                                    </svg>
                                </button>
                                <input
                                    v-model="min"
                                    class="bg-inherit  w-10 text-2xl text-center rounded"
                                >
                                <button
                                    class=" rounded cursor-pointer text-xl px-2 h-10 w-10 flex justify-center items-center"
                                    @click="decMin"
                                >
                                    <svg
                                    id="Capa_1"
                                    fill="#8da8a4"
                                    xmlns="http://www.w3.org/2000/svg"
                                    xmlns:xlink="http://www.w3.org/1999/xlink"
                                    height="24"
                                    width="24"
                                    version="1.1"
                                    viewBox="0 0 52.161 52.161"
                                    xml:space="preserve"
                                    >
                                    <g>
                                        <path d="M52.161,26.081c0,3.246-2.63,5.875-5.875,5.875H5.875C2.63,31.956,0,29.327,0,26.081l0,0c0-3.245,2.63-5.875,5.875-5.875   h40.411C49.531,20.206,52.161,22.835,52.161,26.081L52.161,26.081z" />
                                    </g>
                                    </svg>
                                </button>
                                </div>
                            </div>
                        </div>
                        <div class="flex flex-col gap-y-4">
                        <button
                            :class="format === 'am' ? 'bg-blue-400' : '' "
                            class=" px-2 p-1 rounded text-base"
                            @click="format = 'am'"
                        >
                            am
                        </button>
                        <button
                            :class="format === 'pm' ? 'bg-blue-400' : '' "
                            class="px-2 p-1 rounded text-base"
                            @click="format = 'pm'"
                        >
                            pm
                        </button>
                        </div>
                    </div>
                <div class="flex justify-center items-center gap-x-4">
                    <div>
                    <button
                        class="bg-white px-2 pt-1 rounded text-sm"
                        @click="cancel"
                    >
                        cancel
                    </button>
                    </div>
                    <div>
                    <button
                        :class="hour === 0 || min === 0 || format === '' ? 'disabled text-gray-200': ''"
                        class="px-3 py-2"
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
          return '00:00'
        } else {
          return `${this.hour} : ${this.min < 10 ? '0'+this.min : this.min } ${ this.format }`
        }
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
        if(this.time.hour === 12 && this.format === 'am') {
          this.time.hour = '00'
        }
        if(this.time.hour !== 12 && this.format === 'pm') {
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
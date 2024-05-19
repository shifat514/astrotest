<template>
  <div class="flex justify-center text-lg text-primary ">
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
      <!--mins to take break-->
      {{ breakTIme }}
      <div class="flex justify-center items-center"> 
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
            v-model="pomodoroTime"
            type="text"
            placeholder="duration (min)"
            class=" bg-white  m-3 appearance-none focus-none outline-none input p-2 pl-10 rounded-lg disabled cursor-pointer"
            >
            <!-- :class="sessionTime === '' ? 'text-secondary': 'text-primary'" -->
        </div>
        <button @click="startTimer">set</button>
      </div> 
      <div v-if="startPomodoro">
        <timer :remainingTime="sessionTime" />
      </div>
      <div class="flex justify-center text-accent px-4">
        Start Time : {{ time.hour }} : {{ time.min }} (24Hr)
      </div>
      <div v-if="isTime"> 
        <pomodoro @time="pickedTime" />
      </div>
    </div>
  </div>
</template>
  
  <script>
  import timer from './timer.vue'
  import pomodoro from './timepicker.vue'
  export default {
    components: {
      pomodoro,
      timer
    },
    props: {
      startTime: {
        type: Object,
        default: null,
      }
    },
    data () {
      return {
        startPomodoro: false,
        sessionTime:'',
        vueTime: null,
        isTime: true,
        countHr: 1,
        countMin: 1,
        selectedHr: '0',
        selectedMin:'00',
        hour:['12','0','1','2','3','4','5','6','7','8','9','10','11','12','0'],
        // min: [ 59, 0, 1, 2, 3, 4, 5, 6, 7, 8, 9, 10, 11, 12, 13, 14, 15, 16, 18, 19, 20, 21, 22, 23, 24,
        //  26, 28, 29, 30, 31, 32, 33, 34, 35, 36, 37, 38, 39, 40, 41, 42, 43, 44, 45, 46, 47, 48, 49,
        //   50, 51, 52, 53, 54, 55, 56, 57, 58, 59, 0]
        min:[
          '59','00','01','02','03','04','05','06','07','08','09','10','11','12','13',
          '14','15','16','18','19','20','21','22','23','24','26','28','29','30','31','32',
          '33','34','35','36','37','38','39','40','41','42','43','44','45','46','47','48',
          '49','50','51','52','53','54','55','56','57','58','59','00'
        ],
        hourChange: false,
        minChange: false,
        // min: 0,
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
        console.log(this.hour)
        // if(this.hour == 0 && this.min == 0 && this.format === '') {
        //   return '00 : 00'
        // } else {
        return ` ${this.selectedHr} :  ${ this.selectedMin } ${ this.format }`
        // }
      },
    //   pomodoroTime() {
    //     return `${this.sessionTime} minutes`
    //   }
    },
    methods: {
        startTimer() {
            this.startPomodoro = true
        },
      pickedTime(startTime) {
        this.time = startTime
        console.log(this.time)
      },
      openTimePicker() {   
        this.isTime = !this.isTime
      },
    }
  }
  </script>
  
  <style>
  /* Hide scrollbar for Chrome, Safari and Opera */
  .no-scrollbar::-webkit-scrollbar {
      display: none;
  }
  
  /* Hide scrollbar for IE, Edge and Firefox */
  .no-scrollbar {
      -ms-overflow-style: none;  /* IE and Edge */
      scrollbar-width: none;  /* Firefox */
  }
  </style>
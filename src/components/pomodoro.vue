<template>
  <div class="flex justify-center text-lg text-primary ">
    <div> 
      <!--input field for to show time from timer picker-->
      <div class="flex justify-center"> 
        <div class="relative"> 
          <div class="absolute top-[24px] left-5">
            <img
              src="/assets/clock.svg"
              alt=""
            >
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
      <!--pomodoro duration time-->
      <div class="flex justify-center items-center"> 
        <div class="relative"> 
          <div class="absolute top-[24px] left-5">
            <img
              src="/assets/clock.svg"
              alt=""
            > 
          </div>
          <input 
            v-model="pomodoroTime"
            type="text"
            placeholder="duration (min)"
            class=" bg-white  m-3 appearance-none focus-none outline-none input p-2 pl-10 rounded-lg disabled cursor-pointer"
          >
        </div>
        <button @click="setPomodoroTIme">
          set
        </button>
      </div> 
      <!--pomodoro break time-->
      <div class="flex justify-center items-center"> 
        <div class="relative"> 
          <div class="absolute top-[24px] left-5">
            <img
              src="/assets/clock.svg"
              alt=""
            > 
          </div>
          <input 
            v-model="breakTime"
            type="text"
            placeholder="break (min)"
            class=" bg-white  m-3 appearance-none focus-none outline-none input p-2 pl-10 rounded-lg disabled cursor-pointer"
          >
        </div>
        <button @click="setBreakTIme">
          set
        </button>
      </div> 
      <div
        v-if="showDuration"
        class="flex gap-x-4"
      >
        Duration : {{ pomodoroTime }} min
        <div>
          <button
            class="text-primary"
            @click="startPomodoro = true"
          >
            Start
          </button>
        </div>
      </div>
      <div
        v-if="startPomodoro"
      >
        <timer :pickedTime="pomodoroTime" />
      </div>
      <div
        v-if="showBreak"
        class="flex gap-x-4"
      >
        Break : {{ pomodoroTime }} min
        <div>
          <button
            class="text-primary"
            @click="startBreaK = true"
          >
            Start
          </button>
        </div>
      </div>
      <div v-if="startBreaK">
        <timer :pickedTime="breakTime" />
      </div>
      <div class="flex justify-center text-accent px-4">
        Start Time : {{ time.hour }} : {{ time.min }} (24Hr)
      </div>
      <!---actual time picker -->
      <div v-if="isTime"> 
        <timepicker
          @time="pickedTime"
        />
      </div>
    </div>
  </div>
</template>
  
  <script>
  import timer from './timer.vue'
  import timepicker from './timepicker.vue'
  export default {
    components: {
      timepicker,
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
        showDuration : false,
        showBreak : false,
        startPomodoro: false,
        startBreaK:false,
        pomodoroTime:'',
        breakTime:'',
        vueTime: null,
        isTime: true,
        countHr: 1,
        countMin: 1,
        selectedHr: '0',
        selectedMin:'00',
        hour:['12','0','1','2','3','4','5','6','7','8','9','10','11','12','0'],
        min:[
          '59','00','01','02','03','04','05','06','07','08','09','10','11','12','13',
          '14','15','16','18','19','20','21','22','23','24','26','28','29','30','31','32',
          '33','34','35','36','37','38','39','40','41','42','43','44','45','46','47','48',
          '49','50','51','52','53','54','55','56','57','58','59','00'
        ],
        hourChange: false,
        minChange: false,
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
    },
    methods: {
      setPomodoroTIme() {
        this.showDuration = true
        // set or save the pomodoro duration
      },
      setBreakTIme() {
        this.showBreak = true
        // set or save the break duration
      },
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
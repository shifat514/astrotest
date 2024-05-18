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
              <div class="w-[80px] flex justify-center">
                <div>
                  <div class="my-4 flex justify-center">     
                    <button
                      :class="countHr === 1 ? 'opacity-25 hover-none cursor-default': 'hover:scale-125'"
                      :disabled="countHr === 1 ? true: false"
                      @click="scrollTop"
                    >
                      <img
                        class="hover:scale-125 transform transition ease-in-out duration-200 fill-primary rotate-180"
                        src="/public/dropdown.svg"
                        alt=""
                      >
                    </button> 
                  </div>
                  <div id="hour" class="text-lg w-[80px] h-[83px] overflow-hidden no-scrollbar snap-y  scroll-smooth">  
                    <div v-for="(item,index) in hour" :key="index">
                      <div 
                        class="flex justify-center" 
                        :class="selectedHr === item ? 'text-xl scale-150 transform transition ease-in-out duration-700':'transform transition  duration-700 scale-75 text-secondary'"
                      > 
                        {{ item }}
                      </div>
                    </div>
                  </div>
                  <div class="my-4 flex justify-center"> 
                    <button
                      :class="countHr === 13 ? 'opacity-25 hover-none cursor-default': 'hover:scale-125'"
                      :disabled="countHr === 13 ? true: false"

                      @click="scrollDown"
                    >
                      <img
                        class=" transform transition ease-in-out duration-200"
                        src="/public/dropdown.svg"
                        alt=""
                      >
                    </button> 
                  </div>
                </div>
              </div>
              <div class="flex justify-center items-center text-3xl">:</div>
              <div class=" w-[80px] h-fit flex justify-center">
                <div>
                  <div class="my-4 flex justify-center"> 
                    <button
                      :class="countMin === 1 ? 'opacity-25 hover-none cursor-default': 'hover:scale-125'"
                      :disabled="countMin === 1 ? true: false"
                      @click="scrollminTop"
                    >
                      <img
                        class="hover:scale-125 transform transition ease-in-out duration-200 rotate-180"
                        src="/public/dropdown.svg"
                        alt=""
                      >
                    </button> 
                  </div>
                  <div id="min" class="w-[80px] h-[80px] overflow-hidden no-scrollbar snap-y scroll-smooth">  
                    <div v-for="(item,index) in min" :key="index">
                      <div class="flex justify-center" :class="selectedMin === item ? 'scale-150 ':'scale-100 opacity-60'"> 
                        {{ item }}
                      </div>
                    </div>
                  </div>
                  <!-- <div class="w-full h-[120px]  text-secondary text-center">
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
                  </div> -->
                  <div class="my-4 flex justify-center"> 
                    <button
                      :class="countMin === 57 ? 'opacity-25 hover-none cursor-default': 'hover:scale-125'"
                      :disabled="countMin === 57 ? true: false"
                      @click="scrollminDown"
                    >
                      <img
                        class="hover:scale-125 transform transition ease-in-out duration-200"
                        src="/public/dropdown.svg"
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
        if(this.hour == 0 && this.min == 0 && this.format === '') {
          return '00 : 00'
        } else {
          return ` ${this.selectedHr} :  ${ this.selectedMin } ${ this.format }`
        }
      }
    },
    // watch: {
    //   hour: {
    //     handler(newVal) {
    //       if(newVal) {
    //         // console.log(newVal)
    //         this.hourChange = true 
    //         let setTIme = setTimeout(()=>{
    //           this.hourChange = false
    //           clearTimeout(setTIme)
    //         },400)
    //       }
    //     },
    //     deep:true,
    //     immediate: true
    //   },
    //   min: {
    //     handler(newVal) {
    //       if(newVal) {
    //         // console.log(newVal)
    //         this.minChange = true 
    //         let setTIme = setTimeout(()=>{
    //           this.minChange = false
    //           clearTimeout(setTIme)
    //         },400)
    //       }
    //     },
    //     deep:true,
    //     immediate: true
    //   }
    // },
    methods: {
      scrollTop() {
        console.log(this.hour[this.countHr+2], this.countHr)
        // if(this.hour[this.countHr+2] !== '0' && this.countHr-2 > 0) { 
        // console.log(this.countHr)
        if(this.countHr !== 1) {
          this.selectedHr = this.hour[this.countHr-1]
          this.countHr--
          const element = document.getElementById("hour");
          element.scrollTop -=28
        }
        // }
      },
      scrollDown() {
        // this.hour[this.countHr+2].length !== '0'
        if(this.countHr <= 12) {
          this.selectedHr = this.hour[this.countHr+1]
          this.countHr++
          const element = document.getElementById("hour");
          element.scrollTop +=28
        } 
        
      },
      scrollminTop() {
        console.log(this.min[this.countMin+2], this.countMin)
        // if(this.hour[this.countHr+2] !== '0' && this.countHr-2 > 0) { 
        // console.log(this.countHr)
        if(this.countMin !== 1) {
          this.selectedMin = this.min[this.countMin-1]
          this.countMin--
          const element = document.getElementById("min");
          element.scrollTop -=28
        }
        // }
      },
      scrollminDown() {
        console.log(this.min[this.countMin-2], this.countMin)
        // this.hour[this.countHr+2].length !== '0'
        if(this.countMin <= 56) {
          this.selectedMin = this.min[this.countMin+1]
          this.countMin++
          const element = document.getElementById("min");
          element.scrollTop +=28
        } 
        
      },


      openTimePicker() {   
        this.isTime = !this.isTime
      },
      save() {
        this.time.hour = this.selectedHr
        this.time.min = this.selectedMin
        this.isTime = false
        this.convertTo24hr()
      },
      convertTo24hr() {
        console.log(this.time)
        if(this.time.hour === 12 && this.format === 'AM') {
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
        this.selectedHr = 0
        this.selectedMin = 0
        this.format = ''
        this.isTime = false
      }
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
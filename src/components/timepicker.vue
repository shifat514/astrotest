<template>
  <div class="flex justify-center text-lg text-primary ">
    <div
      v-if="isTime"
      class="mt-6 flex justify-center"
    > 
      <div class=" bg-white relative h-[300px] w-[280px] gap-x-2 rounded-2xl px-2 py-6">
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
                    src="/assets/dropdown.svg"
                    alt=""
                  >
                </button> 
              </div>
              <div
                id="hour"
                class="text-lg w-[80px] h-[83px] overflow-hidden no-scrollbar snap-y  scroll-smooth transform transition ease-in-out cursor-pointer"
                @click="showHours"
              >  
                <div
                  v-for="(item,index) in hour"
                  :key="index"
                >
                  <div 
                    class="flex justify-center" 
                    :class="selectedHr === item ? 'text-xl   scale-150 duration-500':'duration-1000 scale-75 text-secondary'"
                  > 
                    {{ item }}
                  </div>
                </div>
              </div>
              <!--hour modal-->
              <div
                v-if="showHrOptions == true"
                class="bg-white w-[150px] h-[190px] rounded-lg absolute top-5 left-2 drop-shadow-[0_0px_10px_rgba(0,0,0,0.05)] text-primary z-50"
              >
                <div class="flex justify-between p-2 "> 
                  <div class="">
                    hours
                  </div>
                  <button
                    @click="showHrOptions = false"
                  >
                    <img
                      src="/assets/cross.svg"
                      alt=""
                    >
                  </button>
                </div>
                <hr class=" mx-2">
                <div class="text-secondary m-3 text-3xl grid grid-cols-2 gap-2"> 
                  <button
                    v-for="(item) in hourShort"
                    :key="item"
                    class="hover:text-primary transform transition ease-in-out duration-200 hover:scale-125"
                    @click="pickHour(item)"
                  >
                    {{ item }}
                  </button>
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
                    src="/assets/dropdown.svg"
                    alt=""
                  >
                </button> 
              </div>
            </div>
          </div>
          <div class="flex justify-center items-center text-3xl">
            :
          </div>
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
                    src="/assets/dropdown.svg"
                    alt=""
                  >
                </button> 
              </div>
              <div
                id="min"
                class="text-lg w-[80px] h-[83px] overflow-hidden no-scrollbar snap-y  scroll-smooth transform transition ease-in-out cursor-pointer"
                @click="showMin"
              > 
                <div
                  v-for="(item,index) in min"
                  :key="index"
                >
                  <div
                    class="flex justify-center"
                    :class="selectedMin === item ? 'text-xl   scale-150 duration-500 ':'duration-1000 scale-75 text-secondary'"
                  > 
                    {{ item }}
                  </div>
                </div>
              </div>
              <!--min modal-->
              <div
                v-if="showMinOptions == true"
                class="bg-white w-[190px] h-[200px] rounded-lg absolute top-5 right-2 drop-shadow-[0_0px_10px_rgba(0,0,0,0.05)] text-primary z-50"
              >
                <div class="flex justify-between p-2 "> 
                  <div class="">
                    mins
                  </div>
                  <button
                    @click="showMinOptions = false"
                  >
                    <img
                      src="/assets/cross.svg"
                      alt=""
                    >
                  </button>
                </div>
                <hr class=" mx-2">
                <div class="text-secondary m-3 text-3xl grid grid-cols-2 gap-2"> 
                  <button
                    v-for="(item,index) in minShort"
                    :key="index+'min'"
                    class="hover:text-primary transform transition ease-in-out duration-200 hover:scale-125"
                    @click="pickMin(item)"
                  >
                    {{ item }}
                  </button>
                </div>
              </div>
              <div class="my-4 flex justify-center"> 
                <button
                  :class="countMin === 57 ? 'opacity-25 hover-none cursor-default': 'hover:scale-125'"
                  :disabled="countMin === 57 ? true: false"
                  @click="scrollminDown"
                >
                  <img
                    class="hover:scale-125 transform transition ease-in-out duration-200"
                    src="/assets/dropdown.svg"
                    alt=""
                  >
                </button> 
              </div>
            </div>
          </div>
          <div class="mt-16">
            <div class="transform transition ease-in-out"> 
              <button
                :class="format === 'AM' ? 'text-primary scale-100 duration-300' : 'text-secondary scale-75' "
                class=" px-2 p-1 rounded text-base"
                @click="format = 'AM'"
              >
                AM
              </button>
            </div>
            <div> 
              <button
                class="px-2 p-1 rounded transform transition ease-in-out text-base"
                :class="format === 'PM' ? 'text-primary scale-100 duration-300' : 'text-secondary scale-75' "
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
</template>
<script>
  export default {
    components: {
    },
    emits: ['time'],
    data () {
      return {
        vueTime: null,
        isTime: true,
        countHr: 1,
        countMin: 1,
        selectedHr: '0',
        selectedMin:'00',
        hourShort:['0','1','3','6','9','12'],
        minShort:['00','10','20','30','40','50'],
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
        timeStr: '',
        showHrOptions: false,
        showMinOptions: false,
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
    methods: {
      showHours() {
        this.showHrOptions = !this.showHrOptions
      },
      showMin() {
        this.showMinOptions = !this.showMinOptions
      },
      pickHour(el) {
        this.countHr = parseInt(el)+1 // countHr is increased by one cz
        console.group('count HR',this.countHr);
        const element = document.getElementById("hour");
        element.scrollTop = parseInt(el)*28
        this.selectedHr = el
        this.showHrOptions = false
      },
      pickMin(el) {
        console.log(el)
        let found = this.min.indexOf(el)-1
        console.log(found)
        console.log('element from min',parseInt(el),'countmin',this.countMin)
        this.countMin = parseInt(el)+1
        console.log(this.countMin)
        const element = document.getElementById("min")
        element.scrollTop = found*28
        console.log(element.scrollTop)
        this.selectedMin = el
        this.showMinOptions = false
      },
      scrollTop() {
        console.group('count HR',this.countHr);

        if(this.countHr !== 1) {
          this.countHr--
          this.selectedHr = this.hour[this.countHr]
          const element = document.getElementById("hour");
          element.scrollTop -=28
        }
      },
      scrollDown() {
        console.group('count HR',this.countHr);

        // this.hour[this.countHr+2].length !== '0'
        if(this.countHr <= 12) {
          this.countHr++
          this.selectedHr = this.hour[this.countHr] 
          const element = document.getElementById("hour");
          element.scrollTop +=28
        } 
        
      },
      /// fix issue here
      scrollminTop() {
        console.log(this.countMin)
        if(this.countMin !== 1) {
          this.countMin--
          this.selectedMin = this.min[this.countMin]
          console.log(this.selectedMin)
          const element = document.getElementById("min");
          element.scrollTop -=28
        }
      },
      scrollminDown() {
        console.log(this.countMin)
        if(this.countMin <= 56) {
          this.countMin++
          this.selectedMin = this.min[this.countMin-3]
          console.log(this.selectedMin)
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
        this.selectedHr = '0'
        this.selectedMin  = '00'
        this.countHr = 1
        this.countMin = 1
        this.$emit('time',this.time)
      },
      convertTo24hr() {
        if(this.time.hour === '12' && this.format === 'AM') {
          this.time.hour = '00'
        }
        if(this.time.hour !== '12' && this.format === 'PM') {
          let hour = parseInt(this.time.hour)
          let selectHr =  parseInt(this.selectedHr)
          selectHr = hour + 12
          selectHr = selectHr.toString()
          this.time.hour = selectHr 
        }
      },
      cancel() {
        this.selectedHr = '0'
        this.selectedMin = '00'
        this.format = ''
        this.isTime = false
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
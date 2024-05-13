<template>
    <div class="flex justify-center items-center mt-1/2">
        <div>
            <div class="text-black">
              Start Time: {{ time }}
            </div>
            <div class="">
                <div class="relative">
                    <div>
                        <div class="absolute top-4 left-4">
                            <svg width="28" height="28" viewBox="0 0 24 24" fill="#ffffff" xmlns="http://www.w3.org/2000/svg">
                                <path d="M21 10H3M16 2V6M8 2V6M7.8 22H16.2C17.8802 22 18.7202 22 19.362 21.673C19.9265 21.3854 20.3854 20.9265 20.673 20.362C21 19.7202 21 18.8802 21 17.2V8.8C21 7.11984 21 6.27976 20.673 5.63803C20.3854 5.07354 19.9265 4.6146 19.362 4.32698C18.7202 4 17.8802 4 16.2 4H7.8C6.11984 4 5.27976 4 4.63803 4.32698C4.07354 4.6146 3.6146 5.07354 3.32698 5.63803C3 6.27976 3 7.11984 3 8.8V17.2C3 18.8802 3 19.7202 3.32698 20.362C3.6146 20.9265 4.07354 21.3854 4.63803 21.673C5.27976 22 6.11984 22 7.8 22Z" stroke="currentColor" stroke-width="2" stroke-linecap="round" stroke-linejoin="round"/>
                            </svg>
                        </div>
                            <input 
                                  type="text"
                                  v-model="showTime"
                                  placeholder="select time"
                                  class="border border-slate-600 bg-slate-900 text-slate-200 m-3 input p-2 pl-8 rounded disabled cursor-pointer"
                                  @click="openTimePicker"
                                  readonly
                            />
                        </div>
                    </div>
                    <div  v-if="isTime === true" class="text-white bg-slate-900 border border-gray-600 rounded p-2 absolute">
                        <div class="flex justify-center gap-x-12 items-center p-8">
                            <div class="flex  items-center gap-x-4 ">
                                <div class="flex  gap-x-10 items-center ">
                                    <div class="flex justify-center items-center flex-col gap-y-4">
                                        <button @click="incHr" class=" rounded cursor-pointer text-xl px-2 h-10 w-10 flex justify-center items-center">+</button>
                                        <input v-model="hour" class="bg-inherit border border-slate-600 w-10 text-2xl text-center rounded"/>
                                        <button @click="decHr" class=" rounded cursor-pointer text-xl px-2 h-10 w-10 flex justify-center items-center">-</button>
                                    </div>
                                    <div class="text-4xl">:</div>
                                    <div class="flex justify-center items-center  flex-col gap-y-4">
                                        <button @click="incMin" class="rounded cursor-pointer text-xl px-2 h-10 w-10 flex justify-center items-center">+</button>
                                        <input v-model="min" class="bg-inherit border border-slate-600 w-10 text-2xl text-center rounded"/>
                                        <button @click="decMin"class=" rounded cursor-pointer text-xl px-2 h-10 w-10 flex justify-center items-center">-</button>
                                    </div>
                                </div>
                            </div>
                            <div class="flex flex-col gap-y-4">
                                <button @click="format = 'am'" :class="format === 'am' ? 'bg-blue-400' : '' " class=" px-2 p-1 rounded text-base">am</button>
                                <button @click="format = 'pm'" :class="format === 'pm' ? 'bg-blue-400' : '' "  class="px-2 p-1 rounded text-base">pm</button>
                            </div>
                        </div>
                        <div class="flex justify-end gap-x-4">
                            <div>
                                <button @click="cancel" class="bg-slate-700 p-2 rounded text-sm">cancel</button>
                            </div>
                            <div>
                                <button :class="hour === 0 || min === 0 || format === '' ? 'disabled bg-slate-300': ''" @click="save"class="bg-green-700 px-3 py-2 rounded text-sm">save</button>
                            </div>
                        </div>
                    </div>
            </div>
        </div>
       
    </div>
</template>

<script>
import VueDatePicker from '@vuepic/vue-datepicker';
export default {
    components: {
        VueDatePicker
    },
    data () {
        return {
            vueTime: null,
            isTime: false,
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

<style >

</style>
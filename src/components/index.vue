<template>
  <div>
    <div class="mt-2 flex justify-center">
      <div>
        <input 
          v-model="message"
          type="text"
          placeholder="send message"
          class=" bg-white text-primary m-3 appearance-none focus-none outline-none input p-2 pl-10 rounded-lg disabled cursor-pointer"
          @click="openTimePicker"
        >
        <div class="flex justify-center">
          <button
            class="text-primary p-2 border-4 border-primary rounded-lg"
            @click="connect()"
          >
            connect websocket
          </button>
        </div>
        <div class="mt-2 text-primary">
          From server: {{ serverMsg }}
        </div>
      </div>
    </div>
  </div>
</template>

<script>
  export default {
    data() {
      return {
        message:'',
        serverMsg:''
      }
    },
    mounted() {
      
    },
    methods: {
      connect() {
        this.serverMsg = ""
        let exampleSocket = new WebSocket("ws://localhost:8080")
        exampleSocket.onopen = () => {
          exampleSocket.send(this.message);
          this.message=""
        };
        exampleSocket.onmessage = (event) => {
          this.serverMsg = event.data
        };
      }
    }
  }

</script>

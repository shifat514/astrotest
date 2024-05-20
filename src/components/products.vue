<template>
  <div class="text-primary  ">
    <div class="mt-4 p-4">
      Products
    </div>
    <div
      v-for="(item,index) in products"
      :key="index"
    >
      <a :href="`/products/${item.id}`">
        <div class="cursor-pointer border-4 border-primary rounded-lg m-4 p-4 flex justify-center w-[300px]"> 
          {{ item.title }}
        </div>
      </a>
    </div>
    <div> 
      <input 
        id="inputfile"
        type="file"
        accept=".csv"
        @change="extractData"
      >
      <pre id="output"> file content will appear here  </pre>
    </div>
  </div>
</template>

<script>
  export default {
    data() {
      return {
        products: [
          {   id: "121",
              title: "Iphone 13 pro",
              price: 87000,
              description:'Lorem ipsum dolor sit amet consectetur adipisicing elit. Harum commodi ea facilis dignissimos rem eligendi dolor quam dolorum unde. Numquam, maiores expedita! Commodi consectetur impedit, quisquam eius dicta aperiam enim!x'
          },
          {   
            id: "122",
            title: "Iphone 14 pro",
            price: 97000,
            description:'Lorem ipsum dolor sit amet consectetur adipisicing elit. Harum commodi ea facilis dignissimos rem eligendi dolor quam dolorum unde. Numquam, maiores expedita! Commodi consectetur impedit, quisquam eius dicta aperiam enim!x'
          },
          {
            id: "123",
            title: "Iphone 15 pro",
            price:117000,
            description:'Lorem ipsum dolor sit amet consectetur adipisicing elit. Harum commodi ea facilis dignissimos rem eligendi dolor quam dolorum unde. Numquam, maiores expedita! Commodi consectetur impedit, quisquam eius dicta aperiam enim!x'
          },
        ]
      }
    },
    methods: {
      readfile (fileInput) {
        const reader = new FileReader()
        reader.onload = () => {
          document.getElementById('output').innerHTML = reader.result
        }
        // start reading the file. When it is done, calls the onload event defined above.
        reader.readAsText(fileInput.files[0])
      },
      extractData() {
        const fileInput = document.getElementById('inputfile')
        fileInput.addEventListener('change', this.readfile(fileInput))
      }
    }
  }
</script>

<style lang="scss" scoped>

</style>
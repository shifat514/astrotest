<template>
  <div class="border-4 border-white p-4 rounded-lg w-[300px]">
    <div>
      {{ product.title }}
    </div>
    <div>
      {{ product.description }}
    </div>
    <div>
      {{ product.price }} BDT
    </div>
    <div class="flex justify-end">
      <a href="/products/">
        <div class="border-2 border-white p-2 m-2 rounded-lg">
          Go back
        </div>
      </a>
    </div>
  </div>
</template>

<script>
  export default {
    props: {
      id: {
        type: String,
        default: ""
      }
    },
    data() {
      return {
        product: null,
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
    watch: {
      id: {
        handler(newVal) {
          if(newVal) {
            this.products.map((el)=>{
              if(el.id == this.id) {
                this.product = el
              }
            })  
          }
        },
        deep: true,
        immediate: true,
      }
    },
  }
</script>

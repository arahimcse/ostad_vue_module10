<script>
import { ref, onBeforeMount } from 'vue'
import axios from 'axios'

export default {
  setup() {
    // Create reactive data
    const products = ref({})
    const isLoading = ref(true)

    // Method
    async function getProducts() {
      try {
        const response = await axios.get(`https://dummyjson.com/products?limit=50`)
        if (response.status == 200) {
          products.value = response.data.products
        } else {
          isLoading.value = false;
        }
      } catch (error) {
        isLoading.value = false
      }
    }

    // Lifecycle hook
    onBeforeMount(() => {
      getProducts();
    })

    // Return data and methods to be used in the template
    return {
      products,
      isLoading,
    };
  },
};
</script>
<template>
  <template v-if="isLoading">
    <div class="flex flex-row w-full justify-center items-center bg-gray-300">
      <h1 class="text-2xl py-[20px] ">Welcome to our Latest Products</h1>
    </div>
    <article class="w-[24.50%] bg-gray-500 text-white my-[5px] mr-[0.125%] border-yellow-200 border-[2px]"
      v-for="product in products " :key="product.id">
      <img class="w-full h-52" :src="product.thumbnail" :alt="product.title">
      <div class="product-body flex flex-row py-[5px] justify-between items-center">
        <span class="w-[70%] pl-[5px]">{{ product.title }}-${{ product.price }}</span>
        <span class="w-[30%] bg-orange-500 p-[3px] rounded-[10px] text-sm text-center"><router-link
            :to="{ name: 'product', params: { id: product.id } }">View Details</router-link></span>
      </div>
    </article>
  </template>
  <div v-else class="flex flex-col justify-center items-center w-full">
    <h1 class="text-3xl ">Loading...</h1>
  </div>
</template>

<style scoped></style>

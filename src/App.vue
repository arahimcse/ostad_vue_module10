<script ></script>

<template>

  <header class="bg-black border-b-light-100 border-b h-20 text-white justify-center flex p-5 text-2xl">Simple Shop
    Website with Vue Router</header>
  <section class="flex flex-row justify-between">
    <!-- Navigation Bar Area -->
    <router-view name="navbar"></router-view>
    <main class="w-[83.50%] min-h-screen flex flex-row flex-wrap justify-start">
      <router-view></router-view>
    </main>
  </section>

  <footer class="w-full bg-gray-500 h-12 flex flex-row justify-center items-center">
    <p>All right reserved<span>&#64;</span> Abdur Rahim</p>
  </footer>
  
</template>

<style scoped></style>

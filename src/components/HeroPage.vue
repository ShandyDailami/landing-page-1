<script setup>
const logo = 'Roofpro';

const isBtnDisabled = false;

</script>
<template>
  <nav class="grid grid-cols-[auto_auto_auto] justify-between px-5 py-2 font-[Poppins]">
    <h1 class="font-bold text-4xl">{{ logo }}</h1>
    <div class="flex gap-4 items-center">
      <a href="">Home</a>
      <a href="">About Us</a>
      <a href="">Pages</a>
      <a href="">Service</a>
      <a href="">Blog</a>
      <a href="">Contacts Us</a>
    </div>
    <button :disabled="isBtnDisabled"
      class="flex items-center text-white bg-orange-500 p-2 rounded-md hover:bg-orange-400 hover:cursor-pointer disabled:bg-orange-300">
      <AppIcon icon="ic:baseline-phone" width="24" height="24" /> +123-456-789
    </button>
  </nav>
  <main class="px-3 mb-2">
    <div
      class="bg-[url(../assets/images/human.jpg)] px-[5%] py-[4%] bg-cover rounded-md bg-center h-[90vh] grid grid-cols-[auto] items-end justify-center">
      <div class="grid grid-cols-[60%_40%] p-5 bg-white rounded-md">
        <div class="flex flex-col">
          <p class="text-sm"><span class="p-1 rounded-sm bg-orange-100 text-orange-600 inline-block">AFFORDABLE,
              RELIABLE, AND BUILT TO LAST</span></p>
          <h1 class="text-6xl font-bold">Strong Durable and Affordable Roofing</h1>
        </div>
        <div class="flex flex-col items-start justify-center gap-4">
          <p class="text-sm text-gray-400">Lorem ipsum dolor sit amet, consectetur adipisicing elit. Ducimus, mollitia
            ex commodi similique, error neque libero quaerat in laboriosam, et reiciendis deleniti illum voluptatum
            cupiditate maxime ea officia. Dolore, repellendus.</p>
          <button class="text-white bg-orange-500 px-4 py-2 rounded-md">SCHEDULE YOUR ROOF REPAIR</button>
        </div>
      </div>
    </div>
  </main>
</template>


<style scoped>
.redText {
  color: red
}
</style>

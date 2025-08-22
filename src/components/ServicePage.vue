<template>
  <section class="flex flex-col justify-center items-center text-center h-[100vh] bg-slate-100 gap-4">
    <p class="text-sm"><span class="py-1 px-2 text-orange-600 bg-orange-100 rounded-sm">OUR SERVICE</span></p>
    <h1 class="font-bold text-5xl">Protect Your Home with <br> Our Roofing Service</h1>
    <div class="grid grid-cols-[35%_65%] px-[6%] gap-6">
      <div class="flex items-center h-[70px] px-2 bg-white rounded-sm gap-4 hover:bg-orange-500">
        <AppIcon class="bg-slate-100 rounded-full p-2" icon="ic:baseline-assessment" width="50" height="50" />
        <span class="font-semibold">Storm
          Damage
          Assessment</span>
      </div>
      <div class="flex bg-white">
        <img src="../assets/images/service1.jpg" class="h-[150px]" alt="">
        <div>
          <h2>Asphalt Shingle Roofing</h2>
          <p>Lorem ipsum dolor sit amet consectetur adipisicing elit. Sunt tenetur dolorem sint error quae assumenda
            aliquam unde reiciendis numquam repellendus?</p>
          <div>Gutter Installation and Maintenance</div>
          <div>Skylight Installation and Repais</div>
          <div>Chimey Flashing and Repair</div>
        </div>
      </div>
    </div>
  </section>
</template>

<script>
export default {
  setup() {


    return {}
  }
}
</script>

<style scoped></style>

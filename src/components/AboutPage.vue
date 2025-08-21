<template>
  <section class="h-[100vh] grid grid-cols-[auto] px-[6%] items-center">
    <div class="grid grid-cols-[45%_25%_30%] gap-4">

      <div class="flex flex-col items-start gap-4">
        <p class="text-sm"><span class="py-1 px-2 bg-orange-100 text-orange-600 rounded-sm">ABOUT US</span></p>
        <h1 class="text-5xl font-bold">Transforming Homes with Quality Roofing Solutions</h1>
        <p class="text-sm text-gray-400">Lorem ipsum dolor sit amet consectetur adipisicing elit. Dolore doloremque
          distinctio ut facere temporibus
          optio explicabo corporis consectetur modi harum.</p>
        <button class="bg-orange-500 text-white p-2 rounded-md">LEARN MORE</button>
      </div>
      <img class="h-full object-cover rounded-sm" src="../assets/images/action.jpg" alt="Action">
      <div class="pr-5 flex flex-col gap-2">
        <details
          class="bg-slate-100 open:bg-orange-500 open:text-white px-4 py-3 rounded-sm  transition-colors duration-300 ease-in-out">
          <summary class="list-none flex justify-between cursor-pointer items-center">
            <span class="font-bold text-2xl">Our Mission</span>
            <AppIcon class="transition-transform duration-300" icon="ri:arrow-down-s-line" width="24" height="24" />
          </summary>
          <div class="p-1">
            <p>Lorem ipsum dolor sit amet consectetur adipisicing elit. Necessitatibus tenetur amet quod, recusandae
              odio
              quia aut vero illum cupiditate aperiam.</p>
          </div>
        </details>
        <details
          class="bg-slate-100 open:bg-orange-500 open:text-white px-4 py-3 rounded-sm  transition-colors duration-300 ease-in-out">
          <summary class="list-none flex justify-between cursor-pointer items-center">
            <span class="font-bold text-2xl">Our Vision</span>
            <AppIcon class="transition-transform duration-300" icon="ri:arrow-down-s-line" width="24" height="24" />
          </summary>
          <div class="p-1">
            <p>Lorem ipsum dolor sit amet consectetur adipisicing elit. Necessitatibus tenetur amet quod, recusandae
              odio
              quia aut vero illum cupiditate aperiam.</p>
          </div>
        </details>
        <details
          class="bg-slate-100 open:bg-orange-500 open:text-white px-4 py-3 rounded-sm  transition-colors duration-300 ease-in-out">
          <summary class="list-none flex justify-between cursor-pointer items-center">
            <span class="font-bold text-2xl">Our Value</span>
            <AppIcon class="transition-transform duration-300" icon="ri:arrow-down-s-line" width="24" height="24" />
          </summary>
          <div class="p-1">
            <p>Lorem ipsum dolor sit amet consectetur adipisicing elit. Necessitatibus tenetur amet quod, recusandae
              odio
              quia aut vero illum cupiditate aperiam.</p>
          </div>
        </details>

      </div>
    </div>
  </section>
</template>

<script>

</script>

<style scoped></style>

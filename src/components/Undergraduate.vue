<script setup>
import { RouterLink } from "vue-router";
</script>

<template>
  <div class="min-h-screen min-w-full  ">
    <div class="p-[20px] font-serif flex flex-col items-center mt-10">
      <div>Notes:</div>
      <RouterLink to="/database">
        <div
          class="w-[800px] hover:bg-zinc-200 bg-zinc-100 border p-[12px] text-[18px] "
        >
          <p class="">Database</p>
          <h6 class="text-sm">description</h6>
        </div>
      </RouterLink>

      <RouterLink to="/business">
        <div
          class=" w-[800px] hover:bg-zinc-200 bg-zinc-100 border p-[12px] text-[18px] "
        >
          <p class="">Business</p>
          <h6 class="text-sm">description</h6>
        </div></RouterLink
      >

      <RouterLink to="/eop">
        <div
          class="w-[800px] hover:bg-zinc-200 bg-zinc-100 border p-[12px] text-[18px] "
        >
          <p class="">Element of programming</p>
          <h6 class="text-sm">description</h6>
        </div></RouterLink
      >
      <RouterLink to="/mathcomp">
        <div
          class="w-[800px] hover:bg-zinc-200 bg-zinc-100 border p-[12px] text-[18px] "
        >
          <p class="">Mathematic computing</p>
          <h6 class="text-sm">description</h6>
        </div></RouterLink
      >
    </div>
  </div>
</template>

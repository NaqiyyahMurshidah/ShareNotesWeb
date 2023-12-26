<script setup>
import { RouterLink } from "vue-router";
</script>

<template>
  <div class="min-h-screen min-w-full ">
    <div
      class="p-[20px] font-serif flex flex-col items-center mt-10"
    >
    <div > Notes: </div>
      <RouterLink to="/math">
        <div
          class="w-[800px] hover:bg-zinc-200 bg-zinc-100 border p-[12px] text-[18px]"
        >
          <p class="">
            Mathematic
          </p>
          <h6 class="text-sm"> description </h6>
        </div>
      </RouterLink>

      <RouterLink to="/historyy">
        <div
          class="w-[800px] hover:bg-zinc-200 bg-zinc-100 border p-[12px] text-[18px]"
        >
          <p class="">
            History
          </p>
          <h6 class="text-sm"> description </h6>
        </div></RouterLink
      >

      <RouterLink to="/chemistry">
        <div
          class="w-[800px] hover:bg-zinc-200 bg-zinc-100 border p-[12px] text-[18px]"
        >
          <p class="">
            Chemistry
          </p>
          <h6 class="text-sm"> description </h6>
        </div></RouterLink
      >
      <RouterLink to="/biology">
        <div
          class="w-[800px] hover:bg-zinc-200 bg-zinc-100 border p-[12px] text-[18px]"
        >
          <p class="">
            Biology
          </p>
          <h6 class="text-sm"> description </h6>
        </div></RouterLink
      >
    </div>
  </div>
</template>

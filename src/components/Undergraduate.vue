<script setup>
import { RouterLink } from "vue-router";
</script>

<template>
  <div class="min-h-screen min-w-full bg-yellow-100">
    <div
      class="flex flex-row flex-wrap justify-center p-[9rem] gap-20 text-center"
    >
      <RouterLink to="/database">
        <div
          class="rounded-full bg-gray-200 border border-black hover:bg-purple-300 active:bg-purple-900 h[200px] w-[190px] h-full"
        >
          <p class="px-[30px] py-[75px] font-serif font-bold text-xl">
            Database
          </p>
        </div>
      </RouterLink>

      <RouterLink to="/business">
        <div
          class="rounded-full bg-gray-200 border border-black hover:bg-pink-300 active:bg-pink-900 h-[200px] w-[190px]"
        >
          <p class="px-[55px] py-[75px] font-serif font-bold text-xl">
            Business
          </p>
        </div></RouterLink
      >

      <RouterLink to="/eop">
        <div
          class="rounded-full bg-gray-200 border border-black hover:bg-red-300 active:bg-red-900 h-[200px] w-[190px]"
        >
          <p class="px-[30px] py-[75px] font-serif font-bold text-xl">
            Element of programming
          </p>
        </div></RouterLink
      >
      <RouterLink to="/mathcomp">
        <div
          class="rounded-full bg-gray-200 border border-black hover:bg-green-300 active:bg-green-900 h-[200px] w-[190px]"
        >
          <p
            class="px-[30px] py-[75px] font-serif font-bold text-xl text-center"
          >
            Mathematic computing
          </p>
        </div></RouterLink
      >
    </div>
  </div>
</template>

<script setup>
import { RouterLink } from "vue-router";
</script>

<template>
  <div
    class="bg-gradient-to-b to-[#0D1720] via-[#244560] from-[#3D7AAC] h-screen justify-center items-center flex flex-col"
  >
    <div class="text-white flex justify-center flex-col items-center gap-10">
      <h1 class="text-3xl font-bold">Welcome to ShareNotes!</h1>
      <p class="text-center">
        Welcome to Our Study Hub! Search for cheatsheets,<br />
        revision questions, and comprehensive notes all in one place.
      </p>
    </div>
    <RouterLink to="/file">
      <button
        class="bg-[#0C1924] text-gray-100 m-16 px-10 py-1 text-xl hover:bg-slate-500"
      >
        Start
      </button>
    </RouterLink>
  </div>
</template>

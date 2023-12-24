<script setup></script>

<template>
  <div class="min-h-screen min-w-full bg-yellow-100">
    <div class="flex flex-row flex-wrap justify-center p-[9rem] gap-20">
      <RouterLink to="/math">
        <div
          class="rounded-full cursor-pointer bg-gray-200 border border-black hover:bg-purple-300 active:bg-purple-900 h[200px] w-[190px] h-full"
        >
          <p class="px-[30px] py-[75px] font-serif font-bold text-xl">
            Mathematic
          </p>
        </div></RouterLink
      >

      <RouterLink to="/historyy">
        <div
          class="rounded-full cursor-pointer bg-gray-200 border border-black hover:bg-pink-300 active:bg-pink-900 h-[200px] w-[190px]"
        >
          <p class="px-[55px] py-[75px] font-serif font-bold text-xl">
            History
          </p>
        </div></RouterLink
      >

      <RouterLink to="/chem">
        <div
          class="rounded-full cursor-pointer bg-gray-200 border border-black hover:bg-red-300 active:bg-red-900 h-[200px] w-[190px]"
        >
          <p class="px-[30px] py-[75px] font-serif font-bold text-xl">
            Chemistry
          </p>
        </div></RouterLink
      >

      <RouterLink to="/biology">
        <div
          class="rounded-full cursor-pointer bg-gray-200 border border-black hover:bg-green-300 active:bg-green-900 h-[200px] w-[190px]"
        >
          <p
            class="px-[30px] py-[75px] font-serif font-bold text-xl text-center"
          >
            Biology
          </p>
        </div></RouterLink
      >
      <RouterLink to="/phys">
        <div
          class="rounded-full cursor-pointer bg-gray-200 border border-black hover:bg-blue-300 active:bg-blue-900 h-[200px] w-[190px]"
        >
          <p
            class="px-[30px] py-[75px] font-serif font-bold text-xl text-center"
          >
            Physics
          </p>
        </div></RouterLink
      >
    </div>
  </div>
</template>

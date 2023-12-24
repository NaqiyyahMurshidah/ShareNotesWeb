<script setup>
import { ref } from "vue"; //to box it if nks something count
let count = ref(0);
let inputValue = ref("");
let todos = ref([]);

function search() {}
</script>

<template>
  <div
    class="grid justify-items-center md:justify-items-center bg-yellow-100 h-screen"
  >
    <div class="flex flex-row justify-center items-center">
      <img
        src="C:\Users\User\Downloads\Sharing is love.png"
        object-contanin
        height="10"
        width="500rem"
        class=""
      />
    </div>

    <div class="flex flex-row gap-10">
      <RouterLink to="/highschool">
        <div>
          <div class="relative">
            <img
              src="C:\Users\User\Downloads\download__2_-removebg-preview.png"
              height="56"
              width="500rem"
              class="object-contain"
            />
            <div
              class="absolute top-0 left-0 right-0 bottom-0 flex items-center justify-center"
            >
              <p class="font-serif font-semibold text-3xl">High School</p>
            </div>
          </div>
        </div>
      </RouterLink>
      <RouterLink to="/undergraduate">
        <div>
          <div class="relative">
            <img
              src="C:\Users\User\Downloads\download__2_-removebg-preview.png"
              height="56"
              width="500rem"
              class="object-contain"
            />
            <div
              class="absolute top-0 left-0 right-0 bottom-0 flex items-center justify-center"
            >
              <p class="font-serif font-semibold text-3xl">undergraduate</p>
            </div>
          </div>
        </div>
      </RouterLink>
    </div>
  </div>
</template>

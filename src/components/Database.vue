<script setup>
import PocketBase from "pocketbase";
import { ref, onMounted } from "vue";
const pb = new PocketBase("http://127.0.0.1:8090");
const recordList = ref([]);

onMounted(async () => {
  const records = await pb.collection("Notes").getFullList({
    sort: "-created",
  });
  if (records) {
    console.log("records: ", records);
    recordList.value = records;
  }
  
  if (recordList.value){
    console.log("recordList: ", recordList.value[0].collectionName);
  }
});
</script>

<template>
  <div class="bg-yellow-100 flex flex-col w-screen h-screen">
    <div class="p-5 flex flex-rowitems-center justify-center">
      <input
        type="text"
        placeholder="search"
        class="rounded-l-full p-5 w-[50rem] bg-zinc-100 h-12 placeholder-zinc-900"
      />
      <svg
        xmlns="http://www.w3.org/2000/svg"
        viewBox="0 0 20 20"
        fill="currentColor"
        class="w-[3rem] h-12 p-3 bg-zinc-300 rounded-r-full"
      >
        <path
          fill-rule="evenodd"
          d="M9 3.5a5.5 5.5 0 1 0 0 11 5.5 5.5 0 0 0 0-11ZM2 9a7 7 0 1 1 12.452 4.391l3.328 3.329a.75.75 0 1 1-1.06 1.06l-3.329-3.328A7 7 0 0 1 2 9Z"
          clip-rule="evenodd"
        />
      </svg>
    </div>

    <div class="flex flex-row gap-2 items-center justify-center">
      <div
        class="bg-zinc-200 rounded-full hover:bg-zinc-300 p-3 text-center w-[10rem]"
      >
        SQL intro
      </div>
      <div
        class="bg-zinc-200 rounded-full hover:bg-zinc-300 p-3 text-center w-[10rem]"
      >
        form 2
      </div>
      <div
        class="bg-zinc-200 rounded-full hover:bg-zinc-300 p-3 text-center w-[10rem]"
      >
        form 3
      </div>
      <div
        class="bg-zinc-200 rounded-full hover:bg-zinc-300 p-3 text-center w-[10rem]"
      >
        form 4
      </div>
      <div
        class="bg-zinc-200 rounded-full hover:bg-zinc-300 p-3 text-center w-[10rem]"
      >
        Slides
      </div>
      <div
        class="bg-zinc-200 rounded-full hover:bg-zinc-300 p-3 text-center w-[10rem]"
      >
        Notes
      </div>
      <div
        class="bg-zinc-200 rounded-full hover:bg-zinc-300 p-3 text-center w-[10rem]"
      >
        exercise question
      </div>
    </div>

    <div class="flex-wrap flex flex-row items-center justify-center p-10">
      <div v-for="record in recordList" class="flex flex-row h-60 w-56 bg-zinc-300 rounded-2xl m-5">
      <p>{{ record.collectionName }}</p>
        <p>{{ record.Note_id }}</p>
         <p>{{ record.note_title }}</p></div>
    </div>
  </div>
</template>

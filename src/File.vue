<script setup>
import { ref, onMounted } from "vue";
import PocketBase from "pocketbase";

// Initialize PocketBase
const pb = new PocketBase("http://127.0.0.1:8090");

// Define reactive data
const years = ref([
  {
    id: 1,
    name: "Year 1",
    isOpen: false,
    courses: [
      "CSCI 1300",
      "CSCI 1301",
      "CSCI 1302",
      "CSCI 1303",
      "CSCI 1304",
      "CSCI 1305",
    ],
  },
  { id: 2, name: "Year 2", isOpen: false, courses: ["CSCI 2300"] },
  { id: 3, name: "Year 3", isOpen: false, courses: ["CSCI 3300"] },
  { id: 4, name: "Year 4", isOpen: false, courses: ["CSCI 4300"] },
]);

const files = ref([]);
const selectedFile = ref(null);

// Fetch files from PocketBase
const fetchFiles = async () => {
  try {
    const records = await pb.collection("CSCI_1300").getList(200);
    records.items.forEach((record) => {
      const file = record.category[0];
      files.value.push({
        id: file.id,
        Title: file.Title,
        Category: file.Category,
        path: `${record.collectionId}/${record.id}/${file.Title}`,
      });
    });
  } catch (error) {
    console.error("Error fetching records:", error);
  }
};

// Toggle the visibility of courses
const toggle = (index) => {
  years.value[index].isOpen = !years.value[index].isOpen;
};

//select a file to display
const selectFile = (file) => {
  selectedFile.value = file;
};

// Fetch files when the component is mounted
onMounted(() => {
  fetchFiles();
});
</script>

<template>
  <div class="flex flex-row bg-gray-200" id="app">
    <div class="Sidebar bg-[#0C1924] w-80 h-screen">
      <div
        v-for="(year, yearIndex) in years"
        :key="year.id"
        class="file1 text-gray-50 ml-10 mt-10 flex flex-row items-center gap-7"
      >
        <div class="flex flex-col">
          <div
            v-on:click="toggle(yearIndex)"
            class="flex flex-row items-center gap-7 hover:bg-slate-700 w-60 p-2 rounded-xl"
          >
            <div class="w-8 h-8 relative">
              <svg
                xmlns="http://www.w3.org/2000/svg"
                fill="none"
                viewBox="0 0 24 24"
                strokeWidth="{1.5}"
                stroke="currentColor"
                class="size-6 absolute inset-0 w-full h-full"
              >
                <path
                  strokeLinecap="round"
                  strokeLinejoin="round"
                  d="M2.25 12.75V12A2.25 2.25 0 0 1 4.5 9.75h15A2.25 2.25 0 0 1 21.75 12v.75m-8.69-6.44-2.12-2.12a1.5 1.5 0 0 0-1.061-.44H4.5A2.25 2.25 0 0 0 2.25 6v12a2.25 2.25 0 0 0 2.25 2.25h15A2.25 2.25 0 0 0 21.75 18V9a2.25 2.25 0 0 0-2.25-2.25h-5.379a1.5 1.5 0 0 1-1.06-.44Z"
                />
              </svg>
            </div>
            {{ year.name }}
            <div class="w-5 h-5 relative">
              <svg
                xmlns="http://www.w3.org/2000/svg"
                fill="none"
                viewBox="0 0 24 24"
                stroke-width="1.5"
                stroke="currentColor"
                class="size-6 absolute inset-0 w-full h-full"
              >
                <path
                  stroke-linecap="round"
                  stroke-linejoin="round"
                  d="m19.5 8.25-7.5 7.5-7.5-7.5"
                />
              </svg>
            </div>
          </div>
          <!-- the course -->
          <!-- v-for="(course, courseIndex) is the looping to get the index -->
          <div v-show="year.isOpen" class="courses">
            <div
              v-for="(course, courseIndex) in year.courses"
              :key="courseIndex"
              class="flex flex-row items-center gap-2 ml-10 pl-5 mt-2 transition duration-75"
            >
              <div class="h-5 w-5">
                <svg
                  xmlns="http://www.w3.org/2000/svg"
                  fill="none"
                  viewBox="0 0 24 24"
                  stroke-width="1.5"
                  stroke="currentColor"
                  class="size-6"
                >
                  <path
                    stroke-linecap="round"
                    stroke-linejoin="round"
                    d="M19.5 14.25v-2.625a3.375 3.375 0 0 0-3.375-3.375h-1.5A1.125 1.125 0 0 1 13.5 7.125v-1.5a3.375 3.375 0 0 0-3.375-3.375H8.25m2.25 0H5.625c-.621 0-1.125.504-1.125 1.125v17.25c0 .621.504 1.125 1.125 1.125h12.75c.621 0 1.125-.504 1.125-1.125V11.25a9 9 0 0 0-9-9Z"
                  />
                </svg>
              </div>
              <p class="text-[14px]" v-on:click="selectCourse(category)">
                {{ course }}
              </p>
            </div>
          </div>
        </div>
      </div>
    </div>
    <!-- the file section -->
    <div class="flex flex-col p-4">
      <div v-for="file in files" :key="file.id" class="mb-4">
        <a
          @click.prevent="selectFile(file)"
          href="#"
          class="text-blue-500 underline"
          >{{ file.Title }}</a
        >
      </div>
      <div v-if="selectedFile" class="file-viewer">
        <h3>{{ selectedFile.Title }}</h3>
        <!-- Display PDF -->
        <iframe
          v-if="selectedFile.Title.endsWith('.pdf')"
          :src="`http://localhost:8090/api/files/CSCI_1300/${selectedFile.id}/${selectedFile.Title}/${selectedFile.Category}`"
          width="600"
          height="800"
        ></iframe>
      </div>
    </div>
  </div>
</template>

<style scoped>
.file-viewer {
  margin-top: 20px;
}
</style>

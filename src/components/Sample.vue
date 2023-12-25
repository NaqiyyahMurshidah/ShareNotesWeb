<script setup>
import { ref } from "vue";
import PocketBase from "pocketbase";
let sendnote = ref([]);
const picUrl = ref("");
const Title = ref("");
const Author = ref("");
const subject = ref("");
const category = ref("");
const inputValue = ref("");
const file = ref("");

async function testUpload() {
  const pb = new PocketBase("http://127.0.0.1:8090");
  const formData = new FormData();

  const fileInput = document.getElementById("fileInput");
  for (let file of fileInput.files) {
    formData.append("documents", file);
  }

  formData.append("title", "Hello world!");

  // example create data
  const data = {
    Note_id: 123,
    note_title: Title.value,
    Author_name: Author.value,
    subject: subject.value,
    category: category.value,
    file: fileInput.value
  };

  const record = await pb.collection("Notes").create(data);

  alert("DONE!");
}

function handleChange(event) {
  console.log(event.target.value);
}
function sendNote() {
  Notes.value.push(inputValue.value);
  inputValue.value = "";
}
</script>

<template>
  <div
    class="min-h-screen flex justify-center items-center bg-yellow-100 w-full"
  >
    <div>
      <div class="flex flex-col pb-[200px] items-center justify-center">
        <div class="p-2 text-center bg-zinc-100 mt-20 mb-3 mx-10">
          <p class="font-bold text-[50px] font-serif">Add your notes</p>
        </div>

        <div class="grid justify-items-center">
          <form class="flex flex-col">
            <label for="Note Title" class="text-gray-900 font-bold font-serif">
              Note Title</label
            >
            <input
              v-model="Title"
              type="text"
              name="Notetitle"
              id="notetitle"
              class="border bg-transparent py-1.5 pl-1 text-black placeholder:text-gray-900 focus:ring-0 sm:text-sm sm:leading-6 border-gray-700"
              placeholder="Title"
              @input="(event) => (text = console.logevent.target.value)"
            />

            <div class="mt-5">
              <label
                for="Author"
                class="text-gray-900 font-bold font-serif leading-6"
              >
                Author</label
              >
              <input
                v-model="Author"
                type="text"
                name="Author"
                id="Author"
                class="flex-1 w-full border bg-transparent py-1.5 pl-1 text-black placeholder:text-gray-900 focus:ring-0 sm:text-sm sm:leading-6 border-gray-700"
                placeholder="Author name"
              />
            </div>
            <div class="mt-5">
              <label
                for="sub"
                class="text-gray-900 font-bold font-serif leading-6"
              >
                Subject</label
              >
              <input
                v-model="subject"
                type="text"
                name="subject"
                id="sub"
                class="w-full flex-1 border bg-transparent py-1.5 pl-1 text-black placeholder:text-gray-900 focus:ring-0 sm:text-sm sm:leading-6 border-gray-700"
                placeholder="Subject/course"
              />
            </div>
            <div class="mt-5">
              <label
                for="file"
                class="text-gray-900 font-bold font-serif leading-6"
              >
                Upload file</label
              >
              <input
                v-bind="fileInput"
                type="file"
                name="notefile"
                id="fileInput"
                class="block flex-1 border bg-transparent py-1.5 pl-1 text-black placeholder:text-gray-900 focus:ring-0 sm:text-sm sm:leading-6 border-gray-700"
                placeholder="Subject/course"
              />
            </div>
            <div class="mt-5">
              <label
                for="category"
                class="text-gray-900 font-bold font-serif leading-6"
              >
                Category *</label
              >
              <input
                v-model="category"
                type="text"
                name="Category"
                id="category"
                class="w-full flex-1 border bg-transparent py-1.5 pl-1 text-black placeholder:text-gray-900 focus:ring-0 sm:text-sm sm:leading-6 border-gray-700"
                placeholder="category"
              />
            </div>

            <input type="button" v-model="inputValue" />
            <button
              @click="testUpload"
              class="bg-zinc-300 text-black p-2 rounded-full hover:bg-zinc-400"
            >
              Submit
            </button>
            <ul>
              <li v-for="usernote in Notes">{{ usernote }}</li>
            </ul>
          </form>
        </div>
      </div>
    </div>
  </div>
</template>

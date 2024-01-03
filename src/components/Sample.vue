<script setup>
import { onMounted, ref } from "vue";
import PocketBase from "pocketbase";

const Title = ref("");
const Author = ref("");
const subject = ref("");
const category = ref("");
const inputValue = ref("");
let formData = new FormData();
function onFileChange(event) {
  console.log(event.target.files);
  formData.append("file", event.target.files[0]);
}
onMounted(() => {
  const fileInput = document.getElementById("fileInput");
  fileInput.addEventListener("change", function () {
    for (let file of fileInput.files) {
      formData.append("file", file);
      console.log(fileInput.files.length);
    }
  });
});

// listen to file input changes and add the selected files to the form data

async function testUpload() {
  const pb = new PocketBase("http://127.0.0.1:8090");
  //note_title
  //author_name
  //subject
  //category
  //file
  formData.append("note_title", Title.value);
  formData.append("author_name", Author.value);
  formData.append("subject", subject.value);
  formData.append("category", category.value);
  try {
    const record = await pb.collection("Notes").create(formData);
    alert("DONE!");
    console.log("record: ", record);

    // reset value after successful submission
     Title.value = "";
    Author.value = "";
    subject.value = "";
    category.value = "";
    inputValue.value = "";
    formData = new FormData();  //reset the formdata 

    //reset the file input after successful submission
    const fileInput = document.getElementById("fileInput");
    fileInput.value = null;

  } catch (e) {
    console.log(e);
    alert("ERROR! " + e);
  }
}

function handleChange(event) {
  console.log(event.target.value);
}
</script>

<template>
  <div
    class="bg-cover min-h-screen flex items-center justify-center"
    style="
      background-image: url(https://www.shutterstock.com/image-photo/soft-gradient-background-vibrant-blurred-260nw-2296727271.jpg);
      height: 800px;
      width: auto;
    "
  >
    <div class="min-h-screen flex justify-center items-center w-full">
      <div class="container flex justify-center">
        <div class="glassmorphism flex flex-col items-center justify-center">
          <div class=" text-center mt-8 rounded-xl mx-10">
            <p class="font-bold text-[40px]">Add your notes</p>
          </div>

          <div class="grid justify-items-center">
            <form
              @submit.prevent="testUpload"
              class=" transparent py-1.5 pl-1 text-black placeholder:text-gray-900 focus:ring-0 sm:text-sm sm:leading-6 border-gray-700"
            >
              <div>
                <label
                  for="Title"
                  class="text-gray-900 font-bold font-serif leading-6"
                >
                  Title</label
                >
                <input
                  v-model="Title"
                  type="text"
                  name="title"
                  id="Title"
                  class="flex-1 w-full border bg-transparent rounded-md py-1.5 pl-1 text-black placeholder:text-gray-900 focus:ring-0 sm:text-sm sm:leading-6 border-gray-700"
                  placeholder="Title"
                />
              </div>

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
                  name="author"
                  id="Author"
                  class="flex-1 w-full border bg-transparent rounded-md py-1.5 pl-1 text-black placeholder:text-gray-900 focus:ring-0 sm:text-sm sm:leading-6 border-gray-700"
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
                  class="w-full flex-1 border bg-transparent rounded-md py-1.5 pl-1 text-black placeholder:text-gray-900 focus:ring-0 sm:text-sm sm:leading-6 border-gray-700"
                  placeholder="Subject/course"
                />
              </div>
              <div class="mt-5">
                <label
                  for="category"
                  class="text-gray-900 font-bold font-serif leading-6"
                >
                  Category
                </label>
                <select
                  v-model="category"
                  type="text"
                  name="category"
                  id="category"
                  class="w-full flex-1 border bg-transparent rounded-md py-1.5 pl-1 text-black placeholder:text-gray-900 focus:ring-0 sm:text-sm sm:leading-6 border-gray-700"
                >
                  <option>High school</option>
                  <option>Undergraduate</option>
                </select>
              </div>
              <div class="mt-5">
                <label
                  for="file"
                  class="text-gray-900 font-bold font-serif leading-6"
                >
                  Upload file</label
                >
                <input
                  type="file"
                  @change="onFileChange($event)"
                  name="file"
                  id="fileInput"
                  class="block flex-1 border bg-transparent rounded-md py-1.5 pl-1 text-black placeholder:text-gray-900 focus:ring-0 sm:text-sm sm:leading-6 border-gray-700"
                  placeholder="Subject/course"
                  accept="application/pdf application/vnd.ms-excel application/msword application/vnd.openxmlformats-officedocument.wordprocessingml.document"
                />
              </div>
              <div class="p-3">
                <input type="button" v-model="inputValue" />
                <button
                  
                  class="bg-zinc-300 text-black p-2 px-28 rounded-md mt-8 hover:bg-zinc-400"
                >
                  Submit
                </button>
              </div>
            </form>
          </div>
        </div>
      </div>
    </div>
  </div>
</template>

<style>
.bgcolor {
  background-color: #fcd597;
}

.glassmorphism {
  width: 50%;
  height: 60%;
  border-top: 2px solid #ffffff75;
  border-left: 2px solid #ffffff75;
  box-shadow: 6px 10px 12px #00000035;
  background: #fbfcfc;
  border-radius: 15px;
  overflow: hidden;
  backdrop-filter: blur(4px);
}
</style>

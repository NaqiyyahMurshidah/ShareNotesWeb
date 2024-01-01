<script setup>
import { RouterLink } from "vue-router";
</script>

<template>
  <div
    class="h-screen flex items-center justify-center"
    style="
      background-image: url(https://i.pinimg.com/564x/0a/c3/11/0ac3115c5dc0ed953de8802f915f43ca.jpg);
      height: 800px;
      width: auto;
    "
  >
    <div
      class="bg-zinc-900 opacity-80 h-[30rem] w-[50rem] rounded-3xl text-white"
    >
      <div class="text-white text-3xl flex justify-center p-8">
        Welcome to share Notes!
      </div>
      <p class="px-9">
        your gateway to a collaborative learning experience! We're thrilled to
        have you join our community of eager minds. Here at ShareNotes, we
        believe in the power of shared knowledge, and we invite you to embark on
        a journey where learning becomes a collective effort."
      </p>
      <p class="px-9 pt-2">
        Dive into a world where students like you come together to share their
        insights, study materials, and helpful notes. Whether you're looking for
        that perfect study guide, insightful lecture notes, or simply want to
        contribute your expertise, ShareNotes is the place to be.
      </p>
      <p class="px-9 pt-2">
        go ahead, start exploring, sharing, and learning collaboratively.
        Welcome to ShareNotes – where the joy of knowledge is multiplied when
        shared!"
      </p>
      <div class="flex flex-row items-center justify-center">
        <button class="hover:transition ease-in-out delay-150">
        <RouterLink to="/highschool">
          <div
            class="mx-9 my-20 w-44 p-7 rounded-xl bg-zinc-200 flex items-center justify-center font-semibold text-black h-5"
          >
            High school
          </div></RouterLink
        ></button>
        <RouterLink to="/undergraduate">
          <div
            class="mx-9 my-20 w-44 p-7 rounded-xl bg-zinc-200 flex items-center justify-center font-semibold text-black h-5"
          >
            Undergraduate
          </div></RouterLink
        >
      </div>
    </div>
  </div>
</template>

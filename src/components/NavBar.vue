<script setup>
import { ref, onMounted } from "vue";

const aboutButton = ref(null);
const flyoutMenu = ref(null);
const contactButton = ref(null);
const flyoutContact = ref(null);

onMounted(() => {
  aboutButton.value = document.querySelector(".about-button");
  flyoutMenu.value = document.querySelector(".flyout-menu");

  if (aboutButton.value && flyoutMenu.value) {
    aboutButton.value.addEventListener("click", () => {
      const isExpanded =
        aboutButton.value.getAttribute("aria-expanded") === "true";
      aboutButton.value.setAttribute("aria-expanded", String(!isExpanded));
      flyoutMenu.value.classList.toggle("hidden", isExpanded);
    });

    // Initially hide the flyout
    flyoutMenu.value.classList.add("hidden");
  } else {
    console.error("About button or flyout menu not found.");
  }
});

onMounted(() => {
  contactButton.value = document.querySelector(".contact-button");
  flyoutContact.value = document.querySelector(".flyout-contact");

  if (contactButton.value && flyoutContact.value) {
    contactButton.value.addEventListener("click", () => {
      const isExpanded =
        contactButton.value.getAttribute("aria-expanded") == "true";
      contactButton.value.setAttribute("aria-expanded", String(!isExpanded));
      flyoutContact.value.classList.toggle("hidden", isExpanded);
    });
    //initially hide the flyout 
    flyoutContact.value.classList.add("hidden");
  }
});
</script>

<template>
  <nav class="flex flex-row items-center justify-between bg-orange-700">
    <div class="flex flex-row items-center">
      <RouterLink to="/">
        <div class="font-bold text-2xl text-white px-6">
          SHAREnotes
        </div></RouterLink
      >

      <div class="flex flex-row gap-5 text-white text-sm">
        <!-- about button -->
        <div class="gap-1 flex flex-row justify-center ">
          <div class="relative">
            <button
              type="button"
              class="about-button inline-flex items-center gap-x-1 text-sm font-semibold leading-6 text-white"
              aria-expanded="false"
            >
              <span>About</span>
              <svg
                class="h-5 w-5"
                viewBox="0 0 20 20"
                fill="currentColor"
                aria-hidden="true"
              >
                <path
                  fill-rule="evenodd"
                  d="M5.23 7.21a.75.75 0 011.06.02L10 11.168l3.71-3.938a.75.75 0 111.08 1.04l-4.25 4.5a.75.75 0 01-1.08 0l-4.25-4.5a.75.75 0 01.02-1.06z"
                  clip-rule="evenodd"
                />
              </svg>
            </button>

            <!--
    Flyout menu, show/hide based on flyout menu state.

    Entering: "transition ease-out duration-200"
      From: "opacity-0 translate-y-1"
      To: "opacity-100 translate-y-0"
    Leaving: "transition ease-in duration-150"
      From: "opacity-100 translate-y-0"
      To: "opacity-0 translate-y-1"
  -->
            <div
              class="flyout-menu absolute left-16 z-30 mt-5 flex max-w-max -translate-x-1/2"
            >
              <div
                class="w-screen max-w-md float-left h-48 overflow-hidden rounded-2xl bg-zinc-200 opacity-80 text-sm leading-6 shadow-lg ring-1 ring-gray-900/5"
              >
                <p class="text-black px-9 font-semibold pt-6"> This platform is designed for students to effortlessly share notes, facilitating a seamless exchange of knowledge. Our website bridges the gap between high school and university subjects, offering a practical solution for students seeking exposure and understanding in their learning journey. </p>
              </div>
            </div>
          </div>
        </div>
        <!-- contact us button -->

        <div class="gap-1 flex flex-row  relative">
          <button
            type="button"
            class="contact-button inline-flex items-center gap-x-1 text-sm font-semibold leading-6 text-white"
            aria-expanded="false"
          >
            <span>Contact us</span>
            <svg
              class="h-5 w-5"
              viewBox="0 0 20 20"
              fill="currentColor"
              aria-hidden="true"
            >
              <path
                fill-rule="evenodd"
                d="M5.23 7.21a.75.75 0 011.06.02L10 11.168l3.71-3.938a.75.75 0 111.08 1.04l-4.25 4.5a.75.75 0 01-1.08 0l-4.25-4.5a.75.75 0 01.02-1.06z"
                clip-rule="evenodd"
              />
            </svg>
          </button>
          <div
            class="flyout-contact absolute left-24 z-20 mt-5 flex max-w-max -translate-x-1/2"
          >
            <div
              class="w-screen m-7 max-w-md float-left h-32 overflow-hidden rounded-2xl bg-zinc-200 opacity-80 text-sm leading-6 shadow-lg ring-1 ring-gray-900/5"
            >
              <p class="text-black text-lg pt-5 font-semibold px-14"> ask our staff to get more information:</p>
              <p class=" text-black px-12">Email: naqiyyahmurshidah@gmail.com</p>
              <p class=" text-black px-12">instagram: mrshidh</p>
            </div>
          </div>
        </div>
      </div>
    </div>
    <div class="mr-8 flex items-center h-fit gap-9 font-semibold">
      <RouterLink
        to="/add"
        class="m-4 rounded-full text-white hover:text-zinc-300"
        >Add note</RouterLink
      >
      <RouterLink
        to="/highschool"
        class="rounded-full text-white hover:text-zinc-300"
        >highschool</RouterLink
      >
      <RouterLink
        to="/undergraduate"
        class="rounded-full text-white hover:text-zinc-300"
        >Undergraduate</RouterLink
      >
    </div>
  </nav>
</template>

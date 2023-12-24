<script setup></script>

<template>
  <nav class="flex flex-row items-center justify-between h-30 bg-yellow-900">
    <div class="m-2">
      <h1 class="font-bold font-serif text-2xl text-white">SHAREnotes</h1>
    </div>
    <div class="m-3 flex items-center h-fit gap-5 font-serif font-semibold">
      <RouterLink to="/add" class="m-4 rounded-full text-white"
        >Add note</RouterLink
      >
      <RouterLink to="/highschool" class="rounded-full text-white"
        >highschool</RouterLink
      >
      <RouterLink to="/undergraduate" class="rounded-full text-white"
        >Undergraduate</RouterLink
      >
      <RouterLink to="/" class="rounded-full text-white"
        >
        <svg
          xmlns="http://www.w3.org/2000/svg"
          viewBox="0 0 20 20"
          fill="currentColor"
          class="w-10 h-10"
        >
          <path
            fill-rule="evenodd"
            d="M9.293 2.293a1 1 0 0 1 1.414 0l7 7A1 1 0 0 1 17 11h-1v6a1 1 0 0 1-1 1h-2a1 1 0 0 1-1-1v-3a1 1 0 0 0-1-1H9a1 1 0 0 0-1 1v3a1 1 0 0 1-1 1H5a1 1 0 0 1-1-1v-6H3a1 1 0 0 1-.707-1.707l7-7Z"
            clip-rule="evenodd"
          />
        </svg>
      </RouterLink>
    </div>
  </nav>
</template>

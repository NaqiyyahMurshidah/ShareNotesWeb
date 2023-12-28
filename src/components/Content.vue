<template>
  <div class="">
  <div
    class="my-[5rem] bg-yellow-100 h-screen"
  >
    <div
      class="card animation "
    >
      <header class="card-header">
        <h2 class="card-header-title">{{ title }}</h2>
      </header>
      <div class="card-content">
        <div class="content">
          <p>
            <strong>{{ description }}:</strong> {{ value }}
          </p>
          <h4 class="">Additional Info</h4>
          <ul>
            <li>Information for high school students</li>
            <li>Information for undergraduate students</li>
            <li>General information</li>
          </ul>
          <br />
          <div class="buttons gap-2">
            <RouterLink to="/highschool">
            <button
              class="button is-primary transition ease-in-out delay-150 bg-blue-500 hover:-translate-y-1 hover:scale-110 hover:bg-indigo-500 duration-300"
            >
              High School
            </button></RouterLink>
            <RouterLink to="/undergraduate">
            <button
              class="button is-primary transition ease-in-out delay-150 bg-blue-500 hover:-translate-y-1 hover:scale-110 hover:bg-indigo-500 duration-300"
            >
              Undergraduate
            </button></RouterLink>
          </div>
        </div>
      </div>
    </div>
  </div>
  </div>
</template>

<script>
export default {
  data() {
    return {
      title: "Welcome to share notes",
      description:
        "This website are allow you to share your pretty notes among your friends",
      //value: '',
    };
  },

  theme: {
    extend: {
      animation: {
        wiggle: "wiggle 1s ease-in-out infinite",
      },
    },
  },
};
</script>

<style scoped>
@import "https://cdnjs.cloudflare.com/ajax/libs/bulma/0.9.3/css/bulma.min.css";

.card {
  width: 100%;
  max-width: 900px;
  margin: 0 auto;
  border: 1px solid #ccc;
  border-radius: 5px;
  box-shadow: 0 1px 2px rgba(0, 0, 0, 0.1);
}

.card-header {
  background-color: #6f7479;
  color: white;
  padding: 15px;
  border-radius: 5px 5px 0 0;
}

.card-content {
  padding: 15px;
}

.card-content ul {
  list-style-type: none;
  padding: 0;
}

.card-content li {
  padding: 5px 0;
}
</style>

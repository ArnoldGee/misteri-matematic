<template>
  <main class="m-4 p-4 max-w-4xl mx-auto bg-denim rounded-2xl">
    <h1 class="flex items text-white mb-4">
      <span class="bg-cream text-6xl p-4 rounded-2xl mr-4">{{ emoji }}</span
      >{{ message }}
    </h1>
    <div class="bg-cream rounded-2xl p-4 h-96 flex flex-col">
      <div class="flex-grow overflow-y-auto">
        <slot></slot>
      </div>
      <form class="flex-none flex justify-between pt-4">
        <input
          class="border-2 border-denim border-dashed bg-cream text-2xl focus-within:outline-none focus-within:ring-2 focus-within:ring-denim"
          v-model="answer"
          type="text"
        />
        <div class="self-stretch">
          <router-link v-if="isCorrect" :to="{ name: nextPage }">
            <button
              class="text-white bg-rouge px-4 h-full self-stretch rounded-xl"
            >
              Següent repte
            </button>
          </router-link>
        </div>
      </form>
    </div>
  </main>
</template>

<script>
export default {
  name: "Dashboard.vue",
  props: ["emoji", "message", "correctAnswer", "nextPage"],
  data() {
    return {
      answer: ""
    };
  },
  computed: {
    isCorrect: function() {
      return this.answer === this.correctAnswer;
    }
  }
};
</script>

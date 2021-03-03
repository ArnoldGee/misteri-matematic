<template>
  <Dashboard
    emoji="🤓"
    message="
      Sembla que tenim part de la resposta que buscàvem. Quina emoció!
    "
    correct-answer="1"
    next-page="3"
  >
    <figure class="w-80 my-4">
      <img
        src="@/assets/piramide.png"
        alt="formatge"
        style="mix-blend-mode: multiply;"
      />
    </figure>
    <p></p>
  </Dashboard>
</template>

<script>
import Dashboard from "@/components/Dashboard";

export default {
  name: "2.vue",
  components: {
    Dashboard
  }
};
</script>

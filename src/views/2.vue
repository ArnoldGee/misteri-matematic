<template>
  <Dashboard
    emoji="🥲"
    message="
      Per cert, em dic Emoji i no m'agraden gens les matemàtiques...
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
    <p>Pista: la resposta és el millor joc de cartes del món</p>
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

<template>
  <Dashboard
    emoji="⏰"
    message="
      L'antic editor de fotografies em va dir que, arribats a aquesta prova, fes aquesta emoticona. Sincerament, no sé per què.
    "
    correct-answer="HORA"
    next-page="4"
  >
    <p>Quan és correcta l'operació <strong>11 + 3 = 2</strong>?</p>
    <p>La resposta té 4 lletres (en majúscula)</p>
  </Dashboard>
</template>

<script>
import Dashboard from "@/components/Dashboard";

export default {
  name: "3.vue",
  components: {
    Dashboard
  }
};
</script>

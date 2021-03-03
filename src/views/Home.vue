<template>
  <Dashboard
    emoji="🤗"
    message="
      `Benvinguda a l'exposició de fotografia culinària de Mollet del Vallès, ens alegra molt poder tenir-te de convidada. Comptem amb tu perquè el vernissatge tingui èxit i totes les obres estiguin en bon estat. Hem contractat a un becari de pràctiques molt competent perquè ens imprimeixi les fotografies, passi que us les ensenyem! (Escriu OK per continuar)`
    "
    correct-answer="OK"
    next-page="1"
  >
    <figure class="w-80 my-4">
      <img src="@/assets/Formatge1.png" alt="formatge" />
    </figure>

    <figure class="w-80 my-4">
      <img src="@/assets/Formatge2.png" alt="formatge" />
    </figure>
    <figure class="w-80 my-4">
      <img src="@/assets/Formatge3.png" alt="formatge" />
    </figure>
  </Dashboard>
</template>

<script>
import Dashboard from "@/components/Dashboard";

export default {
  name: "Home.vue",
  components: {
    Dashboard
  }
};
</script>

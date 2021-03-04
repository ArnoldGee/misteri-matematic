<template>
  <Dashboard
    emoji="🤓"
    message="
      Sembla que tenim part de la resposta que buscàvem. Quina emoció!
    "
    correct-answer="16777216"
    next-page="5"
  >
    <p>
      Els colors d'una pantalla o fotografia es representen amb un número.
      D'aquesta manera, quan enfosquim, aclarem o apliquem un filtre a una foto,
      l'ordinador està fent operacions matemàtiques que transformen aquests
      colors.<br />
      Ara hem de cercar quines són aquestes operacions matemàtiques que
      transformen aquests colors per poder tornar les fotografies al seu estat
      original
    </p>
    <p>
      <strong>Quants colors diferents pot representar un ordinador?</strong>
    </p>
    <input
      type="color"
      class="block w-16 h-16 border-2 border-dashed border-denim m-8 mx-auto"
    />
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

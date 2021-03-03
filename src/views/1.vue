<template>
  <Dashboard
    emoji="😬"
    message="
      `Quin desastre! El becari ens ha omplert les fotografies de filtres d'Instagram. Farem el ridícul davant de tothom! Només hi ha una manera de tornar les fotografies a l'estat original... El tècnic que treballava amb nosaltres tenia una fòrmula matemàtica per manipular els colors d'aquestes fotografies, però la guarda amb pany i clau. Cal resoldre uns enigmes per accedir-hi. Comptem amb tu perquè els resolguis! (Escriu D'ACORD per continuar)`
    "
    correct-answer="D'ACORD"
    next-page="2"
  >
    <figure class="w-80 my-4">
      <img
        src="@/assets/Formatge1.png"
        alt="formatge"
        style="mix-blend-mode: multiply;"
      />
    </figure>

    <figure class="w-80 my-4 bg-red-900">
      <img
        src="@/assets/Formatge2.png"
        alt="formatge"
        style="mix-blend-mode: screen;"
      />
    </figure>
    <figure class="w-80 my-4 bg-blue-900">
      <img
        src="@/assets/Formatge3.png"
        alt="formatge"
        style="mix-blend-mode: overlay;"
      />
    </figure>
  </Dashboard>
</template>

<script>
import Dashboard from "@/components/Dashboard";

export default {
  name: "1.vue",
  components: {
    Dashboard
  }
};
</script>

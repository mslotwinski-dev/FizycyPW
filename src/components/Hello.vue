<template>
  <div class="container">
    <div class="logo">FizycyPW</div>
    <div class="rocznik">Rocznik 2023/2024</div>
  </div>
</template>

<script lang="ts">
import { defineComponent } from 'vue'

export default defineComponent({})
</script>

<!-- Add "scoped" attribute to limit CSS to this component only -->
<style scoped lang="scss">
.container {
  text-align: center;
  margin: 20px;
  margin-top: 10vh;
}
.logo {
  font-family: 'radikal_wut' !important;
  font-size: 85px;
  font-weight: 700;
  @media (max-width: 1000px) {
    font-size: 70px;
  }
}
.rocznik {
  font-size: 25px;
}
</style>

<template>
  <div class="cont">
    <div>
      (Nie)oficjalna strona dla studentów Wydziału Fizyki Politechniki
      Warszawskiej.
    </div>
    <div>
      Znajdziesz tu za darmo podręczniki w PDFach i notatki, które udostępniamy
      sami.
    </div>
    <div>Razem przez to przebrniemy, widzimy się w Valhalli.</div>
  </div>
  <img src="@/assets/stalin.png" />
</template>

<script lang="ts">
import { defineComponent } from 'vue'

export default defineComponent({})
</script>

<style lang="scss" scoped>
.cont {
  text-align: center;
  font-size: 19px;
  @media (max-width: 1000px) {
    font-size: 15px;
  }
  > div {
    margin: 5px;
  }
}

img {
  width: 500px;
  max-width: 90vw;
  margin: 10px auto;
  border-radius: 10px;
}
</style>

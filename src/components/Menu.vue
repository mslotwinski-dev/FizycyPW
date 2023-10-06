<template>
  <div class="container">
    <router-link to="/ksiazki">Książki</router-link>
    <router-link to="/notatki">Notatnki</router-link>
    <router-link to="/linki">Linki</router-link>
  </div>
</template>

<script lang="ts">
import { defineComponent } from 'vue'

export default defineComponent({})
</script>

<!-- Add "scoped" attribute to limit CSS to this component only -->
<style scoped lang="scss">
.container {
  max-width: 1000px;
  margin: auto;
  padding: 0 10px;
  display: flex;
  text-align: center;
  font-family: 'radikal_wut' !important;
  font-size: 28px;
  @media (max-width: 1000px) {
    font-size: 20px;
  }
  > a {
    color: #e3e3e3;

    background: #28353a;
    padding: 5px 10px;
    flex-grow: 1;
    border-radius: 10px;
    margin: 0 5px;
    cursor: pointer;
    transition: 0.2s all;
    &:hover {
      background: #3c4f56;
    }
  }
}
</style>

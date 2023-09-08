<template>
  <div class="cont">
    <div class="semestr" v-for="(semestr, index) in books" :key="semestr">
      <h1>Semestr {{ index }}</h1>
      <Minor v-for="content in semestr" :key="content" :content="content" />
    </div>
  </div>
</template>

<script lang="ts">
import { defineComponent } from 'vue'
import books from '@/data/books'
import Minor from '@/components/Minor.vue'

export default defineComponent({
  components: { Minor },
  data() {
    return {
      books,
    }
  },
})
</script>

<style lang="scss" scoped>
.cont {
  text-align: center;
  font-size: 19px;
}
</style>

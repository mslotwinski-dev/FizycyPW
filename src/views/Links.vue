<template>
  <div class="cont">
    <div class="box">
      <a v-for="(link, index) in links" :key="link" :href="link" :html="link">
        {{ index }}
      </a>
    </div>
  </div>
</template>

<script lang="ts">
import { defineComponent } from 'vue'
import links from '@/data/links'
// import Minor from '@/components/Minor.vue'

export default defineComponent({
  // components: { Minor },
  data() {
    return {
      links,
    }
  },
})
</script>

<style lang="scss" scoped>
.cont {
  display: flex;
  justify-content: center;
  text-align: center;
  font-size: 19px;
  @media (max-width: 1000px) {
    font-size: 15px;
  }
  > div {
    margin: 5px;
  }
}

.box {
  display: flex;
  flex-wrap: wrap;
  width: 1000px;
  max-width: 95vw;
  a {
    background: #cdd1d5;
    padding: 10px 20px;
    border-radius: 10px;
    margin: 5px;
    flex-grow: 1;
    @media (max-width: 700px) {
      width: 100%;
    }
  }
}
</style>

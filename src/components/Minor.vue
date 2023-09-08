<template>
  <div class="container">
    <div class="title" @click="open = !open">
      <div>
        <span
          v-html="
            Object.keys(content)[0]
              .replace(' [PHOTONICS]', '')
              .replace(' [HUMAN]', '')
          "
        />
        <ic
          :icon="['fas', 'lightbulb']"
          v-if="Object.keys(content)[0].includes('[PHOTONICS]')"
        />
        <ic
          :icon="['fas', 'feather-pointed']"
          v-if="Object.keys(content)[0].includes('[HUMAN]')"
        />
      </div>
      <ic :icon="open ? 'angles-up' : 'angles-down'" />
    </div>
    <div class="content" v-if="open">
      <div
        class="book"
        v-for="(book, index) in Object.values(content)[0]"
        :key="book"
      >
        <div v-html="index" />
        <div class="buttons">
          <a
            :href="link"
            class="button"
            v-for="(link, index) in book"
            :key="index"
          >
            <ic icon="download" />
          </a>
        </div>
      </div>
    </div>
  </div>
</template>

<script lang="ts">
import { defineComponent } from 'vue'

export default defineComponent({
  props: ['content'],
  data() {
    return {
      open: true,
    }
  },
})
</script>

<!-- Add "scoped" attribute to limit CSS to this component only -->
<style scoped lang="scss">
.container {
  margin: 10px auto;
  width: 1000px;
  max-width: 95vw;
  .title {
    @media (max-width: 1000px) {
      font-size: 16px;
    }
    svg {
      margin-left: 10px;
    }
    font-size: 22px;
    display: flex;
    justify-content: space-between;
  }
}
.content {
  margin: 10px;
  @media (max-width: 1000px) {
    margin: 10px 0;
  }
}
.book {
  display: flex;
  justify-content: space-between;
  flex-wrap: wrap;
  text-align: left;
  font-size: 17px;
  @media (max-width: 1000px) {
    font-size: 14px;
  }
}

.buttons {
  display: flex;
  margin-top: 5px;

  .button {
    background: #00647d;
    color: #e3e3e3;
    width: 40px;
    height: 25px;
    margin-left: 5px;
    display: flex;
    justify-content: center;
    align-items: center;
    border-radius: 4px;
    @media (max-width: 1000px) {
      width: 40px;
      height: 25px;
    }
  }
}
</style>

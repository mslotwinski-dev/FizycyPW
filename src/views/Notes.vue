<template>
  <div class="cont">
    <div class="semestr" v-for="(semestr, index) in notes" :key="semestr">
      <h1>Semestr {{ index }}</h1>
      <!-- <Minor v-for="content in semestr" :key="content" :content="content" /> -->
      <div class="container">
        <a
          :href="link"
          v-for="(link, index) in semestr"
          :key="link"
          target="_blank"
        >
          <div>
            <span
              v-html="index.replace(' [PHOTONICS]', '').replace(' [HUMAN]', '')"
            />
            <ic
              :icon="['fas', 'lightbulb']"
              v-if="index.includes('[PHOTONICS]')"
            />
            <ic
              :icon="['fas', 'feather-pointed']"
              v-if="index.includes('[HUMAN]')"
            />
          </div>
          <ic icon="link" class="right" />
        </a>
      </div>
    </div>
  </div>
</template>

<script lang="ts">
import { defineComponent } from 'vue'
import notes from '@/data/notes'
// import Minor from '@/components/Minor.vue'

export default defineComponent({
  // components: { Minor },
  data() {
    return {
      notes,
    }
  },
})
</script>

<style lang="scss" scoped>
.cont {
  text-align: center;
  font-size: 19px;
}

.container {
  margin: 10px auto;
  width: 1000px;
  max-width: 95vw;
  text-align: left;
}

a {
  display: flex;
  justify-content: space-between;
  &:hover .right {
    color: #00647d;
  }
  @media (max-width: 1000px) {
    font-size: 16px;
  }
  svg {
    margin-left: 10px;
  }
  font-size: 22px;
}

.right {
  transition: 0.2s all;
}
</style>

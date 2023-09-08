<template>
  <main>
    <div>
      <Hello />
      <Menu />
    </div>
    <router-view />
    <div class="madeby">
      Made by <a href="//facebook.com/czesc.tu.mati">Mateusz Słotwiński</a> with
      Vue and TypeScript.
    </div>
  </main>
  <notifications position="bottom left" width="400px" />
</template>

<script lang="ts">
import { defineComponent } from 'vue'

import Hello from '@/components/Hello.vue'
import Menu from '@/components/Menu.vue'

export default defineComponent({
  components: {
    Hello,
    Menu,
  },
})
</script>

<style lang="scss">
@import './styles/index.scss';
main {
  display: flex;
  flex-direction: column;
  justify-content: space-between;
  min-height: 100vh;
}
.madeby {
  margin: 10px auto;
  @media (max-width: 1000px) {
    font-size: 14px;
  }
}

h1 {
  text-transform: uppercase;
  margin: 10px;
}
</style>

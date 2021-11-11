<template>
  <div class="layouts">
    <Header></Header>
    <Nuxt class="view" />
    <Footer></Footer>
  </div>
</template>

<script>
import Header from '~/components/layouts/Header.vue'
import Footer from '~/components/layouts/Footer.vue'
export default {
  components: { Header, Footer },
}
</script>

<style lang="scss" scoped>
.layouts {
  min-height: 100vh;
  display: flex;
  flex-direction: column;
  position: relative;
}
.view {
  flex-grow: 1;
  min-height: 50%;
}
</style>
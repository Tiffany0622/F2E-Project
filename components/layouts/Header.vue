<template>
  <div class="header">
    <Navbar></Navbar>
    <Banner></Banner>
  </div>
</template>

<script>
import Navbar from '~/components/layouts/Navbar.vue'
import Banner from '~/components/layouts/Banner.vue'
export default {
  components: { Navbar, Banner },
}
</script>

<style lang="scss" scoped>
.headr{
  border: 1px solid red;
}
</style>
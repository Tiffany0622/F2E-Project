<template>
  <div>
    <NuxtLink v-for="(item, index) in buttonList" :key="index" :to="item.path">
      <img :src="item.icon" alt="" />
      <span>
        {{ item.name }}
      </span>
    </NuxtLink>
  </div>
</template>


<script>
export default {
  props: {
    buttonList: {
      type: Array,
      default: () => [],
      require: true,
    },
  },
}
</script>

<style lang="scss" scoped>

</style>
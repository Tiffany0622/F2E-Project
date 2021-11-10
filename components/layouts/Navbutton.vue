<template>
  <div>
    <NuxtLink v-for="(item, index) in buttonList" :key="index">
      <img :src="item.icon" alt="" />
      {{ item.name }}
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
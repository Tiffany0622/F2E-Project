<template>
  
</template>

<script>
import { getTourismData } from '@/api/getTourismData'

export default {
  data: () => ({
    dataList: [],
  }),
  mounted() {
    this.getData()
  },
  methods: {
    getData() {
      getTourismData().then((res) => {
        this.dataList = res
        console.log('HI', this.dataList)
      })
    },
  },
}
</script>

<style lang="scss" scoped>

</style>
<template></template>

<script>
import { getTourismData } from '@/api/getTourismData'

export default {
  components: {},
  middleware({ store, redirect }) {
    redirect('/Attraction')
  },
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
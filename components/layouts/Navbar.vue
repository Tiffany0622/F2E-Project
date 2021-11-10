<template>
  <div>
    <div>
      <img :src="logoImg" class="logoImg" />
    </div>
    <div class="">
      <Navbutton :buttonList="buttonList"> </Navbutton>
    </div>
  </div>
</template>

<script>
import Navbutton from '@/components/layouts/Navbutton'

export default {
  components: {
    Navbutton,
  },
  data() {
    return {
      logoImg: require('~/static/images/Logo.png'),
      buttonList: [
        {
          name: '台灣景點',
          icon: '',
        },
        {
          name: '美食住宿',
          icon: '',
        },
        {
          name: '景點交通',
          icon: '',
        },
      ],
    }
  },
}
</script>

<style lang="">
</style>
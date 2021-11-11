<template>
  <div class="Navbar d-flex">
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
          icon: require('~/static/icon/icon_attraction.png'),
          path: '/Attraction',
        },
        {
          name: '美食住宿',
          icon: require('~/static/icon/icon_food.png'),
          path: '/Food',
        },
        {
          name: '景點交通',
          icon: require('~/static/icon/icon_traffic.png'),
          path: '/Traffic',
        },
      ],
    }
  },
}
</script>

<style lang="scss" scope>
.Navbar {
  display: flex;
  align-items: flex-end;
  justify-content: space-around;
}
</style>
<template>
  <div class="bannerImages">
    <div class="bannerText">
      <div class="text_welcome">
        <span class="text text_welc">Welc</span>
        <span class="text">me</span>
        <img class="img" src="~/static/icon/bannerText_O.png" alt="" />
      </div>
      <div class="text_to">
        <span class="text text_t">t </span>
        <img class="img" src="~/static/icon/bannerText_to.png" alt="" />
      </div>
      <div class="text_taiwan">
        <span class="text text_ta">Ta</span>
        <span class="text text_wan">wan</span>
        <img class="img_01" src="~/static/icon/bannerText_i_01.png" alt="" />
        <img class="img_02" src="~/static/icon/bannerText_i_02.png" alt="" />
      </div>
    </div>
    <div class="subText">
      <p>台北、台中、台南、屏東、宜蘭……遊遍台灣</p>
    </div>
    <Searchbar class="Searchbar"></Searchbar>
  </div>
</template>

<script>
import Searchbar from "@/components/layouts/Searchbar";

export default {
  components: { Searchbar },
  computed: {},
  data() {
    return {
      bannerImages: [
        {
          name: "summer",
          path: "",
          id: 1,
          image: require("static/images/banner01.png"),
        },
        {
          name: "autumn",
          path: "",
          id: 2,
          image: require("static/images/banner02.png"),
        },
      ],
    };
  },
  methods: {
    // getStyle(url) {
    //   return `background-image: url(${this.imageUrl ? this.imageUrl : ''});`
    // },
  },
};
</script>

<style lang="scss" scoped>
.bannerImages {
  position: relative;
  max-width: 1226px;
  height: 490px;
  overflow: hidden;
  background-image: url(~static/images/banner01.png);
  background-position: center;
  margin: 0 auto;
}
.bannerText {
  width: 486px;
  display: flex;
  position: absolute;
  left: 394px;
  top: 287px;

  .text_welcome {
    position: relative;
    margin-right: 20px;
    .text_welc {
      margin-right: 35px;
    }
    .img {
      position: absolute;
      left: 110px;
      bottom: 0px;
    }
  }
  .text_to {
    position: relative;
    margin-right: 20px;
    .text_t {
      margin-right: 40px;
    }
    .img {
      position: absolute;
      left: 20px;
      bottom: 0px;
    }
  }

  .text_taiwan {
    position: relative;
    .text_ta {
      margin-right: 15px;
    }
    .img_01 {
      position: absolute;
      left: 50px;
      top: -5px;
    }
    .img_02 {
      position: absolute;
      left: 55px;
      bottom: 0px;
    }
  }
}
.text {
  font-family: Roboto;
  font-weight: bold;
  font-size: 50px;
  line-height: 59px;
  text-align: center;
  color: #ffffff;
  text-shadow: 0px 4px 3px rgba(13, 11, 12, 0.2);
}

.subText {
  position: absolute;
  left: 394px;
  top: 366px;
  font-family: Noto Sans TC;
  font-size: 14px;
  line-height: 21px;
  /* identical to box height, or 150% */

  /* white */

  color: #ffffff;
}
.Searchbar {
  position: absolute;
  left: 394px;
  top: 396px;
}
</style>

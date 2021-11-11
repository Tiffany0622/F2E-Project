<template>
  <div>
    <div>
      <input type="text" class="searchbar" placeholder="搜尋關鍵字" />
    </div>
    <div class="selectbar">
      <div class="type custom-select">
        <select class="custom_select" name="type" id="">
          <option
            v-for="(item, index) in selectType"
            :key="index"
            :value="item.id"
          >
            {{ item.name }}
          </option>
        </select>
      </div>
      <div class="city custom-select">
        <select class="custom_select" name="city" id="">
          <option
            v-for="(item, index) in selectCity"
            :key="index"
            value="item.id"
          >
            {{ item.name }}
          </option>
        </select>
      </div>
    </div>
  </div>
</template>

<script>
export default {
  data() {
    return {
      selectType: [
        { name: "美食", id: 1 },
        { name: "住宿", id: 2 },
      ],
      selectCity: [
        { name: "台北", id: 1 },
        { name: "新北", id: 2 },
      ],
    };
  },
};
</script>

<style lang="scss" scoped>
.searchbar {
  background-color: white;
  box-shadow: 0px 4px 3px rgba(13, 11, 12, 0.2);
  border-radius: 6px;
  padding: 5px 15px;
  width: 445px;
  height: 40px;
  color: #d2d2d2;
  outline: none;
}
.selectbar {
  display: flex;
  justify-content: space-around;
  margin-top: 8px;
  // outline: 1px solid black;
  position: relative;
  select {
    position: relative;
    width: 219px;
    height: 40px;
    background-color: white;
    border-radius: 6px;
    outline: none;
  }&:after {
    position: absolute;
    content: ””;
    width: 0;
    height: 0;
    top: 0;
    right: 0;
    border-style: solid;
    border-width: 6px 0 6px 12px;
    border-color: rgb(0, 0, 0) transparent transparent transparent ;
  }
}
</style>

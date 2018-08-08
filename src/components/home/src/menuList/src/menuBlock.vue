<template>
  <div class="menu-block-div">
    <div class="menu-cols-div" v-for="item in menuData">
      <div class="menu-head-div">{{item.value}}</div>
      <div class="child-menu-div">
        <div class="menu-one-div" v-for="item1 in item.childMenu" @click="clickMenu(item1.component)">{{item1.value}}</div>
      </div>
    </div>
  </div>
</template>

<script>
    export default {
        name: "menu-block",
      props:["menuData"],
      methods:{
        clickMenu:function (data) {
          console.log(data)
        }
      }
    }
</script>

<style scoped>
  .menu-block-div{
    display: flex;
    align-items: flex-start;
    background-color: white;
    box-shadow: 0 0 5px 1px #CCCCCC;
    border-radius: 4px;
  }
  .menu-head-div{
    word-break: keep-all;
    font-size: 18px;
    text-align: left;
    cursor: default;
  }
  .menu-cols-div{
    padding: 10px;
  }
  .child-menu-div{
    border-top: 1px dashed #333333;
    margin-top: 10px;
    min-width: 150px;
  }
  .menu-one-div{
    font-size: 16px;
    line-height: 40px;
    text-align: left;
  }
  .menu-one-div:hover{
    color: #f46e28;
  }
</style>

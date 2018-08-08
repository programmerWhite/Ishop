<template>
  <div class="home-page-all-div">
    <div class="left-part-div">
      <div class="soft-version">豪华版 V3.1</div>
      <menu-list></menu-list>
    </div>
    <div class="right-part-div">
      <home-head></home-head>
    </div>
  </div>
</template>

<script>
    import menuList from "./src/menuList/menuList";
    import homeHead from "./src/common/homeHead";

    export default {
      name: "home",
      components:{menuList,homeHead}
    }
</script>

<style scoped>
  .home-page-all-div{
    position: fixed;
    height: 100%;
    width: 100%;
    min-width: 1024px;
    min-height: 830px;
    display: flex;
    align-items: flex-start;
    justify-content: flex-start;
  }
  .left-part-div{
    width: 160px;
    height: inherit;
    background-color: #2e2e36;
  }
  .right-part-div{
    width: 100%;
  }
  .soft-version{
    text-align: center;
    height: 50px;
    line-height: 50px;
    font-weight: 600;
    font-size: 18px;
    color: #4f86aa;
    background: linear-gradient(to bottom,white,#d4eefd);
  }
</style>

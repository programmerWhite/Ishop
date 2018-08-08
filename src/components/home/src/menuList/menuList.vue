<template>
  <div class="menu-list-div">
    <div class="menu-one-div" v-for="item in menuData">
      <img class="menu-icon" :src='require("../../../../"+item.icon+".jpg")' />
      <span class="menu-text">{{item.value}}</span>
      <span class="menu-arrow">&gt;</span>
      <div class="menu-block-container-div">
        <menu-block :menuData="item.childMenu" @clickMenu="menuClickBack"></menu-block>
      </div>
    </div>
  </div>
</template>

<script>
    import menuBlock from "./src/menuBlock"
    export default {
        name: "menu-list",
        components:{menuBlock},
        data(){
          return{
            menuData:[
              {
                value:"商品",
                icon:"assert/img/menuImg/m_1",
                childMenu:[
                  {
                    value:"商品相关",
                    childMenu:[
                      //页面显示值       图标       menu数字   对应组件      页面跳转
                      {value:"商品档案",iconImg:"",menuNum:"",component:"1",url:""},
                      {value:"商品单位",iconImg:"",menuNum:"",component:"2",url:""},
                      {value:"商品分类",iconImg:"",menuNum:"",component:"3",url:""},
                      {value:"商品属性",iconImg:"",menuNum:"",component:"4",url:""},
                      {value:"商品规格",iconImg:"",menuNum:"",component:"5",url:""}
                    ]
                  },
                  {
                    value:"条码管理",
                    childMenu:[
                      {value:"供应商对账",iconImg:"",menuNum:"",component:"6",url:""},
                      {value:"进货分析",iconImg:"",menuNum:"",component:"7",url:""},
                      {value:"进货订单执行跟踪表",iconImg:"",menuNum:"8",component:"",url:""}
                    ]
                  }
                ]
              }
            ]
          }
        },
      methods:{
          menuClickBack:function (data) {
            console.log(data);
          }
      }
    }
</script>

<style scoped>
  .menu-list-div{
    width: 100%;
  }
  .menu-one-div{
    width: 100%;
    height: 50px;
    display: flex;
    align-items: center;
    cursor: pointer;
    position: relative;
  }
  .menu-icon{
    margin:0 10px;
    height: 20px;
  }
  .menu-arrow{
    color: white;
    font-size: 20px;
    margin-right: 10px;
  }
  .menu-text{
    color: white;
    font-size: 18px;
    width: 100%;
    text-align: left;
  }
  .menu-block-container-div{
    position: absolute;
    left: 140px;
    top: 0px;
    box-sizing: border-box;
    padding: 10px;
    padding-left: 20px;
    display: none;
  }
  .menu-one-div:hover .menu-block-container-div{
    display: block;
  }
</style>

<template>
  <div class="home-head-div">
    <div class="log-div">
      <span class="log-text-c-span">管家婆电脑版</span>
      <span class="log-text-e-span">Computer Terminal</span>
    </div>
    <div class="message-text-notice-div">
      <img src="../../../../assert/img/common/b_1.jpg" />
      <span class="message-text-span">{{message}}</span>
    </div>
    <div class="user-info-div">
      <div class="user-name-div">
        <img src="../../../../assert/img/common/b_2.jpg" />
        <span class="user-name-span">{{userName}}</span>
      </div>
      <div class="user-notice-number-div">
        <img src="../../../../assert/img/common/b_3.jpg" />
        <span class="user-notice-number-span">{{noticeNum}}</span>
      </div>
    </div>
  </div>
</template>

<script>
  /*
  home 页面的头部组件
  * */
    export default {
        name: "home-head",
      data(){
          return{
            message:"你的微信商城有新的订单",
            userName:"张三",
            noticeNum:"3"
          }
      }
    }
</script>

<style scoped>
  .home-head-div{
    display: flex;
    align-items: center;
    height: 50px;
    border-bottom: 1px solid #CCCCCC;
  }
  .log-div{
    width: 350px;
    flex-shrink: 0;
    text-align: left;
    padding-left:10px ;
    box-sizing: border-box;
  }
  .message-text-notice-div{
    width: 100%;
    display: flex;
    align-items: center;
    justify-content: center;
  }
  .user-info-div{
    min-width: 200px;
    justify-content: flex-end;
    display: flex;
    align-items: center;
    padding-right: 10px;
    box-sizing: border-box;
  }
  .log-text-c-span{
    font-size: 24px;
    font-weight: 600;
    color: #4f86aa;
  }
  .log-text-e-span{
    font-size: 16px;
    color: #4f86aa;
    margin-left: 20px;
  }
  .message-text-span{
    color: #f46e28;
    font-size: 16px;
    font-weight: 500;
    margin-left: 10px;
  }
  .user-name-div{
    display: flex;
    align-items: center;
  }
  .user-notice-number-div{
    display: flex;
    align-items: center;
    margin-left: 20px;
  }
  .user-notice-number-span{
    background-color: #fe340b;
    border-radius: 100%;
    color: white;
    height: 20px;
    width: 20px;
    text-align: center;
    line-height: 20px;
  }
  .user-name-span{
    font-size: 18px;
    padding: 0 10px;
  }
</style>

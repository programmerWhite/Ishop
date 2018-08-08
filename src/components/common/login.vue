<template>
  <div class="main-content">
    <img src="../../assert/img/login/login_icon.jpg" />
    <div class="content">
      <form @submit.prevent="submit">
        <label class="head block">管家婆手机版</label>
        <label class="login block">LOGIN</label>
        <input id="username" name="username" type="text" placeholder="用户名" v-model="inputObj.username" />
        <input id="pwd" name="pwd" type="text" placeholder="密码" v-model="inputObj.pwd" />
        <div class="forget-line-div">
          <label for="remember">
            <input type="checkbox" class="ace" id="remember" name="remember">
            <span class="lbl">记住密码</span>
          </label>
          <label class="forget-pwd">忘记密码？</label>
        </div>
        <input class="btn-login" type="submit" value="登录" />
        <div>
          <label class="remark">如果您还没有账号，请点击此处<a>注册试用</a></label>
        </div>
      </form>
    </div>
  </div>
</template>

<script>
    export default {
        name: "login",
      data(){
          return{
            inputObj:{
              username:"",
              pwd:""
            }
          }
      }
    }
</script>

<style scoped>

  .main-content {
    width: 720px;
    height: 365px;
    margin-left: calc(50% - 360px) !important;
    box-shadow: 0px 0px 30px 6px #dbddeb;
    position: relative;
  }

  .main-content > img {
    float: left;
  }

  .main-content > div {
    padding: 38px 33px;
    float: left;
  }

  .head {
    color: #2c3e50;
    font-weight: bolder;
    font-size: 20px;
  }

  .login {
    color: #a5a7ab;
    padding: 13px 0 11px 0;
    font-size: 14px;
    margin-bottom: 0;
    letter-spacing: 1px;
  }

  input[type="text"] {
    height: 35px;
    margin-bottom: 15px;
    width: 326px;
    display: block;
    padding: 0 10px;
  }

  input[type="checkbox"] {
    border: 1px solid #c6c6ca;
    width: 14px !important;
    height: 14px !important;
    margin-right: 8px;
  }

  label[for="remember"] {
    color: #a5a7ab;
  }

  input[type=checkbox].ace + .lbl::before, input[type=radio].ace + .lbl::before {
    margin-right: 5px;
    margin-top: -2px;
  }

  .forget-pwd {
    float: right;
    color: #46464e;
  }

  .btn-login {
    width: 100%;
    background-color: #46464e;
    border: 0;
    color: #fff;
    padding: 8px;
    letter-spacing: 20px;
    margin: 20px 0;
  }

  .remark {
    position: absolute;
    bottom: 10px;
    font-size: 10px;
    color: #46464e;
  }

  .remark a {
    color: #efa938;
    text-decoration: underline;
  }
  .forget-line-div{
    display: flex;
    justify-content: space-between;
  }

</style>

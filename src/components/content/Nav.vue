<template>
  <Affix>
    <div class="demo-affix">
        <div class="WDS_global_nav">
          <div class="WDS_main clearfix">
            <div class="WDS_global_nav_l">
              <a href="#">返回首页</a>
              <i class="text_line">|</i>
              <a href="#">飞燕读书</a>
              <i class="txt_line">|</i>
              <a href="#">飞燕交流</a>
            </div>
            <div class="WDS_global_nav_r">
              <ul class="WDS_global_nav_ul">
                <li>
                  <a class="sr-js-wxCheckLogin" href="#">
                    <img src="http://vipbookedge.sina.cn/static/static/paidRead/assets/images/wx-login.png" alt="">
                    <span>微信登录</span>
                  </a>
                  <i class="txt_line">|</i>
                </li>
                <li>
<!--示例-->
                  <a class="sr-js-checkLogin" @click="modal9 = true">登录</a>
                  <Modal
                    scrollable
                    title="Title"
                    v-model="modal9"
                    class-name="vertical-center-modal">
                    <div slot="header"></div>
                    <div slot="default" style="margin-left: 40px;">
                      <div class="tab_bar">
                        <a href="#" class="cur">
                          帐号登录
                        </a>
                        <a href="#">安全登录</a>
                      </div>
                      <div class="B_login form_login_register">
                        <div class="item username input_wrap" style="margin-left: 100px;background-position: 0 -5px;position: relative;">
                          <input type="text" class="W_input" value="邮箱/会员账号/手机号">
                        </div>
                        <div class="item password input_wrap" style="margin-left: 100px">
                          <input type="text" class="W_input" value="请输入密码">
                        </div>
                        <div class="item auto_login" style="margin-left: 100px">
                          <input type="checkbox" checked id="login_form_savestate">
                          <label for="login_form_savestate">下次自动登录</label>
                          <span class="forget_psw">
                            <a href="#" class="S_txt2">忘记密码</a>
                          </span>
                        </div>
                        <div class="item_btn" style="margin-left: 100px;">
                          <a href="#" class="W_btn_a btn_34px">
                            <em style="font-style: normal;vertical-align: middle;color: white">登录</em>
                          </a>
                        </div>
                        <div class="item_btn login_qq"style="margin-left: 100px">
                          <a href="#" class="W_btn_b btn_34px">
                            <i class="icon_qq"></i>
                            <em>使用QQ直接登录</em>
                          </a>
                        </div>
                        <div class="text_info W_tc">
                          <a href="#" class="S_txt1" style="margin-right: 0px;position: relative;left: -50px;">立即注册</a>
                          <a href="#" class="S_txt1" style="margin-right: 0px;position: relative;left: -30px;">短信登录</a>
                        </div>
                      </div>
                    </div>
                    <div slot="footer"></div>
                  </Modal>
<!--结束-->
                  <i class="txt_line">|</i>
                </li>

                <a class="sr-js-checkLogin" @click="modal10 = true">注册</a>
                <Modal  id="xiangmu2"
                  scrollable
                  title="Title"
                  v-model="modal10"
                  class-name="vertical-center-modal">
                  <div slot="header"></div>
                  <div slot="default" style="margin-left: 40px;">
                    <div class="tab_bar">
                      <a href="#" class="cur">
                        帐号注册
                      </a>
                      <a href="#">安全验证</a>
                    </div>
                    <div class="B_login form_login_register">
                      <div class="item username input_wrap" style="margin-left: 100px;background-position: 0 -5px;position: relative;">
                        <input type="text" class="W_input" value="手机号:">
                      </div>
                      <div class="item password input_wrap" style="margin-left: 100px">
                        <input type="text" class="W_input" value="输入密码:">
                      </div>
                      <div class="item auto_login" style="margin-left: 100px">
                        <input type="checkbox" checked id="login_form_savestate2">
                        <label for="login_form_savestate">多种方式</label>
                        <span class="forget_psw">
                            <a href="#" class="S_txt2">忘记密码</a>
                          </span>
                      </div>
                      <div class="item_btn" style="margin-left: 100px;">
                        <a href="#" class="W_btn_a btn_34px">
                          <em style="font-style: normal;vertical-align: middle;color: white">注册</em>
                        </a>
                      </div>
                      <div class="item_btn login_qq"style="margin-left: 100px">
                        <a href="#" class="W_btn_b btn_34px">
                          <i class="icon_qq"></i>
                          <em>使用QQ直接注册</em>
                        </a>
                      </div>
                      <div class="text_info W_tc">
                        <a href="#" class="S_txt1" style="margin-right: 0px;position: relative;left: -50px;">立即登录</a>
                        <a href="#" class="S_txt1" style="margin-right: 0px;position: relative;left: -30px;">注册礼包</a>
                      </div>
                    </div>
                  </div>
                  <div slot="footer"></div>
                </Modal>
              </ul>
            </div>
          </div>
        </div>
    </div>
  </Affix>
</template>

<script>
    export default {
      name: "Nav",
      data() {
        return {
          modal9: false,
          modal10: false,
        }
      }
    }
</script>

<style scoped>
   @import "../../assets/css/nav.css";

</style>

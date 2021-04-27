<template>
  <div>
    <div class="header">
      <div class="wid1000">
        <div class="header-nav clearfix">
          <div class="header-logo">
            <a href="#">
              <h1>
                <img src="../../assets/img/head-logo.png" alt="">
              </h1>
            </a>
          </div>
          <div class="header-seacher" >
<!--            <Input search enter-button placeholder="搜索书名作者"/>-->
            <Input search  placeholder="搜索书名作者" />
          </div>
        </div>
      </div>
      <div class="header-menu">
      <div class="wid1000">
        <ul class="header-ul">
          <li class="active">
            <router-link to="/Container" tag="a">首页</router-link>
          </li>
          <li>
            <router-link to="/Page" tag="a">男生小说</router-link>
          </li>
          <li>
<!--            <a href="javascript:;">女生小说</a>-->
            <router-link to="/Page2" tag="a">女生小说</router-link>
          </li>
          <li>
            <a href="javascript:;">出版图书</a>
          </li>
          <li>
            <a href="javascript:;">今日限免</a>
          </li>
          <li>
            <a href="javascript:;">排行榜</a>
          </li>
          <li>
            <a href="javascript:;">我要写书</a>
          </li>
        </ul>
      </div>
      </div>
      <div class="slide_bar">
        <div class="bookShelf_rt" style="position: fixed;z-index: 98;top: auto;bottom: 50%;left: 50%;margin-left: -580px;display: block;">
          <a href="javascript:;">
            我的书架
          </a>
        </div>
        <div class="bookShelf_download" style="position: fixed; z-index: 98; top: auto; bottom: 50%; margin-bottom: -70px; left: 50%; margin-left: -580px; display: block;">
          <a href="javascript:;">
            下载APP
            <div class="downcode-pic">
              <img src="https://vipbookedge.sina.cn/static/static/paidRead/assets/images/s-code-index-1.png" alt="" style="width: 110px;">
              <p style="position: relative;top: -80px;color: black">扫码下载免费畅读</p>
              <span></span>
            </div>
          </a>
        </div>
        <div class="backToTop" style="position: fixed; z-index: 98; top: auto; bottom: 50%; margin-bottom: -280px; left: 50%; margin-left: 520px; display: block;">
          <a href="javascript:;">返回顶部</a>
        </div>
      </div>
    </div>
  </div>
</template>

<script>
    export default {
        name: "Header",
        data(){
          return{

          };
        },
        methods:{

        },
        mounted() {
          $(".wid1000 ul.header-ul li a").hover(function () {
            $(this).css('backgroundColor','#313035')
          },function () {
            $(this).css('backgroundColor','#3e3d43')
          })

          /*$(".bookShelf_download").hover(function () {
            $(this).addClass("bookShelf_download")
          },function () {
            $(this).removeClass("bookShelf_download")
          })*/
          $(".bookShelf_download a").hover(function () {
            $(this).children().css('display','block')
          },function () {
            $(this).children().css('display','none')
          })
        }
    }
</script>

<style scoped>
  @import "../../assets/css/header.css";
</style>

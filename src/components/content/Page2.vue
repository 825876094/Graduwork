<template>
  <div class="container man-nav">
    <div class="wid1000">
      <div class="woman-nav">
        <div class="woman-nav-left fl">
          <Carousel autoplay v-model="value2" loop>
            <CarouselItem>
              <div class="demo-carousel"><img src="https://bookcover.yuewen.com/qdbimg/349573/1025552412/150" alt=""></div>
            </CarouselItem>
            <CarouselItem>
              <div class="demo-carousel"><img src="https://bookcover.yuewen.com/qdbimg/349573/1025399566/150" alt=""></div>
            </CarouselItem>
            <CarouselItem>
              <div class="demo-carousel"><img src="https://bookcover.yuewen.com/qdbimg/349573/1026517395/150" alt=""></div>
            </CarouselItem>
            <CarouselItem>
              <div class="demo-carousel"><img src="https://bookcover.yuewen.com/qdbimg/349573/1026191380/150" alt=""></div>
            </CarouselItem>
            <CarouselItem>
              <div class="demo-carousel"><img src="https://bookcover.yuewen.com/qdbimg/349573/1025551320/150" alt=""></div>
            </CarouselItem>
            <CarouselItem>
              <div class="demo-carousel"><img src="https://bookcover.yuewen.com/qdbimg/349573/1027040753/90" alt=""></div>
            </CarouselItem>
            <CarouselItem>
              <div class="demo-carousel"><img src="https://bookcover.yuewen.com/qdbimg/349573/1023270549/90" alt=""></div>
            </CarouselItem>
            <CarouselItem>
              <div class="demo-carousel"><img src="https://bookcover.yuewen.com/qdbimg/349573/1013887416/180" alt=""></div>
            </CarouselItem>
          </Carousel>
          <div class="nav-r fl">
            <dl>
              <dt>
                <a href="#">
                  <span>　末日，正向她呼啸而来……</span>
                </a>
              </dt>
              <dd>
                <a href="#">
                  末日终于要出实体书了！这次出版方做了官方的签名+赠品预售版，4月20日晚上8点开启预售，预售的渠道和链接我会放在留言区和章节后的！
                </a>
              </dd>
            </dl>
            <dl>
              <dt>
                <a href="#">
                  <span>青砖绿瓦，陌上花开香染衣；朱门紫殿，素手摘星霓作裳。</span>
                </a>
              </dt>
              <dd>
                <a href="#">
                  　心狠手辣的李桑柔，遇到骄横跋扈的顾晞，就像王八看绿豆……
                </a>
              </dd>
            </dl>
            <dl>
              <dt>
                <a href="#">
                  <span>星辰破晓，灵魂展翼。追寻宇宙的奥秘，直面未知的挑战。</span>
                </a>
              </dt>
              <dd>
                <a href="#">
                  星际最火的论坛上有一个大热话题：
                  　　你身边发生的最不可思议的事情是什么？
                </a>
              </dd>
            </dl>
            <dl>
              <dt>
                <a href="#">
                  <span>仙路缥缈，清歌踏月上九天；云山万劫，一剑天光问情缘。</span>
                </a>
              </dt>
              <dd>
                <a href="#">
                  　　人在道中，道在人心！锁一方气运，绝一方灵气，道归时，人何在？
                </a>
              </dd>
            </dl>
          </div>
        </div>

        <div class="woman-nav-right fr">
          <div class="wm-nav-r-title">
            <div class="wm-nav-r-title-left fl">
              女生畅销榜
            </div>
            <div class="wm-nav-r-title-right fr">
              <a href="#" class="man-blue active">周榜</a>
              <span>|</span>
              <a href="#" class="man-blue active">月榜</a>
              <span>|</span>
              <a href="#" class="man-blue active">总榜</a>
              <span>|</span>
            </div>
          </div>


          <div class="book-list">
            <ul class="hover-list">
              <li>
                <!--                    style="background: #cacaca;-->
                <span class="wm-list-index">1</span>
                <div class="wm-list-content">
                  <div class="content-ditail">
                    <a href="#">
                      <img src="https://bookcover.yuewen.com/qdbimg/349573/3312802/180" alt="">
                    </a>
                    <div class="content-detail-txt">
                      <h3>
                        <a href="#">末日乐园</a>
                      </h3>
                      <p>
                        <span>作者：</span>
                        <em>须尾俱全 </em>
                      </p>
                      <p>
                        <span>分类：</span>
                        <a class="a_type2 classly" href="#">
                          末世危机
                        </a>
                      </p>
                    </div>
                  </div>
                  <div class="content-text">
                    末日乐园
                  </div>
                </div>
              </li>
              <li>
                <!--                    style="background: #cacaca;-->
                <span class="wm-list-index">2</span>
                <div class="wm-list-content">
                  <div class="content-ditail">
                    <a href="#">
                      <img src="https://bookcover.yuewen.com/qdbimg/349573/1022485326/180" alt="">
                    </a>
                    <div class="content-detail-txt">
                      <h3>
                        <a href="#">墨桑  </a>
                      </h3>
                      <p>
                        <span>作者：</span>
                        <em>闲听落花</em>
                      </p>
                      <p>
                        <span>分类：</span>
                        <a class="a_type2 classly" href="#">
                          古典架空
                        </a>
                      </p>
                    </div>
                  </div>
                  <div class="content-text">
                    墨桑
                  </div>
                </div>
              </li>
              <li>
                <!--                    style="background: #cacaca;-->
                <span class="wm-list-index">3</span>
                <div class="wm-list-content">
                  <div class="content-ditail">
                    <a href="#">
                      <img src="https://bookcover.yuewen.com/qdbimg/349573/1020552508/180" alt="">
                    </a>
                    <div class="content-detail-txt">
                      <h3>
                        <a href="#">逢春  </a>
                      </h3>
                      <p>
                        <span>作者：</span>
                        <em>冬天的柳叶 </em>
                      </p>
                      <p>
                        <span>分类：</span>
                        <a class="a_type2 classly" href="#">
                          古典架空
                        </a>
                      </p>
                    </div>
                  </div>
                  <div class="content-text">
                    逢春
                  </div>
                </div>
              </li>
              <li>
                <!--                    style="background: #cacaca;-->
                <span class="wm-list-index">4</span>
                <div class="wm-list-content">
                  <div class="content-ditail">
                    <a href="#">
                      <img src="https://bookcover.yuewen.com/qdbimg/349573/1025171223/180" alt="">
                    </a>
                    <div class="content-detail-txt">
                      <h3>
                        <a href="#">今天大佬也不想开门  </a>
                      </h3>
                      <p>
                        <span>作者：</span>
                        <em>二谦</em>
                      </p>
                      <p>
                        <span>分类：</span>
                        <a class="a_type2 classly" href="#">
                          时空穿梭
                        </a>
                      </p>
                    </div>
                  </div>
                  <div class="content-text">
                    今天大佬也不想开门
                  </div>
                </div>
              </li>
              <li>
                <!--                    style="background: #cacaca;-->
                <span class="wm-list-index">5</span>
                <div class="wm-list-content">
                  <div class="content-ditail">
                    <a href="#">
                      <img src="https://bookcover.yuewen.com/qdbimg/349573/1013448948/180" alt="">
                    </a>
                    <div class="content-detail-txt">
                      <h3>
                        <a href="#">摘仙令</a>
                      </h3>
                      <p>
                        <span>作者：</span>
                        <em>潭子 </em>
                      </p>
                      <p>
                        <span>分类：</span>
                        <a class="a_type2 classly" href="#">
                          古典仙侠
                        </a>
                      </p>
                    </div>
                  </div>
                  <div class="content-text">
                    摘仙令
                  </div>
                </div>
              </li>
              <li>
                <!--                    style="background: #cacaca;-->
                <span class="wm-list-index">6</span>
                <div class="wm-list-content">
                  <div class="content-ditail">
                    <a href="#">
                      <img src="https://bookcover.yuewen.com/qdbimg/349573/1626560/180" alt="">
                    </a>
                    <div class="content-detail-txt">
                      <h3>
                        <a href="#">庶女攻略（《锦心似玉》原著）</a>
                      </h3>
                      <p>
                        <span>作者：</span>
                        <em>吱吱</em>
                      </p>
                      <p>
                        <span>分类：</span>
                        <a class="a_type2 classly" href="#">
                          古典架空
                        </a>
                      </p>
                    </div>
                  </div>
                  <div class="content-text">
                    庶女攻略（《锦心似玉》原著）
                  </div>
                </div>
              </li>
              <li>
                <!--                    style="background: #cacaca;-->
                <span class="wm-list-index">7</span>
                <div class="wm-list-content">
                  <div class="content-ditail">
                    <a href="#">
                      <img src="https://bookcover.yuewen.com/qdbimg/349573/1026076982/180" alt="">
                    </a>
                    <div class="content-detail-txt">
                      <h3>
                        <a href="#">系统之胖妹要翻身 </a>
                      </h3>
                      <p>
                        <span>作者：</span>
                        <em> 薄荷清泉  </em>
                      </p>
                      <p>
                        <span>分类：</span>
                        <a class="a_type2 classly" href="#">
                          都市异能
                        </a>
                      </p>
                    </div>
                  </div>
                  <div class="content-text">
                    系统之胖妹要翻身
                  </div>
                </div>
              </li>
              <li>
                <!--                    style="background: #cacaca;-->
                <span class="wm-list-index">8</span>
                <div class="wm-list-content">
                  <div class="content-ditail">
                    <a href="#">
                      <img src="https://bookcover.yuewen.com/qdbimg/349573/1025577518/180" alt="">
                    </a>
                    <div class="content-detail-txt">
                      <h3>
                        <a href="#">
                          我在年代文里刷红包</a>
                      </h3>
                      <p>
                        <span>作者：</span>
                        <em>小韩纳</em>
                      </p>
                      <p>
                        <span>分类：</span>
                        <a class="a_type2 classly" href="#">
                          时空穿梭
                        </a>
                      </p>
                    </div>
                  </div>
                  <div class="content-text">
                    我在年代文里刷红包
                  </div>
                </div>
              </li>
            </ul>
          </div>
        </div>
      </div>
      <div class="wm-nav-list">
        <a href="#" class="all">全部分类</a>
        <h3>
          <a href="#">穿越重生</a>
        </h3>
        <h3>
          <a href="#">古风古韵</a>
        </h3>
        <h3>
          <a href="#">浪漫青春</a>
        </h3>
        <h3>
          <a href="#">总裁豪门</a>
        </h3>
        <h3>
          <a href="#">都市情缘</a>
        </h3>
        <h3>
          <a href="#">幻想言情</a>
        </h3>
        <h3>
          <a href="#">同人言情</a>
        </h3>
      </div>
      <Con_box2/>
    </div>
  </div>
</template>

<script>
  import Con_box2 from "../common/Con_box2";
  export default {
    name: "page2",
    data(){
      return{
        value2: 0
      }
    },
    components:{
      Con_box2
    },
    mounted() {
      $("ul.hover-list li").hover(function () {
        $(this).addClass('current')

      },function () {
        $(this).removeClass('current')
      })
    }
  }
</script>


<style scoped>
  @import "../../assets/css/page2.css";
</style>


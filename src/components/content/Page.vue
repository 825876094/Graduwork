<template>
    <div class="container man-nav">
      <div class="wid1000">
        <div class="woman-nav">
          <div class="woman-nav-left fl">
            <Carousel autoplay v-model="value2" loop>
              <CarouselItem>
                <div class="demo-carousel"><img src="https://bookcover.yuewen.com/qdbimg/349573/1015499829/150" alt=""></div>
              </CarouselItem>
              <CarouselItem>
                <div class="demo-carousel"><img src="https://bookcover.yuewen.com/qdbimg/349573/1018027842/150" alt=""></div>
              </CarouselItem>
              <CarouselItem>
                <div class="demo-carousel"><img src="https://bookcover.yuewen.com/qdbimg/349573/1013562540/150" alt=""></div>
              </CarouselItem>
              <CarouselItem>
                <div class="demo-carousel"><img src="https://bookcover.yuewen.com/qdbimg/349573/1012284323/150" alt=""></div>
              </CarouselItem>
              <CarouselItem>
                <div class="demo-carousel"><img src="https://bookcover.yuewen.com/qdbimg/349573/1010191960/150" alt=""></div>
              </CarouselItem>
              <CarouselItem>
                <div class="demo-carousel"><img src="https://bookcover.yuewen.com/qdbimg/349573/1012237441/150" alt=""></div>
              </CarouselItem>
              <CarouselItem>
                <div class="demo-carousel"><img src="https://bookcover.yuewen.com/qdbimg/349573/1639199/150" alt=""></div>
              </CarouselItem>
              <CarouselItem>
                <div class="demo-carousel"><img src="https://bookcover.yuewen.com/qdbimg/349573/1009704712/150" alt=""></div>
              </CarouselItem>
            </Carousel>
            <div class="nav-r fl">
              <dl>
                <dt>
                  <a href="#">
                    <span>　番茄的第十本小说。</span>
                  </a>
                </dt>
                <dd>
                  <a href="#">
                    我叫孟川，今年十五岁，是东宁府“镜湖道院”的当代大师兄。
                  </a>
                </dd>
              </dl>
              <dl>
                <dt>
                  <a href="#">
                    <span>烂柯旁棋局落叶，老树间对弈无人兴所致天元一子，再回首山海苍茫</span>
                  </a>
                </dt>
                <dd>
                  <a href="#">
                    一觉醒来，计缘成了一个破旧山神庙中的半瞎乞丐。
                    真人一柄剑，神棍一张嘴，就是计缘在这个可怕的世界安身立足的根本。
                  </a>
                </dd>
              </dl>
              <dl>
                <dt>
                  <a href="#">
                    <span>地窟入侵，武道崛起。</span>
                  </a>
                </dt>
                <dd>
                  <a href="#">
                    小人物也有大情怀，为生存而战，为守护而战。
                    且看小人物方平，一步步崛起，拯救（忽悠）全世界的故事！
                  </a>
                </dd>
              </dl>
              <dl>
                <dt>
                  <a href="#">
                    <span>继《九鼎记》《盘龙》《星辰变》《寸芒》《星峰传说》后，番茄的第六本书！</span>
                  </a>
                </dt>
                <dd>
                  <a href="#">
                    　　番茄第六部小说《吞噬星空》，将为大家展现出一个浩瀚广阔、神秘莫测的未来世界。
                  </a>
                </dd>
              </dl>
            </div>
          </div>

          <div class="woman-nav-right fr">
            <div class="wm-nav-r-title">
              <div class="wm-nav-r-title-left fl">
                男生畅销榜
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
                <!--<li>
                  <span class="wm-list-index">1</span>
                  <div class="wm-list-content">
                    <div class="content-ditail">
                      <a href="#">
                        <img src="http://vipbook.sinaedge.com/bookcover/pics/55/cover_f2ff3fb83cab7bfc9649ff3732fde14d.jpg" alt="">
                      </a>
                      <div class="content-detail-txt">
                        <h3>
                          <a href="#">傲世丹神</a>
                        </h3>
                        <p>
                          <span>作者：</span>
                          <em>寂小贼</em>
                        </p>
                        <p>分类：</p>
                        <a class="a_type2 classly" href="#">玄幻奇幻</a>
                      </div>
                      <div class="content-text" style="display: none">
                        傲世丹神
                      </div>
                    </div>
                  </div>
                </li>-->
                <li>
                  <!--                    style="background: #cacaca;-->
                  <span class="wm-list-index">1</span>
                  <div class="wm-list-content">
                    <div class="content-ditail">
                      <a href="#">
                        <img src="https://bookcover.yuewen.com/qdbimg/349573/1004608738/180" alt="">
                      </a>
                      <div class="content-detail-txt">
                        <h3>
                          <a href="#">圣墟 </a>
                        </h3>
                        <p>
                          <span>作者：</span>
                          <em>辰东  </em>
                        </p>
                        <p>
                          <span>分类：</span>
                          <a class="a_type2 classly" href="#">
                            东方玄幻
                          </a>
                        </p>
                      </div>
                    </div>
                    <div class="content-text">
                      圣墟
                    </div>
                  </div>
                </li>
                <li>
                  <!--                    style="background: #cacaca;-->
                  <span class="wm-list-index">2</span>
                  <div class="wm-list-content">
                    <div class="content-ditail">
                      <a href="#">
                        <img src="https://bookcover.yuewen.com/qdbimg/349573/1003354631/180" alt="">
                      </a>
                      <div class="content-detail-txt">
                        <h3>
                          <a href="#">一念永恒 </a>
                        </h3>
                        <p>
                          <span>作者：</span>
                          <em>耳根 </em>
                        </p>
                        <p>
                          <span>分类：</span>
                          <a class="a_type2 classly" href="#">
                            幻想修仙
                          </a>
                        </p>
                      </div>
                    </div>
                    <div class="content-text">
                      一念永恒
                    </div>
                  </div>
                </li>
                <li>
                  <!--                    style="background: #cacaca;-->
                  <span class="wm-list-index">3</span>
                  <div class="wm-list-content">
                    <div class="content-ditail">
                      <a href="#">
                        <img src="https://bookcover.yuewen.com/qdbimg/349573/1010868264/180" alt="">
                      </a>
                      <div class="content-detail-txt">
                        <h3>
                          <a href="#">诡秘之主 </a>
                        </h3>
                        <p>
                          <span>作者：</span>
                          <em>爱潜水的乌贼 </em>
                        </p>
                        <p>
                          <span>分类：</span>
                          <a class="a_type2 classly" href="#">
                            轻小说
                          </a>
                        </p>
                      </div>
                    </div>
                    <div class="content-text">
                      诡秘之主
                    </div>
                  </div>
                </li>
                <li>
                  <!--                    style="background: #cacaca;-->
                  <span class="wm-list-index">4</span>
                  <div class="wm-list-content">
                    <div class="content-ditail">
                      <a href="#">
                        <img src="https://bookcover.yuewen.com/qdbimg/349573/3602691/180" alt="">
                      </a>
                      <div class="content-detail-txt">
                        <h3>
                          <a href="#">修真聊天群 </a>
                        </h3>
                        <p>
                          <span>作者：</span>
                          <em>圣骑士的传说 </em>
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
                      圣骑士的传说
                    </div>
                  </div>
                </li>
                <li>
                  <!--                    style="background: #cacaca;-->
                  <span class="wm-list-index">5</span>
                  <div class="wm-list-content">
                    <div class="content-ditail">
                      <a href="#">
                        <img src="https://bookcover.yuewen.com/qdbimg/349573/1016572786/180" alt="">
                      </a>
                      <div class="content-detail-txt">
                        <h3>
                          <a href="#">我师兄实在太稳健了</a>
                        </h3>
                        <p>
                          <span>作者：</span>
                          <em>言归正传 </em>
                        </p>
                        <p>
                          <span>分类：</span>
                          <a class="a_type2 classly" href="#">
                            轻小说
                          </a>
                        </p>
                      </div>
                    </div>
                    <div class="content-text">
                      我师兄实在太稳健了
                    </div>
                  </div>
                </li>
                <li>
                  <!--                    style="background: #cacaca;-->
                  <span class="wm-list-index">6</span>
                  <div class="wm-list-content">
                    <div class="content-ditail">
                      <a href="#">
                        <img src="https://bookcover.yuewen.com/qdbimg/349573/3676417/180" alt="">
                      </a>
                      <div class="content-detail-txt">
                        <h3>
                          <a href="#">玄界之门</a>
                        </h3>
                        <p>
                          <span>作者：</span>
                          <em>忘语 </em>
                        </p>
                        <p>
                          <span>分类：</span>
                          <a class="a_type2 classly" href="#">
                            幻想修仙
                          </a>
                        </p>
                      </div>
                    </div>
                    <div class="content-text">
                      玄界之门
                    </div>
                  </div>
                </li>
                <li>
                  <!--                    style="background: #cacaca;-->
                  <span class="wm-list-index">7</span>
                  <div class="wm-list-content">
                    <div class="content-ditail">
                      <a href="#">
                        <img src="https://bookcover.yuewen.com/qdbimg/349573/3681560/180" alt="">
                      </a>
                      <div class="content-detail-txt">
                        <h3>
                          <a href="#">斗罗大陆III龙王传说</a>
                        </h3>
                        <p>
                          <span>作者：</span>
                          <em> 唐家三少 </em>
                        </p>
                        <p>
                          <span>分类：</span>
                          <a class="a_type2 classly" href="#">
                            异世大陆
                          </a>
                        </p>
                      </div>
                    </div>
                    <div class="content-text">
                      斗罗大陆III龙王传说
                    </div>
                  </div>
                </li>
                <li>
                  <!--                    style="background: #cacaca;-->
                  <span class="wm-list-index">8</span>
                  <div class="wm-list-content">
                    <div class="content-ditail">
                      <a href="#">
                        <img src="https://bookcover.yuewen.com/qdbimg/349573/1209977/180" alt="">
                      </a>
                      <div class="content-detail-txt">
                        <h3>
                          <a href="#">斗破苍穹</a>
                        </h3>
                        <p>
                          <span>作者：</span>
                          <em>天蚕土豆</em>
                        </p>
                        <p>
                          <span>分类：</span>
                          <a class="a_type2 classly" href="#">
                            轻小说
                          </a>
                        </p>
                      </div>
                    </div>
                    <div class="content-text">
                      斗破苍穹
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
            <a href="#">都市校园</a>
          </h3>
          <h3>
            <a href="#">玄幻奇幻</a>
          </h3>
          <h3>
            <a href="#">都市校园</a>
          </h3>
          <h3>
            <a href="#">武侠仙侠</a>
          </h3>
          <h3>
            <a href="#">悬疑灵异</a>
          </h3>
          <h3>
            <a href="#">科幻末世</a>
          </h3>
          <h3>
            <a href="#">游戏竞技</a>
          </h3>
          <h3>
            <a href="#">同人小说</a>
          </h3>
        </div>
          <Con_box/>
      </div>
    </div>
</template>

<script>
  import Con_box from "../common/Con_box";
    export default {
        name: "page",
        data(){
          return{
            value2: 0
          }
        },
        components:{
          Con_box
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
   @import "../../assets/css/page.css";
</style>

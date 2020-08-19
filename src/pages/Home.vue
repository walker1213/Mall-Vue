<template>
  <!-- main 部分开始 -->

  <div class="jd">
    <nav-header></nav-header>
    <!-- header 部分 start -->
    <div class="header">
      <div class="w inner">
        <!-- logo 部分 -->
        <div class="logo">
          <h1>
            <a href="javascript:;" title="京东网">京东</a>
          </h1>
        </div>
        <!-- 搜索部分 -->
        <div class="search">
          <input type="text" value="单反相机" />
          <button>
            <i></i>
          </button>
          <em></em>
        </div>
        <!-- 热词部分 -->
        <div class="hotwords">
          <a href="javascript:;" class="style-red">手机五折抢</a>
          <a href="javascript:;">国际奢品</a>
          <a href="javascript:;">24期免息</a>
          <a href="javascript:;">爱车女神</a>
          <a href="javascript:;">防疫攻坚</a>
          <a href="javascript:;">低价手机</a>
          <a href="javascript:;">运动户外</a>
        </div>
        <!-- 购物车 -->
        <div class="myCar" @click="checkIn">
          <i></i>
          <a href="javascript:;">我的购物车</a>
          <s>{{this.cartList.length}}</s>
        </div>
        <!-- 电脑 -->
        <div class="computer">
          <a href="javascript:;">
            <img src="images/computer.jpg" height="40" width="190" alt />
          </a>
        </div>

        <!-- 导航栏信息 -->
        <div class="navitems">
          <ul>
            <li>
              <a href="javascript:;" class="li1">秒杀</a>
            </li>
            <li>
              <a href="javascript:;" class="li1">优惠券</a>
            </li>
            <li>
              <a href="javascript:;">PLUS会员</a>
            </li>
            <li>
              <a href="javascript:;">品牌闪购</a>
            </li>
            <li>
              <a href="javascript:;">拍卖</a>
            </li>
            <li>
              <a href="javascript:;">京东家电</a>
            </li>
            <li>
              <a href="javascript:;">京东超市</a>
            </li>
            <li>
              <a href="javascript:;">京东生鲜</a>
            </li>
            <li>
              <a href="javascript:;">京东国际</a>
            </li>
            <li>
              <a href="javascript:;">京东金融</a>
            </li>
          </ul>
        </div>
      </div>
    </div>
    <!-- header 部分 end-->
    <div class="w jd-inner">
      <div class="jd-clo1">
        <ul>
          <li>
            <a href="javascript:;">家用电器</a>
            <div class="menu">
              <div class="left-top">
                <a href="javascript:;">
                  家电馆
                  <span>></span>
                </a>
                <a href="javascript:;">
                  家电专卖店
                  <span>></span>
                </a>
                <a href="javascript:;">
                  家电服务
                  <span>></span>
                </a>
                <a href="javascript:;">
                  企业采购
                  <span>></span>
                </a>
                <a href="javascript:;">
                  商用电器
                  <span>></span>
                </a>
                <a href="javascript:;">
                  以旧换新
                  <span>></span>
                </a>
              </div>
              <div class="left-bottom">
                <dl v-for="item in navList" :key="item">
                  <dt>
                    <a href="javescript:;">
                      {{item.lineTitle}}
                      <span>></span>
                    </a>
                  </dt>
                  <dd v-for="it in item.lineItem" :key="it">
                    <a href="javescript:;">{{it}}</a>
                  </dd>
                </dl>
              </div>
              <div class="right">
                <a href="javascript:;">
                  <img src="./../../public/imgs/menu-right/331a9c8fdb4a4e34.jpg.webp" alt />
                </a>
                <a href="javascript:;">
                  <img src="./../../public/imgs/menu-right/86f78e15182c3b53.jpg.webp" alt />
                </a>
                <a href="javascript:;">
                  <img src="./../../public/imgs/menu-right/4b094b6d0a5527fe.jpg.webp" alt />
                </a>
              </div>
            </div>
          </li>
          <li>
            <a href="javascript:;">手机</a>
            <span>/</span>
            <a href="javascript:;">运营商</a>
            <span>/</span>
            <a href="javascript:;">数码</a>
            <div class="menu">
              <div class="left-top">
                <a href="javascript:;">
                  玩3C
                  <span>></span>
                </a>
                <a href="javascript:;">
                  手机频道
                  <span>></span>
                </a>
                <a href="javascript:;">
                  网上营业厅
                  <span>></span>
                </a>
                <a href="javascript:;">
                  配件频道
                  <span>></span>
                </a>
                <a href="javascript:;">
                  智能数码
                  <span>></span>
                </a>
                <a href="javascript:;">
                  影像Club
                  <span>></span>
                </a>
              </div>
              <div class="left-bottom">
                <dl v-for="item in navList" :key="item">
                  <dt>
                    <a href="javescript:;">
                      {{item.lineTitle}}
                      <span>></span>
                    </a>
                  </dt>
                  <dd v-for="it in item.lineItem" :key="it">
                    <a href="javescript:;">{{it}}</a>
                  </dd>
                </dl>
              </div>
              <div class="right">
                <a href="javascript:;">
                  <img src="./../../public/imgs/menu-right/331a9c8fdb4a4e34.jpg.webp" alt />
                </a>
                <a href="javascript:;">
                  <img src="./../../public/imgs/menu-right/86f78e15182c3b53.jpg.webp" alt />
                </a>
                <a href="javascript:;">
                  <img src="./../../public/imgs/menu-right/4b094b6d0a5527fe.jpg.webp" alt />
                </a>
              </div>
            </div>
          </li>
          <li>
            <a href="javascript:;">电脑</a>
            <span>/</span>
            <a href="javascript:;">办公</a>
          </li>
          <li>
            <a href="javascript:;">家居</a>
            <span>/</span>
            <a href="javascript:;">家具</a>
            <span>/</span>
            <a href="javascript:;">家装</a>
            <span>/</span>
            <a href="javascript:;">厨具</a>
          </li>
          <li>
            <a href="javascript:;">男装</a>
            <span>/</span>
            <a href="javascript:;">女装</a>
            <span>/</span>
            <a href="javascript:;">童装</a>
            <span>/</span>
            <a href="javascript:;">内衣</a>
          </li>
          <li>
            <a href="javascript:;">美妆</a>
            <span>/</span>
            <a href="javascript:;">个护清洁</a>
            <span>/</span>
            <a href="javascript:;">宠物</a>
          </li>
          <li>
            <a href="javascript:;">女鞋</a>
            <span>/</span>
            <a href="javascript:;">箱包</a>
            <span>/</span>
            <a href="javascript:;">钟表</a>
            <span>/</span>
            <a href="javascript:;">珠宝</a>
          </li>
          <li>
            <a href="javascript:;">男鞋</a>
            <span>/</span>
            <a href="javascript:;">运动</a>
            <span>/</span>
            <a href="javascript:;">户外</a>
          </li>
          <li>
            <a href="javascript:;">房产</a>
            <span>/</span>
            <a href="javascript:;">汽车</a>
            <span>/</span>
            <a href="javascript:;">汽车用品</a>
          </li>
          <li>
            <a href="javascript:;">母婴</a>
            <span>/</span>
            <a href="javascript:;">玩具乐器</a>
          </li>
          <li>
            <a href="javascript:;">食品</a>
            <span>/</span>
            <a href="javascript:;">酒类</a>
            <span>/</span>
            <a href="javascript:;">生鲜</a>
            <span>/</span>
            <a href="javascript:;">特产</a>
          </li>
          <li>
            <a href="javascript:;">艺术</a>
            <span>/</span>
            <a href="javascript:;">礼品鲜花</a>
            <span>/</span>
            <a href="javascript:;">农资绿植</a>
          </li>
          <li>
            <a href="javascript:;">房产</a>
            <span>/</span>
            <a href="javascript:;">汽车</a>
            <span>/</span>
            <a href="javascript:;">汽车用品</a>
          </li>
          <li>
            <a href="javascript:;">母婴</a>
            <span>/</span>
            <a href="javascript:;">玩具乐器</a>
          </li>
          <li>
            <a href="javascript:;">食品</a>
            <span>/</span>
            <a href="javascript:;">酒类</a>
            <span>/</span>
            <a href="javascript:;">生鲜</a>
            <span>/</span>
            <a href="javascript:;">特产</a>
          </li>
          <li>
            <a href="javascript:;">艺术</a>
            <span>/</span>
            <a href="javascript:;">礼品鲜花</a>
            <span>/</span>
            <a href="javascript:;">农资绿植</a>
          </li>
        </ul>
      </div>
      <div class="jd-clo2">
        <div class="jd-clo2-left">
          <a href="javascript:;" class="prev"></a>
          <a href="javascript:;" class="next"></a>

          <div class="slider_icon">
            <i class="btn1 btn_ac"></i>
            <i class="btn1"></i>
            <i class="btn1"></i>
            <i class="btn1"></i>
            <i class="btn1"></i>
            <i class="btn1"></i>
            <i class="btn1"></i>
            <i class="btn1"></i>
          </div>

          <ul class="slider_list">
            <li>
              <a href="javascript:;" style="display: block;">
                <img src="../../public/imgs/turn/image1.webp" />
              </a>
            </li>
            <li>
              <a href="javascript:;">
                <img src="../../public/imgs/turn/image2.webp" />
              </a>
            </li>
            <li>
              <a href="javascript:;">
                <img src="../../public/imgs/turn/image3.webp" />
              </a>
            </li>
            <li>
              <a href="javascript:;">
                <img src="../../public/imgs/turn/image4.jpg" />
              </a>
            </li>
            <li>
              <a href="javascript:;">
                <img src="../../public/imgs/turn/image5.jpg" />
              </a>
            </li>
            <li>
              <a href="javascript:;">
                <img src="../../public/imgs/turn/image6.webp" />
              </a>
            </li>
            <li>
              <a href="javascript:;">
                <img src="../../public/imgs/turn/image7.webp" />
              </a>
            </li>
            <li>
              <a href="javascript:;">
                <img src="../../public/imgs/turn/image8.webp" />
              </a>
            </li>
          </ul>
        </div>
        <div class="jd-clo2-right">
          <div class="pic">
            <img src="../../public/imgs/right/image1-1.webp" />
          </div>
          <div class="pic">
            <img src="../../public/imgs/right/image1-2.webp" />
          </div>
          <div>
            <img src="../../public/imgs/right/image1-3.webp" />
          </div>
        </div>
      </div>
      <div class="jd-clo3">
        <div class="user">
          <div class="user-info">
            Hi, 欢迎来到京东!
            <br />
            <!-- <a href="javascript:;">登录</a>
            <a href="javascript:;">注册</a> -->
            <a href="javascript:;" class="info-img">
              <img src="../../public/imgs/no_login.jpg" />
            </a>
          </div>
          <div class="user-profit">
            <a href="javascript:;" class="new-profit">新人福利</a>
            <a href="javascript:;" class="plus-member">PLUS会员</a>
          </div>
        </div>
        <div class="news">
          <div class="tab-hd">
            <a href="javascript:;" class="jd-fast">
              <h5>京东快报</h5>
            </a>
            <a href="javascript:;" class="more1">更多</a>
          </div>
          <div class="tab-bd">
            <ul>
              <li class="news_item">
                <a href="javascript:;">
                  <span class="news_tag">热议</span>还在为买不到口罩发愁吗？国家发声了！
                </a>
              </li>
              <li class="news_item">
                <a href="javascript:;">
                  <span class="news_tag">HOT</span>抗击疫情，3Q医用口罩贴心管家守护你的健康
                </a>
              </li>
              <li class="news_item">
                <a href="javascript:;">
                  <span class="news_tag">最新</span>降了！iPhone 11官方承认，还买什么小米10！
                </a>
              </li>
              <li class="news_item">
                <a href="javascript:;">
                  <span class="news_tag">推荐</span>骁龙865对比麒麟990 5G！差距果然太大
                </a>
              </li>
            </ul>
          </div>
        </div>
        <div class="jd-service">
          <ul>
            <li>
              <a href="javascript:;">
                <i></i>
                <p>机票</p>
              </a>
            </li>
            <li>
              <a href="javascript:;">
                <i></i>
                <p>机票</p>
              </a>
            </li>
            <li>
              <a href="javascript:;">
                <i></i>
                <p>机票</p>
              </a>
            </li>
            <li>
              <a href="javascript:;">
                <i></i>
                <p>机票</p>
              </a>
            </li>
            <li>
              <a href="javascript:;">
                <i></i>
                <p>机票</p>
              </a>
            </li>
            <li>
              <a href="javascript:;">
                <i></i>
                <p>机票</p>
              </a>
            </li>
            <li>
              <a href="javascript:;">
                <i></i>
                <p>机票</p>
              </a>
            </li>
            <li>
              <a href="javascript:;">
                <i></i>
                <p>机票</p>
              </a>
            </li>
            <li>
              <a href="javascript:;">
                <i></i>
                <p>机票</p>
              </a>
            </li>
            <li>
              <a href="javascript:;">
                <i></i>
                <p>机票</p>
              </a>
            </li>
            <li>
              <a href="javascript:;">
                <i></i>
                <p>机票</p>
              </a>
            </li>
            <li>
              <a href="javascript:;">
                <i></i>
                <p>机票</p>
              </a>
            </li>
          </ul>
        </div>
      </div>
    </div>
    <!-- 广告结束 -->
    <div class="ad">
      <a href="javascript:;"></a>
    </div>
    <nav-footer></nav-footer>
  </div>
  <!-- main 部分end -->
</template>
<style scoped>
@import ".././assets/css/home-base.css";
@import ".././assets/css/home-normalize.css";
@import ".././assets/css/home-index.css";
</style>
<script>
import NavHeader from "./../components/Header";
import NavFooter from "./../components/Footer";
import $ from "jquery";
import { addr1 } from "./../assets/js/menu.js";
import { addr2 } from "./../assets/js/menu.js";
import { slider } from "./../assets/js/slider.js";
export default {
  data() {
    return {
      navList: [],
      cartList: [],
      modalConfirm: false
    };
  },
  components: {
    NavHeader,
    NavFooter
  },
  mounted() {
    // 初始化首页
    this.init();
    //添加轮播图以及弹出菜单效果
    this.func();
  },
  methods: {
    init() {
      this.axios.get("/mock/nav.json").then(response => {
        let res = response.data;
        this.navList = res.data;
      }),
        this.axios.get("/mock/cart.json").then(response => {
          let res = response.data;
          this.cartList = res.data;
        });
    },
    checkIn() {
      this.$router.push({
        path: "/cart"
      });
    },
    func() {
      addr1();
      addr2();
      slider();
    }
  }
};
</script>




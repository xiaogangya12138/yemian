<!-- 套餐详情 -->
<template>
  <div style="background-color: #f4f4f4">
    <el-row>
      <el-col :md="24" :lg="24" :xl="24">
        <!-- 导航 -->
        <div class="floating">
          <!-- 导航添加背景颜色 -->
          <div
            style="
              width: 100%;
              height: 100%;
              overflow: hidden;
              background-color: rgb(35 37 35 / 52%);
            "
          >
            <header>
              <div class="nav_header">
                <div class="nav_cent">
                  <div class="logo fl">
                    <a href="#"
                      ><img src="../assets/imges/logo.png" alt=""
                    /></a>
                  </div>
                  <!-- 文字导航 -->
                  <div class="nav fl">
                    <ul
                      v-for="(item, index) in getData"
                      :key="index"
                      style="padding: 0"
                    >
                      <li @click="getNavText(index)">
                        <span>{{ item.name }}</span
                        ><i :class="{ underline: index == navTextli }"></i>
                      </li>
                    </ul>
                    <!-- login -->
                    <div class="login fl" style="padding: 0; margin-top: 5px">
                      <div class="login_btn">
                        <i class="el-icon-user-solid" style="cursor: pointer"
                          >登录 /</i
                        >
                        <i class="el-icon-key" style="cursor: pointer">注册</i>
                      </div>
                    </div>
                  </div>
                </div>
              </div>
            </header>
          </div>
        </div>
        <!-- 解决浮动顶部问题 -->
        <div style="height: 120px; width: 100%">&nbsp;</div>
        <div class="center">
          <!-- 外面的盒子 左边-->
          <div
            class="center_fl fl"
            style="
              margin-top: 20px;
              background-color: #fff;
              border: 1px solid #ccc;
              padding-top: 40px;
              padding-left: 40px;
            "
          >
            <!-- 内部 -->
            <div>
              <!-- 轮播图 -->
              <div class="carousel fl">
                <template>
                  <el-carousel
                    :interval="5000"
                    arrow="always"
                    height="250px"
                    indicator-position="none"
                  >
                    <el-carousel-item
                      v-for="(item, index) in imageDate"
                      :key="index"
                    >
                      <img style="width: 100%" :src="item.image" alt="" />
                    </el-carousel-item>
                  </el-carousel>
                </template>
                <div class="share">
                  <a href="javascript:;"><i class="el-icon-edit"></i></a>
                  <a href="javascript:;"><i class="el-icon-share"></i></a>
                  <a href="javascript:;"><i class="el-icon-paperclip"></i></a>
                </div>
                <div class="btn_share" style="margin-top: 30px">
                  <a><i class="el-icon-edit"></i> 在线预订</a>
                </div>
              </div>
              <!-- 介绍 -->
              <div class="fl center_fr">
                <div class="content_text">
                  <div
                    style="
                      font-family: 微软雅黑;
                      font-size: 20px;
                      color: #e04f67;
                    "
                  >
                    法国巴黎 · 六日游
                  </div>
                  <span
                    style="
                      line-height: 1.5em;
                      color: #e04f67;
                      text-align: left;
                      font-family: 微软雅黑;
                      font-size: 16px;
                    "
                  >
                    Pairs，France
                  </span>

                  <div class="content_introduce">
                    <span
                      >巴黎，是法兰西共和国的首都，法国最大城市，欧洲第二大城市，法国的政治、经济、文化、商业中心。世界四大国际化都市之一。巴黎位于法国北部巴黎盆地的中央，横跨塞纳河两岸。巴黎有小巴黎、大巴黎之分。小巴黎指大环城公路以内的巴黎城市内，面积105.4平方公里，人口200多万；巴黎建都已有1400多年的历史，它不仅是法国，也是西欧的一个政治、经济和文化中心，巴黎香水有“梦幻工业”之称。巴黎是历史之城、美食之都和创作重镇。巴黎是著名的世界艺术之都，印象派美术发源地，芭蕾舞的诞生地，欧洲启蒙思想运动中心，电影的故乡，现代奥林匹克运动会创始地。</span
                    >
                  </div>
                </div>
                <!-- 线 -->
                <div class="segmentation">&nbsp;</div>
              </div>
            </div>
            <!-- 详细介绍 -->
            <div class="dede_introduce">
              <div>
                <div
                  style="
                    width: 10px;
                    height: 25px;
                    background-color: rgb(224, 79, 103);
                    float: left;
                    margin-right: 20px;
                  "
                >
                  &nbsp;
                </div>
                <span
                  style="
                    font-size: 20px;
                    font-size: 20px;
                    color: rgb(51, 51, 51);
                  "
                >
                  套餐介绍
                  <i
                    style="
                      color: rgb(169, 169, 169);
                      font-size: 14px;
                      font-family: arial;
                      font-size: 16px;
                    "
                    >/ introduce</i
                  ></span
                >
              </div>
              <div class="dede_introduce_text">
                <span style="display: inline-block; line-height: 1.8">
                  巴黎，是法兰西共和国的首都，法国最大城市，法国的政治、经济、文化、商业中心。世界四大国际化都市之一。巴黎位于法国北部巴黎盆地的中央，横跨塞纳河两岸。建都1400多年，它不仅是法国，也是西欧的一个政治、经济和文化中心，巴黎香水有“梦幻工业”之称。巴黎是历史之城、美食之都和创作重镇。巴黎是著名的世界艺术之都，印象派美术发源地，芭蕾舞的诞生地，欧洲启蒙思想运动中心，电影的故乡，现代奥林匹克运动会创始地。巴黎又是世界公认的文化之都，大量的科学机构、研究院、图书馆、博物馆、电影院、剧院、音乐厅分布于全市的各个角落。
                  在自中世纪以来的发展中，一直保留过去的印记，某些街道的布局历史悠久，也保留了统一的风格。形形色色不同背景的巴黎居民，为这座梦想之城带来缤纷活力，形成花都独一无二的印记。
                </span>
              </div>
            </div>
            <div class="dede_introduce" style="margin-top: 50px">
              <div>
                <div
                  style="
                    width: 10px;
                    height: 25px;
                    background-color: rgb(224, 79, 103);
                    float: left;
                    margin-right: 20px;
                  "
                >
                  &nbsp;
                </div>
                <span
                  style="
                    font-size: 20px;
                    font-size: 20px;
                    color: rgb(51, 51, 51);
                  "
                >
                  价格说明
                  <i
                    style="
                      color: rgb(169, 169, 169);
                      font-size: 14px;
                      font-family: arial;
                      font-size: 16px;
                    "
                    >/ price</i
                  ></span
                >
              </div>
              <div class="dede_introduce_text">
                <span style="display: inline-block; line-height: 1.8">
                  巴黎，是法兰西共和国的首都，法国最大城市，法国的政治、经济、文化、商业中心。世界四大国际化都市之一。巴黎位于法国北部巴黎盆地的中央，横跨塞纳河两岸。建都1400多年，它不仅是法国，也是西欧的一个政治、经济和文化中心，巴黎香水有“梦幻工业”之称。巴黎是历史之城、美食之都和创作重镇。巴黎是著名的世界艺术之都，印象派美术发源地，芭蕾舞的诞生地，欧洲启蒙思想运动中心，电影的故乡，现代奥林匹克运动会创始地。巴黎又是世界公认的文化之都，大量的科学机构、研究院、图书馆、博物馆、电影院、剧院、音乐厅分布于全市的各个角落。
                  在自中世纪以来的发展中，一直保留过去的印记，某些街道的布局历史悠久，也保留了统一的风格。形形色色不同背景的巴黎居民，为这座梦想之城带来缤纷活力，形成花都独一无二的印记。
                </span>
              </div>
            </div>
            <div
              class="dede_introduce"
              style="margin-top: 50px; border-bottom: none"
            >
              <div>
                <div
                  style="
                    width: 10px;
                    height: 25px;
                    background-color: rgb(224, 79, 103);
                    float: left;
                    margin-right: 20px;
                  "
                >
                  &nbsp;
                </div>
                <span
                  style="
                    font-size: 20px;
                    font-size: 20px;
                    color: rgb(51, 51, 51);
                  "
                >
                  注意事项
                  <i
                    style="
                      color: rgb(169, 169, 169);
                      font-size: 14px;
                      font-family: arial;
                      font-size: 16px;
                    "
                  >
                    / note</i
                  ></span
                >
              </div>
              <div class="dede_introduce_text">
                <span style="display: inline-block; line-height: 1.8">
                  巴黎，是法兰西共和国的首都，法国最大城市，法国的政治、经济、文化、商业中心。世界四大国际化都市之一。巴黎位于法国北部巴黎盆地的中央，横跨塞纳河两岸。建都1400多年，它不仅是法国，也是西欧的一个政治、经济和文化中心，巴黎香水有“梦幻工业”之称。巴黎是历史之城、美食之都和创作重镇。巴黎是著名的世界艺术之都，印象派美术发源地，芭蕾舞的诞生地，欧洲启蒙思想运动中心，电影的故乡，现代奥林匹克运动会创始地。巴黎又是世界公认的文化之都，大量的科学机构、研究院、图书馆、博物馆、电影院、剧院、音乐厅分布于全市的各个角落。
                  在自中世纪以来的发展中，一直保留过去的印记，某些街道的布局历史悠久，也保留了统一的风格。形形色色不同背景的巴黎居民，为这座梦想之城带来缤纷活力，形成花都独一无二的印记。
                </span>
              </div>
            </div>
          </div>
          <!-- 右边 -->
          <div class="center_fr fl">
            <!-- 白板背景 -->
            <div
              class="bgc_Center_Fr"
              style="background-color: rgb(255, 255, 255)"
            >
              <!-- 内容 -->
              <div>
                <!--按钮 -->
                <div
                  class="center_fr_btn"
                  style="margin-top: 30px "
                >
                  <a><i class="el-icon-edit"></i> 更多旅游景点</a>
                </div>
                <!-- 展示 -->
                <div class="center_fr_show" >
                  <ul  v-for="(item, index) in moreDate" :key="index">
                    <li>
                      <div class="center_fr_img"  @click="getUp">
                        <i>
                          <img style="width:100%;" :src="item.image" alt="" />
                        </i>

                       <div class="center_fr_img_span">
                            <span >{{item.name}}</span>
                       </div>
                      </div>
                    </li>
                  </ul>
                </div>
              </div>
            </div>
          </div>
        </div>

        <!-- 电梯导航 -->
        <div class="navigation">
          <ul style="padding: 0; margin: 0">
            <li>
              <button><i class="el-icon-phone"></i></button>
            </li>
            <li>
              <button><i class="el-icon-chat-round"></i></button>
            </li>
            <li>
              <button style="background-color: #f27567">
                <i class="el-icon-message"></i>
              </button>
            </li>
            <li>
              <button><i class="el-icon-discover"></i></button>
            </li>
            <li>
              <button @click="backtop" style="outline: none">
                <i class="el-icon-arrow-up"></i>
              </button>
            </li>
          </ul>
        </div>
        <div>
          <contact_Us></contact_Us>
        </div>
      </el-col>
    </el-row>
  </div>
</template>

<script>
  // 底部信息
  import contact_Us from "./contact_Us";
export default {
  data() {
    return {
      // 数据
      getData: [
        {
          name: "首页",
          id: "",
          said: "0",
        },
        {
          name: "热门景点",
          id: "child_Hot_Spots",
          said: "1",
        },
        {
          name: "旅游套餐",
          id: "child_Travel_Packages",
          said: "2",
        },
        {
          name: "关于我们",
          id: "child_About_Us",
          said: "3",
        },
        {
          name: "客户反馈",
          id: "child_Customer_feedback",
          said: "4",
        },
        {
          name: "联系我们",
          id: "child_Contact_Us",
          said: "5",
        },
        {
          name: "旅游签证",
          id: "child_Tourist_Visa",
          said: "6",
        },
      ],
      // 图片
      imageDate: [
        {
          id: "0",
          image:
            "https://ccdn.goodq.top/caches/628d236aceaa012698bd7fe4b8dc188c/aHR0cHM6Ly81ODc0NWExOTcyYzZmLnQ3My5xaWZlaXllLmNvbS9xZnktY29udGVudC91cGxvYWRzLzIwMTcvMDIvOWFiNWJiMTlkZjQ1ZjU4ZjRhNTlhMGI3Yjg1OTkxODktMzAweDIwMC05MC53ZWJw.webp",
        },
        {
          id: "1",
          image:
            "https://ccdn.goodq.top/caches/628d236aceaa012698bd7fe4b8dc188c/aHR0cHM6Ly81ODc0NWExOTcyYzZmLnQ3My5xaWZlaXllLmNvbS9xZnktY29udGVudC91cGxvYWRzLzIwMTcvMDEvN2YwNWJiZmRkOWVlNTc0OWQ1YjI3YWMzZmIzYTc5MDItMzAweDIwMC05MC53ZWJw.webp",
        },
        {
          id: "2",
          image:
            "https://ccdn.goodq.top/caches/628d236aceaa012698bd7fe4b8dc188c/aHR0cHM6Ly81ODc0NWExOTcyYzZmLnQ3My5xaWZlaXllLmNvbS9xZnktY29udGVudC91cGxvYWRzLzIwMTcvMDIvODBkNjdiOWNkNDA4MTE2YTE3YzhiYTZhODFmMDFlMTktMzAweDIwMC05MC53ZWJw.webp",
        },
        {
          id: "3",
          image:
            "https://ccdn.goodq.top/caches/628d236aceaa012698bd7fe4b8dc188c/aHR0cHM6Ly81ODc0NWExOTcyYzZmLnQ3My5xaWZlaXllLmNvbS9xZnktY29udGVudC91cGxvYWRzLzIwMTcvMDQvODZlYmI0OWIxNTVlNmRmNDBhZTgwMWZjNzg3NDFmNTAtMzAweDIwMC05MC53ZWJw.webp",
        },
        {
          id: "4",
          image:
            "https://ccdn.goodq.top/caches/628d236aceaa012698bd7fe4b8dc188c/aHR0cHM6Ly81ODc0NWExOTcyYzZmLnQ3My5xaWZlaXllLmNvbS9xZnktY29udGVudC91cGxvYWRzLzIwMTcvMTIvZDI1NzkyYWUyYmM2NDQ4NjM5MWM2MGZjNzEzOGYzYjItMzAweDIwMC05MC53ZWJw.webp",
        },
        {
          id: "5",
          image:
            "https://ccdn.goodq.top/caches/628d236aceaa012698bd7fe4b8dc188c/aHR0cHM6Ly81ODc0NWExOTcyYzZmLnQ3My5xaWZlaXllLmNvbS9xZnktY29udGVudC91cGxvYWRzLzIwMTcvMDIvNmYwMzM2MTg1YzA1NzFlNzhmYjBlZTBlZmNiMzg3N2QtNTI0eDM1MC05MC53ZWJw.webp",
        },
      ],
      //   更多景点
      moreDate: [
        {
          name: "奥赛博物馆",
          image:
            "https://ccdn.goodq.top/caches/628d236aceaa012698bd7fe4b8dc188c/aHR0cHM6Ly81ODc0NWExOTcyYzZmLnQ3My5xaWZlaXllLmNvbS9xZnktY29udGVudC91cGxvYWRzLzIwMTcvMDIvOWFiNWJiMTlkZjQ1ZjU4ZjRhNTlhMGI3Yjg1OTkxODktMzAweDIwMC05MC53ZWJw.webp",
        },
        {
          name: "埃菲尔铁塔",
          image:
            "https://ccdn.goodq.top/caches/628d236aceaa012698bd7fe4b8dc188c/aHR0cHM6Ly81ODc0NWExOTcyYzZmLnQ3My5xaWZlaXllLmNvbS9xZnktY29udGVudC91cGxvYWRzLzIwMTcvMDEvN2YwNWJiZmRkOWVlNTc0OWQ1YjI3YWMzZmIzYTc5MDItMzAweDIwMC05MC53ZWJw.webp",
        },
        {
          name: "凡尔赛宫",
          image:
            "https://ccdn.goodq.top/caches/628d236aceaa012698bd7fe4b8dc188c/aHR0cHM6Ly81ODc0NWExOTcyYzZmLnQ3My5xaWZlaXllLmNvbS9xZnktY29udGVudC91cGxvYWRzLzIwMTcvMDIvODBkNjdiOWNkNDA4MTE2YTE3YzhiYTZhODFmMDFlMTktMzAweDIwMC05MC53ZWJw.webp",
        },
        {
          name: "圣心大教堂",
          image:
            "https://ccdn.goodq.top/caches/628d236aceaa012698bd7fe4b8dc188c/aHR0cHM6Ly81ODc0NWExOTcyYzZmLnQ3My5xaWZlaXllLmNvbS9xZnktY29udGVudC91cGxvYWRzLzIwMTcvMDQvODZlYmI0OWIxNTVlNmRmNDBhZTgwMWZjNzg3NDFmNTAtMzAweDIwMC05MC53ZWJw.webp",
        },
        {
          name: "凯旋门",
          image:
            "https://ccdn.goodq.top/caches/628d236aceaa012698bd7fe4b8dc188c/aHR0cHM6Ly81ODc0NWExOTcyYzZmLnQ3My5xaWZlaXllLmNvbS9xZnktY29udGVudC91cGxvYWRzLzIwMTcvMTIvZDI1NzkyYWUyYmM2NDQ4NjM5MWM2MGZjNzEzOGYzYjItMzAweDIwMC05MC53ZWJw.webp",
        },
      ],
      navTextli: NaN,
    };
  },
    // 子组件接收
    components: {
      contact_Us,
    },
    
  methods: {
    getNavText(index) {
      console.log(index);
      this.navTextli = index;
      for (let i = 0; i < this.getData.length; i++) {
        if (index == this.getData[i].said) {
          this.$router.push("/" + this.getData[i].id);
          console.log(this.getData[i].id);
        }
      }
    },

    //   回到顶部
    backtop() {
      let top = document.documentElement.scrollTop || document.body.scrollTop;
      // 实现滚动效果
      const timeTop = setInterval(() => {
        document.body.scrollTop = document.documentElement.scrollTop = top -= 50;
        if (top <= 0) {
          clearInterval(timeTop);
        }
      }, 10);
    },
    //跳转
    getUp(){
        console.log("跳转了");
        this.$router.push('/spots_Detailed')
    }
  },
};
</script>
<style  scoped>
*,
li {
  list-style: none;
}
.fl {
  float: left;
}

.fr {
  float: right;
}

.floating {
  position: absolute;
  height: 150px;
  width: 100%;
  background-image: url(../assets/imges/taocan.jpg);
  background-position: 0 -203px;
  /*  background-image: url(../assets/imges/beijing.png) ; */
  /*     background-size:cover; */
}

.nav_header {
  height: 120px;
  width: 100%;
  margin: 0 auto;
  padding-top: 20px;
}

.grid-content {
  height: 1000px;
  width: 100%;
}

.nav_cent {
  height: 100%;
  width: 1265px;
  margin: auto;
}

.nav {
  width: 960px;
  margin-left: 75px;
}

.nav li {
  float: left;
  position: relative;
  margin-right: 54px;
  margin-top: 35px;
  color: #fff;
  font-size: 14px;
  text-align: center;
}

.nav li:hover {
  cursor: pointer;
}

.underline {
  position: absolute;
  display: block;

  bottom: -10px;
  width: 100%;
  height: 1px;
  background-color: #fff;
  transition: all 0.6s cubic-bezier(0.215, 0.61, 0.355, 1) 0.3s;
}

.logo {
  width: 170px;
  height: 65px;
}

.logo img {
  width: 100%;
}

.login {
  color: #fff;
  margin-left: 100px;
}

.login_btn {
  margin-top: 32px;
  font-size: 12px;
}
/* 电梯导航 */
.navigation {
  position: fixed;
  height: 270px;
  width: 50px;
  /* background-color: pink; */
  background: rgb(155, 155, 155);
  cursor: pointer;
  bottom: 400px;
  right: 10px;
  border-radius: 5px;
  z-index: 9999;
}

.navigation li button {
  height: 50px;
  width: 50px;
  margin-bottom: 5px;
  border: 1px solid #ccc;
  border-radius: 50px;
  font-size: 30px;
  color: #fff;
  background: rgb(155, 155, 155);
  /* cursor: pointer; */
  outline: none;
}

.navigation li button:hover {
  background-color: #f27567;
}

/* 内容部分 */
.center {
  overflow: hidden;
  width: 1200px;
  padding: 30px;
  margin: auto;
  margin-top: 50px;
}
.center_fl {
  /* display:inline-block; */
  width: 766px;
  /* background-color: purple; */
  padding-bottom: 50px;
  padding-right: 20px;
  /* border-bottom:1px dotted #dbdbdb; */
}
/* 右边 */
.center_fr {
  /* 239 */
  width: 306px;
  margin-left: 25px;

  /* background-color: red; */
}
.carousel {
  height: 222px;
  width: 363px;
}
.content_text {
  background-position: left top;
  font-weight: normal;
  font-style: normal;
  font-family: arial;
}
.content_introduce {
  display: inline-block;
  margin-top: 20px;
  line-height: 1.8;
  font-family: 宋体;
  color: rgb(128, 128, 128);
  font-size: 12px;
}
.segmentation {
  position: absolute;
  width: 766px;
  margin-left: -390px;
  margin-top: 50px;
  border-bottom: 1px solid #ccc;
}
.share {
  height: 20px;
  width: 100px;
  margin-left: 5px;
}
.share a {
  height: 20px;
  width: 20px;
  font-size: 20px;
  color: #f27567;
  /* background-color: #f27567; */
}

.btn_share a {
  height: 50px;
  width: 140px;
  list-style: none;
  font-family: 微软雅黑;
  font-size: 16px;
  padding: 10px 50px;
  border-radius: 10px;
  /* border-width: 2px; */
  border-color: rgb(224, 79, 103);
  background-color: rgb(240, 40, 74);
  color: rgb(255, 255, 255);
}
.btn_share :hover {
  cursor: pointer;
}
.dede_introduce {
  width: 766px;
  margin-top: 400px;
  /* background-color: pink; */
  border-bottom: 1px solid #ccc;
}
.dede_introduce_text span {
  line-height: 1.5em;
  background-position: left top;
  background-repeat: no-repeat;
  font-size: 13px;
  font-weight: normal;
  font-style: normal;
  font-family: 宋体;
  color: #878787;
  text-align: inherit;
  padding-top: 20px;
  padding-bottom: 20px;
}
/* 右边 */
.bgc_Center_Fr {
  margin-left: 30px;
  margin-top: 30px;
}
.center_fr_btn {
  width: 190;
  margin: auto;
  text-align: center;
  font-family: 微软雅黑;
  font-size: 16px;
  font-weight: bold;
  padding-left: 40px;
  padding-right: 40px;
  padding-top: 10px;
  padding-bottom: 10px;
  border-width: 1px;
  border-color: #e04f67;
  background-color: #e04f67;
  color: #ffffff;
}
.center_fr_show{

    width: 234px;
    margin-left: -15px;
}
.center_fr_img {
  height: 196px;
  width: 233px;
  border-bottom: 1px solid #ccc;
}
.center_fr_img :hover{
    cursor:pointer;
}
.center_fr_img i {
  height: 151px;
  width: 277px;
  
}

.center_fr_img span{
    display: inline-block;
margin-top: 10px;
/* margin-left: 30px; */

}
.center_fr_img_span{
    height: 30px;
    width: 150px;
    margin: auto;
    text-align: center;
   color: #373A41;
    font-size: 13px;
    font-family: 微软雅黑;
    line-height: 19px;
}
</style>
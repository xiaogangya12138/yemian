<!-- 景区详情 -->
<template>
  <div>
    <el-row>
      <el-col :md="24" :lg="24" :xl="24">
        <div class="floating">
          <!-- 导航 -->
          <header>
            <div class="nav_header">
              <div class="nav_cent">
                <div class="logo fl">
                  <a href="#"><img src="../assets/imges/logo.png" alt="" /></a>
                </div>
                <!-- 文字导航 -->
                <div class="nav fl">
                  <ul
                    v-for="(item, index) in getData"
                    :key="index"
                    style="padding: 0; margin: 0; list-style: none"
                  >
                    <li @click="getNavText(index)">
                      <span>{{ item.name }}</span
                      ><i :class="{ underline: index == navTextli }"></i>
                    </li>
                  </ul>
                  <!-- login -->
                  <div class="login fl">
                    <div class="login_btn">
                      <i class="el-icon-user-solid" style="cursor: pointer">登录 /</i>
                      <i class="el-icon-key" style="cursor: pointer">注册</i>
                    </div>
                  </div>
                </div>
              </div>
            </div>
            <div style="height: 100px; width: 1024px; margin: 50px auto">
              <div class="text">
                <span>卢浮宫</span>
                <span>Musée du Louvre</span>
              </div>
            </div>
          </header>
        </div>
        <!-- 内容部分 -->
        <div class="center">
          <div class="fl">
            <div class="center_fl fl">
              <div style="margin-top: 50px; margin-left: 30px">
                <!-- 轮播图 -->
                <div class="shuffling_fl fl" style="width: 343px">
                  <template>
                    <el-carousel indicator-position="none" height="201px" trigger="click">
                      <el-carousel-item v-for="(item, index) in getDataImg" :key="index">
                        <img :src="item.imge" />
                      </el-carousel-item>
                    </el-carousel>
                  </template>
                </div>
                <!-- 文字 -->
                <div class="text_fr fl">
                  <div class="textjuli">
                    <span style="font-size: 20px; font-family: 微软雅黑">
                      卢浮宫 Louvre</span
                    >
                  </div>
                  <div class="textjuli" style="color: #e04f67">
                    <strong style="font-size: 26px">9.5</strong><span>分</span>
                  </div>
                  <div class="textjuli">
                    <el-rate text-color="#e04f67" v-model="rateValue" disabled> </el-rate>
                  </div>
                  <div class="textjuli">
                    <p>
                      <i class="el-icon-s-grid"></i
                      ><span
                        ><a
                          href="#javascript"
                          style="text-decoration: none; font-size: 12px"
                          >查看所有巴黎旅游景点</a
                        ></span
                      >
                    </p>
                  </div>
                  <div>
                    <a href="#javaScript" style="text-decoration: none">
                      <div class="butn">在线预订</div>
                    </a>
                  </div>
                </div>
              </div>
            </div>
            <!-- 景点介绍 -->
            <div class="center_fl">
              <div style="margin-left: 25px">
                <div class="introduce" style="margin-bottom: 20px">
                  <span>景点介绍 / introduce</span>
                </div>
                <div class="introduce_text">
                  <span
                    >卢浮宫位于法国巴黎市中心的塞纳河北岸，位居世界四大博物馆之首。
                    卢浮宫始建于1204年，原是法国的王宫，居住过50位法国国王和王后，是法国文艺复兴时期最珍贵的建筑物之一，以收藏丰富的古典绘画和雕刻而闻名于世。
                    现为卢浮宫博物馆，历经800多年扩建重修达到今天的规模，占地约198公顷，分新老两部分，宫前的金字塔形玻璃入口，占地面积为24公顷，是华人建筑大师贝聿铭设计的。1793年8月10日，卢浮宫艺术馆正式对外开放，成为一个博物馆。
                    卢浮宫藏有被誉为世界三宝的断臂维纳斯雕像、《蒙娜丽莎》油画和胜利女神石雕，拥有的艺术收藏达40万件以上，包括雕塑、绘画、美术工艺及古代东方，古埃及和古希腊、古罗马等6个门类。从古代埃及、希腊、埃特鲁里亚、罗马的艺术品，到东方各国的艺术品，有从中世纪到现代的雕塑作品，还有数量惊人的王室珍玩以及绘画精品等等。
                    卢浮宫已成为世界著名的艺术殿堂，最大的艺术宝库之一，是举世瞩目的万宝之宫。</span
                  >
                </div>
                <!-- 小贴士 -->
                <div class="tips">
                  <div style="padding: 20px">
                    <div><span>小贴士</span></div>
                    <div>
                      <span style="font-size: 12px; color: rgb(255, 51, 102)"
                        >快捷游览提示</span
                      >
                    </div>
                    <div>
                      <span
                        style="
                          font-size: 12px;
                          color: rgb(128, 128, 128);
                          font-family: 宋体;
                        "
                        >奥赛博物馆旺季的时候排队的人也很多，持有博物馆通票Museum
                        Pass有专门的安检通道，26岁以下欧盟长期居住者凭居留证直接进入不需要买票；天气好的时候可以上博物馆上方的小天台，可以看到塞纳河、蒙马特高地以及圣心教堂。</span
                      >
                    </div>
                  </div>
                </div>
                <!-- 更新时间 -->
                <div style="float: right; margin-top: 20px; margin-right: 15px">
                  <span
                    style="
                      font-size: 13px;
                      font-weight: normal;
                      font-style: normal;
                      font-family: 微软雅黑;
                      color: #7a7a7a;
                    "
                    >信息更新时间：2017-02-06</span
                  >
                </div>
              </div>
            </div>
            <!-- 更多旅游景点 -->
            <div style="margin-top: 60px">
              <template>
                <el-carousel
                  :interval="4000"
                  type="card"
                  height="150px"
                  :autoplay="false"
                >
                  <el-carousel-item v-for="(item, index) in getDataImg" :key="index">
                    <img :src="item.imge" />
                  </el-carousel-item>
                </el-carousel>
              </template>
            </div>
          </div>
          <!-- 地图 和注册表 -->
          <div class="fl">
            <div class="location">
              <!-- 地图 -->
              <div
                id="container"
                style="width: 100%; height: 100%; position: 'absolute'"
              ></div>
            </div>
            <div class="center_fr">
              <el-button style="margin-top: 20px; margin-bottom: 20px" type="danger"
                >在线搜寻</el-button
              >
              <el-form :model="ruleForm" :rules="rules" ref="ruleForm">
                <!-- 名字 -->
                <label
                  for="iphorm_77_8_5fce406199aac"
                  style="color: rgb(102, 102, 102); font-size: 14px; line-height: 14px"
                  >您的姓名 <span style="font-size: 10px; color: red">*</span></label
                >
                <el-form-item prop="phone">
                  <el-input v-model="ruleForm.name"></el-input>
                </el-form-item>
                <!-- 电话 -->
                <label
                  for="iphorm_77_8_5fce406199aac"
                  style="color: rgb(102, 102, 102); font-size: 14px; line-height: 14px"
                >
                  联系电话
                  <span style="font-size: 10px; color: red">*</span></label
                >
                <el-form-item prop="phone">
                  <el-input v-model="ruleForm.phone"></el-input>
                </el-form-item>
                <!-- 目的地 -->
                <label
                  for="iphorm_77_8_5fce406199aac"
                  style="color: rgb(102, 102, 102); font-size: 14px; line-height: 14px"
                >
                  目的地
                  <span style="font-size: 10px; color: red">*</span></label
                >
                <el-form-item prop="name">
                  <el-select v-model="ruleForm.region" placeholder="请选择目的地">
                    <el-option label="上海" value="shanghai"></el-option>
                    <el-option label="北京" value="beijing"></el-option>
                    <el-option label="深圳" value="shenzheng"></el-option>
                    <el-option label="广州" value="guangzhou"></el-option>
                    <el-option label="天津" value="tianjing"></el-option>
                    <el-option label="成都" value="chengdu"></el-option>
                  </el-select>
                </el-form-item>
                <!-- 成人 -->
                <label
                  for="iphorm_77_8_5fce406199aac"
                  style="color: rgb(102, 102, 102); font-size: 14px; line-height: 14px"
                >
                  成人1
                </label>
                <el-form-item prop="adult">
                  <el-select v-model="ruleForm.adult" placeholder="请选择人数">
                    <!--  -->
                    <el-option value="1"></el-option>
                    <el-option value="2"></el-option>
                    <el-option value="3"></el-option>
                    <el-option value="4"></el-option>
                    <el-option value="5"></el-option>
                    <el-option value="6"></el-option>
                  </el-select>
                </el-form-item>
                <!-- 儿童 -->
                <label
                  for="iphorm_77_8_5fce406199aac"
                  style="color: rgb(102, 102, 102); font-size: 14px; line-height: 14px"
                >
                  儿童1
                </label>
                <el-form-item prop="children">
                  <el-select v-model="ruleForm.children" placeholder="请选择人数">
                    <!--  -->
                    <el-option value="1"></el-option>
                    <el-option value="2"></el-option>
                    <el-option value="3"></el-option>
                    <el-option value="4"></el-option>
                    <el-option value="5"></el-option>
                    <el-option value="6"></el-option>
                  </el-select>
                </el-form-item>
                <!-- 备注 -->
                <label
                  for="iphorm_77_8_5fce406199aac"
                  style="color: rgb(102, 102, 102); font-size: 14px; line-height: 14px"
                >
                  备注
                </label>
                <el-form-item prop="desc">
                  <el-input type="textarea" v-model="ruleForm.desc"></el-input>
                </el-form-item>
              </el-form>
              <el-button type="danger">提交</el-button>
            </div>
          </div>
        </div>
      </el-col>
    </el-row>
    <!-- 头部文字导航 -->
    <!-- 电梯导航 -->
    <div class="navigation">
      <ul style="padding: 0; margin: 0; list-style: none">
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
  </div>
</template>

<script>
// 底部信息
import contact_Us from "./contact_Us";
// 地图

export default {
  data() {
    return {
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
      navTextli: NaN,
      getDataImg: [
        {
          id: "0",
          imge:
            "https://ccdn.goodq.top/caches/628d236aceaa012698bd7fe4b8dc188c/aHR0cHM6Ly81ODc0NWExOTcyYzZmLnQ3My5xaWZlaXllLmNvbS9xZnktY29udGVudC91cGxvYWRzLzIwMTcvMDIvM2NmYzRiMjM3NmY2ZjdhYTE1MzcxM2Y3NmE1OTllMTktMzYweDIxMC05MC53ZWJw.webp",
        },
        {
          id: "1",
          imge:
            "https://ccdn.goodq.top/caches/628d236aceaa012698bd7fe4b8dc188c/aHR0cHM6Ly81ODc0NWExOTcyYzZmLnQ3My5xaWZlaXllLmNvbS9xZnktY29udGVudC91cGxvYWRzLzIwMTcvMDIvNmYwMzM2MTg1YzA1NzFlNzhmYjBlZTBlZmNiMzg3N2QtMzYweDIxMC05MC53ZWJw.webp",
        },
        {
          id: "2",
          imge:
            "https://ccdn.goodq.top/caches/628d236aceaa012698bd7fe4b8dc188c/aHR0cHM6Ly81ODc0NWExOTcyYzZmLnQ3My5xaWZlaXllLmNvbS9xZnktY29udGVudC91cGxvYWRzLzIwMTcvMDIvYjAxOWVjMDJiNTk3OWJhYzkzMmM3ODI5NWY3NjlkZDgtMzYweDIxMC05MC53ZWJw.webp",
        },
        {
          id: "3",
          imge:
            "https://ccdn.goodq.top/caches/628d236aceaa012698bd7fe4b8dc188c/aHR0cHM6Ly81ODc0NWExOTcyYzZmLnQ3My5xaWZlaXllLmNvbS9xZnktY29udGVudC91cGxvYWRzLzIwMTcvMDIvOWFiNWJiMTlkZjQ1ZjU4ZjRhNTlhMGI3Yjg1OTkxODktMzYweDIxMC05MC53ZWJw.webp",
        },
      ],
      rateValue: 5.0,
      ruleForm: {
        // 姓名
        name: "",
        // 电话
        phone: "",
        // 成人
        adult: "",
        // 儿童
        children: "",
        // 备注
        desc: "",
      },
      // 验证规则
      rules: {
        // 姓名
        name: [
          { required: true, message: "请输入您的名字", trigger: "blur" },
          { min: 3, max: 5, message: "长度在 3 到 5 个字符", trigger: "blur" },
        ],

        // 电话验证
        phone: [
          { required: true, message: "请输入您的名字", trigger: "blur" },
          { min: 11, max: 11, message: "输入正确的手机号", trigger: "blur" },
          { pattern: /^[0-9]*$/, message: "只能输入数字" },
        ],
        // 目的地验证
        region: [{ required: true, message: "请选择活动区域", trigger: "change" }],
      },
      // 地图
      startPoint: {
        x: 121.409992,
        y: 31.178243,
      },
      zoom: 15,
    };
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
  },
  // 接收子组件
  components: {
    contact_Us,
  },
  // mounted()
  mounted() {
    var map = new BMapGL.Map("container"); // 创建Map实例
    var point = new BMapGL.Point(116.404, 39.915);
    map.centerAndZoom(point, 15);
    map.enableScrollWheelZoom(true);
    var scaleCtrl = new BMapGL.ScaleControl(); // 添加比例尺控件
    map.addControl(scaleCtrl);
    var zoomCtrl = new BMapGL.ZoomControl(); // 添加缩放控件
    map.addControl(zoomCtrl);
  },
};
</script>

<style scoped>
/* 头部导航 */
.fl {
  float: left;
}

.fr {
  float: right;
}

.floating {
  position: absolute;
  height: 350px;
  width: 100%;
  background-image: url(../assets/imges/hotImg.jpg);
  background-position: -128px -510px;
  /*  background-image: url(../assets/imges/beijing.png) ; */
  /*     background-size:cover; */
  background-repeat: no-repeat;
  /* background-size: cover;
    background-attachment: scroll;
    background-position: 0 53%; */
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

.text > span {
  display: block;
  font-family: 微软雅黑;
  font-size: 26px;
  font-weight: normal;
  font-style: normal;
  color: #ffffff;
  margin-bottom: 10px;
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

/* 版心 */
.center {
  overflow: hidden;
  width: 1100px;
  margin: auto;
  margin-top: 380px;
  /* background-color: pink; */
}
.center_fl {
  /* display:inline-block; */
  width: 766px;
  /* background-color: purple; */
  padding-bottom: 50px;
  /* border-bottom:1px dotted #dbdbdb; */
}
.center_fr {
  /* 239 */
  width: 239px;
  margin-left: 17px;
  /* background-color: red; */
}
.text_fr {
  margin-left: 20px;
}
.textjuli {
  margin-bottom: 10px;
}
.butn {
  font-family: 微软雅黑;
  font-size: 16px;
  padding-left: 50px;
  padding-right: 50px;
  padding-top: 10px;
  padding-bottom: 10px;
  border-width: 2px;
  border-color: #e04f67;
  background-color: #e04f67;
  color: #fff;
}
.xian {
  margin-top: 25px;
  width: 100%;
  border: 1px solid #ccc;
}
.introduce span {
  height: 50px;
  width: 100%;
  font-size: 20px;
  font-family: 微软雅黑;
  color: rgb(51, 51, 51);
  /* line-height: 10px; */
}
.introduce_text {
  width: 646px;

  font-family: 宋体;
  display: inline-block;
  line-height: 1.8;
  font-size: 13px;
  color: rgb(169, 169, 169);
}
.tips {
  height: 160px;
  width: 686px;
  border: 1px solid red;
  margin-top: 20px;
}
.tips span {
  display: inline-block;
  line-height: 2;
  color: rgb(51, 51, 51);
  font-size: 13px;
  font-family: 宋体;
}
.el-select {
  display: block;
}

/* 地图 */
.location {
  margin-left: 20px;
  height: 300px;
  width: 239px;
}
</style>

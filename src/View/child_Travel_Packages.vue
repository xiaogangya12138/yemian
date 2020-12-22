<!-- 旅游套餐 -->
<template>
  <div style="background-color: #efefef;">
    <el-row>
      <el-col :md="24" :lg="24" :xl="24">
        <!-- 导航 -->

        <div class="floating">
          <!-- 导航添加背景颜色 -->
          <div style="width: 100%;height: 100%;overflow: hidden; background-color:rgb(35 37 35 / 52%);">
            <header>
              <div class="nav_header">
                <div class="nav_cent">
                  <div class="logo fl">
                    <a href="#"><img src="../assets/imges/logo.png" alt="" /></a>
                  </div>
                  <!-- 文字导航 -->
                  <div class="nav fl">
                    <ul v-for="(item,index) in getData" :key='index' style="padding: 0;     ">
                      <li @click="getNavText(index)"><span>{{item.name}}</span><i
                          :class="{underline: index == navTextli}"></i></li>
                    </ul>
                    <!-- login -->
                    <div class="login fl" style="padding:0; margin-top: 5px;">
                      <div class="login_btn">
                        <i class="el-icon-user-solid" style="cursor:pointer;">登录 /</i>
                        <i class="el-icon-key" style="cursor:pointer;">注册</i>
                      </div>
                    </div>
                  </div>
                </div>
                <div class="navText">
                  <h1>旅游套餐
                  </h1>
                  <span style="font-size: 24px;">CITY TOURS / TOUR TICKETS / TOUR GUIDES</span>
                </div>
              </div>
            </header>
          </div>
        </div>
        <!-- 解决浮动顶部问题 -->
        <div style="  height: 400px;
      width: 100%;">&nbsp;</div>
        <div class="center">
          <div>
            <!-- 显示内容 -->
            <div class="fl" style="border: 1px solid #ccc; background-color: #fff; padding:30px ;">
              <div class="center_fl ">
                <div style="width: 10px;height: 35px;background-color:  #e04f67; float: left;margin-right: 20px;">&nbsp;
                </div>
                <div class="center_fl_text">
                  &nbsp;旅游套餐推荐 /
                  package
                </div>
                <div>
                  <ul style="padding: 0;" v-for="(item, index) in getDataImg" :key="index">
                    <li class="fl">

                      <div class="center_img" @click="bntUp" style="border: 2px solid #ccc; ">
                        <a class="center_img_A"><img :src="item.imge" style="width: 100%;"></a>
                        <div class="center_img_text">法国巴黎 · 六日游</div>
                      </div>
                    </li>
                  </ul>
                </div>
              </div>
            </div>
            <!-- 地图 -->
            <div class="fl">
              <div class="location">
                <!-- 地图 -->
                <div id="container" style="width: 100%; height: 100%; position: 'absolute'"></div>
              </div>
              <div class="center_fr">
                <el-button style="margin-top: 20px; margin-bottom: 20px" type="danger">在线搜寻</el-button>
                <el-form :model="ruleForm" :rules="rules" ref="ruleForm">
                  <!-- 名字 -->
                  <label for="iphorm_77_8_5fce406199aac"
                    style="color: rgb(102, 102, 102); font-size: 14px; line-height: 14px">您的姓名 <span
                      style="font-size: 10px; color: red">*</span></label>
                  <el-form-item prop="phone">
                    <el-input v-model="ruleForm.name"></el-input>
                  </el-form-item>
                  <!-- 电话 -->
                  <label for="iphorm_77_8_5fce406199aac"
                    style="color: rgb(102, 102, 102); font-size: 14px; line-height: 14px">
                    联系电话
                    <span style="font-size: 10px; color: red">*</span></label>
                  <el-form-item prop="phone">
                    <el-input v-model="ruleForm.phone"></el-input>
                  </el-form-item>
                  <!-- 目的地 -->
                  <label for="iphorm_77_8_5fce406199aac"
                    style="color: rgb(102, 102, 102); font-size: 14px; line-height: 14px">
                    目的地
                    <span style="font-size: 10px; color: red">*</span></label>
                  <el-form-item prop="name">
                    <el-select v-model="ruleForm.region" placeholder="请选择目的地" clearable>
                      <el-option label="上海" value="shanghai"></el-option>
                      <el-option label="北京" value="beijing"></el-option>
                      <el-option label="深圳" value="shenzheng"></el-option>
                      <el-option label="广州" value="guangzhou"></el-option>
                      <el-option label="天津" value="tianjing"></el-option>
                      <el-option label="成都" value="chengdu"></el-option>
                    </el-select>
                  </el-form-item>
                  <!-- 成人 -->
                  <label for="iphorm_77_8_5fce406199aac"
                    style="color: rgb(102, 102, 102); font-size: 14px; line-height: 14px">
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
                  <label for="iphorm_77_8_5fce406199aac"
                    style="color: rgb(102, 102, 102); font-size: 14px; line-height: 14px">
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
                  <label for="iphorm_77_8_5fce406199aac"
                    style="color: rgb(102, 102, 102); font-size: 14px; line-height: 14px">
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
        </div>




        <!-- 电梯导航 -->
        <elevator_Nav></elevator_Nav>

        
        <div>
          <contact_Us></contact_Us>
        </div>
      </el-col>
    </el-row>

  </div>
</template>

<script>
    // 电梯导航
    import elevator_Nav from "./elevator_Nav";
  // 底部信息
  import contact_Us from "./contact_Us";
  export default {
    data() {
      return {
        getData: [{
            name: '首页',
            id: '',
            said: '0',

          },
          {
            name: '热门景点',
            id: 'child_Hot_Spots',
            said: '1',
          },
          {
            name: '旅游套餐',
            id: 'child_Travel_Packages',
            said: '2',
          },
          {
            name: '关于我们',
            id: 'child_About_Us',
            said: '3',
          },
          {
            name: '客户反馈',
            id: 'child_Customer_feedback',
            said: '4',
          },
          {
            name: '联系我们',
            id: 'child_Contact_Us',
            said: '5',
          },
          {
            name: '旅游签证',
            id: 'child_Tourist_Visa',
            said: '6',
          }],
        navTextli: "2",
        // 图片
        getDataImg: [{
            id: "0",
            imge: "https://ccdn.goodq.top/caches/628d236aceaa012698bd7fe4b8dc188c/aHR0cHM6Ly81ODc0NWExOTcyYzZmLnQ3My5xaWZlaXllLmNvbS9xZnktY29udGVudC91cGxvYWRzLzIwMTcvMDIvM2NmYzRiMjM3NmY2ZjdhYTE1MzcxM2Y3NmE1OTllMTktMzYweDIxMC05MC53ZWJw.webp",
          },
          {
            id: "1",
            imge: "https://ccdn.goodq.top/caches/628d236aceaa012698bd7fe4b8dc188c/aHR0cHM6Ly81ODc0NWExOTcyYzZmLnQ3My5xaWZlaXllLmNvbS9xZnktY29udGVudC91cGxvYWRzLzIwMTcvMDIvNmYwMzM2MTg1YzA1NzFlNzhmYjBlZTBlZmNiMzg3N2QtMzYweDIxMC05MC53ZWJw.webp",
          },
          {
            id: "2",
            imge: "https://ccdn.goodq.top/caches/628d236aceaa012698bd7fe4b8dc188c/aHR0cHM6Ly81ODc0NWExOTcyYzZmLnQ3My5xaWZlaXllLmNvbS9xZnktY29udGVudC91cGxvYWRzLzIwMTcvMDIvYjAxOWVjMDJiNTk3OWJhYzkzMmM3ODI5NWY3NjlkZDgtMzYweDIxMC05MC53ZWJw.webp",
          },
          {
            id: "3",
            imge: "https://ccdn.goodq.top/caches/628d236aceaa012698bd7fe4b8dc188c/aHR0cHM6Ly81ODc0NWExOTcyYzZmLnQ3My5xaWZlaXllLmNvbS9xZnktY29udGVudC91cGxvYWRzLzIwMTcvMDIvOWFiNWJiMTlkZjQ1ZjU4ZjRhNTlhMGI3Yjg1OTkxODktMzYweDIxMC05MC53ZWJw.webp",
          },
          {
            id: "4",
            imge: "https://ccdn.goodq.top/caches/628d236aceaa012698bd7fe4b8dc188c/aHR0cHM6Ly81ODc0NWExOTcyYzZmLnQ3My5xaWZlaXllLmNvbS9xZnktY29udGVudC91cGxvYWRzLzIwMTcvMDIvOWFiNWJiMTlkZjQ1ZjU4ZjRhNTlhMGI3Yjg1OTkxODktMzYweDIxMC05MC53ZWJw.webp",
          },
          {
            id: "2",
            imge: "https://ccdn.goodq.top/caches/628d236aceaa012698bd7fe4b8dc188c/aHR0cHM6Ly81ODc0NWExOTcyYzZmLnQ3My5xaWZlaXllLmNvbS9xZnktY29udGVudC91cGxvYWRzLzIwMTcvMDIvYjAxOWVjMDJiNTk3OWJhYzkzMmM3ODI5NWY3NjlkZDgtMzYweDIxMC05MC53ZWJw.webp",
          },
        ],



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
          name: [{
              required: true,
              message: "请输入您的名字",
              trigger: "blur"
            },
            {
              min: 3,
              max: 5,
              message: "长度在 3 到 5 个字符",
              trigger: "blur"
            },
          ],

          // 电话验证
          phone: [{
              required: true,
              message: "请输入您的名字",
              trigger: "blur"
            },
            {
              min: 11,
              max: 11,
              message: "输入正确的手机号",
              trigger: "blur"
            },
            {
              pattern: /^[0-9]*$/,
              message: "只能输入数字"
            },
          ],
          // 目的地验证
          region: [{
            required: true,
            message: "请选择活动区域",
            trigger: "change"
          }],
        },
        // 地图
        startPoint: {
          x: 121.409992,
          y: 31.178243,
        },
        zoom: 15,

      };

    },
    // 子组件接收
    components: {
      contact_Us,
      elevator_Nav,
    },
    // 
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
    // 方法
    methods: {
      getNavText(index) {
        console.log(index);
        this.navTextli = index
        for (let i = 0; i < this.getData.length; i++) {
          if (index == this.getData[i].said) {
            this.$router.push('/' + this.getData[i].id);
            console.log(this.getData[i].id);
          }
        }

      },


      backtop() {
        let top = document.documentElement.scrollTop || document.body.scrollTop
        // 实现滚动效果
        const timeTop = setInterval(() => {
          document.body.scrollTop = document.documentElement.scrollTop = top -= 50
          if (top <= 0) {
            clearInterval(timeTop)
          }
        }, 10)
      },

      // 图片点击跳转
      bntUp() {
        this.$router.push('package_Details');
        console.log("点击跳转了");

      }


    },

  }

</script>
<style scoped>
  *,
  li {
    /* margin: 0;
    padding: 0; */
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
    height: 400px;
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

  .navText {
    width: 100%;
    margin-top: 50px;
    text-align: center;
    color: #ffffff;
    font-family: 微软雅黑;
    font-size: 20px;
    line-height: 40px;
    font-weight: normal;
    font-style: normal;
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
    background-color: #F27567;
  }

  /* 内容部分 */
  .center {
    overflow: hidden;
    width: 1100px;
    padding: 30px;
    margin: auto;
    margin-top: 50px;


  }

  .center_fl {
    /* display:inline-block; */
    width: 766px;
    /* background-color: purple; */
    padding-bottom: 50px;
    /* border-bottom:1px dotted #dbdbdb; */
  }

  .center_fl_text {
    padding: 0;
    font-size: 26px;

    font-family: 微软雅黑;
  }

  .center_img {

    height: 260px;
    width: 349px;
    margin-top: 50px;
    margin-left: 20px;

  }

  /* 变小手 */
  .center_img :hover {
    cursor: pointer;
  }

  .center_img_text {
    margin-top: 15px;
    font-weight: normal;
    vertical-align: top;
    text-align: center;
    color: #666666;
    font-size: 16px;
    line-height: 22px;
  }

  /* 右边 */
  .center_fr {
    /* 239 */
    width: 239px;
    margin-left: 17px;

    /* background-color: red; */
  }

  .location {
    margin-left: 20px;
    height: 300px;
    width: 239px;
  }

  .el-select {
    display: block;
  }

/*  */

</style>

<!-- 关于我们 -->
<template>
  <div>
    <el-row>
      <el-col :md="24" :lg="24" :xl="24">
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
                  <h1>关于我们
                  </h1>
                  <span style="font-size: 24px;">ABOUT US</span>
                </div>
              </div>
            </header>
          </div>
        </div>
        <!-- 解决浮动顶部问题 -->
        <div style="  height: 400px;
      width: 100%;">&nbsp;</div>
        <!-- 内容 -->
        <div class="center">
          <div class="center_fl fl">
            <div class="center_fl_hevoer"><span style=" font-size: 22px; font-weight: bold;">
                关于我们</span>
              <span style=" color: rgb(169, 169, 169);  font-size: 16px;">/ ABOUT</span></div>
            <div class="center_fl_text">
              <span>当今最领先的响应式自助建站平台，我们的流线式网页布局设计方案和可视化图文内容编辑模式让网站制作和维护成为一件轻松惬意的事。无论您是普通互联网用户，还是专业网站制作人员，都能使用起飞页设计出最具专业水准的网站。想创建一个简单的单页式站点，还是一个专业的公司网站，亦或是一个别具一格的博客？起飞页可以满足您的所有需求。我们是响应式网站的倡导者，所有前端页面代码均采用HMLT5和CSS3实现。起飞页提供了海量精美网站模板和成品网站，几乎覆盖了当今各个行业，您只需在模板上进行少量修改，即可完成自己的网站，这一切都是免费的。迄今为止，起飞页用户的最短建站时间纪录为30分钟。起飞页的核心竞争力来自于它集流线式布局方案与可视化内容编辑于一体，支持打字传图、自由拖拽，不需要专业编写代码，也没有其他建站工具的层叠式烦恼，您可以随心所欲创建区块、添加组件…</span>
            </div>
            <div class="center_fl_text">
              <span>起飞页是响应式建站专家，拥有全球最领先的屏幕界面智能识别技术，实现所有建站功能组件在多种屏幕下的完美呈现，真正让您的桌面/平板/手机3个网站同步生成，还可连接微信公众平台，创建您的微站。</span>
            </div>
          </div>
          <div class="center_fr fl">
           <img style="width: 371px;height: 247px; margin-top: 65px;" src="https://ccdn.goodq.top/caches/628d236aceaa012698bd7fe4b8dc188c/aHR0cHM6Ly81ODc0NWExOTcyYzZmLnQ3My5xaWZlaXllLmNvbS9xZnktY29udGVudC91cGxvYWRzLzIwMTcvMDEvYjI2NjE1MjU2YWNjZTI5OGU4NTg0MDVlNzlkOTc3NzEtOTAud2VicA_p_p100_p_3D_p_p100_p_3D.webp" alt="">
          </div>
        </div>
    <!-- 内容 -->


      
          <div class="curab_equat" >
            <div class="curab_equat_area" >

              <div style="height: 400px;width: 1200px;  margin: auto;padding-top: 100px; ">

              
              <div class="attractions" style="margin: auto;">
                <ul>
                  <li>
                    <div class="attractions_introduce">

                      <!-- 动态动画 -->
                      <div class="flipOut flipOutY"><span class="el-icon-location" style="font-size: 54px; color:#f58665; text-align: center; margin-left: 15px;
                          line-height: 85px;"></span></div>
                      <!-- 标题 -->
                      <div class="attractions_text">

                        <span style="color:#E04F67; "> +120 </span>
                        <p style="display: inline-block; color:#333333; ">高端旅游</p>
                      </div>
                      <!-- 介绍 -->
                      <div class="attractions_intr">
                        <span
                          style="line-height:1.6;">当今最领先的响应式自助建站平台，我们的流线式网页布局设计方案和可视化图文内容编辑模式让网站制作和维护成为一件轻松惬意的事</span>
                      </div>
                      <!-- 按钮 -->
                      <div class="attractions_btn">
                        <el-button class="attractions_button" type="danger" style="  width: 124px;
                        height: 29px; " primary>了解更多

                        </el-button>
                      </div>
                    </div>
                  </li>

                  <li>
                    <div class="attractions_introduce">

                      <!-- 动态动画 -->
                      <div class="flipOut flipOutY"><span class="el-icon-s-opportunity" style="font-size: 54px; color:#f58665; text-align: center; margin-left: 15px;
                          line-height: 85px;"></span></div>
                      <!-- 标题 -->
                      <div class="attractions_text">

                        <span style="color:#E04F67; "> +120 </span>
                        <p style="display: inline-block; color:#333333; ">高端旅游</p>
                      </div>
                      <!-- 介绍 -->
                      <div class="attractions_intr">
                        <span
                          style="line-height:1.6;">当今最领先的响应式自助建站平台，我们的流线式网页布局设计方案和可视化图文内容编辑模式让网站制作和维护成为一件轻松惬意的事</span>
                      </div>
                      <!-- 按钮 -->
                      <div class="attractions_btn">
                        <el-button class="attractions_button" type="danger" style="  width: 124px;
                        height: 29px; " primary>了解更多

                        </el-button>
                      </div>
                    </div>
                  </li>

                  <li>
                    <div class="attractions_introduce">

                      <!-- 动态动画 -->
                      <div class="flipOut flipOutY"><span class="el-icon-s-flag" style="font-size: 54px; color:#f58665; text-align: center; margin-left: 15px;
                          line-height: 85px;"></span></div>
                      <!-- 标题 -->
                      <div class="attractions_text">

                        <span style="color:#E04F67; "> +120 </span>
                        <p style="display: inline-block; color:#333333; ">高端旅游</p>
                      </div>
                      <!-- 介绍 -->
                      <div class="attractions_intr">
                        <span
                          style="line-height:1.6;">当今最领先的响应式自助建站平台，我们的流线式网页布局设计方案和可视化图文内容编辑模式让网站制作和维护成为一件轻松惬意的事</span>
                      </div>
                      <!-- 按钮 -->
                      <div class="attractions_btn">
                        <el-button class="attractions_button" type="danger" style="  width: 124px;
                        height: 29px; " primary>了解更多

                        </el-button>
                      </div>
                    </div>
                  </li>
                </ul>
              </div>
            </div>
            </div>
          </div>




<elevator_Nav></elevator_Nav>
        <!-- 电梯导航 -->

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
    // 电梯导航
    import elevator_Nav from "./elevator_Nav";
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
          }
        ],
        navTextli:'3',
        kaiguan:'false'
      };
    },
        // 子组件接收
        components: {
      contact_Us,
      elevator_Nav,
    },
// 
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

  
  /* 内容部分 */
  .center {
    overflow: hidden;
    width: 1024px;
    height: 474px;
    padding: 30px;
    margin: auto;
    margin-top: 50px;


  }

  .center_fl {
    /* display:inline-block; */
    width: 618px;
    /* background-color: purple; */
    padding-bottom: 50px;
    /* border-bottom:1px dotted #dbdbdb; */
  }

  .center_fl_hevoer {
    line-height: 1.5em;
    background-color: transparent;
    background-repeat: no-repeat;
    padding-top: 10px;
    padding-bottom: 5px;



    font-family: 微软雅黑, 微軟正黑體;
    font-family: arial;
  }

  .center_fl_text {
    line-height: 1.5em;
    background-repeat: no-repeat;
    padding-top: 20px;
    padding-right: 23px;
    color: #999999;
    font-size: 13px;
    font-family: 宋体;
    line-height: 2;
    letter-spacing: 1px;
  }

  /* 右边 */
  .center_fr {
    /* 239 */
    width: 379px;
    height: 412px;
    margin-left: 17px;

    /* background-color: red; */
  }

/* 内容部分 */

.curab_equat {
    width: 100%;
    height: 685px;

    background-color: #f4f4f4;
  }

  .curab_equat_hor {
    display: block;
    padding-top: 100px;
    margin-bottom: 40px;
  }

  .attractions li {
    overflow: hidden;
    float: left;
    /* margin: 0;
    padding: 0; */
    margin-right: 20px;
    margin-left: 20px;
    list-style: none;
  }

  .attractions_introduce {
    height: 351px;
    width: 326px;
    border-radius: 15px;
    padding-top: 20px;
    background-color: rgba(255, 255, 255, 0.9);
  }

  .flipOut {
    /* 动画 */
    position: relative;
    width: 84px;
    height: 84px;
    margin: 20px auto;
    border-radius: 50px;
    border: 2px solid #f58665;
  }

  .flipOut:hover {
    animation: qfe_qfy_flip 0.7s 1 ease;
  }

  /* 选择动画 */
  @-webkit-keyframes flipOutY {
    from {
      -webkit-transform: perspective(400px);
      transform: perspective(400px);
    }

    30% {
      -webkit-transform: perspective(400px) rotate3d(0, 1, 0, -15deg);
      transform: perspective(400px) rotate3d(0, 1, 0, -15deg);
      opacity: 1;
    }

    to {
      -webkit-transform: perspective(400px) rotate3d(0, 1, 0, 90deg);
      transform: perspective(400px) rotate3d(0, 1, 0, 90deg);
      opacity: 0;
    }
  }

  @keyframes flipOutY {
    from {
      -webkit-transform: perspective(400px);
      transform: perspective(400px);
    }

    30% {
      -webkit-transform: perspective(400px) rotate3d(0, 1, 0, -15deg);
      transform: perspective(400px) rotate3d(0, 1, 0, -15deg);
      opacity: 1;
    }

    to {
      -webkit-transform: perspective(400px) rotate3d(0, 1, 0, 90deg);
      transform: perspective(400px) rotate3d(0, 1, 0, 90deg);
      opacity: 0;
    }
  }

  .flipOutY {
    -webkit-animation-duration: 0.75s;
    animation-duration: 0.75s;
    -webkit-backface-visibility: visible !important;
    backface-visibility: visible !important;
    -webkit-animation-name: flipOutY;
    animation-name: flipOutY;
  }

  .attractions_text {
    text-align: center;
    margin-top: -10px;
    font-size: 18px;
    font-weight: bold;
  }

  .attractions_intr {

    height: 71px;
    width: 267px;
    margin: auto;
    text-align: center;
    font-size: 12px;
    color: rgb(128, 128, 128);
  }

  .attractions_btn {
    width: 124px;
    height: 29px;
    margin: 20px auto;
    line-height: 29px;
  }

  .attractions_button {
    background-color: #f58665;
  }

  .attractions_button:hover {
    border: 1px solid #f58665;
    color: rgb(245, 134, 101);
    background-color: #fff;

  }

  .el-button {
    line-height: 0;
  }
  .typeArea_steps{
    color: #fff;
  }



</style>



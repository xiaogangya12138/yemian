<!--  -->
<template>
  <!-- 頁面的背景顏色 -->
  <div>
    <el-row>
      <el-col :md="24" :lg="24" :xl="24">
        <div class="grid-content" backgroundsize="true" id="index">
          <!-- 漂浮起来 -->
          <div class="floating">
            <!-- 头部导航 -->
            <header>
              <div class="nav_header">
                <div class="nav_cent">
                  <div class="logo fl">
                    <a href="#"><img src="../assets/imges/logo.png" alt="" /></a>
                  </div>
                  <!-- 文字导航 -->
                  <div class="nav fl">
                    <ul v-for="(item,index) in getData" :key='index'>
                      <li @click="getNavText(index)"><span>{{item.name}}</span><i
                          :class="{underline: index == navTextli}"></i></li>
                      <!-- <a href="#"><li>热门景点</li><i class="underline"></i></a>
                      <a href="#"><li>旅游套餐</li><i class="underline"></i></a>
                      <a href="#"><li>关于我们</li><i class="underline"></i></a>
                      <a href="#"><li>客户反馈</li><i class="underline"></i></a>
                      <a href="#"><li>联系我们</li><i class="underline"></i></a>
                      <a href="#"><li>旅游签证</li><i class="underline"></i></a> -->
                    </ul>
                    <!-- login -->
                    <div class="login fl">
                      <div class="login_btn">
                        <i class="el-icon-user-solid" style="cursor:pointer;">登录 /</i>
                        <i class="el-icon-key" style="cursor:pointer;">注册</i>
                      </div>
                    </div>
                  </div>
                </div>
              </div>
            </header>
            <div class="nav_show">
              <div class="logo_show">
                <div class="logo_show_img">
                  <img src="../assets/imges/logo2.png" alt="" />
                </div>
              </div>
              <div class="nav_show_H">
                <span>AFFORDABLE PARIS TOURS</span>
              </div>
              <div class="nav_show_text">
                <span>CITY TOURS / TOUR TICKETS / TOUR GUIDES</span>
              </div>

              <el-button round class="show_btn" @click.native="child_HotSpots">VIEW TOURS</el-button>
            </div>
          </div>
          <video
            src="https://ccdn.goodq.top/caches/628d236aceaa012698bd7fe4b8dc188c/aHR0cHM6Ly81ODc0NWExOTcyYzZmLnQ3My5xaWZlaXllLmNvbS9xZnktY29udGVudC91cGxvYWRzLzIwMjAvMDkvMGU3OWM5ZWJhZmZkNGU1YWRkYWQ2N2MwZjQ3Zjk1ZDAubXA0.mp4"
            autoplay="autoplay" muted="muted" volume="0" loop="loop" height="100%" width="100%" style="
              object-fit: cover;
              object-position: center center;
              /* margin-top: 130px; */
            "></video>
        </div>
        <!-- 电梯导航 -->
        <div class="navigation">
          <ul>
            <li><button><i class="el-icon-phone"></i></button></li>
            <li><button><i class="el-icon-chat-round"></i></button></li>
            <li><button style="background-color: #F27567;"><i class="el-icon-message"></i></button> </li>
            <li><button><i class="el-icon-discover"></i></button> </li>
            <li><button @click="backtop" style="outline: none;"><i class="el-icon-arrow-up"></i></button></li>
          </ul>
        </div>
      </el-col>
    </el-row>

    <!-- 子模块 热门旅游 -->
    <searchHot></searchHot>
    <!-- 子模块 服务 -->
    <service></service>
    <!-- 子模块 关于我们 -->
    <aboutAs></aboutAs>
  </div>

</template>

<script>
  // 引入模块
  import searchHot from './searchHot'
  import service from './service'
  import aboutAs from './aboutAs'
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
            id:'child_Travel_Packages',
            said:'2',
          },
          {
            name: '关于我们',
            id:'child_About_Us',
            said:'3',
          },
          {
            name: '客户反馈',
            id:'child_Customer_feedback',
            said:'4',
          },
          {
            name: '联系我们',
            id:'child_Contact_Us',
            said:'5',
          },
          {
            name: '旅游签证',
            id:'child_Tourist_Visa',
            said:'6',
          }
        ],
        navTextli: '',
      };
    },
    // 子组件接收
    components: {
      searchHot,
      service,
      aboutAs,
    },

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
      child_HotSpots() {
        this.$router.push('/child_Hot_Spots');
        console.log('点击跳转了---');
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
    },


  };

</script>
<style scoped>
  *,
  li {
    margin: 0;
    padding: 0;
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
    width: 100%;
    z-index: 99;

  }

  .nav_header {
    height: 120px;
    width: 100%;
    margin: 0 auto;
    padding-top: 20px;
    /* padding: 0 40px; */
    /* background-color: #27477B; */
    /* background-color: #21425c; */
    /* background-color: rgba(0, 0, 0, 0.3); */
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
    /* left: 50%; */
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

  .nav_show {
    position: absolute;
    width: 100%;
    height: 100%;
    margin: auto;
  }

  .logo_show_img {
    position: relative;
    height: 100px;
    width: 60px;
    left: 50%;
    margin-left: -30px;
    margin-top: 150px;
  }

  .nav_show_H,
  .nav_show_text {
    position: relative;
    height: 50px;
    width: 800px;
    left: 50%;
    margin-left: -345px;
    margin-top: 50px;
    font-size: 53px;
    color: rgb(255, 255, 255);
  }

  .nav_show_text {
    width: 600px;
    margin-left: -230px;
    font-size: 20px;
  }

  .show_btn {
    position: relative;
    left: 50%;
    margin-left: -75px;
    margin-top: 60px;
    font-size: 16px;
    font-family: 微软雅黑, Helvetica, Arial, Verdana, sans-serif;
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

</style>

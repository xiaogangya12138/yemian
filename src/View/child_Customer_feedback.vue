<!-- 客户反馈 -->
<template>
  <div>
    <el-row>
      <el-col :md="24" :lg="24" :xl="24">
        <div class="floating">
          <div style="width: 100%;height: 100%; background-color:rgb(35 37 35 / 52%);">
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
                <div class="navText">
                  <h1>
                    客户反馈
                  </h1>
                  <span>Customer feedback</span>
                </div>

              </div>
            </header>

          </div>
        </div>
        <!-- 解决浮动顶部问题 -->
        <div style="  height: 400px;
          width: 100%;">&nbsp;</div>
        <!-- 内容部分 -->
        <div>
          <!-- 轮播图 -->
          <div class="bo_Center">
            <div>
              <template>
                <el-carousel :interval="5000" arrow="always" indicator-position='none'>
                  <el-carousel-item v-for="(item,index) in shufflingData" :key="index">
                    <div>
                      <!-- 单个内容 -->
                      <div class="shuffling fl" style="    margin-top: 60px;
                      margin-left: 70px;">
                        <div class="fl">
                          <img class="image_shuff" :src="item.image" alt="">
                        </div>
                        <div class="fl shuffling_fr">
                          <div>
                            <span class="name_shuffling">客户名称</span>
                          </div>
                          <div>
                            <span class="vip_shuffling">{{item.vip}}</span>
                          </div>
                          <div>
                            &nbsp;
                          </div>
                          <div class="data_shuffling">
                            <p>{{item.data}}</p>
                          </div>
                        </div>
                      </div>
                      <div class="shuffling fl" style="    margin-top: 60px;
                      margin-left: 70px;">
                        <div class="fl">
                          <img class="image_shuff" :src="item.images" alt="">
                        </div>
                        <div class="fl shuffling_fr">
                          <div>
                            <span class="name_shuffling">客户名称</span>
                          </div>
                          <div>
                            <span class="vip_shuffling">{{item.vips}}</span>
                          </div>
                          <div>
                            &nbsp;
                          </div>
                          <div class="data_shuffling">
                            <p>{{item.datas}}</p>
                          </div>
                        </div>
                      </div>
                    </div>
                  </el-carousel-item>
                </el-carousel>
              </template>
            </div>
          </div>
          <!-- login图标 -->
          <div style="width: 100%;border-top: 1px solid #ccc; margin-top: 80px;">
            <div class="log_Center">
              <div>
                <ul v-for="(imte,index) in loginData" :key="index">
                  <li class="fl  ">
                    <div class="log_Center_image">

                      <img :src="imte.image" alt="">
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
        navTextli: '4',
        // 轮播数据
        shufflingData: [{
            vip: 'vip1级',
            image: 'https://ccdn.goodq.top/caches/628d236aceaa012698bd7fe4b8dc188c/aHR0cDovLzU4NzQ1YTE5NzJjNmYudDczLnFpZmVpeWUuY29tL3FmeS1jb250ZW50L3VwbG9hZHMvMjAxNy8wMi9jMTJjMWRjMWY1YjljZDk0MDdmNTE2MTRlMDQzMjhkZS5qcGc_p_p100_p_2FYXR0YWNobWVudF9pZD0xMTQxNA_p_p100_p_3D_p_p100_p_3D.jpg',
            data: '当今最领先的响应式自助建站平台，我们的流线式网页布局设计方案和可视化图文内容编辑模式让网站制作和维护成为一件轻松惬意的事，当今最领先的响应式自助建站平台。',
            vips: 'vip2级',
            images: 'https://ccdn.goodq.top/caches/628d236aceaa012698bd7fe4b8dc188c/aHR0cDovLzU4NzQ1YTE5NzJjNmYudDczLnFpZmVpeWUuY29tL3FmeS1jb250ZW50L3VwbG9hZHMvMjAxNy8wMi80N2UyNDkwYjczY2I0YjQ0ZDBhNDdlMTU0NWZhOWRlNS5qcGc_p_p100_p_2FYXR0YWNobWVudF9pZD0xMTQxMg_p_p100_p_3D_p_p100_p_3D.jpg',
            datas: '当今最领先的响应式自助建站平台，我们的流线式网页布局设计方案和可视化图文内容编辑模式让网站制作和维护成为一件轻松惬意的事，当今最领先的响应式自助建站平台。'
          },
          {
            vip: 'vip2级',
            image: 'https://ccdn.goodq.top/caches/628d236aceaa012698bd7fe4b8dc188c/aHR0cDovLzU4NzQ1YTE5NzJjNmYudDczLnFpZmVpeWUuY29tL3FmeS1jb250ZW50L3VwbG9hZHMvMjAxNy8wMi9kN2FhMjMyZTVkODI5YWIzMWE1MzM3MmMyOTQ1ODE4My5qcGc_p_p100_p_2FYXR0YWNobWVudF9pZD0xMTQxMw_p_p100_p_3D_p_p100_p_3D.jpg',
            data: '当今最领先的响应式自助建站平台，我们的流线式网页布局设计方案和可视化图文内容编辑模式让网站制作和维护成为一件轻松惬意的事，当今最领先的响应式自助建站平台。',
            vips: 'vip5级',
            images: 'https://ccdn.goodq.top/caches/628d236aceaa012698bd7fe4b8dc188c/aHR0cDovLzU4NzQ1YTE5NzJjNmYudDczLnFpZmVpeWUuY29tL3FmeS1jb250ZW50L3VwbG9hZHMvMjAxNy8wMi85YTU5ZGI1MDRjNjJlYmU0N2NlYmI3YTQ5ODAyNWI0MS5qcGc_p_p100_p_2FYXR0YWNobWVudF9pZD0xMTQxMQ_p_p100_p_3D_p_p100_p_3D.jpg',
            datas: '当今最领先的响应式自助建站平台，我们的流线式网页布局设计方案和可视化图文内容编辑模式让网站制作和维护成为一件轻松惬意的事，当今最领先的响应式自助建站平台。',
          },
          {
            vip: 'vip5级',
            image: 'https://ccdn.goodq.top/caches/628d236aceaa012698bd7fe4b8dc188c/aHR0cDovLzU4NzQ1YTE5NzJjNmYudDczLnFpZmVpeWUuY29tL3FmeS1jb250ZW50L3VwbG9hZHMvMjAxNy8wMi9jMTJjMWRjMWY1YjljZDk0MDdmNTE2MTRlMDQzMjhkZS5qcGc_p_p100_p_2FYXR0YWNobWVudF9pZD0xMTQxNA_p_p100_p_3D_p_p100_p_3D.jpg',
            data: '当今最领先的响应式自助建站平台，我们的流线式网页布局设计方案和可视化图文内容编辑模式让网站制作和维护成为一件轻松惬意的事，当今最领先的响应式自助建站平台。',
            vips: 'vip2级',
            images: 'https://ccdn.goodq.top/caches/628d236aceaa012698bd7fe4b8dc188c/aHR0cDovLzU4NzQ1YTE5NzJjNmYudDczLnFpZmVpeWUuY29tL3FmeS1jb250ZW50L3VwbG9hZHMvMjAxNy8wMi85YTU5ZGI1MDRjNjJlYmU0N2NlYmI3YTQ5ODAyNWI0MS5qcGc_p_p100_p_2FYXR0YWNobWVudF9pZD0xMTQxMQ_p_p100_p_3D_p_p100_p_3D.jpg',
            datas: '当今最领先的响应式自助建站平台，我们的流线式网页布局设计方案和可视化图文内容编辑模式让网站制作和维护成为一件轻松惬意的事，当今最领先的响应式自助建站平台。'
          }
        ],
        // logindata 图标数据
        loginData: [{
            image: 'https://ccdn.goodq.top/caches/628d236aceaa012698bd7fe4b8dc188c/aHR0cHM6Ly81ODc0NWExOTcyYzZmLnQ3My5xaWZlaXllLmNvbS9xZnktY29udGVudC91cGxvYWRzLzIwMTcvMDQvN2NmZjdkNjFmZDlmMTNjNWQzYjg1ODljNmE2ZDU4MzgtMTUweDg2LTkwLndlYnA_p_p100_p_3D.webp',
          },{
            image: 'https://ccdn.goodq.top/caches/628d236aceaa012698bd7fe4b8dc188c/aHR0cHM6Ly81ODc0NWExOTcyYzZmLnQ3My5xaWZlaXllLmNvbS9xZnktY29udGVudC91cGxvYWRzLzIwMTcvMDQvMzU1N2Y5MTQ0NWRlZTg3ZGE5M2UxMzU2YTAyNTdiMGMucG5nP2FpLW5vLWNhY2hlPXRydWU_p_p100_p_3D.png',
          },{
            image: 'https://ccdn.goodq.top/caches/628d236aceaa012698bd7fe4b8dc188c/aHR0cHM6Ly81ODc0NWExOTcyYzZmLnQ3My5xaWZlaXllLmNvbS9xZnktY29udGVudC91cGxvYWRzLzIwMTcvMDQvNDkwOTJiN2Q1ODg4NWM0ODI3NjRjYjIzOGY3ZTE3OTcucG5nP2FpLW5vLWNhY2hlPXRydWU_p_p100_p_3D.png',
          }, {
            image: 'https://ccdn.goodq.top/caches/628d236aceaa012698bd7fe4b8dc188c/aHR0cHM6Ly81ODc0NWExOTcyYzZmLnQ3My5xaWZlaXllLmNvbS9xZnktY29udGVudC91cGxvYWRzLzIwMTcvMDQvNmM0NTA0MWNiMDFmN2YwN2UyZWQzMzA5Mjk5N2U1NjUucG5nP2FpLW5vLWNhY2hlPXRydWU_p_p100_p_3D.png',
          }, {
            image: 'https://ccdn.goodq.top/caches/628d236aceaa012698bd7fe4b8dc188c/aHR0cHM6Ly81ODc0NWExOTcyYzZmLnQ3My5xaWZlaXllLmNvbS9xZnktY29udGVudC91cGxvYWRzLzIwMTcvMDQvOTg4MmI3NGMzOGY5NDEyZTMyNDQyZTI0MDdjNjMyODkucG5nP2FpLW5vLWNhY2hlPXRydWU_p_p100_p_3D.png',
          }, {
            image: ' https://ccdn.goodq.top/caches/628d236aceaa012698bd7fe4b8dc188c/aHR0cHM6Ly81ODc0NWExOTcyYzZmLnQ3My5xaWZlaXllLmNvbS9xZnktY29udGVudC91cGxvYWRzLzIwMTcvMDQvODA4M2Q2NDU0NTJmZTA0OWE3NTE4ZmJhMGE3OWNkNTYucG5nP2FpLW5vLWNhY2hlPXRydWU_p_p100_p_3D.png',
          }
        ]
      };
    },
    // 子组件接收
    components: {
      contact_Us,
      elevator_Nav,
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
    },

  }

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
    height: 400px;
    width: 100%;
    background-image: url(../assets/imges/khfk.jpg);
    background-position: -128px -510px;
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
    line-height: 40px;
    font-weight: normal;
    font-style: normal;
  }

  /* 轮播图 */
  .bo_Center {
    height: 300px;
    width: 1200px;
    margin: auto;
    margin-top: 50px;
    /* background-color: pink; */
  }



  .image_shuff {
    height: 141px;
    width: 137px;

  }

  .shuffling_fr {
    height: 100%;
    width: 348px;
    margin-left: 15px;

  }

  .name_shuffling {

    /* display: inline-block; */
    font-size: 18px;
    font-family: 微软雅黑;
    display: inline-block;
    line-height: 1.6;
  }

  .vip_shuffling {
    font-size: 14px;
    display: inline-block;
    line-height: 1.6;
    color: rgb(128, 128, 128);
    font-family: 微软雅黑;
  }

  .data_shuffling {
    font-size: 13px;
    color: rgb(169, 169, 169);
    display: inline-block;
    line-height: 1.6;
    font-family: 微软雅黑;
    line-height: 1.8;
  }

  .log_Center {
    width: 1200px;
    height: 206px;
    margin: auto;
    /* background-color: pink; */
  }

  .log_Center_image {
    height: 76px;
    width: 145px;
    /* line-height: 50px; */
    padding-right: 25px;
    padding-left: 25px;
    margin-top: 55px;
    /* margin-left: 15px; */
  }

</style>

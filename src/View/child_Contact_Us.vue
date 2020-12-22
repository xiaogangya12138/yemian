<!-- 联系我们 -->
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
                    联系我们
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
        <div class="dt_Center">
          <div class="dt_Center_zhu">
            <!-- 地图 -->
            <div class="themap fl" id="themapID"></div>
            <!-- 介绍 -->
            <div class="detailed_Themap fl">
              <div class="detailed_Themap_h" ><span>联系方式 &nbsp;</span> <span style="color: rgb(169, 169, 169);font-size: 14px;font-family:arial;">/ contact</span></div>
              <div style="height: 25px;">&nbsp;</div>
              <div class="detailed_Themap_d">
                <div ><span>电话：800-0001-460</span></div>
                <div><span>网址：www.4399.com
                </span></div>
                <div><span>邮箱：bzxgy12138@163.com</span></div>
                <div><span>地址：苏州市工业园区*******</span></div>
              </div>
              <div style="height: 25px;">&nbsp;</div>
              <div style="height: 25px;">&nbsp;</div>
              <div class="detailed_Themap_h"><span >营业时间</span> <span style="color: rgb(169, 169, 169);font-size: 14px;font-family:arial;">/ business hours</span></div>
              <div>&nbsp;</div>
              <div  class="detailed_Themap_d">
                <div><span>周一~周五</span></div>
                <div><span>上午：10:00-14:00</span></div>
                <div><span>下午：15:00-20:00</span></div>
                <div><span>周六~周日</span></div>
                <div><span>上午：08:00-14:00</span></div>
                <div><span>下午：15:00-19:00</span></div>
              </div>
            </div>
          </div>
        </div>

        <!-- 组件 -->
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
        navTextli: '5',
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
    // 实例化一个地图
    mounted() {
      var map = new BMapGL.Map("themapID"); // 创建Map实例
      var point = new BMapGL.Point(116.404, 39.915);
      map.centerAndZoom(point, 15);
      map.enableScrollWheelZoom(true);
      var scaleCtrl = new BMapGL.ScaleControl(); // 添加比例尺控件
      map.addControl(scaleCtrl);
      var zoomCtrl = new BMapGL.ZoomControl(); // 添加缩放控件
      map.addControl(zoomCtrl);
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
    background-image: url(../assets/imges/lxme.jpg);
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
/* 内容部分 */
  .dt_Center {
    height: 591px;
    width: 100%;
    background-color: #f9f9f9;
  }

  .dt_Center_zhu {
    width: 1024px;
    height: 425px;
    padding-top: 50px;
    margin: auto;
    /* background-color: pink */
  }
.themap{
  float: left;
  height: 425px;
  width: 623px;


}
.detailed_Themap{
  height: 416px;
  width: 341px;
  padding-left: 25px;
}
.detailed_Themap_h span{
height: 28px;
  color:#808080;display: inline-block; line-height: 1.6;
  font-size: 13px;
  font-size: 20px;
  font-family: 微软雅黑;
  letter-spacing: 2px;
}
.detailed_Themap_d span{
  height: 25px;
  display:inline-block;line-height:1.6;
  font-size: 13px;
  color: rgb(169, 169, 169);
  font-family: 微软雅黑;
  
}

</style>

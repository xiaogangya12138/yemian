<!-- 热门景点详情页 -->
<template>
  <div>
    <el-row>
      <el-col :md="24" :lg="24" :xl="24">

        <div class="floating">
          <!-- 导航添加背景颜色 -->
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
                <h1>巴黎旅游景点</h1>
                <span>CITY TOURS / TOUR TICKETS / TOUR GUIDES</span>
              </div>
              
            </div>
          </header>
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
        </div>

        <div class="searchHot">
          <searchHot></searchHot>
        </div>
      </el-col>
    </el-row>

  </div>
</template>


<script>
// 导入子组件 searchHot
import searchHot from './searchHot'
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
        navTextli: 1,
      };

    },
    components:{
      searchHot,
    },
    methods: {
      getNavText(index) {
        console.log(index);
        this.navTextli = index
        for (let i = 0; i < this.getData.length; i++) {
          if (index == this.getData[i].said) {
            this.$router.push('/' + this.getData[i].id);
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
    background-image: url(../assets/imges/hotImg.jpg);
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
  .navText{
    width: 100%;
    margin-top:50px;
    text-align: center;
    color: #ffffff;
    font-family: 微软雅黑;
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

.navigation li button:hover{
  background-color: #F27567;
}
/* searchHot */
.searchHot{
  margin-top: 400px;
}
</style>

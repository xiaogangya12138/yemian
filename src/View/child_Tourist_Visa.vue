<!-- 旅游签证 -->
<!-- 终于快写完了！！！！！！！！！ -->
<template>
  <div style="background-color: #f9f9f9;">
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

                    <ul v-for="(item,index) in getData" :key='index' style="margin: 0; padding: 0;">
                      <li @click="getNavText(index)"><span>{{item.name}}</span><i
                          :class="{underline: index == navTextli}"></i></li>
                    </ul>
                    <!-- login -->
                    <div class="login fl">
                      <div class="login_btn" >
                        <i class="el-icon-user-solid" style="cursor:pointer;">登录 /</i>
                        <i class="el-icon-key" style="cursor:pointer;">注册</i>
                      </div>
                    </div>
                  </div>
                </div>
              </div>
            </header>
          </div>
        </div>
        <!-- 解决浮动顶部问题 -->
        <div style="  height: 150px;
          width: 100%;">&nbsp;</div>
        <!-- 内容 -->
        <div class="data_Center" >
          <!-- 图片 -->
          <div style="width: 676px;height: 850px; margin: auto; float: left; border: 1px solid #ccc; ">
            <div class="data_Center_image fl">
              <div class="data_Center_image_h">
                <pic-zoom url="/static/img/splmage.6461372.jpg" :scale="5"></pic-zoom>
              </div>
              <div class="data_Center_image_d"><img style="width: 100%; height: 100%;" src="../assets/imges/splmage.jpg"
                  alt=""></div>
            </div>

            <!-- 文字 -->
            <div class="fl">
              <h1 class="product_title ">法国个人旅游签证【全国受理,拒签退全款】</h1>
              <div class="price">
                <p>1200.00</p>
              </div>
              <div class="product_meta"><span>商品编号： 001001 </span></div>
              <div>
                <div class="li_button fl">立即预订</div>
                <div class="fl" style="margin-left: 10px;">
                  <template>
                    <el-input-number v-model="num" @change="handleChange" :min="1" :max="10" label="描述文字">
                    </el-input-number>
                  </template>
                </div>
              </div>
              <!-- <div>&nbsp;</div> -->
              <div class="product_meta" style="margin-top: 75px;">
                <p>全国受理,拒签退全款</p>
              </div>
            </div>
            <div class="description">
              <div style="height: 230px;">&nbsp;</div>
              <div style="margin-bottom: 10px;"><span >描述</span></div>
              <div class="text_div">
                <div><span>签证类型：旅游签证</span></div>
                <div><span>入境次数：多次</span></div>
                <div><span>最多停留：180天</span></div>
                <div><span>有效期：10年</span></div>
                <div><span>办理时长：13个工作日</span></div>
                <div><span>是否面试：是</span></div>
                <div><span>递签城市（领区）：北京，上海，广州，成都，沈阳</span></div>
                <div><span>受理范围：（请根据长期居住地选择领区）</span></div>
                <div><span>北京领区：适用于长期居住地为北京,天津,河北,山西,内蒙古,江西,山东,河南,湖北,湖南,陕西,甘肃,青海,宁夏,新疆的申请人</span></div>
                <div><span>上海领区：适用于长期居住地为上海,江苏,浙江,安徽的申请人</span></div>
                <div><span>广州领区：适用于长期居住地为福建,广东,广西,海南的申请人</span></div>
                <div><span>成都领区：适用于长期居住地为重庆,四川,贵州,云南,西藏的申请人</span></div>
                <div><span>沈阳领区：适用于长期居住地为辽宁,吉林,黑龙江的申请人</span></div>
                <div><span style="color: rgb(224, 79, 103);">4年内成功获得过法国（B1/B2）签证，且本次申请的签证与之前相同，才可申请免面试签证
                  </span></div>
                <div><span style="color: rgb(224, 79, 103);">工作日下单商家会在48小时内联系，非工作日期间下单顺延至首个工作日联系！</span></div>
              </div>

            </div>
          </div>
          <!-- 右边 -->
          <div>
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
</el-col>
</el-row>
</div>
</template>

<script>
  // 底部信息
  import contact_Us from "./contact_Us";
  // 电梯导航
  import elevator_Nav from "./elevator_Nav";
  import PicZoom from 'vue-piczoom';
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
        navTextli: '6',
        num: 1,
        // 更多数据
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

      };
    },
    // 子组件接收
    components: {
      contact_Us,
      elevator_Nav,
      PicZoom,
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
      getUp(){
        console.log("跳转了");
        this.$router.push('/spots_Detailed')
    },
      // 计数器
      handleChange(value) {
        console.log(value);
      },
      // 页头分割

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
    height: 150px;
    width: 100%;
    background-image: url(../assets/imges/gyme.jpg);
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
    margin-top: 35px;
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

  /* 内容*/
  .data_Center {
    height: 895px;
    width: 930px;
    margin: auto;
    background-color: #fff;
  }

  .data_Center_image {
    height: 61px;
    width: 203px;
    /* margin: auto; */
    margin-left: 50px;
    margin-right: 25px;
    padding-bottom: 16px;
  }

  .data_Center_image_h {
    width: 203px;
    height: 203px;
    /* margin-bottom: 10px; */
    /* background-image: url(../assets/imges/splmage.jpg); */
    /* background-size:cover; */
  }

  .data_Center_image_d {
    width: 44px;
    height: 44px;
    margin-top: -10px;
  }

  .product_title {
    margin-top: 30px;
    margin-bottom: 30px;
    font-size: 20px;
    font-weight: normal;
    color: #000000;
    font-family: 微软雅黑;
  }

  .price {
    margin-bottom: 5px;
    font-size: 25px;
    font-weight: normal;
    color: #e04f67;
    font-family: arial;
    line-height: 25px;
    border-bottom: 1px solid #ccc;
  }

  .product_meta {
    margin-bottom: 5px;
    font-size: 13px;
    font-weight: normal;
    color: #aaaaaa;
    border-color: #cecece;
  }

  .li_button {
    height: 40px;
    width: 164px;
    text-align: center;
    line-height: 40px;
    background-color: #e04f67;
    border-color: #e04f67;
  }

  .li_button:hover {
    cursor: pointer;
    background-color: #eb6d82;
  }

  .description {
    padding-top: 30px;
    margin-left: 50px;
  }

  .text_div {height: 400px;
  width: 600px;
    font-family: 宋体;
    display: inline-block;
    line-height: 1.8;
    color: rgb(105, 105, 105);
    font-size: 13px;
    border-bottom: 1px solid #ccc;
  }


/* 右边 */

.center_fr {
  /* 239 */
  width: 225px;
  /* margin-left: px; */

  /* background-color: red; */
}
.bgc_Center_Fr {
  margin-left: 30px;
  margin-top: 30px;
}
.center_fr_btn {
  width: 190;
  margin: auto;
  text-align: center;
  font-family: 微软雅黑;
  font-size: 10px;
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
  height: 140px;
    width: 150px;
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


/* .center_fr_img[data-v-5f7fc7f2] {
    height: 175px;
    width: 190px;
    border-bottom: 1px solid #ccc;
} */
</style>

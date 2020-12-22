<!--  -->
<template>
  <!-- 頁面的背景顏色 -->
  <div>
    <el-row>
      <el-col :md="24" :lg="24" :xl="24">
        <div class="grid-content" backgroundsize='true'>
          <!-- 头部导航 -->
          <header>
            <div class="nav_header">
              <div class="logo">
                <a href="#" class="logo_img"><img src="../assets/imges/logo.png" alt=""></a>
              </div>
              <!-- 文字导航 -->
              <div class="nav">
                <ul>
                  <a href=""><li>首页</li></a>
                  <a href=""><li>热门景点</li></a>
                  <a href=""><li>旅游套餐</li></a>
                  <a href=""><li>关于我们</li></a>
                  <a href=""><li>客户反馈</li></a>
                  <a href=""><li>联系我们</li></a>
                  <a href=""><li>旅游签证</li></a>
                </ul>
              </div>
            </div>
          </header>
          <video
            src="https://ccdn.goodq.top/caches/628d236aceaa012698bd7fe4b8dc188c/aHR0cHM6Ly81ODc0NWExOTcyYzZmLnQ3My5xaWZlaXllLmNvbS9xZnktY29udGVudC91cGxvYWRzLzIwMjAvMDkvMGU3OWM5ZWJhZmZkNGU1YWRkYWQ2N2MwZjQ3Zjk1ZDAubXA0.mp4"
            autoplay='autoplay' muted='muted' volume='0' loop='loop' height="830px" width="100%"
            style=" object-fit: cover; object-position: center center;">
          </video>
        </div>
      </el-col>
    </el-row> 
    <!--  -->
    <div style="height: 500px; background-color:transparent;">123</div>
  </div>
</template>

<script>
  export default {
    data() {
      return {

      };
    },

  }

</script>
<style scoped>
  .nav_header{
    height: 93px;
    width: 100%;
    margin: 0 auto;
    padding: 0 40px;
    background-color: rgba(51,110,198,0.6);
  }
  .logo_img{
    margin-left: 280px;
  }
.index_body{
    height: 100%;
    width: 100%;
    /* background-image: url(../assets/imges/beijing.png) ;
    background-size:cover; */
  }

</style>

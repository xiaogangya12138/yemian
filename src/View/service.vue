<!-- service 服务流程 -->
<template>
  <div>
    <el-row>
      <el-col :span="24">
        <div class="service_item">
          <div class="seservice_item_text"> <span>为您开启一段愉快的旅程</span> </div>
          <div class="seservice_item_text2">CITY TOURS / TOUR TICKETS / TOUR GUIDES</div>

        </div>

        <div class="process" style="width: 100%; margin-bottom: 100px;">
          <div class="proces_typeArea">
            <div class="typeArea">
              <span>服务流程</span>
              <span style="font-size: 15px; color:#A9A9A9;">CITY TOURS / TOUR TICKETS / TOUR GUIDES</span>
            </div>
            <div class="typeArea_steps">
              <el-steps>
                <el-step title="填写表单" description="您只需通过网站、微信、电话、客服等任意途径联系我们，就会有您
                "></el-step>
                <el-step title="私人服务" description="您只需通过网站、微信、电话、客服等任意途径联系我们，就会有您"></el-step>
                <el-step title="办理签证" description="您只需通过网站、微信、电话、客服等任意途径联系我们，就会有您"></el-step>
                <el-step title="出行" description="您只需通过网站、微信、电话、客服等任意途径联系我们，就会有您"></el-step>
                <el-step title="出行" description="您只需通过网站、微信、电话、客服等任意途径联系我们，就会有您" style="display: none;"></el-step>
              </el-steps>
            </div>
          </div>
          
          <div class="curab_equat">
            <div class="curab_equat_area">
              <div class="curab_equat_hor">
                <span>巴黎热门旅游景点</span>
                <span style="font-size: 15px; color:#A9A9A9;">Qsque at tortr a rcu. Curab equat</span>
              </div>
              <div class="attractions" style="margin-top: 70px;">
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
      </el-col>
    </el-row>
  </div>
</template>

<script>
  export default {
    data() {
      return {};
    },
  };

</script>
<style scoped>
  .service_item {
    position: relative;
    width: 100%;
    height: 400px;
    text-align: center;
    background-image: url(../assets/imges/timg.png);
  }

  .seservice_item_text {
    position: absolute;
    width: 100%;
    height: 100px;
    margin: auto;
    top: 50%;
    margin-top: -50px;
    text-align: center;
    line-height: 100px;
    font-family: 微软雅黑, Helvetica, Arial, Verdana, sans-serif;
    font-size: 28px;
    color: rgb(255, 255, 255);
  }

  .seservice_item_text2 {
    position: absolute;
    margin: auto;
    top: 50%;
    margin-top: 25px;
    width: 100%;
    height: 50px;
    text-align: center;
    line-height: 50px;
    font-family: 微软雅黑, Helvetica, Arial, Verdana, sans-serif;
    font-size: 16px;
    color: rgb(255, 255, 255);
  }

  .proces_typeArea,
  .curab_equat_area,
  .attractions {

    width: 1190px;
    margin: auto;

    /* background-color: pink; */
  }

  .typeArea,
  .curab_equat_hor {
    margin-top: 89px;
    text-align: center;
  }

  .typeArea span,
  .curab_equat_hor span {
    display: block;
    font-size: 24px;
    font-family: 微软雅黑, Helvetica, Arial, Verdana, sans-serif;
    color: #494949;
    margin-bottom: 10px;

  }

  .typeArea_elaboration {
    display: none;
  }

/* 内容部分 */
  .curab_equat {
    width: 100%;
    height: 685px;
    margin-top: 150px;
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
    margin: 0;
    padding: 0;
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
<style>
  .el-step__icon {
    height: 50px;
    width: 50px;
    background-color: #dd3333;
    border-color: #dd3333;
  }

  .el-step.is-horizontal .el-step__line {
    left: 42px;
    height: 5px;
    top: 23px;
    right: -2px;
    background-color: #dd3333;
  }

  .el-step__icon.is-text {
    border: none;
  }

  .el-step__title.is-wait {
    margin-top: 10px;
    font-size: 20px;
    font-family: 微软雅黑;
  }

  .el-step__description.is-wait {
    margin-top: 10px;
    font-size: 12px;
    font-family: 微软雅黑;
  }
  .el-step__icon-inner{
    color: #fff;
  }
</style>

<!-- 底部数据 -->
<template>
  <div>
    <div class="aboutAs">
      <el-row>
        <el-col>
          <div style="width: 1150px; margin: auto; margin-top: 70px;">
            <div class="aboutAs_img fl">
              <img src="../assets/imges/diannao.jpg" alt="">
            </div>
            <div class="aboutAs_text fl">
              <span class="text_sty" style=" color: rgb(51, 51, 51); ">欢迎登陆<i class="text_sty"
                  style="font-family: 微软雅黑;">PAIRS</i>旅行社官方网站了解更多旅游资讯</span>
              <div class="aboutAs_text_detailed">
                <span
                  style="font-family: 仿宋_gb2312;">当今最领先的响应式自助建站平台，我们的流线式网页布局设计方案和可视化图文内容编辑模式让网站制作和维护成为一件轻松惬意的事。无论您是普通互联网用户，
                  还是专业网站制作人员，都能使用起飞页设计出最具专业水准的网站。</span>
                <div class="aboutAs_text_btn">
                  <el-button type="primary" plain>VIEW TOURS</el-button>
                </div>
              </div>
            </div>

          </div>

        </el-col>
      </el-row>

    </div>
    <!-- <div class="contact_me">
      <el-row>
        <el-col>
          <div style="width: 100%; height: 180px; overflow: hidden; padding-top: 50px; margin-top: 50px;">
            <div style="width: 1024px; height: 180px; margin: auto;">
              <div class="fl">
                <div style="height: 26px; width: 175px;"><span class="contact_me_her">联系我们</span></div>
                <div><span style="color:#A9A9A9; font-size: 14px; font-family: arial;">/contact</span></div>
              </div>
              <div class="fl" style="width: 149px; height: 117px; margin-left: 20px;">
                <div><span class="contact_me_develop">巴黎旅游定制服务</span></div>
                <div style="height: 18px;">&nbsp;</div>
                <span class="detailed">地址：江苏省苏州市园区金鸡湖大道路000号</span>
                <span class="detailed">
                  邮编：100000
                </span>
                <span class="detailed">
                  电话：400-888-8888
                </span>

              </div>
              <div class="fl" style="width: 149px; height: 117px; margin-left: 30px;">
                <div><span class="contact_me_develop">&nbsp;</span></div>
                <div style="height: 18px;">&nbsp;</div>
                <span class="detailed">地址：江苏省苏州市园区金鸡湖大道路000号</span>
                <span class="detailed">
                  邮编：100000
                </span>
                <span class="detailed">
                  电话：400-888-8888
                </span>
              </div>
              <div class="fl" style="width: 195px; height: 180px; margin-left: 40px;">
                <div><span class="contact_me_develop">关于我们</span></div>
                <div style="height: 18px;">&nbsp;</div>
                <div style="width: 111px; height: 112px;"><img src="../assets/imges/erweim.png" alt=""
                    style="width: 100%;"></div>

              </div>
              <div class="bitWidgetFrame ">
                <ul style="text-align:center;">
                  <li>
                    <span class="qfy-icon_32x32 " style="    background-position-y: -60px;     background-position: -128px -64px;  width: 22px;
                    height: 22px;"></span>
                  </li>
                  <li>
                    <span class="qfy-icon_32x32 " style="    background-position-y: -60px;     background-position: -64px -64px;  width: 22px;
                    height: 22px;"></span>
                  </li>
                  <li>
                    <span class="qfy-icon_32x32 " style="    background-position-y: -60px;     background-position: -32px -64px;  width: 22px;
                    height: 22px;"></span>
                  </li>
                  <li>
                    <span class="qfy-icon_32x32 " style="    background-position-y: -60px;     background-position: -256px -64px;  width: 22px;
                    height: 22px;"></span>
                  </li>
                </ul>
              </div>
            </div>
          </div>
        </el-col>
      </el-row>
    </div> -->
    <!-- 联系我们 -->
    <contact_Us></contact_Us>
  </div>
</template>

<script>
  import contact_Us from './contact_Us'
  export default {
    data() {
      return {

      };
    },
    components:{
      contact_Us,
    }

  }

</script>
<style scoped>
  .fl {
    float: left;
  }

  .aboutAs {
    height: 456px;
    width: 100%;

  }

  .aboutAs_img {
    height: 306px;
    width: 510px;

    /* background-image: url(../assets/imges/diannao.jpg) no-repeat; */
  }

  .aboutAs_text {
    height: 306px;
    width: 570px;
    margin-left: 50px;
    margin-top: 60px;
  }

  .text_sty {
    color: tomato;
    font-style: normal;
    font-size: 22px;
    font-weight: bold;
    font-family: 微软雅黑;
    font-family: lucida sans unicode;
  }

  .aboutAs_text_detailed {
    height: 130px;
    width: 512px;
    padding: 20px 0 20px 0;
  }

  .aboutAs_text_detailed {
    display: inline-block;
    color: #696969;
    line-height: 2.0;
    font-size: 13px;
    font-family: 微软雅黑;
  }

  .aboutAs_text_btn {
    margin-top: 50px;
  }

  
</style>

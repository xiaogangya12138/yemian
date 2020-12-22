<!--  -->
<template>
  <div>
          <div class="contact_me">
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
    </div>
  </div>
</template>

<script>
export default {
  data () {
    return {

    };
  },

}

</script>
<style  scoped>

  .fl {
    float: left;
  }

  
  .el-button--primary.is-plain {
    height: 33px;
    width: 113px;
    font-family: "trebuchet ms";
    font-size: 13px;
    padding: 8px 20px;
    border-width: 1px;
    border-color: rgb(244, 127, 102);
    background-color: rgb(244, 127, 102);
    color: rgb(255, 255, 255);
  }

  .contact_me_her {
    color: #808080;
    font-size: 20px;
    font-family: 微软雅黑;
    font-weight: bold;
  }

  .contact_me_develop {
    width: 128px;
    height: 17px;
    font-family: 微软雅黑;
    color: #808080;
  }

  .detailed {

    color: #A9A9A9;
    display: inline-block;
    line-height: 1.8;
    font-size: 13px;
    font-family: 微软雅黑;
  }

  .qfy-icon_32x32 {

    background-image: url(//f.goodq.top/FeiEditor/images/icon/social_icon_32x32.png);
    background-repeat: no-repeat;
    height: 32px;
    width: 32px;
    background-position: 0 0;
    display: inline-block;
  }

  .bitWidgetFrame li {
    float: right;
    font-style: normal;
    list-style: none;
  }

  .bitWidgetFrame li span {
    margin: 5px;
    padding: 5px;
  }

</style>
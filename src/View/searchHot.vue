<!-- 热门景点 -->
<template>
  <div>
    <!-- 响应 -->
    <div class="searchHot">
      <el-row>
        <el-col :sm="24" :md="24" :lg="24" :xl="24">
          <!-- searchHot -->
          <div class="searchHot_imte">
            <div class="searchHot_sou">
              <el-row>
                <el-col :span="8">
                  <div class="grid-content bg-purple"><span>搜索热门旅游景点</span></div>
                </el-col>
                <el-col :span="8" :offset="8">
                  <div class="grid-content bg-purple-light">
                    <el-input v-model="searchHot_text" placeholder="请输入内容" class="searchHot_input"></el-input>
                    <el-button type="info" plain icon="el-icon-search"></el-button>
                  </div>
                </el-col>
              </el-row>
            </div>
            <!--巴黎旅游景点标题  -->
            <div class="searchHot_jingdian">
              <el-row>
                <el-col :span="24">
                  <div class="searchHot_jingdian_text">
                    <div class="searchHot_jingdian_text_lvyou">
                      <span>巴黎旅游景点</span>
                    </div>
                    <div class="searchHot_jingdian_text_yinwen">
                      <span>Quisque at tortor a libero posuer</span>
                    </div>
                    <div class="searchHot_jingdian_text_btn">
                      <ul>
                        <li>
                          <el-button class="searchHot_jingdian_btn">所有景区</el-button>
                        </li>
                        <li>
                          <el-button class="searchHot_jingdian_btn">第2区</el-button>
                        </li>
                        <li>
                          <el-button class="searchHot_jingdian_btn">第3区</el-button>
                        </li>
                        <li>
                          <el-button class="searchHot_jingdian_btn">第5区</el-button>
                        </li>
                        <li>
                          <el-button class="searchHot_jingdian_btn">第8区</el-button>
                        </li>
                        <li>
                          <el-button class="searchHot_jingdian_btn">第9区</el-button>
                        </li>
                      </ul>
                    </div>
                  </div>
                </el-col>
              </el-row>
            </div>
            <!-- 图片展示  我基本上都是用css 和js 写的-->
            <div class="searchHot_show">
              <el-row>
                <el-col :span="24">
                  <div class="searchHot_show_tou">
                    <ul>
                      <li class="searchHot_show_li fl" @click="child_HotSpots">
                        <a>
                          
                          <div><img src="../assets/imges/searc1.png" alt="" style=" width: 100%;"></div>
                        </a>

                        <div style="width: 100%; margin: auto;">
                          <div class="searchHot_show_text"><a href="" style="text-decoration: none;">卢浮宫</a></div>
                          <div class="searchHot_show_pinfen">
                            <p>客户评分：★★★★★</p>
                          </div>
                        </div>
                      </li>
                      <li class="searchHot_show_li fl " @click="child_HotSpots">
                        <a href="">
                          <div><img src="../assets/imges/searc2.png" alt="" style=" width: 100%;"></div>
                        </a>
                        <div style="width: 100%; margin: auto;">
                          <div class="searchHot_show_text"><a href="" style="text-decoration: none;">蓬皮杜中心</a></div>
                          <div class="searchHot_show_pinfen">
                            <p>客户评分：★★★★★</p>
                          </div>
                        </div>
                      </li>
                      <li class="searchHot_show_li fl " @click="child_HotSpots">
                        <a href="">
                          <div><img src="../assets/imges/searc3.png" alt="" style=" width: 100%;"></div>
                        </a>
                        <div style="width: 100%; margin: auto;">
                          <div class="searchHot_show_text"><a href="" style="text-decoration: none;">塞纳河</a></div>
                          <div class="searchHot_show_pinfen">
                            <p>客户评分：★★★★★</p>
                          </div>
                        </div>
                      </li>
                    </ul>
                  </div>
                  <div class="searchHot_show_tou">
                    <ul>
                      <li class="searchHot_show_li fl" @click="child_HotSpots">
                        <a href="" @click="child_HotSpots">
                          <div><img src="../assets/imges/searc4.png" alt="" style=" width: 100%;"></div>
                        </a>
                        <div style="width: 100%; margin: auto;">
                          <div class="searchHot_show_text"><a href="" style="text-decoration: none;">巴黎圣母院</a></div>
                          <div class="searchHot_show_pinfen">
                            <p>客户评分：★★★★★</p>
                          </div>
                        </div>
                      </li>
                      <li class="searchHot_show_li fl " @click="child_HotSpots">
                        <a href="">
                          <div><img src="../assets/imges/searc5.png" alt="" style=" width: 100%;"></div>
                        </a>
                        <div style="width: 100%; margin: auto;">
                          <div class="searchHot_show_text"><a href="" style="text-decoration: none;">凯旋门</a></div>
                          <div class="searchHot_show_pinfen">
                            <p>客户评分：★★★★★</p>
                          </div>
                        </div>
                      </li>
                      <li class="searchHot_show_li fl " @click="child_HotSpots">
                        <a href="">
                          <div><img src="../assets/imges/searc6.png" alt="" style=" width: 100%;"></div>
                        </a>
                        <div style="width: 100%; margin: auto;">
                          <div class="searchHot_show_text"><a href="" style="text-decoration: none;">圣心大教堂</a></div>
                          <div class="searchHot_show_pinfen">
                            <p>客户评分：★★★★★</p>
                          </div>
                        </div>
                      </li>
                    </ul>
                  </div>
                  <div class="searchHot_btn">
                    <div class="searchHot_MORE">
                      <el-button class="searchHot_button" @click.native="child_HotSpots">MORE</el-button>
                    </div>
                  </div>

                </el-col>
              </el-row>
            </div>
          </div>
        </el-col>
      </el-row>
    </div>


  </div>
</template>

<script>
  export default {
    data() {
      return {
        // 输入的文字
        searchHot_text: "",
        value: 3.7,
        // 显示和隐藏展示图
        // hotShow:true,
      };
    },
    methods: {
      child_HotSpots() {
        // 跳转打详情页
        this.$router.push('/spots_Detailed');
        console.log('点击跳转了');
        
      }
    },

  }

</script>
<style scoped>
  *,
  li {
    /* padding: 0;
    margin: 0; */
    list-style: none;

  }

  .searchHot_imte {
    height: 500px;
  }

  .searchHot_sou {
    height: 41px;
    width: 1110px;
    margin: auto;
    margin-top: 50px;
    /* background-color: pink; */
  }

  .searchHot_sou span {
    font-size: 22px;
    font-family: 微软雅黑;
    font-weight: bold;
    color: #696969;
  }

  .searchHot_input {
    height: 40px;
    width: 240px;
    margin-right: -4px;
  }

  .searchHot_btn {
    height: 39px;
    width: 40px;
  }

  .searchHot_jingdian {
    height: 163px;
    width: 100%;
    margin-top: 50px;

  }

  .searchHot_jingdian_text {
    height: 144px;
    width: 995px;
    margin: 10px auto;
    text-align: center;

  }

  .searchHot_jingdian_text_lvyou,
  .searchHot_jingdian_text_yinwen {
    display: inline-block;
    height: 35px;
    width: 100%;
    margin: auto;
    margin-top: 50px;
    font-size: 24px;
    font-family: 微软雅黑;
    color: rgb(89, 89, 89);

  }

  .searchHot_jingdian_text_yinwen {
    margin-top: 12px;
    color: rgb(169, 169, 169);
    font-size: 16px;
  }

  .searchHot_jingdian_text_btn {

    height: 34px;
    width: 680px;
    margin: auto;
    margin-top: 10px;
    /* background-color: pink; */
  }

  .searchHot_jingdian_text_btn li {
    float: left;
    padding: 2px;
    margin: 0;
    z-index: 99999;
  }

  .searchHot_jingdian_btn {
    display: block;
    height: 34px;
    width: 100px;
    font-size: 12px;
    text-align: center;
    line-height: 9px;
    font-family: 微软雅黑;
    background-color: transparent;
    color: #8e8e8e;
    border-style: solid;
    border-radius: 0;
    border-color: #ccc;
  }

  .searchHot_jingdian_btn:hover {
    border-color: red;
    color: red;
  }

  .searchHot_show {
    height: 670px;
    /* height: 335; */
    width: 1100px;
    margin: auto;
    margin-top: 80px;
  }

  .searchHot_show_tou {
    height: 335px;
    margin: auto;


  }

  .searchHot_show_li {
    float: left;
    height: 289px;
    width: 329px;
    margin-left: 20px;

    /* background-color: pink; */
    border-radius: 1px solid #ccc;
    /* box-shadow: 5px 0px 5px 5px #ccc; */
    box-shadow: 10px 10px 6px #ccc;
    /* 动画 */
    transition: all 0.5s;
  }

  .searchHot_show_li:hover {

    margin-top: -20px;
  }

  @-webkit-keyframes fadeInUp {
    from {
      opacity: 0;
      -webkit-transform: translate3d(0, 100%, 0);
      transform: translate3d(0, 100%, 0);
    }

    to {
      opacity: 1;
      -webkit-transform: translate3d(0, 0, 0);
      transform: translate3d(0, 0, 0);
    }
  }

  @keyframes fadeInUp {
    from {
      opacity: 0;
      -webkit-transform: translate3d(0, 100%, 0);
      transform: translate3d(0, 100%, 0);
    }

    to {
      opacity: 1;
      -webkit-transform: translate3d(0, 0, 0);
      transform: translate3d(0, 0, 0);
    }
  }

  .fadeInUp {
    -webkit-animation-name: fadeInUp;
    animation-name: fadeInUp;
  }


  .searchHot_show_text {

    height: 22px;
    width: 100%;
    font-size: 18px;
    text-align: center;
    color: #696969;
    padding-top: 20px;
  }

  .searchHot_show_pinfen {
    height: 39px;
    width: 100%;
    margin-top: 10px;
    font-size: 16px;
    text-align: center;
    color: #696969;
  }

  .searchHot_show_pinfen p {
    padding: 0;
    margin: 0;
  }

  .searchHot_btn {
    width: 100%;
    height: 80px;
    margin: auto;
    /* background-color: pink; */
    margin-bottom: 100px;
  }

  .searchHot_MORE {
    height: 47px;
    width: 190px;
    margin: 50px auto;
  }

  .searchHot_button {
    height: 47px;
    width: 190px;
    margin: auto;
    border-color: red;
    background-color: red;
    font-size: 16px;
    font-family: "微软雅黑", Helvetica, Arial, Verdana, sans-serif;
    color: rgb(255, 255, 255);
  }

  .searchHot_button:hover {
    background-color: rgb(255, 255, 255);
    color: red;
  }

</style>

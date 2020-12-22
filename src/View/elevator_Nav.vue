<!-- 电梯导航 -->
<template>
  <div>
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
</template>

<script>
export default {
  data () {
    return {

    };
  },
  methods:{

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
  }

}

</script>
<style  scoped>
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

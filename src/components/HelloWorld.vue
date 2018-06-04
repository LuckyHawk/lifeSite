<template>
  <div id="hellopage">

      <!--640px * 400px-->
      <el-carousel :interval="4000" type="card" height="400px" arrow="hover">
          <el-carousel-item v-for="item in 6" :key="item">
            <img src="../../static/temp_img/3copy.jpg" height="400px">
          </el-carousel-item>
      </el-carousel>
      <!--<img src="../../static/temp_img/1copy.jpg">-->
      <!--<img src="../../static/temp_img/2copy.jpg">-->
      <!--<img src="../../static/temp_img/3copy.jpg">-->
      <!--TODO:随机缓慢滚动窗-->

    <div id="middle-bar">
      <h1>OUR STEPS</h1>
      <div id="photo-wall">
        <!--TODO:照片墙-->
      </div>
    </div>
    <div id="panel-bar">


    </div>
  </div>
</template>

<script>
export default {
  name: 'HelloWorld',
  data () {
    return {
      msg: 'Welcome to Your Vue.js App'
    }
  }
}
</script>

<!-- Add "scoped" attribute to limit CSS to this component only -->
<style scoped>
  #hellopage {
    min-width: 1000px;
  }
  .el-carousel__item:nth-child(2n) {
    background-color: #99a9bf;
  }

  .el-carousel__item:nth-child(2n+1) {
    background-color: #d3dce6;
  }

  #panel-bar {
    min-width: 1000px;
    height: 500px;
    background:url('../../static/temp_img/banner.jpg') no-repeat center top;
    background-size: 100% 100%;
    background-color: black;
  }
  #middle-bar {
    margin: 0 auto 20px;
  }
  #middle-bar h1{
    font-size: 100px;
    margin: 30px 0 0;
  }
  #photo-wall {
    background: red;
    width: 100%;
    height: 400px;
  }

</style>

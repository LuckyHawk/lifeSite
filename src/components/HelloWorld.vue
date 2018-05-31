<template>
  <div>

    <div id="homephoto">
      <img src="../../static/temp_img/1copy.jpg">
      <img src="../../static/temp_img/2copy.jpg">
      <img src="../../static/temp_img/3copy.jpg">
      <!--TODO:随机缓慢滚动窗-->
    </div>
    <div id="middle-bar">
      <h1>OUR STEPS</h1>
    </div>
    <div id="panel-bar">
      <!--TODO:照片墙-->
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
  #panel-bar {
    height: 500px;
    background: #2e363d;
  }
  #middle-bar {
    height:300px;
  }
  #middle-bar h1{
    font-size: 100px;
    margin: 30px 0 0;
  }
  #homephoto {
    width: 1200px;
    margin: 0 auto;
    padding: 20px 0;
    background-color: #2b333a;
  }
  #homephoto img:first-child{
    width:225px;
    height: auto;
  }
  #homephoto img:nth-child(2){
    width:225px;
    height: auto;
  }
  #homephoto img:nth-child(3){
    width:400px;
    height: auto;
  }
</style>

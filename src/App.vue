<template>
  <div id="app">
    <nav id="navbar">
      <ul>
        <li><a v-on:click="toFirst">首页</a></li>
        <li><a v-on:click="toTimeLine">时间脚印</a></li>
        <li><a>未来</a></li>
        <li><a>关于</a></li>
      </ul>
      <div style="clear:both"></div>
    </nav>
    <router-view/>
    <footer id="foot">
      <div class="contact">
        <img src="./assets/phone.png"/>
        <span>182-xxxx-1369</span>
      </div>
      <div class="contact">
        <img src="./assets/phone.png"/>
        <span>182-xxxx-1369</span>
      </div>
      <div class="contact">
        <img src="./assets/phone.png"/>
        <span>182-xxxx-1369</span>
      </div>
    </footer>
  </div>
</template>

<script>
export default {
  name: 'app',
  methods: {
    toFirst: function (event) {
      this.$router.push({path: '/'})
    },
    toTimeLine: function (event) {
      this.$router.push({path: '/timeline'})
    }
  }
}
</script>

<style>
  #app {
    font-family: 'Avenir', Helvetica, Arial, sans-serif;
    -webkit-font-smoothing: antialiased;
    -moz-osx-font-smoothing: grayscale;
    text-align: center;
    color: #2c3e50;
    min-width: 1000px;
  }
  #navbar {
    margin-bottom:10px;
    height: 60px;
    font-size: 20px;
    border-bottom: 1px solid;
    overflow: hidden;
  }
  #navbar:after{
    content:'.';
    visibility: hidden;
    display:block;
    clear:both;
  }
  #navbar a{
    text-decoration: none;
    color: black;
  }
  #navbar a:hover{
    color:blueviolet;
  }
  #navbar ul{
    float: right;
    margin: 10px 20px 0 0;
  }
  #navbar ul li{
    display:inline-block;
    margin:0 20px;
  }

  #foot {
    margin: 10px auto;
    padding: 0 200px;
  }
  .contact {
    width: 100px;
    height: 100px;
    display: inline-block;
    margin: 0 20px;
  }
  .contact span{
    display: block;
  }

</style>

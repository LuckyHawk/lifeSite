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
</style>

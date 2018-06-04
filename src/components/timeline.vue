<style scoped>
  #timeline-wrap {
    width: 800px;
    margin: 0 auto;
  }
  .time{
    font-size: 14px;
    font-weight: bold;
  }
  .content{
    padding-left: 5px;
  }
  .timeWrap {
    background: deepskyblue;
  }
  .timeWrap p{
    margin:0 10px 20px 10px;
    text-align: left;
  }
</style>
<template>
  <div id="timeline-wrap">
    <Timeline>
      <TimelineItem v-for="line in timelines">
        <div class="timeWrap">
          <p class="time"><span>{{ line.time }}</span><span>----</span><span>{{ line.description }}</span></p>
          <img :src="line.url" />
        </div>
      </TimelineItem>
      <!--<TimelineItem>-->
        <!--<div class="timeWrap">-->
          <!--<p class="time">1976年</p>-->
          <!--<p class="content">Apple I 问世</p>-->
          <!--<img src="../assets/logo.png" />-->
        <!--</div>-->
      <!--</TimelineItem>-->
      <!--<TimelineItem>-->
        <!--<div class="timeWrap">-->
          <!--<p class="time">1976年</p>-->
          <!--<p class="content">Apple I 问世</p>-->
          <!--<img src="../assets/logo.png" />-->
        <!--</div>-->
      <!--</TimelineItem>-->
      <!--<TimelineItem>-->
        <!--<div class="timeWrap">-->
          <!--<p class="time">1976年</p>-->
          <!--<p class="content">Apple I 问世</p>-->
          <!--<img src="../assets/logo.png" />-->
        <!--</div>-->
      <!--</TimelineItem>-->
      <!--<TimelineItem>-->
        <!--<div class="timeWrap">-->
          <!--<p class="time">1976年</p>-->
          <!--<p class="content">Apple I 问世</p>-->
          <!--<img src="../assets/logo.png" />-->
        <!--</div>-->
      <!--</TimelineItem>-->
    </Timeline>
  </div>
</template>
<script>
  export default {
    name: 'timeline',
    data: function () {
      return {
        timelines: [
//          {
//            time: '1999-09-09',
//            description: 'xxxxx',
//            url: '../assets/logo.png'
//          },
//          {
//            time: '1999-09-09',
//            description: 'xxxxx',
//            url: '../assets/logo.png'
//          },
//          {
//            time: '1999-09-09',
//            description: 'xxxxx',
//            url: '../assets/logo.png'
//          }
        ]
      }
    },
    mounted: function () {
      var that = this
      this.$axios.get('/api/hawk_api/')
        .then((response) => {
          console.log(response)
          console.log(response.data)
          that.timelines.push({
            time: 'xxxx',
            description: 'xxxx',
            url: 'http://pic.qiantucdn.com/58pic/28/26/61/83T58PICbhq_1024.jpg!/fw/780/watermark/url/L3dhdGVybWFyay12MS4zLnBuZw==/align/center/crop/0x1009a0a0'
          })
          that.timelines.push({
            time: 'xxxx',
            description: 'xxxx',
            url: 'http://www.58pic.com/c/5701544'
          })
        })
        .catch(function (error) {
          console.log(error)
        })
    }
  }
</script>


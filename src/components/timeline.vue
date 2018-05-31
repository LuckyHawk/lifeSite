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
      <TimelineItem>
        <div class="timeWrap">
          <p class="time"><span>1976.06.07</span><span>----</span><span>something to descript</span></p>
          <img src="../assets/logo.png" />
        </div>
      </TimelineItem>
      <TimelineItem>
        <div class="timeWrap">
          <p class="time">1976年</p>
          <p class="content">Apple I 问世</p>
          <img src="../assets/logo.png" />
        </div>
      </TimelineItem>
      <TimelineItem>
        <div class="timeWrap">
          <p class="time">1976年</p>
          <p class="content">Apple I 问世</p>
          <img src="../assets/logo.png" />
        </div>
      </TimelineItem>
      <TimelineItem>
        <div class="timeWrap">
          <p class="time">1976年</p>
          <p class="content">Apple I 问世</p>
          <img src="../assets/logo.png" />
        </div>
      </TimelineItem>
      <TimelineItem>
        <div class="timeWrap">
          <p class="time">1976年</p>
          <p class="content">Apple I 问世</p>
          <img src="../assets/logo.png" />
        </div>
      </TimelineItem>
    </Timeline>
  </div>
</template>
<script>
  export default {
    name: 'timeline'
  }
</script>


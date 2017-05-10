<template>
  <div class="contentText">
    <div class="line-block">
      <div class="lint-title">
        <span class="line" :style="{backgroundColor: data.color}"></span>
        <span class="line-text" >{{data.text}}</span>
      </div>
      <div @click="jump">更多</div>
    </div>
  </div>
</template>
<script>
export default {
  name: 'contentText',
  data () {
    return {
    }
  },
  props: {
    data: Object
  },
  methods: {
    jump () {
      this.$router.push({path: this.data.pathId})
    }
  }
}
</script>
<style scroped>
.contentText{
  margin-top: 10px;
}
.line {
  width: 4px;
  background-color: #0094FF;
  display: inline-block;
  height: 26px;
  vertical-align: -8px;
  margin-right: 5px;
}
.line-block {
  display: flex;
  justify-content: space-between;
  background-color: #fff;
  line-height: 45px;
  padding: 0 10px;
  font-size: 16px;
  color: #555555;
  border-bottom: 1px solid #ddd;
}
</style>

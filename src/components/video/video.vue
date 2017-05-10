<template>
  <div class="videos">
    <content-text :data="data"></content-text>
    <div class="video">
      <div v-for="item in getVideos" class="community-block">
        <div class="community-img"><img :src="item.img"></div>
        <div class="community-text">{{item.text}}</div>
      </div>
    </div>
    
  </div>
</template>

<script>
import contentText from '../../components/contentText/contentText.vue'
import { mapGetters } from 'vuex'
export default {
  name: 'videos',
  components: {
    contentText
  },
  computed: {
    ...mapGetters(['getVideos'])
  },
  data () {
    return {
      data: {
        text: '视频社区',
        color: '#FF3333',
        pathId: 'hello'
      }
    }
  },
  methods: {
  }
}
</script>

<!-- Add "scoped" attribute to limit CSS to this component only -->
<style scoped>
.video {
  display: flex;
  justify-content: space-between;
  flex-wrap: wrap;
  padding: 10px 5px;
  background-color: #fff;
}
.community-block {
  width: 50%;
}
.community-img{
  width: 98%;
  margin: 1%;
}
.community-img img{
  width: 100%;
}
.community-text {
  line-height: 32px;
  font-size: 16px;
  color: #555555;
  margin-bottom: 6px;
}
</style>

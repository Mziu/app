<template>
  <div class="hotTopic">
    <content-text :data="data"></content-text>
    <div v-for="item in getHots" class="hot-content">
      <div class="hot-img">
        <img :src="item.img" alt="">
      </div>
      <div class="hot-text">{{item.text}}</div>
    </div>
  </div>
</template>

<script>
import contentText from '../../components/contentText/contentText.vue'
import { mapGetters } from 'vuex'
export default {
  name: 'home',
  components: {
    contentText
  },
  computed: {
    ...mapGetters(['getHots'])
  },
  data () {
    return {
      data: {
        text: '热议话题',
        color: '#0094FF',
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
.hot-content {
  display: flex;
  justify-content: flex-start;
  background-color: #fff;
  border-bottom: 1px solid #ededed;
  padding: 10px 10px 5px 10px;
}
.hot-img {
  width: 28%;
}
.hot-img img {
  width: 100%;
}
.hot-text {
  margin-left: 8px;
  font-size: 1.1rem;
}
</style>

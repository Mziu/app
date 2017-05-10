<template>
  <div class="communitys">
    <content-text :data="data"></content-text>
    <div class="community">
      <div v-for="item in getCommunitys" class="community-block">
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
  name: 'communitys',
  components: {
    contentText
  },
  computed: {
    ...mapGetters(['getCommunitys'])
  },
  data () {
    return {
      data: {
        text: '社区推荐',
        color: '#00BD0B',
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
.community {
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
  margin: 1%
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

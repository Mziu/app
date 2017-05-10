<template>
  <div class="home">
    <nav-item></nav-item>
    <icon-item></icon-item>
    <hot-topic></hot-topic>
    <community-recommendation></community-recommendation>
    <videos></videos>
    <foods></foods>
  </div>
</template>

<script>
import navItem from '../../components/nav/navItem.vue'
import iconItem from '../../components/icon/iconItem.vue'
import hotTopic from '../../components/hotTopic/hotTopic.vue'
import communityRecommendation from '../../components/communityRecommendation/communityRecommendation.vue'
import videos from '../../components/video/video.vue'
import foods from '../../components/foods/foods.vue'
export default {
  name: 'home',
  components: {
    navItem,
    iconItem,
    hotTopic,
    communityRecommendation,
    videos,
    foods
  },
  data () {
    return {
    }
  },
  methods: {
  }
}
</script>

<!-- Add "scoped" attribute to limit CSS to this component only -->
<style scoped>
.home {
  font-size: 14px;
  text-align: center;
}
</style>

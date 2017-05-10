<template>
  <div class="foods">
    <content-text :data="data"></content-text>
    <div class="food">
      <div class="food-img" v-for="item in getFoods">
        <img :src="item.img">
      </div>
    </div>
  </div>
</template>

<script>
import contentText from '../../components/contentText/contentText.vue'
import { mapGetters } from 'vuex'
export default {
  name: 'foods',
  components: {
    contentText
  },
  computed: {
    ...mapGetters(['getFoods'])
  },
  data () {
    return {
      data: {
        text: '美食',
        color: '#FFB700',
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
.food {
   display: flex;
  justify-content: flex-start;
  background-color: #fff;
  flex-wrap: wrap;
  border-bottom: 1px solid #ededed;
  padding: 15px 5px;
}
.food-img {
  width: 31%;
  margin: 0.5% 1%
}
.food-img:first-child {
  width: 64%;
}
.food-img img {
  width: 100%;
}
</style>

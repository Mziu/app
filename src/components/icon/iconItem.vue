<template>
  <div class="iconItem">
    <div class="icons" v-for="item in getIcons" :key="item.index" @click="jump(item)">
      <div class="icon"><img :src="item.icon"></img></div>
      <span class="icon-text">{{item.text}}</span>
    </div>
  </div>
</template>

<script>
import { mapGetters } from 'vuex'
export default {
  name: 'iconItem',
  data () {
    return {
    }
  },
  computed: {
    ...mapGetters(['getIcons'])
  },
  methods: {
    jump (item) {
      this.$router.push({path: item.path})
    }
  }
}
</script>
<style>
  .iconItem{
    display: flex;
    justify-content: space-between;
    flex-wrap:wrap;
    background-color: #fff;
    padding: 15px 5px;
  }
  .icons {
    width: 25%;
    height: 90px;
    margin-bottom: 6px;
  }
  .icon img {
    width: 60px;
    height: 60px;
  }
</style>

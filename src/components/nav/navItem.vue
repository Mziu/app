<template>
  <div class="nav-item">
    <swiper :options="swiperOption" ref="mySwiper">
     <swiper-slide v-for="item in getBanner" :style="{backgroundImage: 'url(' + item.banner_img + ')'}" :key="item.banner_img"></swiper-slide>
     <div class="swiper-pagination"  slot="pagination"></div>
    </swiper>
  </div>
</template>

<script>
import { swiper, swiperSlide } from 'vue-awesome-swiper'
import { mapGetters } from 'vuex'
export default {
  name: 'home',
  data () {
    return {
      swiperOption: {
        notNextTick: true,
        autoplay: 3000,
        effect: 'coverflow',
        grabCursor: true,
        setWrapperSize: true,
        height: 200,
        // paginationType: 'bullets',
        pagination: '.swiper-pagination',
        paginationClickable: true,
        mousewheelControl: true,
        observeParents: true
      }
    }
  },
  components: {
    swiper,
    swiperSlide
  },
  methods: {
  },
  computed: {
    ...mapGetters(['getBanner'])
  }
}
</script>

<!-- Add "scoped" attribute to limit CSS to this component only -->
<style>
.swiper-container {
  height: 176px;
}
@media screen and (min-width: 968px) {
  .swiper-container {
      height: 480px;
  }
}
.swiper-slide {
  -webkit-background-size: 100% 100%;
  background-size: 100% 100%;
}
</style>

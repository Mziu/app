<template>
  <div>
  	<ul>
  		<li v-for="n in getNews">{{ n.text }}</li>
  	</ul>
  </div>
</template>
<script>
import { mapGetters } from 'vuex'
export default {
  name: 'news',
  components: {
  },
  computed: {
    ...mapGetters(['getNews'])
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

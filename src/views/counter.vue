<template>
  <div class="counter">
    <!--<h1>{{number}}</h1>
    <el-button type="primary" @click="addNum" size="small">增加</el-button>-->
    <span style="cursor: pointer" @click="gotoPage">join page</span>
  </div>
</template>

<script>
import {mapState, mapMutations} from 'vuex'
export default {
  name: 'Counter',
  data () {
    return {

    }
  },
  computed: {
    ...mapState(['number'])
  },
  methods: {
    ...mapMutations(['addNum']),
    gotoPage () {
      this.$router.push('/join/#/about')
    }
  }
}
</script>


<!--
name(必传)：应用名称
url(必传)：应用地址，会被自动补全为http://localhost:3000/index.html
baseroute(可选)：基座应用分配给子应用的基础路由，就是上面的 `/my-page`
//https://taas-web-test.nioint.com/#/task
//http://localhost:8082
//http://localhost:5173
-->

<template>
  <div class="hah-root">
      <micro-app
          name='taas'
          url='http://localhost:8084/#/'
          baseroute='/taas'
      ></micro-app>
  </div>
</template>

<script>
export default {
  name: 'ddd',
  data () {
    return {
    }
  }
}
</script>

<style lang="less">

</style>

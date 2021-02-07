<template>
  <div id="home">
    <header class="home-head">T&nbsp;O&nbsp;D&nbsp;O&nbsp;S</header>
    <home-input/>
    <home-content/>
  </div>
</template>

<script type="text/ecmascript-6">
import HomeInput from 'components/HomeInput'
import HomeContent from 'components/HomeContent.vue'
export default {
  data () {
    return {

    }
  },
  components: {
    HomeInput,
    HomeContent
  },
  methods: {

  }
}
</script>

<style scoped>
#home {
  width: 750px;
  margin: 100px auto;
  min-width: 375px;
  max-width: 750px;
}
header {
  /* height: 44px; */
  text-align: center;
  /* line-height: 44px; */
  font-size: 40px;
  color: pink;
  font-weight: 700;
  margin-bottom: 20px;
}
@media screen and (max-width: 750px) {
  #home {
    width: 100%;
    padding: 0 10px;
  }
}
</style>

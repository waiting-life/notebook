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
  text-align: center;
  font-size: 60px;
  color: pink;
  font-weight: 700;
  margin-bottom: 1.5vw;
}
@media screen and (min-width: 375px) and (max-width: 750px) {
  #home {
    width: 100%;
  }
  #home header {
    font-size: 10vw;
  }
}
</style>

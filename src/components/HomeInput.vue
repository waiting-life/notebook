<template>
  <div class="home-input">
    <input type="text" placeholder="请输入内容" v-model="value">
    <button @click="addTodo(value)">提&nbsp;交</button>
  </div>
</template>
<script>
export default {
  data () {
    return {
      value: ''
    }
  },
  
  methods: {
    addTodo (todo) {
      if (todo)
      this.$store.commit('addTodo', todo)
      this.value = ''
    }
  }
}
</script>
<style scoped>
.home-input {
  display: flex;
  align-items: center;
  justify-content: center;
  height: 60px;
  width: 80%;
  margin: 0 auto;
  padding: 0 20px;
  border-radius: 30px;
  overflow: hidden;
  margin-bottom: 30px;
  background-color: #fff;
}
/* @media screen and (min-width: 750px) {
  .home-input {
    height: 60px;
  }

} */
@media screen and (min-width: 375px) and (max-width: 750px) {
  .home-input {
    height: 9vw;
    width: 70vw;
  }
  .home-input button {
    font-size: 4vw;
  }
  input::-webkit-input-placeholder {
    font-size: 4vw;
  }
}
.home-input input {
  width: 80%;
  height: 100%;
  font-size: 24px;
}
input::-webkit-input-placeholder {
	color: #ddd;
}
input:-ms-input-placeholder { 
	color:#ddd;
}
input:-moz-placeholder { 
	color:#ddd;
}
input::-moz-placeholder { 
	color: #ddd;
}
button {
  cursor: pointer;
  font-size: 20px;
  font-weight: 700;
  color: pink;
}
</style>
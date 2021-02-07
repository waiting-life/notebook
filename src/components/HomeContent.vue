<template>
  <div class="home-content">
    <transition-group name="list" tag="ul">
      <li v-for="(todo, index) in todos" :key="index+todo" class="todos-item">
        <span>{{ todo }}</span>
        <div class="delete" @click="deleteTodo(index)" :class="{deleteActive: currentIndex === index}"></div>
      </li>
    </transition-group>
  </div>
</template>
<script>
import { mapState } from 'vuex'
export default {
  data () {
    return {
      currentIndex: null
    }
  },
  computed: {
    ...mapState({
      todos: 'todos'
    })
  },
  methods: {
    deleteTodo (index) {
      this.$store.commit('deleteTodo', index)
      this.currentIndex = index
    }
  }
}
</script>
<style scoped>
.home-content {
  /* border-radius: 20px;
  overflow: hidden; */
}
.home-content .todos-item {
  display: flex;
  justify-content: space-between;
  align-items: center;
  width: 100%;
  padding: 0 20px;
  height: 60px;
  background-color: #fff;
  margin-bottom: 10px;
  border-radius: 8px;
  font-size: 20px;
  color: pink;
}
.delete {
  position: relative;
  display: flex;
  flex-direction: column;
  align-items: center;
  width: 30px;
  height: 30px;
  cursor: pointer;
  
}
.delete::before, .delete::after {
  content: '';
  display: block;
  position: absolute;
  top: 50%;
  transform: translateY(-50%);
  width: 20px;
  height: 3px;
  background-color: pink;
  
}
.delete::before {
  transform: rotate(45deg);
  transform-origin: center;
}
.delete::after {
  transform: rotate(-45deg);
  transform-origin: center;
}
.deleteActive::before {
  transition: all .2s linear;
  transform: rotate(-45deg);
}
.deleteActive::after {
  transition: all .2s linear;
  transform: rotate(45deg);
}
/* transition过渡 */
.list-enter-active, .list-leave-active {
  transition: all .2s;
}
.list-enter, .list-leave-active {
  transform: translateX(750px)
}
</style>
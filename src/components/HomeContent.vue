<template>
  <div class="home-content">
    <transition-group name="list" tag="ul">
      <li v-for="(todo, index) in todos" :key="index+todo" class="todos-item">
        <span>{{ todo }}</span>
        <div class="delete" @click="deleteTodo(index)" :class="{deleteActive: currentIndex === index}"></div>
      </li>
    </transition-group>
    <footer>
      <div class="footer-counts">共{{ todos.length }}条留言</div>
      <button class="delete-all" @click="deleteAll">清空留言</button>
    </footer>
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
    },
    deleteAll () {
      this.$store.commit('deleteAll')
    }
  }
}
</script>
<style scoped>
.home-content {
  border-radius: 10px;
  background-color: #fff;
}
.todos-item {
  display: flex;
  justify-content: space-between;
  align-items: center;
  width: 100%;
  height: 60px;
  padding: 0 20px;
  border-bottom: 1px solid #ddd;
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

footer {
  display: flex;
  justify-content: space-between;
  padding: 0 20px;
  align-items: center;
  background-color: #fff;
  height: 60px;
  font-size: 16px;
  color: hotpink;
  font-weight: 700;
}
footer button {
  font-size: 16px;
  cursor: pointer;
  color: hotpink;
  font-weight: 700;
}
@media screen and (min-width: 375px) and (max-width: 750px) {
  .home-content {
    width: 80vw;
    margin: 0 auto;
  }
  .todos-item {
    height: 10vw;
  }
  footer {
    height: 8vw;
  }
}
</style>
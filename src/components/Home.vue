<template>
  <div class="home">
    <span>HOME</span>
    <span>
      <router-link to="/home/login">login</router-link>
    </span>
    <span>
      <router-link to="/home/about">about</router-link>
    </span>
    <span>
      <router-link to="/home/order">order</router-link>
    </span>
    <button @click="handleAbout">ABOUT</button>
    <button @click="handleOrder">ORDER</button>
    </div>
</template>

<script lang="ts">
import { defineComponent } from "vue";
import { useRouter } from "vue-router";

export default defineComponent({
  name: 'Home',
  setup() {
    const router = useRouter()
    function handleAbout(){
      const url = '/home/about'
      console.log('跳转', url)
      router.push(url)
    }
    function handleOrder() {
      const url = '/home/order'
      router.push(url)
    }
    return {
      handleAbout,
      handleOrder,
    }
  }
})
</script>

<style scoped>
  .home {
    width: 500px;
    height: 200px;
    line-height: 200px;
    text-align: center;
    background: lightblue;
  }
  span {
    margin: 20px;
  }
</style>
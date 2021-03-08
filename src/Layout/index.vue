<template>
  <div>
    <Header></Header>
    <Menus></Menus>
    <div>Layout Page</div>
    <router-link to="login">login</router-link>
    <router-link to="about">home</router-link>
    <div class="main">
      <router-view></router-view>
    </div>
    <Footer></Footer>
  </div>
  
</template>

<script lang="ts">
import { defineComponent } from "vue";
import Header from './components/Header.vue'
import Menus from './components/Menus.vue'
import Footer from './components/Footer.vue'

export default defineComponent({
  name: 'Layout',
  components: {
    Header,
    Menus,
    Footer,
  }
})

</script>

<style scoped>

</style>
<template>
  <v-app>
    <Header />
    <v-main class="digivac">
      <router-view :key="$route.path"/>
    </v-main>
    <Footer />
  </v-app>
</template>

<script>
import Header from './components/Header';
import Footer from './components/Footer';

export default {
  name: 'app',
  data () {
    return {
      msg: 'Welcome to Your Vue.js App'
    }
  },
  components: {
    Header,
    Footer,
  },
}
</script>

<style lang="scss">

#app {
  font-family: Arial;
  -webkit-font-smoothing: antialiased;
  -moz-osx-font-smoothing: grayscale;
  text-align: center;
  color: #2c3e50;
}

.digivac{
  background-color: #3e3e62;
}

html, body{
    padding: 0 !important;
    margin: 0 !important;
}
</style>

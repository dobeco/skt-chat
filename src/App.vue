<template>
  <div id="app">
    <router-view/>
    <footer-guide v-show="$route.meta.showFooter"></footer-guide>
  </div>
</template>

<script>
import FooterGuide from '@/components/FooterGuide';
import  {reqFoodCategorys} from './api'
export default {
  name: 'App',
  components: {
    FooterGuide,
  },
  mounted() {
    this.$store.dispatch('getAddress')

  }
};
</script>

<style>
#app {
  font-family: 'Avenir', Helvetica, Arial, sans-serif;
}
</style>

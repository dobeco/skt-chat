<template>
  <div id="app">
    <router-view/>
    <footer-guide v-show="$route.meta.showFooter"></footer-guide>
  </div>
</template>

<script>
  import {mapActions} from 'vuex'
import FooterGuide from '@/components/FooterGuide';

export default {
  name: 'App',
  components: {
    FooterGuide,
  },
  mounted() {

    //this.$store.dispatch('getAddress')
    this.getAddress()

  },
  methods: {
    ...mapActions(['getAddress'])
  }
};
</script>

<style>
#app {
  font-family: 'Avenir', Helvetica, Arial, sans-serif;
}
</style>

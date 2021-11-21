<template lang="pug">
  #app
    load-layout(v-if="isLoading")
      base-loading
    main-layout(v-else)
</template>

<script>
import { mapState } from 'vuex'

export default {
  name: 'App',
  components: {
    MainLayout: () => import('@/layouts/MainLayout.vue'),
    LoadLayout: () => import('@/layouts/LoadLayout.vue'),
    BaseLoading: () => import('@/components/BaseLoading.vue')
  },
  computed: {
    ...mapState('loading', {
      isLoading: 'isLoading'
    })
  }
}
</script>

<style lang="stylus">
#app
  font-family Avenir, Helvetica, Arial, sans-serif
  -webkit-font-smoothing antialiased
  -moz-osx-font-smoothing grayscale
  color #ffffff
  background-color #15202b
  text-align center
  padding 60px 0
</style>

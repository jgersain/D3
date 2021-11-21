<template lang="pug">
  .container
    header-bar
    router-view
    footer-bar
</template>

<script>
import HeaderBar from '@/components/HeaderBar/Index'
import FooterBar from '@/components/FooterBar/Index'

export default {
  name: 'MainLayout',
  components: {
    HeaderBar,
    FooterBar
  }
}
</script>

<template lang="pug">
  .hello
    b-button
      | Hello World
</template>

<script>
export default {
  name: 'HelloWorld',
  props: {
    msg: String
  }
}
</script>

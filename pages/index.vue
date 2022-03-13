<template>
  <v-container fill-height class="home"> </v-container>
</template>

<script>
export default {
  head() {
    return {}
  },
  mounted() {},
  updated() {
    console.log(window.innerWidth)
    this.swiper.update()
  },
  data() {
    return {}
  },
  computed: {},
  components: {},
  async asyncData({ $content }) {
    const events = await $content('events').fetch()
    console.log(events)
    return {
      events
    }
  },
  methods: {}
}
</script>

<style lang="sass" scoped>
.home
  min-width: 100%
  height: 80%
</style>

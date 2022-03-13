<template>
  <v-container class="home" fluid w-full h-full>
    <h1 class="home_title">
      BOILING ROOM
    </h1>
  </v-container>
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
  pointer-events: all !important
  z-index: 1
  justify-items: center
  display: flex
  flex-direction: column
  height: 100%
  align-content: center
  align-items: center
  justify-content: center
  &_title
    text-overflow: ellipsis
    text-align: center
    font-size: 164px
    font-family: Transgender Grotesk
    font-weight: 500
    line-height: 194px
    @media only screen and (max-width: 600px)
      font-size: 40px
      line-height: 50px
</style>

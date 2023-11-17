<template>
  <v-container class="event">
    <h1 class="event_title">{{ event.title }}</h1>
    <!--<div class="event_twitch" id="twitch-embed" />-->
    <nuxt-content class="event_content_inside" v-if="event" :document="event">
    </nuxt-content>
  </v-container>
</template>

<script>
export default {
  head() {
    if (this.event) {
      return {
        title: this.event.title,
        meta: [
          {
            hid: 'description',
            name: 'description',
            content: this.event.description
          }
        ]
      }
    }
  },
  data() {
    return {
      twitch: null
    }
  },
  mounted() {
    /*
    this.twitch = new Twitch.Player('twitch-embed', {
      channel: this.event.stream,
      width: 960,
      height: 540
    })
    */
  },
  computed: {},
  components: {},
  async asyncData({ $content, params, error }) {
    let event
    try {
      event = await $content('events', params.slug).fetch()
    } catch (e) {
      error({ message: 'event not found' })
    }
    return {
      event
    }
  },
  methods: {}
}
</script>

<style lang="sass">

.event_content_inside
  font-size: 25px
  height: fit-content
  padding-bottom: 100px !important
  @media only screen and (max-width: 600px)
    font-size: 16px

iframe
  max-width: 100%
  max-height: 100%
</style>

<style lang="sass" scoped>
.event
  width: 100%
  height: 100vh
  &_title
    text-align: center
    font-size: 25px
    margin-bottom: 25px
    margin-top: 32px
  &_twitch
    width: 100%
    justify-content: center
    display: flex
  &_content
    font-size: 14px
    height: fit-content
    margin-bottom: 100px !important
    padding-bottom: 250px !important
</style>

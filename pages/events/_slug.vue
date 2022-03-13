<template>
  <v-container class="event">
    <h1 class="event_title">{{ event.title }}</h1>
    <nuxt-content class="event_content" v-if="event" :document="event">
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
    return {}
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
.nuxt-content-container
  margin-bottom: 100px !important

.event_content
  font-size: 30px
  height: fit-content
  padding-bottom: 100px !important
  @media only screen and (max-width: 600px)
    font-size: 20px
</style>

<style lang="sass" scoped>
.event
  width: 100%
  overflow-y: scroll
  height: 100vh
  &_title
    text-align: center
    font-size: 25px
    margin-bottom: 25px
    margin-top: 64px
  &_content
    font-size: 14px
    height: fit-content
    margin-bottom: 100px !important
    padding-bottom: 250px !important
</style>

<template>
  <v-container fluid class="events-page">
    EVENTS
  </v-container>
</template>

<script>
export default {
  head: {
    title: 'Events',
    meta: [
      {
        hid: 'description',
        name: 'description',
        content: 'Events page'
      }
    ]
  },
  data() {
    return {}
  },
  async asyncData({ $content }) {
    const events = await $content('events').fetch()
    console.log(events)
    return {
      events
    }
  },
  computed: {},
  components: {},

  methods: {}
}
</script>

<style lang="sass" scoped>

.events-page
  width: 100
  height: 100%
  flex-direction: row
  justify-content: space-around
  display: flex
</style>

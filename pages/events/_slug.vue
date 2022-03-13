<template>
  <v-container class="event">
    <h1 class="event_title">{{ event.title }}</h1>
    <p class="event_description">
      {{ event.instruction }}
    </p>
    <p class="event_description">
      {{ event.actiontype }}
    </p>
    <p class="event_description">
      {{ event.materialtype }}
    </p>
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

<style lang="sass" scoped>
*
  color: $font-color

.event
  width: 100%
  &_title
    font-size: 25px
    margin-bottom: 25px
  &_description
    font-size: 14px
    height: fit-content
</style>

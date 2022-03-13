<template>
  <v-container class="home">
    <p class="event-date" v-if="nextEvent">
      {{ formattedNextEventDate }}
    </p>
    <h1 class="home_title">
      BOILING <br />
      ROOM
    </h1>
    <a class="event-link" v-if="nextEvent">
      <span class="event-link_circle" />
      LIVESTREAM
    </a>
    <nuxt-content
      class="event-content"
      v-if="nextEvent"
      :document="nextEvent.body"
    >
    </nuxt-content>
  </v-container>
</template>

<script>
export default {
  head() {
    return {}
  },
  mounted() {
    this.calculateNextEvent()
  },
  updated() {
    this.calculateNextEvent()
    // this.swiper.update()
  },
  data() {
    return {
      nextEvent: null
    }
  },
  computed: {
    formattedNextEventDate() {
      const date = new Date(this.nextEvent.date)
      return date
        .toLocaleString('en-US', {
          month: 'long',
          day: '2-digit',
          hour: 'numeric',
          minute: 'numeric',
          hour12: false
        })
        .replace(',', '')
      //today.toLocaleString('default', { month: 'short' })
    }
  },
  components: {},
  async asyncData({ $content }) {
    const events = await $content('events').fetch()
    console.log(events)
    return {
      events
    }
  },
  methods: {
    calculateNextEvent() {
      const sortedEvents = this.events.sort((a, b) => {
        return new Date(b.date) - new Date(a.date)
      })
      console.log(sortedEvents)
      const now = Date.now()
      const futureEvents = []
      for (var i = 0; i < sortedEvents.length; i++) {
        if (new Date(sortedEvents[i].date) > now) {
          futureEvents.push(sortedEvents[i])
        }
      }
      console.log('future', futureEvents)
      this.nextEvent = futureEvents[0]
      console.log('next', this.nextEvent)
    }
  }
}
</script>

<style lang="sass" scoped>
.home
  pointer-events: all !important
  z-index: 1
  justify-items: center
  display: flex
  flex-direction: column
  align-content: center
  align-items: center
  justify-content: center
  height: fit-content !important
  overflow-y: scroll !important
  &_title
    text-overflow: ellipsis
    text-align: center
    font-size: 164px
    font-family: Transgender Grotesk
    font-weight: 500
    line-height: 194px
    @media only screen and (max-width: 1200px)
      font-size: 80px
      line-height: 80px
    @media only screen and (max-width: 600px)
      font-size: 50px
      line-height: 50px

.event-date
  height: 14vh
  width: 180px
  text-align: center
  display: flex
  align-items: center
  font-size: 25px
  line-height: 30px
  text-transform: uppercase
  @media only screen and (max-width: 600px)
    font-size: 20px
    height: 28vh
    width: 150px

.event-link
  height: 14vh
  text-align: center
  display: flex
  align-items: center
  font-size: 25px
  color: black
  @media only screen and (max-width: 600px)
    font-size: 20px
    height: 27vh
  &_circle
    width: 15px
    height: 15px
    border-radius: 15px
    background-color: $bluelucy
    margin-right: 8px
    animation: blinker 1s linear infinite


.event-content
  height: fit-content
</style>

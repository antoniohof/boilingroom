<template>
  <v-container class="home">
    <p class="event-date" @click="goToEvent">
      <span v-if="nextEvent" class="circle" />
      {{ formattedNextEventDate }}
    </p>
    <h1 class="home_title">
      BOILING <br />
      ROOM
    </h1>
    <a
    @click="goToEvent"
      class="event-link"
    >
      <span v-if="nextEvent" />
      {{livestremText}}
    </a>
    <nuxt-content
      class="event-content"
      :document="about"
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
    livestremText ( ){
      if (this.nextEvent) {
        return this.nextEvent.title
      } else {
        return "  "
      }
    },
    formattedNextEventDate() {
      if (!this.nextEvent) {
        return ''
      }
      if (this.nextEvent.title.includes('Upcoming')) {
        const date = new Date(this.nextEvent.date)

        return date
          .toLocaleString('en-UK', {
            month: 'long',
            hour12: false,
            year: 'numeric'
          })
          .replace('/', '.').replace('/', '.').replace(',', '')
      }
      const date = new Date(this.nextEvent.date)
      return date
        .toLocaleString('en-UK', {
          month: 'numeric',
          day: '2-digit',
          hour: 'numeric',
          minute: 'numeric',
          hour12: false,
          year: 'numeric'
        })
        .replace('/', '.').replace('/', '.').replace(',', '')
      //today.toLocaleString('default', { month: 'short' })
    }
  },
  components: {},
  async asyncData({ $content }) {
    const events = await $content('events').fetch()
    const about = await $content('about').fetch()
    return {
      events,
      about
    }
  },
  methods: {
    goToEvent() {
      console.log('go')
      this.$router.push({
        name: 'events-slug',
        params: { slug: this.nextEvent.slug }
      })
    },
    calculateNextEvent() {
      const sortedEvents = this.events.sort((a, b) => {
        return new Date(a.date) - new Date(b.date)
      })
      const now = Date.now()

      const futureEvents = []
      for (var i = 0; i < sortedEvents.length; i++) {
        const eventDate = new Date(sortedEvents[i].date)
        eventDate.setHours(eventDate.getHours() + 10)
        if (eventDate > now) {
          futureEvents.push(sortedEvents[i])
        }
      }
      this.nextEvent = futureEvents[0]
    }
  }
}
</script>

<style lang="sass">

.event_twitch
  display: flex
  align-self: center

.event-content
  max-width: 100% !important
  font-size: 25px
  padding-bottom: 200px
  @media only screen and (max-width: 600px)
    max-width: 100%
    font-size: 16px
    margin-top: -20px
  > *img
    display: none
</style>
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
  height: fit-content
  &_title
    text-overflow: ellipsis
    text-align: center
    font-size: 164px
    text-align: -webkit-center
    font-family: Transgender Grotesk
    font-weight: 500
    line-height: 194px
    @media only screen and (max-width: 1200px)
      font-size: 80px
      line-height: 80px
    @media only screen and (max-width: 600px)
      font-size: 50px
      line-height: 50px
  &.clicked
    height: 100% !important

.event-date
  cursor: pointer
  height: 15vh
  width: 195px
  text-align: -webkit-center
  text-align: center
  display: flex
  flex-direction: column
  align-items: center
  justify-content: center
  font-size: 25px
  line-height: 30px
  text-transform: uppercase
  position: relative
  @media only screen and (max-width: 600px)
    font-size: 20px
    height: 15vh
    width: 150px
    line-height: 25px
    margin-bottom: 30%

.circle
  width: 15px
  height: 15px
  border-radius: 15px
  background-color: #0695ff
  animation: blinker 1s linear infinite
  margin-bottom: 8px


.event-link
  height: 12vh
  text-align: center
  display: flex
  align-items: center
  justify-content: center
  font-size: 25px
  color: black
  cursor: pointer
  @media only screen and (max-width: 600px)
    font-size: 20px
    width: 80%
    height: 18vh
  &_circle
    width: 15px
    height: 15px
    border-radius: 15px
    background-color: $bluelucy
    margin-right: 8px
    animation: blinker 1s linear infinite


.nuxt-content-container
  text-align: center
  text-align: -webkit-center
  height: fit-content
  display: flex
  flex-direction: column
  justify-content: center
  justify-items: center
  align-items: center
  align-content: center
  max-width: 90%
  font-size: 25px
  padding-bottom: 250px
  @media only screen and (max-width: 600px)
    max-width: 78%
</style>

<template>
  <v-container
    fill-height
    class="swiper events-page"
    fluid
    resizeObserver="true"
    v-swiper:mySwiper="swiperOptions"
    @ready="onSwiperRedied"
    @click-slide="onSwiperClickSlide"
    @slide-change-transition-start="onSwiperSlideChangeTransitionStart"
  >
    <div class="swiper-wrapper" v-show="showCarrousel">
      <NuxtLink
        class="swiper-slide"
        v-for="(event, index) in sortedEvents"
        :key="index"
        :to="{ name: 'events-slug', params: { slug: event.slug } }"
      >
        <div class="event-container">
          <div class="event-container_link">
            <span class="bola" />
            <p>
              LIVE
            </p>
          </div>
          <h1 class="event-container_title">
            {{ event.title }}
          </h1>
          <p class="event-container_date">
            {{ formattedEventDate(event) }}
          </p>
          <p class="event-container_number">
            {{ index+1 }}
          </p>
        </div>
      </NuxtLink>
    </div>
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
    return {
      showCarrousel: false,
      swiper: null,
      swiperOptions: {
        autoUpdate: true,
        slidesPerView: 'auto',
        spaceBetween: 150,
        centeredSlides: true,
        initialSlide: 1,
        breakpoints: {
          1360: {
            slidesPerView: 'auto',
            spaceBetween: 100
          },
          1260: {
            slidesPerView: 'auto',
            spaceBetween: 50
          },
          1200: {
            slidesPerView: 'auto',
            spaceBetween: 25
          },
          1180: {
            slidesPerView: 'auto',
            spaceBetween: 5
          },
          600: {
            slidesPerView: 'auto',
            spaceBetween: 0
          }
        }
      }
    }
  },
  async asyncData({ $content }) {
    const events = await $content('events').fetch()
    return {
      events
    }
  },
  beforeMount() {},
  mounted() {
    setTimeout(() => {
      this.showCarrousel = true
      this.swiper.update()

      // get next event
      const now = Date.now()
      const futureEvents = []
      for (var i = 0; i < this.sortedEvents.length; i++) {
        const eventDate = new Date(this.sortedEvents[i].date)
        eventDate.setHours(eventDate.getHours() + 10)
        if (eventDate > now) {
          futureEvents.push(this.sortedEvents[i])
        }
      }
      const nextIndex = this.sortedEvents.indexOf(futureEvents[0])
      if (window.innerWidth < 600) {
        this.swiper.slideTo(nextIndex || 0, 1000, false)
      } else if (nextIndex > 5) {
        this.swiper.slideTo((nextIndex - 1) || 0, 1000, false)
      }
    }, 100)
  },
  updated() {
    this.swiper.update()
  },
  computed: {
    sortedEvents() {
      return this.events.sort((a, b) => {
        return new Date(a.date) - new Date(b.date)
      })
    }
  },
  components: {},

  methods: {
    onSwiperRedied(swiper) {
      this.swiper = swiper
    },
    onSwiperSlideChangeTransitionStart() {},
    onSwiperClickSlide(index, reallyIndex) {
      this.swiper.slideTo(index, 1000, false)
    },
    formattedEventDate(event) {
      const date = new Date(event.date)
      if (event.title.includes('Upcoming')) {
        return date
          .toLocaleString('en-US', {
            month: 'long',
            hour12: false
          })
          .replace(',', '')
      }
      return date
        .toLocaleString('en-US', {
          month: 'long',
          day: '2-digit',
          hour: 'numeric',
          minute: 'numeric',
          hour12: false
        })
        .replace(',', '')
    }
  }
}
</script>

<style lang="sass" scoped>

.events-page
  width: 100
  height: 100%
  overflow: visible

.swiper
  width: 100%
  height: 100%
  overflow: visible
  padding: 0px !important
  .swiper-slide
    align-self: center
    text-align: center
    font-size: 38px
    font-weight: 700
    background-color: #eee
    display: flex
    justify-content: center
    align-items: center
    width: 388px
    height: 692px
    max-width: 100%
    cursor: pointer
    transition: transform 0.35s ease-out
    background: #FFFFFF
    box-shadow: inset 0px -22px 22px #0695FF, inset 0px 6px 21px #FFFF00
    border-radius: 100%
    text-decoration: none !important
    @media only screen and (max-width: 600px)
      height: 86%
      width: 105%
  .swiper-pagination
    > .swiper-pagination-bullet
      background-color: red

.event-container
  width: 100%
  height: 100%
  display: flex
  flex-direction: column
  justify-content: center
  overflow: visible

  &_title
    text-decoration: none !important
    font-size: 30px
    color: black
    font-weight: 100
    align-self: center
    max-width: 80%
    overflow-wrap: break-word
    @media only screen and (max-width: 600px)
      font-size: 20px !important
      width: 70%

  &_date
    font-weight: 100
    text-decoration: none !important
    font-size: 30px
    color: black
    width: 70%
    text-align: center
    align-self: center
    @media only screen and (max-width: 600px)
      font-size: 20px !important
      width: 50%
  &_link
    position:absolute
    left:0
    top: 50px
    right:0
    margin-left:auto
    margin-right:auto
    position: absolute
    font-size: 30px
    height: fit-content
    font-weight: 100
    color: black
    display: flex
    flex-direction: column
    p
      margin-top: 5px
      font-size: 25px
      font-family: Transgender Grotesk !important
  &_number
    position: absolute
    bottom: 27px
    left: 50%
    transform: translate(-50%, 0)
    font-weight: 100
    color: black
    font-size: 30px
    @media only screen and (max-width: 600px)
      font-size: 20px !important
      bottom: 35px

.bola
  width: 15px !important
  height: 15px !important
  border-radius: 15px
  background-color: $bluelucy
  align-self: center
  animation: blinker 1s linear infinite
</style>

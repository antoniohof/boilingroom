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
          <h1 class="event-container_title">
            {{ event.title }}
          </h1>
          <p class="event-container_date">
            {{ formattedEventDate(event) }}
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
        initialSlide: 0,
        breakpoints: {
          1500: {
            slidesPerView: 'auto',
            spaceBetween: 200
          },
          1250: {
            slidesPerView: 'auto',
            spaceBetween: 150
          },
          1150: {
            slidesPerView: 'auto',
            spaceBetween: 100
          },
          650: {
            slidesPerView: 'auto',
            spaceBetween: 50
          }
        }
      }
    }
  },
  async asyncData({ $content }) {
    const events = await $content('events').fetch()
    console.log(events)
    return {
      events
    }
  },
  mounted() {
    setTimeout(() => {
      this.showCarrousel = true
      this.swiper.update()
    }, 100)
  },
  updated() {
    console.log(window.innerWidth)
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

.swiper
  width: 100%
  height: 100%
  overflow: visible
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
      height: 80%

  .swiper-pagination
    > .swiper-pagination-bullet
      background-color: red

.event-container
  width: 100%
  height: 100%
  display: flex
  flex-direction: column
  justify-content: center
  &_title
    text-decoration: none !important
    font-size: 30px
    color: black
    font-weight: 100
    align-self: center
    @media only screen and (max-width: 600px)
      font-size: 20px !important
      width: 50%

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
</style>

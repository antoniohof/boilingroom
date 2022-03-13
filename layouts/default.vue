<template>
  <v-app class="app" :class="{ yellow: $route.path === '/' }">
    <v-app-bar
      app
      flat
      elevation="0"
      class="topbar"
      color="transparent"
      :class="{ gradient: $route.path !== '/' }"
    >
      <NuxtLink
        :class="{ selected: $route.path === '/donate' }"
        class="topbar_item justify-start donate"
        to="/donate"
      >
        donate
      </NuxtLink>
      <NuxtLink
        :class="{ selected: $route.path === '/about' }"
        class="topbar_item justify-end"
        to="/about"
      >
        about
      </NuxtLink>
    </v-app-bar>
    <v-main flex flex-row align-center w-full>
      <v-container class="maincontainer" fluid>
        <div class="mask" v-if="$route.path === '/'">
          <div class="mask_image">
            <nuxt class="content" />
          </div>
        </div>
        <nuxt v-else class="content" />
      </v-container>
    </v-main>

    <v-footer
      app
      class="footer"
      flat
      elevation="0"
      :class="{ gradient: $route.path !== '/' }"
    >
      <v-row class="footer_left">
        <NuxtLink
          :class="{ selected: $route.path === '/' }"
          class="footer_item justify-start"
          to="/"
        >
          BR
        </NuxtLink>
        <NuxtLink
          :class="{ selected: $route.path === '/events' }"
          class="footer_item justify-center event_footer"
          to="/events"
        >
          events
        </NuxtLink>
      </v-row>
      <v-row class="footer_right">
        <NuxtLink
          :class="{ selected: $route.path === '/contact' }"
          class="footer_item justify-end"
          to="/contact"
        >
          contact
        </NuxtLink>
      </v-row>
    </v-footer>
  </v-app>
</template>

<script>
export default {
  head: {
    title: 'Home',
    meta: [
      {
        hid: 'description',
        name: 'description',
        content: 'Home about...'
      }
    ]
  },
  computed: {},
  mounted() {},
  data() {
    return {
      icon: 'mdi-instagram'
    }
  },
  methods: {}
}
</script>

<style lang="sass">
.app
  overflow: hidden
  &.yellow
    background-color: $background-color
.v-toolbar__content
  display: flex
  flex-direction: row
  justify-content: space-between
</style>

<style lang="sass" scoped>
.topbar
  width: 100vw
  height: 64px !important
  &_item
    display: flex
    text-decoration: none
    color: black
    font-size: 2em
    margin: 10px
    text-transform: uppercase
    &.selected
      text-decoration: underline

    @media only screen and (max-width: 600px)
      font-size: 1em
  &.gradient
    background-image: linear-gradient(to top, rgba(255,255,255,0), rgba(255,255,255,1))
.footer
  width: 100vw
  background-color: transparent !important
  display: flex
  flex-direction: row
  justify-content: flex-end
  justify-content: space-between
  padding: 4px 16px !important
  align-content: center
  flex-wrap: inherit
  height: 64px !important
  &.gradient
    background-image: linear-gradient(to bottom, rgba(255,255,255,0), rgba(255,255,255,1))

  @media only screen and (max-width: 600px)
    height: fit-content
    justify-content: center !important

.footer_left
  width: 50%
  margin: 10px

.footer_right
  width: 50%
  justify-content: flex-end
  margin: 10px

.footer_item
  display: flex
  width: fit-content
  text-decoration: none
  color: black
  font-size: 2em
  text-transform: uppercase
  &.selected
    text-decoration: underline

  @media only screen and (max-width: 600px)
    font-size: 1em
    justify-content: flex-start !important

.donate
  color: $bluelucy


.maincontainer
  height: 100%
  display: flex
  width: 80%
  @media only screen and (max-width: 600px)
    width: 95%


.content
  width: 100%
  height: 100%

.mask
  z-index: 2
  position: fixed
  left: 50%
  top: 64px
  transform: translate(-50%, 0)
  display: flex
  margin: 0 auto
  max-height: 810px
  width: calc(100% - 150px)
  height: calc(100% - 146px)
  max-width: 1500px
  background-color: $background-color
  @media only screen and (max-width: 600px)
    width: calc(100% - 10px) !important
    height: calc(100% - 132px)
  &_image
    z-index: 2
    transform: scale(0.99) !important
    border-radius: 100%
    width: 100%
    height: 100%
    background-color: white
    overflow: hidden
    overflow-y: scroll
    max-height: 918px
    box-shadow: inset 0px -22px 22px rgba(0, 0, 0, 0.55), inset 0px 6px 21px rgba(255, 255, 255, 0.5)
    -ms-overflow-style: none

  &_image::-webkit-scrollbar
    display: none
.event_footer
  margin-left: 40px
  @media only screen and (max-width: 600px)
    margin-left: 15px
</style>

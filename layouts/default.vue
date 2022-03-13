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
      <v-container class="maincontainer fill-height" fluid>
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
      <NuxtLink
        :class="{ selected: $route.path === '/' }"
        class="footer_item justify-start"
        to="/"
      >
        BR
      </NuxtLink>
      <NuxtLink
        :class="{ selected: $route.path === '/events' }"
        class="footer_item justify-center"
        to="/events"
      >
        events
      </NuxtLink>
      <NuxtLink
        :class="{ selected: $route.path === '/contact' }"
        class="footer_item justify-end"
        to="/contact"
      >
        contact
      </NuxtLink>
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
  padding: 4px 16px
  align-content: center
  flex-wrap: inherit
  height: 64px
  &.gradient
    background-image: linear-gradient(to bottom, rgba(255,255,255,0), rgba(255,255,255,1))

  @media only screen and (max-width: 600px)
    height: fit-content
    flex-wrap: wrap
    width: 50%


  &_item
    display: flex
    width: 220px
    text-decoration: none
    color: black
    font-size: 2em
    margin: 10px
    text-transform: uppercase
    &.selected
      text-decoration: underline

    @media only screen and (max-width: 600px)
      font-size: 1em
      justify-content: flex-start !important

.donate
  color: $bluelucy


.maincontainer
  width: 80%
  @media only screen and (max-width: 600px)
    width: 95%


.content
  width: 100%
  height: 100%

.mask
  z-index: 2
  position: absolute
  left: 50%
  top: 0
  transform: translate(-50%, 0)
  display: flex
  margin: 0 auto
  max-height: 810px
  width: calc(100% - 150px)
  height: 92%
  max-width: 1500px
  background-color: $background-color
  @media only screen and (max-width: 600px)
    width: calc(100% - 10px) !important
    height: 98% !important

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
</style>

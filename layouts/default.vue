<template>
  <v-app class="app">
    <v-app-bar app flat elevation="0" class="topbar" color="transparent">
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
        <div class="mask">
          <div class="mask_image" />
        </div>
        <nuxt />
      </v-container>
    </v-main>

    <v-footer app class="footer" flat elevation="0">
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
    &:hover
    // animation: vibration 2s ease 0s infinite alternate both
    // @media only screen and (min-width: 600px)
    //  font-size: 25px
.footer
  width: 100vw
  background-color: transparent !important
  display: flex
  flex-direction: row
  justify-content: flex-end
  justify-content: space-between
  padding: 4px 16px
  align-content: center
  height: 64px
  @media only screen and (max-width: 600px)
    height: fit-content

  &_item
    display: flex
    width: 250px
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
  color: #0695FF


.mask
  position: absolute
  left: 50%
  top: 0
  transform: translate(-50%, 0)
  width: 1636px !important
  display: flex
  margin: 0 auto
  height: 92%
  max-height: 810px
  max-width: calc(100% - 150px)
  &_image
    transform: scale(0.99) !important
    border-radius: 100%
    width: 100%
    height: 100%
    background: #FFFFFF
    overflow: hidden
    max-height: 918px
    box-shadow: inset 0px -22px 22px rgba(0, 0, 0, 0.55), inset 0px 6px 21px rgba(255, 255, 255, 0.5)
</style>

<template>
  <v-app class="app">
    <v-app-bar app flat elevation="0" class="topbar" color="transparent">
      <NuxtLink
        :class="{ selected: $route.path === '/donate' }"
        class="topbar_item justify-start"
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
.maincontainer
  position: absolute
  width: 100vw
  height: 100vh
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
  background-color: white
  display: flex
  flex-direction: row
  justify-content: flex-end
  justify-content: space-between
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
</style>

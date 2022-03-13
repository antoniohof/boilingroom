<template>
  <v-container fluid class="donate-page">
    <nuxt-content class="donate_content" :document="donate" />
  </v-container>
</template>

<script>
export default {
  head: {
    title: 'Donate',
    meta: [
      {
        hid: 'description',
        name: 'description',
        content: 'Donate page'
      }
    ]
  },
  data() {
    return {}
  },
  async asyncData({ $content }) {
    const donate = await $content('donate').fetch()
    return {
      donate
    }
  },
  computed: {},
  components: {},

  methods: {}
}
</script>

<style lang="sass">
.donate_content
  height: fit-content
  width: 100%
  color: black
  font-family: Transgender Grotesk
  font-size: 25px
  @media only screen and (max-width: 500px)
    font-size: 22px
</style>

<style lang="sass" scoped>

.donate-page
  width: fit-content
  padding: 10px 10px 10px 10px
  flex-direction: column
  justify-content: space-around
  display: flex

.donate_content
  height: fit-content
  width: 100%
  color: black
  font-family: Transgender Grotesk
</style>

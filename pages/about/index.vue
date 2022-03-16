<template>
  <v-container class="about-page">
    <h1 class="about-page_title">{{ about.title }}</h1>
    <nuxt-content class="about-page_content event_content_inside2" :document="about" />
  </v-container>
</template>

<script>
export default {
  head: {
    title: 'About',
    meta: [
      {
        hid: 'description',
        name: 'description',
        content: 'About Page'
      }
    ]
  },
  data() {
    return {}
  },
  async asyncData({ $content }) {
    const about = await $content('about').fetch()
    return {
      about
    }
  },
  computed: {},
  components: {},

  methods: {}
}
</script>
<style lang="sass">
p
  margin-top: 25px

.event_content_inside2
  font-size: 25px
  height: fit-content
  padding-bottom: 0px
  @media only screen and (max-width: 600px)
    font-size: 16px
    padding-bottom: 100px !important

</style>

<style lang="sass" scoped>
.about-page
  display: flex
  flex-direction: column
  width: 100%
  height: 100%
  justify-content: center
  @media only screen and (max-width: 600px)
    height: fit-content
  &_title
    margin-top: 50px
    font-weight: 400
    text-align: center
    width: 100%
    text-align: -webkit-center
    height: fit-content
    justify-content: center
    justify-items: center
    vertical-align: middle
    display: flex
    text-align: center
  &_content
    height: fit-content
    width: 100%
    color: black
    font-family: Transgender Grotesk
  > *
    font-size: 25px
    text-align: center
    text-align: -webkit-center
    @media only screen and (max-width: 600px)
      font-size: 16px !important
</style>

<template>
  <v-container fluid h-full w-full class="about-page fill-height">
    <h1 class="about-page_title">{{ about.title }}</h1>
    <nuxt-content class="about-page_content h-full" :document="about" />
  </v-container>
</template>

<script>
export default {
  head: {
    title: 'title',
    meta: [
      {
        hid: 'description',
        name: 'description',
        content: 'body'
      }
    ]
  },
  data() {
    return {}
  },
  async asyncData({ $content }) {
    const about = await $content('about').fetch()
    console.log('about body', about.body)
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
</style>

<style lang="sass" scoped>
.about-page
  width: 100%
  height: 100%
  display: flex
  flex-direction: column
  justify-content: center
  &_title
    font-weight: 400
    text-align: center
    width: 100%
    height: fit-content
  &_content
    height: 100%
    width: 100%
    color: black
    font-family: Transgender Grotesk
  > *
    font-size: 30px
    text-align: center
    @media only screen and (max-width: 600px)
      font-size: 15px !important
</style>

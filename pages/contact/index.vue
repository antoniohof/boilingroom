<template>
  <v-container fluid class="contact-page">
    <nuxt-content class="contact_content" :document="contact" />
  </v-container>
</template>

<script>
export default {
  head: {
    title: 'Contact',
    meta: [
      {
        hid: 'description',
        name: 'description',
        content: 'Contact page'
      }
    ]
  },
  data() {
    return {}
  },
  async asyncData({ $content }) {
    const contact = await $content('contact').fetch()
    return {
      contact
    }
  },
  computed: {},
  components: {},

  methods: {}
}
</script>

<style lang="sass">
.contact_content
  height: fit-content
  width: 100%
  color: black
  font-family: Transgender Grotesk
  font-size: 30px
  text-align: center
  margin-top: -50px
  @media only screen and (max-width: 500px)
    font-size: 15px
  > *a
    color: $light-blue !important
    text-decoration: none !important
</style>

<style lang="sass" scoped>
.form_wrapper
  height: fit-content
.contact-page
  width: fit-content
  padding: 10px 10px 10px 10px
  flex-direction: column
  justify-content: space-around
  display: flex
</style>

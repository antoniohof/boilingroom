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
  font-size: 25px
  @media only screen and (max-width: 500px)
    font-size: 22px
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

.contact_content
  height: fit-content
  width: 100%
  color: black
  font-family: Transgender Grotesk

.form
  display: flex
  flex-direction: column
  width: 100%
  height: fit-content

.form_row
  margin-bottom: 10px
  height: fit-content
  display: flex
  flex-direction: row
  @media only screen and (max-width: 500px)
    flex-direction: column !important
  &.message
    height: 40vh
    @media only screen and (max-width: 500px)
      height: 20vh !important
.form_column
  width: 100%
  height: 100%
  display: flex
  flex-direction: column
  margin-right: 10px

input
  border: 1px solid black

textarea
  border: 1px solid black
  width: 100%
  height: 30vh
  display: flex
  flex: 1

label
  min-width: 100px
  width: 100%
  color: rgba(0.4, 0.4, 0.4, 0.4)
  text-transform: lowercase

.button
  width: 100px
  text-align: center
  text-transform: lowercase
</style>

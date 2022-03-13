<template>
  <v-container fluid class="donate-page">
    <nuxt-content class="donate_content" :document="donate" />
    <form action="https://www.paypal.com/donate" method="post" target="_top">
      <input type="hidden" name="hosted_button_id" value="W9TLECNBGLCHN" />
      <input
        type="image"
        src="https://www.paypalobjects.com/de_DE/DE/i/btn/btn_donate_LG.gif"
        border="0"
        name="submit"
        title="PayPal - The safer, easier way to pay online!"
        alt="Spenden mit dem PayPal-Button"
      />
      <img
        alt=""
        border="0"
        src="https://www.paypal.com/de_DE/i/scr/pixel.gif"
        width="1"
        height="1"
      />
    </form>
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

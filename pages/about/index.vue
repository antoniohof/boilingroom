<template>
  <v-container class="about-page">
    <h1 class="about-page_title">{{ about.title }}</h1>
    <nuxt-content class="about-page_content event_content_inside2" :document="about" />
    <form class="email-form" name="newsletter" method="POST" data-netlify="true" netlify-honeypot="bot-field"  v-on:submit="onSubmit" >
      <div hidden aria-hidden="true">
        <label>
          Don’t fill this out if you're human: 
          <input name="bot-field" />
        </label>
      </div>
      <div class='input_container'>
        <input class='input' type="email" name="email" placeholder=" Email"  id="email" required />
        <div class="subscribe_container">
          <button class='subscribe_button' type="submit"></button>
        </div>
      </div>
    </form>
    <div class='thankyou' v-if="registeredEmail">
      subscribed :)
    </div>
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
    return {
      registeredEmail: false
    }
  },
  async asyncData({ $content }) {
    const about = await $content('about').fetch()
    return {
      about
    }
  },
  computed: {},
  components: {},

  methods: {
    onSubmit (e) {
      e.preventDefault()
      this.registeredEmail = true
      const emailForm = document.querySelector('.email-form')
      const data = new FormData(emailForm)
      data.append('form-name', 'newsletter');
      fetch('/', {
        method: 'POST',
        body: data,
      })
      .then(() => {
        console.log('send success')
      })
      .catch(error => {
        console.error('send error', error)
      })
    }
  }
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
    padding-bottom: 10px !important

.about-page
  > *a
    color: $bluelucy !important
img
  width: 100% !important
</style>

<style lang="sass" scoped>

.about-page
  display: flex
  flex-direction: column
  width: 100%
  height: fit-content
  justify-content: center
  @media only screen and (max-width: 600px)
    height: fit-content
  &_title
    margin-top: 50px
    font-weight: 700
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


.form_wrapper
  height: fit-content

.email-form
  display: flex
  flex-direction: column
  margin-top: 30px
  margin-bottom: 5px
.subscribe_container
  width: 328px
  height: 75px
  @media only screen and (max-width: 600px)
    width: 164px
    height: 38px
.subscribe_button
  height: 75px
  width: 328px
  background-size: contain
  background-image: url('/img/subscribe.svg')
  &:hover
    background-image: url('/img/subscribe_hover.svg')

  @media only screen and (max-width: 600px)
    width: 164px
    height: 38px
    margin-left: 12px

input
  padding-bottom: 9px !important
  margin-top: 6px
  @media only screen and (max-width: 600px)
    margin-top: 4px !important
    padding-top: 7px !important

.subscribe_label
  text-align: center
  margin-bottom: 20px
  font-size: 30px
  @media only screen and (max-width: 600px)
    font-size: 15px
.input
  height: 62px
  width: 83%
  font-size: 30px
  box-shadow: inset 0px 0px 10px rgba(0,0,0,0.25)
  border-radius: 102px
  margin-right: 10px
  padding-left: 25px
  @media only screen and (max-width: 600px)
    font-size: 15px 
    height: 30px
    margin-right: 0px

.input_container
  max-width: 100%
  height: 62px
  max-width: 782px
  max-height: 62px
  align-self: center
  display: flex
  flex-direction: row
  justify-content: space-between
  font-size: 30px
  color: #ADADAD
  margin-bottom: 100px
  @media only screen and (max-width: 600px)
    font-size: 15px 
    margin-top: -20px !important

.thankyou
  font-size: 30px 
  margin-top: 5px
  @media only screen and (max-width: 600px)
    font-size: 15px 
::placeholder
  color: #ADADAD
  opacity: 1
  font-size: 30px
  @media only screen and (max-width: 600px)
    font-size: 15px !important
input:focus, textarea:focus, select:focus
  outline: none
  font-size: 30px
  @media only screen and (max-width: 600px)
    font-size: 15px !important
</style>

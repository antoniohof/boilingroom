<template>
  <v-container fluid class="contact-page">
    <nuxt-content class="contact_content" :document="contact" />
    <form class="email-form" name="newsletter" method="POST" data-netlify="true" netlify-honeypot="bot-field"  v-on:submit="onSubmit" >
    <div hidden aria-hidden="true">
      <label>
        Don’t fill this out if you're human: 
        <input name="bot-field" />
      </label>
    </div>
    <label class='subscribe_label' for="email">Are you interested in our newsletters?</label>
    <div class='input_container'>
      <input class='input' type="email" name="email" placeholder=" Email"  id="email" required />
      <button class='subscribe' type="submit"></button>
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
    return {
      registeredEmail: false
    }
  },
  async asyncData({ $content }) {
    const contact = await $content('contact').fetch()
    return {
      contact
    }
  },
  computed: {},
  components: {},

  methods: {
    onSubmit (e) {
      e.preventDefault()
      console.log('submitted!')
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
.contact_content
  height: fit-content
  width: 100%
  color: black
  font-family: Transgender Grotesk
  font-size: 30px
  text-align: center
  text-align: -webkit-center
  @media only screen and (max-width: 600px)
    font-size: 15px
  > *a
    color: $bluelucy !important
    text-decoration: none !important
</style>

<style lang="sass" scoped>
.form_wrapper
  height: fit-content
.contact-page
  width: fit-content
  padding: 10px 10px 10px 10px
  flex-direction: column
  justify-content: center
  display: flex

.email-form
  display: flex
  flex-direction: column
  margin-top: 50px
.subscribe
  width: 345px
  height: 68px
  background-size: contain
  margin-left: 30px
  background-image: url('/img/subscribe.png')
  @media only screen and (max-width: 600px)
    width: 195px
    height: 30px
.subscribe_label
  text-align: center
  margin-bottom: 20px
  font-size: 30px
  @media only screen and (max-width: 600px)
    font-size: 15px
.input
  width: 75%
  font-size: 30px
  box-shadow: inset 0px 0px 10px rgba(0,0,0,0.25)
  border-radius: 102px
  padding-left: 25px
  @media only screen and (max-width: 600px)
    font-size: 15px 
.input_container
  display: flex
  flex-direction: row
  justify-content: space-between
  font-size: 30px
  color: #ADADAD
  @media only screen and (max-width: 600px)
    font-size: 15px 

.thankyou
  font-size: 30px 
  margin-top: 20px
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

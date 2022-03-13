<template>
  <v-container>
    <v-row>
      <v-col>
        <h1>{{ about.title }}</h1>
        <v-container fluid>
          <nuxt-content class="about_content" :document="about" />
        </v-container>
      </v-col>
    </v-row>
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

<style lang="sass" scoped>

.about_content
  height: 300px
  width: 100%
  color: black
  font-family: Transgender Grotesk
</style>

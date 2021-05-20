<template>
  <div class="d-flex align-center justify-center">
    <div class="pa-6 mt-12">
    <v-card class="pa-4 mt-10 flat tile text-center justify-center" width="500" height="500">
      <v-container bg fill-height grid-list-md text-xs-center>
        <v-layout row wrap align-center>
          <v-flex>
                  <p><b> Welcome </b></p>
                  <p> <b>{{$store.state.name || ''}} </b></p>
                  <p><b>To My WebSite</b></p>
          </v-flex>
        </v-layout>
      </v-container>
    </v-card>
  </div>
  </div>
</template>

<script>
export default {
  name: "login",
  props: {
    msg: String,
  },
  data () {
    return {
    }
  },
  methods: {
    login () {
      this.$store.commit('setName', this.name)
      this.$router.push('/welcome')
    }
  }
};
</script>

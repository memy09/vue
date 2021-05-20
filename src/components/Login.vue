<template>
  <div class="d-flex align-center justify-center">
    <div class="pa-6 mt-12">
    <v-card class="pa-4 mt-10">
          <v-row>
                <v-col cols="12">
                          <v-text-field placeholder="login name" outlined v-model="name"></v-text-field>
                          <v-btn @click="login()" color="pink" :dark="name!==''" block :disabled="!name">login</v-btn>
                </v-col>
          </v-row>
          
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
      name: ''
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

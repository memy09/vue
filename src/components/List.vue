<template>
  <div class="d-flex align-center justify-center">
    <div class="pa-6 mt-12">
    <v-card class="pa-4 mt-2 flat tile text-center justify-center" width="95vw" height="95vh">
      <v-container fluid>
        <v-toolbar-title>My List</v-toolbar-title>
      <v-row dense>
        <v-col
          v-for="card in items"
          :key="card.title"
          :cols="2"
        >
          <v-card>
            <v-img
              :src="card.imageUrl"
              class="white--text align-end"
              gradient="to bottom, rgba(0,0,0,.1), rgba(0,0,0,.5)"
              height="200px"
            >
              <v-card-title v-text="card.name"></v-card-title>
            </v-img>

            <v-card-actions>
              <v-spacer></v-spacer>
              ID: {{card.id}}
            </v-card-actions>
          </v-card>
        </v-col>
      </v-row>
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
      items: this.$store.state.stock || []
    }
  },
  methods: {
  }
};
</script>

<template>
  <v-app id="inspire">
    <v-navigation-drawer
      v-model="drawer"
      absolute
      bottom
      temporary
    >
      <v-list
        nav
        dense
      >
        <v-list-item-group
          active-class="deep-purple--text text--accent-4"
        >
          <v-list-item>
            <v-list-item-title :to="'/welcome'" @click="$router.push('/welcome')">Welcome</v-list-item-title>
          </v-list-item>

          <v-list-item>
            <v-list-item-title :to="'/stock'" @click="$router.push('/stock')">Stock</v-list-item-title>
          </v-list-item>

          <v-list-item>
            <v-list-item-title :to="'/list'" @click="$router.push('/list')">List</v-list-item-title>
          </v-list-item>

          <v-list-item>
            <v-list-item-title :to="'/logout'" @click="logout()">Logout</v-list-item-title>
          </v-list-item>
        </v-list-item-group>
      </v-list>
    </v-navigation-drawer>

    <v-app-bar app dense color="white" elevation=1 height=52 style="z-index: 1;">
      <v-app-bar-nav-icon @click="drawer = !drawer"></v-app-bar-nav-icon>

      <v-toolbar-title><b>User : </b> {{$store.state.name || ''}}</v-toolbar-title>
    </v-app-bar>

      <router-view ></router-view>
  </v-app>
</template>

<script>

export default {
  name: 'App',
  data: () => ({
    dialog: false,
    drawer: false
  }),
  methods: {
    logout () {
      this.$store.commit('clearName')
      this.$router.push('/login')
    }
  },
};
</script>

<template>
  <v-app>
      <router-view/>
  </v-app>
</template>

<script>

export default {
  name: 'App',
  data: () => ({
    dialog: false,
    drawer: false
  }),
};
</script>

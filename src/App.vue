<template>
<v-app>
  <Header></Header>
  <NavDrawer></NavDrawer>
  <v-content>
    <router-view />
  </v-content>
  <v-footer color="primary" dark app>
    Blog CMS
  </v-footer>
</v-app>
</template>

<script>
import Header from '@/components/Header.vue';
import NavDrawer from '@/components/NavDrawer.vue';

export default {
  components: {
    Header: Header,
    NavDrawer: NavDrawer,
  },
};
</script>

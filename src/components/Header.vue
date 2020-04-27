<template>
<v-app-bar color="primary" dark app clipped-left>
  <v-app-bar-nav-icon @click.stop="toggleDrawer(!computedStateDrawer)"></v-app-bar-nav-icon>
  <v-toolbar-title>Blog title</v-toolbar-title>
  <v-spacer></v-spacer>
  <v-toolbar-items>
    <v-menu offset-y>
      <template v-slot:activator="{on}">
        <v-btn v-on="on" text>signed in as guest<v-icon>mdi-menu-down</v-icon>
        </v-btn>
      </template>
      <v-list>
        <v-list-item v-for="my_list in my_lists" :key="my_list.name" :to="my_list.link">
          <v-list-item-content>
            <v-list-item-title>{{ my_list.name }}</v-list-item-title>
          </v-list-item-content>
        </v-list-item>
        <v-divider></v-divider>
        <v-list-item>
          <v-list-item-content>
            <v-list-item-title>ログアウト</v-list-item-title>
          </v-list-item-content>
        </v-list-item>
      </v-list>
    </v-menu>
  </v-toolbar-items>
</v-app-bar>
</template>

<script>
export default {
  name: 'Header',
  data: () => ({
    my_lists: [{
        name: 'プロフィール',
        link: '/my-profile'
      },
      {
        name: '投稿一覧',
        link: '/my-posts'
      },
    ],
  }),
  computed: {
    computedStateDrawer() {
      return this.$store.getters.getStateDrawer
    }
  },
  methods: {
    toggleDrawer(val) {
      this.$store.dispatch('commitStateDrawer', val)
    },
  },
}
</script>

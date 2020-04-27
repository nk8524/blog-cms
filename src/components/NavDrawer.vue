<template>
<v-navigation-drawer app v-model="computedStateDrawer" clipped>
  <v-container>
    <v-list-item>
      <v-list-content>
        <v-list-title class="title grey--text text--darken-2">
          ダッシュボード
        </v-list-title>
      </v-list-content>
    </v-list-item>
    <v-divider></v-divider>
    <v-list nav dense>
      <template v-for="dashbord_list in dashbord_lists">
        <v-list-item v-if="!dashbord_list.lists" :key="dashbord_list.name" :to="dashbord_list.link">
          <v-list-item-icon>
            <v-icon>{{ dashbord_list.icon }}</v-icon>
          </v-list-item-icon>
          <v-list-item-content>
            <v-list-item-title>{{ dashbord_list.name }}</v-list-item-title>
          </v-list-item-content>
        </v-list-item>
        <v-list-group v-else :key="dashbord_list.name" :prepend-icon="dashbord_list.icon" no-action>
          <template v-slot:activator>
            <v-list-item-content>
              <v-list-item-title>{{ dashbord_list.name }}</v-list-item-title>
            </v-list-item-content>
          </template>
          <v-list-item v-for="list in dashbord_list.lists" :key="list.name" :to="list.link">
            <v-list-item-content>
              <v-list-item-title>{{ list.name }}</v-list-item-title>
            </v-list-item-content>
          </v-list-item>
        </v-list-group>
      </template>
    </v-list>
  </v-container>
</v-navigation-drawer>
</template>

<script>
export default {
  name: 'NavDrawer',
  data: () => ({
    dashbord_lists: [{
        name: 'ホーム',
        icon: 'mdi-home',
        link: '/'
      },
      {
        name: '投稿',
        icon: 'mdi-file-document-edit',
        link: '',
        lists: [{
            name: '新規',
            link: '/post-edit'
          },
          {
            name: '下書き',
            link: '/post-draft'
          },
          {
            name: '一覧',
            link: '/post-list'
          }
        ]
      },
      {
        name: 'デザイン',
        icon: 'mdi-palette',
        link: '/style'
      },
      {
        name: 'メンバー',
        icon: 'mdi-account-multiple',
        link: '/contributors'
      },
      {
        name: '設定',
        icon: 'mdi-cogs',
        link: '/settings'
      },
    ],
  }),
  computed: {
    computedStateDrawer: {
      get() {
        return this.$store.getters.getStateDrawer
      },
      set(val) {
        this.$store.dispatch('commitStateDrawer', val)
      }
    }
  },
}
</script>

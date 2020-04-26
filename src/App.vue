<template>
<v-app>
  <v-navigation-drawer app v-model="drawer" clipped>
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
  <v-app-bar color="primary" dark app clipped-left>
    <v-app-bar-nav-icon @click="drawer=!drawer"></v-app-bar-nav-icon>
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
  <v-content>
    <router-view />
  </v-content>
  <v-footer color="primary" dark app>
    Blog CMS
  </v-footer>
</v-app>
</template>

<script>
export default {
  data() {
    return {
      drawer: null,
      my_lists: [{
          name: 'プロフィール',
          link: '/my-profile'
        },
        {
          name: '投稿一覧',
          link: '/my-posts'
        },
      ],
      dashbord_lists: [
        {
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
      ]
    }
  }
};
</script>

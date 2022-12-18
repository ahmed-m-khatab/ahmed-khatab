<template>
  <div>
    <v-app-bar app color="background" dark class="px-8">
      <v-img
      :src="require('../assets/logos/logo-full.png')"
      :max-width="$vuetify.breakpoint.mdAndUp ? '15%' : '100px'"
      >
      </v-img>

      <v-spacer></v-spacer>
      <div v-if="$vuetify.breakpoint.mdAndUp">
        <v-btn v-for="item in sections" :key="item.id" text @click="scroll(item.id)">{{item.title}}</v-btn>
      </div>
      <v-app-bar-nav-icon v-else @click="drawer = true"><v-icon>mdi-menu</v-icon></v-app-bar-nav-icon>
    </v-app-bar>

    <v-navigation-drawer
      v-model="drawer"
      fixed
      persistent
      top="0"
      dark
      height="100%"
      color="background"
    >
      <v-list nav dense>
        <v-list-item-group
        active-class="white--text complementary"
        >
          <v-list-item v-for="item in sections" :key="item.id" @click="scroll(item.id);">
            <v-list-item-title>{{item.title}}</v-list-item-title>
          </v-list-item>
        </v-list-item-group>
      </v-list>
    </v-navigation-drawer>

  </div>
</template>

<script>
export default {
  data: () => ({
    drawer: false,
    sections: [
      { title: 'About', id: 'about' },
      { title: 'Skills', id: 'skills' },
      { title: 'Experience', id: 'experience' },
      { title: 'Education', id: 'education' },
      { title: 'Projects', id: 'projects' },
      { title: 'Contact', id: 'contact' }
    ]
  }),
  methods: {
    scroll(refName) {
      const element = document.getElementById(refName);
      element.scrollIntoView({ behavior: "smooth" });
    },
  },
};
</script>

<style>
</style>
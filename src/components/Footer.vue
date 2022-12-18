<template>
  <v-footer dark padless>
    <v-card
      flat
      tile
      class="background white--text py-5 px-5 text-center"
      width="100%"
    >
      <v-row align="center">
        <v-col cols="12" sm="4">
          <v-card-text class="white--text pt-2">
            <v-img width="50%" class="mx-auto" src="../assets/logos/logo-full.png"></v-img>
          </v-card-text>
        </v-col>

        <v-col cols="12" sm="4">
          <v-card-text class="pt-2">
            <a
            v-for="icon in icons"
            :key="icon"
            class="mx-1 white--text body-1 text-capitalize"
            text
            target="_blank"
            href="https://www.linkedin.com/in/ahmed-khatab-3197931b8/"
            >
              <v-icon size="24px" class="mb-1" left>
                {{ icon }}
              </v-icon>
              {{icon.split('-')[1]}}
            </a>
          </v-card-text>
        </v-col>
        <v-col cols="12" sm="4">
          <v-card-text class="pt-2">
            <v-btn class="mx-1 white--text" icon>
              <v-icon color="complementary">mdi-xml</v-icon>
            </v-btn>
            By Ahmed Khatab
          </v-card-text>
        </v-col>
      </v-row>
    </v-card>
  </v-footer>
</template>

<script>
export default {
  data: () => ({
    icons: ["mdi-linkedin"]
  })
}
</script>

<style>
</style>
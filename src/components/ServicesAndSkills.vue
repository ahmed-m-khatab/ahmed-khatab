<template>
    <v-row>
        <v-col cols="12" class="padd">
          <div class="first" id="project">
            <v-row>
              <v-col cols="12">
                <div class="child bgColor1">
                  <v-icon color="complementary" x-large class="ml-3">mdi-xml</v-icon>
                  <h3 class="white--text ml-3 mt-4">UI Development</h3>
                  <p class="grey--text ml-3 mt-6">
                    I create responsive and adaptive websites and web applications <br> using the essential tools <br> and modern components frameworks.
                  </p>
                </div>
                <div class="child bgColor2">
                  <v-icon color="" x-large class="ml-3" dark>mdi-code-json</v-icon>
                  <h3 class="white--text ml-3 mt-4">Frontend Development</h3>
                  <p class="white--text ml-3 mt-6">
                    I can consume APIs and visualize thier responses data in a proper manner <br> to achieve both optimized performance <br> and good looks on your application.
                  </p>
                </div>

                <!-- skills -->
                <h3 id="skills" class="background white--text py-5 w-50 mx-auto text-center mt-10">Some Skills</h3>
                <div class="justify-center mt-15 d-flex flex-wrap">
                  <div v-for="tool in skills" :key="tool.technology" class="text-center my-2">
                    <v-progress-circular
                    class="mx-5"
                    :rotate="360"
                    :size="120"
                    :width="15"
                    :value="tool.value"
                    :color="tool.color"
                    >
                      {{ tool.value }}%
                    </v-progress-circular>
                    <div class="my-3 white--text">
                      <v-icon :color="tool.color + ''">{{tool.icon}}</v-icon> 
                      {{tool.technology}}
                    </div>
                  </div>
                </div>
              </v-col>
            </v-row>
          </div>
        </v-col>
      </v-row>
</template>

<script>
export default {
    data: () => ({
        skills: [
            {
                technology: 'Vue.js',
                value: '80',
                icon: 'mdi-vuejs',
                color: '#00ff8b'
            },
            {
                technology: 'Vuetify',
                value: '95',
                icon: 'mdi-vuetify',
                color: '#67afff'
            },
            {
                technology: 'Javascript',
                value: '85',
                icon: 'mdi-language-javascript',
                color: '#FFA500'
            },
            {
                technology: 'Bootstrap',
                value: '95',
                icon: 'mdi-bootstrap',
                color: '#8951f5'
            },
            {
                technology: 'CSS3',
                value: '95',
                icon: 'mdi-language-css3',
                color: '#3333ff'
            },
            {
                technology: 'HTML5',
                value: '95',
                icon: 'mdi-language-html5',
                color: 'orange'
            }
        ],
    })
}
</script>
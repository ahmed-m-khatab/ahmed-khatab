// import 'material-design-icons-iconfont/dist/material-design-icons.css' // Ensure you are using css-loader
import '@mdi/font/css/materialdesignicons.css'

import Vue from 'vue'
import Vuetify from 'vuetify/lib'

Vue.use(Vuetify)

export default new Vuetify({
    defaultAssets: false,
    icons: {
        iconfont: 'md'
    },
    theme: {
        themes: {
            dark: {
                background: '#27283D',
                complementary: '#FF4C29'
            },
            light: {
                background: '#27283D',
                complementary: '#FF4C29',
                darkBlue: '#082032',
                bg1: '#2C394B',
                bg2: '#334756'
            }
        }
    }
})
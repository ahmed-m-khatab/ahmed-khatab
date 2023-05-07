<template>
  <v-app
    id="home"
    :style="{ background: $vuetify.theme.themes.dark.background }"
  >
    <nav-bar />
    <v-container fluid>
      <v-row align="center" class="py-5" id="scroll-limit">
        <v-col cols="12" md="6">
          <v-img src="../assets/background/bg2.jpg" contain max-height="500"></v-img>
        </v-col>
        <v-col cols="12" md="6" class="mt-10" :class="$vuetify.breakpoint.smAndDown ? 'text-center' : 'text-left'">
          <h5 class="complementary--text font-weight-bold text-h3">Hi there I'm Khatab</h5>
          <h1 class="white--text">FRONTEND DEVELOPER</h1>
          <p class="grey--text">
            Experienced Frontend developre with over 3 years of experience in designing, building web applications. <br />
            I'm ready to take your business to the next level with my work.
            <br />
            Feel free to reach out!
          </p>
        </v-col>
      </v-row>

      <!-- services and skills -->
      <section id="about">
        <ServicesAndSkills :skills="skills"/>
      </section>
      
      <!-- work experience -->
      <section data-aos="fade-in" id="experience" :class="$vuetify.breakpoint.smAndDown ? 'px-0' : 'px-10'">
        <h3 class="complementary white--text py-5 w-50 mx-auto text-center mt-10">Work Experience</h3>
        <TimeLine :items="work" /> 
      </section>

      <!-- education -->
      <section id="education" class="bg1 mt-10 py-10" :class="$vuetify.breakpoint.smAndDown ? 'px-0' : 'px-10'">
        <h3 class="complementary white--text py-5 w-50 mx-auto text-center">Education</h3>
        <TimeLine :items="education" /> 
      </section>
      
      <!-- projects -->
      <section id="projects" class="bg2 py-5">
        <h3 class="complementary white--text py-5 w-50 mx-auto text-center mt-10">FEATURED PROJECTS</h3>
        <Projects />
      </section>

      <!-- contact -->
      <Contact />
    </v-container>
    <Footer />

    <!-- scroll top button -->
    <v-btn
    ref="button"
    fab
    v-scroll="onScroll"
    v-show="showScrollBtn"
    color="complementary"
    fixed
    bottom
    dark
    right
    @click="$vuetify.goTo(0, {duration: 500, offset: 0, easeing: easing})"
    elevation="5"
    >
      <v-icon>mdi-chevron-up</v-icon>
    </v-btn>
  </v-app>
</template>

<script>
import * as easings from 'vuetify/lib/services/goto/easing-patterns'
import NavBar from "../components/NavBar.vue"
import Footer from "../components/Footer.vue"
import TimeLine from "../components/TimeLine.vue"
import Projects from "../components/Projects.vue"
import ServicesAndSkills from "../components/ServicesAndSkills.vue"
import Contact from "../components/ContactMe.vue"

export default {
  name: "Home",
  components: {
    NavBar,
    Footer,
    TimeLine,
    Projects,
    ServicesAndSkills,
    Contact
  },
  data: () => ({
    skills: [
      {
        technology: 'Vue.js',
        value: 0,
        max: 80,
        icon: 'mdi-vuejs',
        color: '#00ff8b'
      },
      {
        technology: 'Vuetify',
        value: 0,
        max: 95,
        icon: 'mdi-vuetify',
        color: '#67afff'
      },
      {
        technology: 'Javascript',
        value: 0,
        max: 85,
        icon: 'mdi-language-javascript',
        color: '#FFA500'
      },
      {
        technology: 'Bootstrap',
        value: 0,
        max: 95,
        icon: 'mdi-bootstrap',
        color: '#8951f5'
      },
      {
        technology: 'CSS3',
        value: 0,
        max: 95,
        icon: 'mdi-language-css3',
        color: '#3333ff'
      },
      {
        technology: 'HTML5',
        value: 0,
        max: 95,
        icon: 'mdi-language-html5',
        color: 'orange'
      }
    ],
    work: [
      {
        title: 'ADAM TRAVEL SERVICES',
        desc: 'Frontend Developer responsible for creating a flights, hotels, cars booking website and other company products.',
        startDate: 'Mar 2020',
        endDate: 'Current',
        color: 'complementary',
        icon: 'mdi-chair-rolling',
        link: 'https://adamtravel.com/'
      },
      {
        title: 'TaNefer',
        desc: 'Freelance Frontend Developer responsible for creating Egyptian Tourism packages engine.',
        startDate: 'Jun 2021',
        endDate: 'Current',
        color: 'complementary lighten-1',
        icon: 'mdi-laptop',
        link: 'https://tanefer.com/'
      },
      {
        title: 'Group Trip',
        desc: 'Freelance Frontend Developer Responsible for structuring and co-developing the frontend part of the website.',
        startDate: 'Dec 2021',
        endDate: 'Jul 2022',
        color: 'complementary',
        icon: 'mdi-laptop',
        link: 'https://grouptrip.adamtravel.com/auth'
      },
      {
        title: 'Ifzaani',
        desc: 'Freelance Frontend Developer, Structured and co-developed a vue.js application for e-learning.',
        startDate: 'Jul 2022',
        endDate: 'Aug 2022',
        color: 'complementary lighten-1',
        icon: 'mdi-laptop',
        link: 'https://efzaani.web.app/'
      }
    ],
    education: [
      {
        title: 'Information Technology Institute',
        desc: '3 months military Program, Web Open source technologies',
        startDate: 'Sep 2019',
        endDate: 'Dec 2019',
        color: 'complementary',
        icon: 'mdi-human-male-board'
      },
      {
        title: 'faculty of computer and information',
        desc: 'Bachelor degree, computer information systems',
        startDate: '2014',
        endDate: '2018',
        color: 'complementary lighten-1',
        icon: 'mdi-school'
      }
    ],
    easing: 'easeInOutCubic',
    easings: Object.keys(easings),
    showScrollBtn: false,
    interval: null
  }),
  methods: {
    onScroll (e) {
      if (typeof window === 'undefined') return
      const top = window.pageYOffset ||   e.target.scrollTop || 0
      const skillsElement = document.getElementById('skills')
      const skillsTopPosition = skillsElement.getBoundingClientRect().top
      if (top >= skillsTopPosition && top < skillsTopPosition + window.scrollY) {
        this.interval = setInterval(() => {
          this.skills.forEach(el => {
            if (el.value < el.max) {
              el.value += 1
            }
          })
        }, 50)
      } else clearInterval(this.interval)
      this.showScrollBtn = top > 20
    }
  },
  beforeDestroy () {
    clearInterval(this.interval)
  }
}
</script>
<style>
.first {
  width: 100%;
  background: linear-gradient(
    to right,
    #2C394B,
    #2C394B 50%,
    #334756 50%,
    #334756 50%
  );
  text-align: center;
  padding: 2rem 2rem;
}

.secondchild1 {
  display: inline-block;
  background-color: #1e1e1e;
  padding: 2rem 1rem;
  vertical-align: middle;
  text-align: left;
  margin-top: 250px;
}
.child {
  display: inline-block;
  padding: 2rem 1rem;
  vertical-align: middle;
  text-align: left;
  margin-right: 8px;
}
.bgColor1 {
  background-color: #082032;
}
.bgColor2 {
  background-color: #FF4C29;
}

.child1 {
  display: inline-block;
  padding: 2rem 1rem;
  vertical-align: middle;
  margin-right: 5px;
  width: 240px;
}
.child2 {
  display: inline-block;
  width: 245px;
  vertical-align: middle;
}
.mRight {
  margin-right: 8px;
}
.mButton {
  margin-bottom: 8px;
}
.padding {
  padding: 8px 0;
}

.col-12.padd {
  padding: 12px 0 !important;
}
.col-12.childcol {
  padding: 0 !important;
}
h1.number {
  font-size: 50px;
  font-weight: bold;
}
</style>

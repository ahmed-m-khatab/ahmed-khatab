<template>
    <div class="black">
      <v-snackbar
        v-model="snackbar"
        :color="color"
        top
        right
      >
        {{text}}
        <template v-slot:action="{ attrs }">
          <v-btn icon color="white" v-bind="attrs" @click="snackbar = false"><v-icon>mdi-close</v-icon></v-btn>
        </template>
      </v-snackbar>
        <div id="contact">
          <v-row justify="center" align="center" class="px-1">
            <v-col cols="12" md="4" class="white--text" :class="$vuetify.breakpoint.smAndDown ? 'text-center' : 'text-left'">
              <h1>
                Let's work together on<br />your next project
              </h1>
              <div class="mt-5">
                <a href="mailto:ahmed.khatab.m@gmail.com"><v-icon color="complementary">mdi-email</v-icon> ahmed.khatab.m@gmail.com</a>
              </div>
              <div class="mt-5">
                <a href="tel:+201017787862"><v-icon color="complementary">mdi-phone</v-icon> (+20) 101-778-7862</a>
              </div>
              <div class="mt-5">
                <a target="_blank" href="https://www.linkedin.com/in/ahmed-khatab-3197931b8/"><v-icon color="complementary">mdi-linkedin</v-icon> Ahmed Khatab</a>
              </div>
              
            </v-col>
            <v-col cols="12" md="5" class="order-first order-md-2">
              <v-card color="#333" elevation="10" class="pa-5 rounded-lg">
                <v-form
                id="contact-form"
                ref="form"
                v-model="valid"
                @submit.prevent="validate"
                >
                  <v-text-field
                  v-model="name"
                  :rules="nameRules"
                  label="Name"
                  required
                  outlined
                  color="blue"
                  dark
                  ></v-text-field>

                  <v-text-field
                  v-model="email"
                  :rules="emailRules"
                  label="E-mail"
                  required
                  outlined
                  color="blue"
                  dark
                  ></v-text-field>

                  <v-textarea
                  v-model="message"
                  :rules="[v => !!v || 'Message is required!']"
                  name="input-5-2"
                  label="Message"
                  outlined
                  color="blue"
                  dark
                  ></v-textarea>
                </v-form>

                <v-btn block :loading="submitLoading" :color="valid ? 'success' : 'complementary'" class="white--text" type="submit" form="contact-form">Send</v-btn>
              </v-card>
            </v-col>
          </v-row>
        </div>
      </div>
</template>

<script>
import emailjs from 'emailjs-com';

export default {
    data: () => ({
      valid: true,
      name: '',
      nameRules: [
        v => !!v || 'Name is required',
        v => (v && v.length <= 10) || 'Name must be less than 10 characters',
      ],
      email: '',
      emailRules: [
        v => !!v || 'E-mail is required',
        v => /.+@.+\..+/.test(v) || 'E-mail must be valid',
      ],
      message: '',
      snackbar: false,
      text: '',
      color: '',
      submitLoading: false
    }),

    methods: {
      validate () {
        this.$refs.form.validate()
        if (this.valid) {
          try {
            this.submitLoading = true
            // emailjs.sendForm('service_pzrt4hy', 'template_qd7tp18', e.target, 'GldEoPP_89hboCxdB', {
            //   from_name: this.name,
            //   from_email: this.email,
            //   message: this.body
            // })
            emailjs.send('service_pzrt4hy', 'template_qd7tp18', {
              from_name: this.name,
              from_email: this.email,
              message: this.message,
            }, 'GldEoPP_89hboCxdB').then(() => {
              this.showSnackbar('success')
              this.$refs.form.reset()
            }).catch(() => {
              this.showSnackbar('error')
            }).finally(() => {
              this.submitLoading = false
            })
          } catch(error) {
            this.showSnackbar('error')
          }
        } else {
          this.showSnackbar('Warning')
        }
      },
      showSnackbar (type) {
        this.snackbar = true
        if (type === 'success') {
          this.color = 'success'
          this.text = 'Your message has been sent successfully and I will reply to you ASAP.'
        } else if (type === 'error') {
          this.color = 'error'
          this.text = 'An error happened during submitting, please try again later or use different contact medium.'
        } else  {
          this.color = 'warning'
          this.text = 'Please fill all form with valid values!'
        }
      }
    },
  }
</script>

<style lang="scss">
a {
  text-decoration: none;
  color: #fff !important;
}
</style>
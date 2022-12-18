<template>
    <v-timeline
    data-aos="zoom-in"
    align-top
    :dense="$vuetify.breakpoint.smAndDown"
    >
      <v-timeline-item
        v-for="(item, i) in items"
        :key="i"
        :color="item.color"
        :icon="item.icon"
        fill-dot
      >
        <v-card
          :color="item.color"
          dark
        >
          <v-card-title style="word-break: break-word;"  :class="$vuetify.breakpoint.smAndDown ? 'body-2' : 'text-h6'">
            {{item.title}}
          </v-card-title>
          <v-card-subtitle>
            {{item.startDate + ' - ' + item.endDate}}
          </v-card-subtitle>
          <v-card-text class="white text--primary">
            <p>{{item.desc}}</p>
          </v-card-text>
        </v-card>
      </v-timeline-item>
    </v-timeline>
</template>

<script>
export default {
    props: ['items'],
}
</script>

<template>
    <v-row class="ma-5">
        <v-col v-for="item in projects" :key="item.name" md="4">
            <a :href="item.link" target="_balnk">
                <v-card>
                    <v-img
                    :src="require('../assets/sites/' + item.img)"
                    class="white--text align-end"
                    gradient="to bottom, rgba(0,0,0,.1), rgba(0,0,0,.9)"
                    height="200px"
                    >
                    <v-card-title v-text="item.name"></v-card-title>
                    </v-img>
                </v-card>
            </a>
        </v-col>
    </v-row>
</template>

<script>
export default {
    data: () => ({
        projects: [
            {
                name: 'Fare33',
                link: 'https://fare33.com/',
                img: 'fare33.jpg'
            },
            {
                name: 'Tanefer',
                link: 'https://tanefer.com/',
                img: 'tanefer.jpg'
            },
            {
                name: 'Group Trip',
                link: 'https://grouptripbeta.com/',
                img: 'grouptrip.jpg'
            },
            {
                name: 'Ifzaani',
                link: 'https://efzaani.web.app/',
                img: 'ifzaani.jpg'
            },
            {
                name: 'Arab Weather',
                link: 'https://tqs-rby.onrender.com/',
                img: 'tqs.jpg'
            },
            {
                name: 'High Technology',
                link: 'https://www.h-technology.co/#/',
                img: 'htech.jpg'
            }
        ]
    })
}
</script>
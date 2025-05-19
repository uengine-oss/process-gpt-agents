<template>
    <v-app>
        <Header />
        <v-main>
            <router-view />
        </v-main>
        <Footer />
    </v-app>
</template>

<script>
import Header from './views/Header.vue'
import Footer from './views/Footer.vue'

export default {
    name: 'App',    
    components: {
        Header,
        Footer
    },
    metaInfo: {
        title: 'Process GPT - AI 기반 프로세스 관리 솔루션'
    }
}
</script> 
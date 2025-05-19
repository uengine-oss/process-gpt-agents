<template>
    <v-container style="padding-top: 70px;">
        <v-row>
            <v-col cols="12">
                <HeroSection />
                <IntroSection />
                <DemoSection />
                <ConsultingSection />
                <FeaturesSection />
                <SpecialSection />
                <CasesSection />
                <TechSection />
                <ExtensibilitySection />
                <CTASection />
                <!-- <v-card>
                    <v-card-title>Vue 3 + Vuetify 3</v-card-title>
                    <v-card-text>
                        Welcome to your new Vue 3 + Vuetify 3 application!
                    </v-card-text>
                    <v-card-actions>
                        <v-btn
                            color="primary"
                            @click="$router.push('/marketplace')"
                        >
                            Marketplace로 이동
                        </v-btn>
                    </v-card-actions>
                </v-card> -->
            </v-col>
        </v-row>
    </v-container>
</template>

<script>
import HeroSection from '@/views/sections/HeroSection.vue'
import IntroSection from '@/views/sections/IntroSection.vue'
import DemoSection from '@/views/sections/DemoSection.vue'
import ConsultingSection from '@/views/sections/ConsultingSection.vue'
import FeaturesSection from '@/views/sections/FeaturesSection.vue'
import SpecialSection from '@/views/sections/SpecialSection.vue'
import CasesSection from '@/views/sections/CasesSection.vue'
import TechSection from '@/views/sections/TechSection.vue'
import ExtensibilitySection from '@/views/sections/ExtensibilitySection.vue'
import CTASection from '@/views/sections/CTASection.vue'

export default {
    name: 'HomeView',
    components: {
        HeroSection,
        IntroSection,
        DemoSection,
        ConsultingSection,
        FeaturesSection,
        SpecialSection,
        CasesSection,
        TechSection,
        ExtensibilitySection,
        CTASection,
    }
}
</script> 
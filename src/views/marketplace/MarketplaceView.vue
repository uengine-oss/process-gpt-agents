<template>
    <v-container>
        <div style="max-width: 70%; margin:0 auto;">
            <MarketplaceHeader />
            <PopularTemplates />
            <RecommendedTemplates />
        </div>
    </v-container>
</template>

<script>
import MarketplaceHeader from './MarketplaceHeader.vue'
import PopularTemplates from './PopularTemplates.vue'
import RecommendedTemplates from './RecommendedTemplates.vue'

export default {
    name: 'MarketplaceView',
    components: {
        MarketplaceHeader,
        PopularTemplates,
        RecommendedTemplates
    }
}
</script> 
<template>
    <section>
        <h2 class="section-title">{{ $t('MarketplaceView.recommended_templates') }}</h2>
        <v-row>
            <v-col
                v-for="templateItem in recommendedTemplateList"
                :key="templateItem.id"
                cols="12"
                sm="6"
                md="4"
            >
                <TemplateCard :template="templateItem" />
            </v-col>
        </v-row>
    </section>
</template>

<script>
import TemplateCard from './TemplateCard.vue'

export default {
    name: 'RecommendedTemplates',
    components: { TemplateCard },
    data() {
        return {
            // 샘플 데이터 (나중에 supabase 연동)
            recommendedTemplateList: [
                { 
                    id: 4, 
                    title: this.$t('Templates.marketing_title'), 
                    desc: this.$t('Templates.marketing_desc'), 
                    downloads: 700, 
                    image: '', 
                    tags: [this.$t('MarketplaceView.marketing'), this.$t('Tags.automation')],
                    author: 'choi'
                },
                { 
                    id: 5, 
                    title: this.$t('Templates.it_title'), 
                    desc: this.$t('Templates.it_desc'), 
                    downloads: 650, 
                    image: '', 
                    tags: [this.$t('MarketplaceView.it'), this.$t('Tags.process')],
                    author: 'jung'
                },
                { 
                    id: 6, 
                    title: this.$t('Templates.feedback_title'), 
                    desc: this.$t('Templates.feedback_desc'), 
                    downloads: 600, 
                    image: '', 
                    tags: [this.$t('MarketplaceView.customer_service'), this.$t('Tags.analysis')],
                    author: 'kang'
                }
            ]
        }
    }
}
</script> 
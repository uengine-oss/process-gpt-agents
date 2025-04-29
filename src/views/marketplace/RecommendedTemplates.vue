<template>
    <section>
        <h2 class="section-title">{{ $t('marketplace.recommended_templates') }}</h2>
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
                    title: this.$t('template.marketing.title'), 
                    desc: this.$t('template.marketing.desc'), 
                    downloads: 700, 
                    image: '', 
                    badge: '700+ ' + this.$t('marketplace.download_button'),
                    tags: [this.$t('marketplace.category.marketing'), '자동화'] 
                },
                { 
                    id: 5, 
                    title: this.$t('template.it.title'), 
                    desc: this.$t('template.it.desc'), 
                    downloads: 650, 
                    image: '', 
                    badge: '650+ ' + this.$t('marketplace.download_button'),
                    tags: [this.$t('marketplace.category.it'), '프로세스'] 
                },
                { 
                    id: 6, 
                    title: this.$t('template.feedback.title'), 
                    desc: this.$t('template.feedback.desc'), 
                    downloads: 600, 
                    image: '', 
                    badge: '600+ ' + this.$t('marketplace.download_button'),
                    tags: [this.$t('marketplace.category.customer_service'), '분석'] 
                }
            ]
        }
    }
}
</script> 
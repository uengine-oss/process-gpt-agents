<template>
    <section>
        <h2 class="section-title">{{ $t('marketplace.popular_templates') }}</h2>
        <v-row>
            <v-col
                v-for="templateItem in popularTemplateList"
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
    name: 'PopularTemplates',
    components: { TemplateCard },
    data() {
        return {
            // 샘플 데이터 (나중에 supabase 연동)
            popularTemplateList: [
                { 
                    id: 1, 
                    title: this.$t('template.customer_service.title'), 
                    desc: this.$t('template.customer_service.desc'), 
                    downloads: 1245, 
                    image: '', 
                    badge: '1245+ ' + this.$t('marketplace.download_button'),
                    tags: [this.$t('marketplace.category.customer_service'), '자동화'] 
                },
                { 
                    id: 2, 
                    title: this.$t('template.sales.title'), 
                    desc: this.$t('template.sales.desc'), 
                    downloads: 987, 
                    image: '', 
                    badge: '987+ ' + this.$t('marketplace.download_button'),
                    tags: [this.$t('marketplace.category.sales'), 'CRM'] 
                },
                { 
                    id: 3, 
                    title: this.$t('template.hr.title'), 
                    desc: this.$t('template.hr.desc'), 
                    downloads: 856, 
                    image: '', 
                    badge: '856+ ' + this.$t('marketplace.download_button'),
                    tags: [this.$t('marketplace.category.hr'), '온보딩'] 
                }
            ]
        }
    }
}
</script> 
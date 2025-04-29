<template>
    <section>
        <h2 class="section-title">{{ $t('MarketplaceView.popular_templates') }}</h2>
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
                    title: this.$t('Templates.customer_service_title'), 
                    desc: this.$t('Templates.customer_service_desc'), 
                    downloads: 1245, 
                    image: '', 
                    tags: [this.$t('MarketplaceView.customer_service'), this.$t('Tags.automation')],
                    author: 'kim'
                },
                { 
                    id: 2, 
                    title: this.$t('Templates.sales_title'), 
                    desc: this.$t('Templates.sales_desc'), 
                    downloads: 987, 
                    image: '', 
                    tags: [this.$t('MarketplaceView.sales'), this.$t('Tags.crm')],
                    author: 'lee'
                },
                { 
                    id: 3, 
                    title: this.$t('Templates.hr_title'), 
                    desc: this.$t('Templates.hr_desc'), 
                    downloads: 856, 
                    image: '', 
                    tags: [this.$t('MarketplaceView.hr'), this.$t('Tags.onboarding')],
                    author: 'park'
                }
            ]
        }
    }
}
</script> 
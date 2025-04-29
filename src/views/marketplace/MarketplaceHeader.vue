<template>
    <div class="marketplace-header">
        <h1 class="marketplace-title">{{ $t('marketplace.title') }}</h1>
        <p class="marketplace-desc">
            {{ $t('marketplace.subtitle') }}
        </p>
        <v-text-field
            class="marketplace-search-bar"
            :placeholder="$t('marketplace.search_placeholder')"
            append-inner-icon="mdi-magnify"
            variant="outlined"
            rounded
            hide-details
            v-model="searchKeyword"
        />
        <div class="marketplace-category-list">
            <v-btn
                v-for="category in categoryList"
                :key="category.key"
                class="mx-1"
                :color="category.key === selectedCategory ? 'primary' : 'grey-lighten-3'"
                rounded
                @click="selectCategory(category.key)"
            >
                {{ category.text }}
            </v-btn>
        </div>
    </div>
</template>

<script>
export default {
    name: 'MarketplaceHeader',
    data() {
        return {
            searchKeyword: '',
            categoryList: [
                { key: 'all', text: this.$t('marketplace.category.all') },
                { key: 'business_process', text: this.$t('marketplace.category.business_process') },
                { key: 'finance', text: this.$t('marketplace.category.finance') },
                { key: 'hr', text: this.$t('marketplace.category.hr') },
                { key: 'sales', text: this.$t('marketplace.category.sales') },
                { key: 'customer_service', text: this.$t('marketplace.category.customer_service') },
                { key: 'marketing', text: this.$t('marketplace.category.marketing') },
                { key: 'it', text: this.$t('marketplace.category.it') },
                { key: 'development', text: this.$t('marketplace.category.development') }
            ],
            selectedCategory: 'all'
        }
    },
    methods: {
        selectCategory(category) {
            this.selectedCategory = category
        }
    }
}
</script> 
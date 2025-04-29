<template>
    <div class="marketplace-header">
        <!-- 헤더 배경 및 제목 섹션 -->
        <div class="header-hero"
            color="primary"
        >
            <div class="header-content">
                <div class="title-container">
                    <v-icon size="36" color="white" class="me-3 title-icon">mdi-store-check</v-icon>
                    <h1 class="marketplace-title">{{ $t('MarketplaceView.title') }}</h1>
                </div>
                <p class="marketplace-desc">
                    {{ $t('MarketplaceView.subtitle') }}
                </p>
                <v-text-field
                    class="marketplace-search-bar"
                    :placeholder="$t('MarketplaceView.search_placeholder')"
                    append-inner-icon="mdi-magnify"
                    density="comfortable"
                    variant="outlined"
                    bg-color="white"
                    rounded
                    hide-details
                    v-model="searchKeyword"
                    elevation="2"
                ></v-text-field>
            </div>
        </div>

        <!-- 카테고리 필터 버튼 그룹 -->
        <div class="category-section">
            <v-chip-group
                v-model="selectedCategory"
                selected-class="category-selected"
                class="marketplace-category-list"
            >
                <v-chip
                    v-for="category in categoryList"
                    :key="category.key"
                    :value="category.key"
                    :color="category.key === selectedCategory ? 'primary' : undefined"
                    :text-color="category.key === selectedCategory ? 'white' : undefined"
                    :variant="category.key === selectedCategory ? 'elevated' : 'tonal'"
                    filter
                    class="category-chip"
                >
                    {{ category.text }}
                </v-chip>
            </v-chip-group>
        </div>
    </div>
</template>

<script>
export default {
    name: 'MarketplaceHeader',
    data() {
        return {
            searchKeyword: '',
            selectedCategory: 'all',
            categoryList: [
                { key: 'all', text: this.$t('MarketplaceView.all') },
                { key: 'business_process', text: this.$t('MarketplaceView.business_process') },
                { key: 'finance', text: this.$t('MarketplaceView.finance') },
                { key: 'hr', text: this.$t('MarketplaceView.hr') },
                { key: 'sales', text: this.$t('MarketplaceView.sales') },
                { key: 'customer_service', text: this.$t('MarketplaceView.customer_service') },
                { key: 'marketing', text: this.$t('MarketplaceView.marketing') },
                { key: 'it', text: this.$t('MarketplaceView.it') },
                { key: 'development', text: this.$t('MarketplaceView.development') }
            ]
        }
    },
    methods: {
        selectCategory(category) {
            this.selectedCategory = category
        }
    }
}
</script>

<style scoped>
.header-hero {
    border-radius: 0 0 20px 20px;
    padding: 40px 20px 60px 20px;
    margin-bottom: 10px;
    position: relative;
    text-align: center;
}

.header-content {
    max-width: 800px;
    margin: 0 auto;
}

.title-container {
    display: flex;
    align-items: center;
    justify-content: center;
    margin-bottom: 16px;
}

.title-icon {
    color: #0078D4 !important;
}

.marketplace-title {
    font-size: 2.8rem;
    font-weight: 800;
    color: #0078D4;
    margin: 0;
    text-shadow: 0 1px 2px rgba(0, 0, 0, 0.05);
}

.marketplace-desc {
    color: #555;
    font-size: 1.1rem;
    margin-bottom: 28px;
    max-width: 800px;
    margin-left: auto;
    margin-right: auto;
    line-height: 1.6;
    text-align: center;
}

.marketplace-search-bar {
    max-width: 600px;
    margin: 0 auto;
    transform: translateY(30px);
}

.category-section {
    padding-top: 40px;
    padding-bottom: 20px;
    display: flex;
    justify-content: center;
}

.marketplace-category-list {
    max-width: 800px;
    overflow-x: auto;
    display: flex;
    justify-content: center;
    padding: 8px;
}

.category-chip {
    margin: 4px;
    font-weight: 500;
}

.category-selected {
    font-weight: 700;
}

@media (max-width: 600px) {
    .title-container {
        flex-direction: column;
        gap: 10px;
    }
    
    .marketplace-title {
        font-size: 2.2rem;
    }
    
    .marketplace-desc {
        font-size: 1rem;
        padding: 0 10px;
    }
}
</style> 
<template>
    <v-card class="template-card" elevation="2">
        <v-img :src="template.image || 'https://via.placeholder.com/400x180?text=No+Image'" height="140px" cover>
            <template #placeholder>
                <div class="no-image"></div>
            </template>

            <div class="chip-container pb-2 pt-2">
                <v-chip
                    v-for="tag in template.tags || ['비즈니스', '자동화']"
                    :key="tag"
                    size="small"
                    class="template-chip"
                    color="primary"
                    variant="outlined"
                >
                    {{ tag }}
                </v-chip>
            </div>
        </v-img>
        <v-row class="pa-4">
            <v-col cols="9">
                <v-card-title class="pa-0">{{ template.title }}</v-card-title>
            </v-col>
            <v-col cols="3" class="d-flex align-center justify-end">
                <div class="badge pa-1">
                    <v-icon icon="mdi-download" size="small" class="mr-1"></v-icon>
                    <span class="download-count">{{ template.downloads }}</span>
                </div>
            </v-col>
        </v-row>
        <v-card-text class="card-desc pb-0">
            {{ template.desc }}
        </v-card-text>
        <v-divider class="my-2"></v-divider>
        
        <div class="d-flex flex-column flex-sm-row px-4 pb-4 pt-2 align-center">
            <div class="creator-section mr-auto mb-3 mb-sm-0">
                <v-avatar size="32" color="primary" class="mr-2">
                    <span class="text-subtitle-2 text-white">{{ getInitials(template.author) }}</span>
                </v-avatar>
                <div class="creator-info">
                    <span class="creator-label">{{ $t('MarketplaceView.created_by') }}</span>
                    <span class="creator-name">{{ $t(`Users.${template.author}`) }}</span>
                </div>
            </div>
            
            <v-btn
                color="primary"
                variant="flat"
                prepend-icon="mdi-download"
                @click="downloadTemplate"
                size="small"
            >
                {{ $t('MarketplaceView.download_button') }}
            </v-btn>
        </div>
    </v-card>
</template>

<script>
export default {
    name: 'TemplateCard',
    props: {
        template: Object
    },
    methods: {
        downloadTemplate() {
            // 나중에 실제 다운로드 로직 구현
            console.log(`템플릿 다운로드: ${this.template.title}`)
        },
        getInitials(name) {
            if (!name) return 'U';
            return name.charAt(0).toUpperCase();
        }
    }
}
</script>

<style scoped>
.creator-section {
    display: flex;
    align-items: center;
}

.creator-info {
    display: flex;
    flex-direction: column;
}

.creator-label {
    font-size: 0.75rem;
    color: rgba(0, 0, 0, 0.6);
    line-height: 1;
}

.creator-name {
    font-size: 0.9rem;
    font-weight: 500;
    color: rgba(0, 0, 0, 0.87);
}
</style> 
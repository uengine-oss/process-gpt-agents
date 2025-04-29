<template>
    <v-card class="template-card" elevation="2">
        <v-img :src="template.image || 'https://via.placeholder.com/400x180?text=No+Image'" height="140px" cover>
            <template #placeholder>
                <div class="no-image"></div>
            </template>
        </v-img>
        <div class="chip-container">
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
        <v-card-title class="card-title">
            {{ template.title }}
            <span class="badge">{{ template.badge }}</span>
        </v-card-title>
        <v-card-text class="card-desc">
            {{ template.desc }}
        </v-card-text>
        <v-card-actions class="pa-4">
            <v-spacer></v-spacer>
            <v-btn
                color="primary"
                variant="flat"
                prepend-icon="mdi-download"
                @click="downloadTemplate"
            >
                {{ $t('marketplace.download_button') }}
            </v-btn>
        </v-card-actions>
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
        }
    }
}
</script> 
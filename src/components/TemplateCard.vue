<template>
    <div class="template-card">
        <div class="template-card-body">
            <div class="template-card-tags">
                <div v-for="(tag, index) in template.tags" :key="index" class="template-card-tag">{{ tag }}</div>
            </div>
            <h3 class="template-card-title">{{ template.title }}</h3>
            <p class="template-card-desc">{{ template.desc }}</p>
            <div class="template-card-footer">
                <span class="template-card-downloads">{{ template.downloads }} {{ $t('TemplateCard.downloads') }}</span>
                <span v-if="template.author" class="template-card-author">{{ $t('TemplateCard.by') }} {{ template.author }}</span>
            </div>
            <button class="template-card-btn" @click="downloadTemplate">{{ $t('TemplateCard.download') }}</button>
        </div>
    </div>
</template>

<style scoped>
.template-card-footer {
    display: flex;
    justify-content: space-between;
    align-items: center;
    margin-bottom: 12px;
    font-size: 14px;
    color: #666;
}

.template-card-downloads {
    color: #666;
}

.template-card-author {
    font-style: italic;
}
</style> 
import { createI18n } from 'vue-i18n'
import ko from './ko.json'
import en from './en.json'

const messages = {
    ko,
    en
}

export default createI18n({
    legacy: false, // Vue 3 앱에서는 false로 설정
    globalInjection: true, // $t를 전역으로 사용 가능하게 함
    locale: 'ko', // 기본 언어 설정
    fallbackLocale: 'en', // 번역이 없을 경우 대체 언어
    messages
}) 
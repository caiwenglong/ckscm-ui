import i18n from '@/language'

export function useI18n(fieldName) {
    const {t} =  i18n.global
    return t(fieldName)
}
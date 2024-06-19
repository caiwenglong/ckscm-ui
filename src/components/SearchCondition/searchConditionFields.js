import i18n from '@/language'
import {messageCenter} from '@/constants/sys/frontendFields'
// 使用 i18n.global.t 函数获取翻译
const {t} =  i18n.global

export const searchConditionFields = {
    templateCode: {label: t('messageCenter.templateCode'), prop: messageCenter['templateCode']},
    sendChannel: {label: t('messageCenter.sendChannel'), prop: messageCenter['sendChannel']},
}
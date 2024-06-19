import request from '@/utils/request'
export function getSenderTypes() {
    return request({
      url: '/cc/message/template/sender-types',
      method: 'get'
    })
  }
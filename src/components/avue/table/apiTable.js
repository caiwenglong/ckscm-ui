import request from '@/utils/request'
export const getList = (url) => {
    return request({
      url: url,
      method: 'get',
    })
  }
  export const del = (id) => request.delete(url, {
    params: {
      id
    }
  })
  export const add = (url, data) => request({
    url: url,
    method: 'post',
    data: data
  })
  export const update = (url, data) => request({
    url: url,
    method: 'put',
    data: data
  })
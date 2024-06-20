import request from '@/utils/request'
export const getList = (url, params) => {
    return request({
      url: url,
      method: 'get',
      params
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
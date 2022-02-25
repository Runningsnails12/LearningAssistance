import request from '../utils/request'

function login() {
  return request({
    url: '/login',
    method: 'post',
    data: {
      username: 'admin',
      password: 'admin'
    }
  })
}

export{
  login
}
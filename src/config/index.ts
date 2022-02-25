const env = (import.meta.env.MODE as 'dev' | undefined) || 'prod'


const EnvConfig = {
  dev: {
    baseApi: '/api',
    mockApi: 'https://www.fastmock.site/mock/c213efb03a5cad1915f73f29ba1080b0/api'
  },
  prod: {
    baseApi: '/api',
    mockApi: 'https://www.fastmock.site/mock/c213efb03a5cad1915f73f29ba1080b0/api'
  }
}
export default {
  env,
  mock: false,//是否全局开启mock
  namespace: 'LearningAssistance',
  ...EnvConfig[env]
}
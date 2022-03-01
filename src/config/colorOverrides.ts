import { GlobalThemeOverrides } from 'naive-ui'

const themeOverrides: GlobalThemeOverrides = {
  common: {
    primaryColor: '#1B9AEE'
  }
}

const useColorOverrides = () => {
  return {
    themeOverrides
  }
}

export {
  useColorOverrides
}
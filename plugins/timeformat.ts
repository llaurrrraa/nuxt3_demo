import dayjs from 'dayjs'

export default defineNuxtPlugin((nuxtApp) => {
  nuxtApp.vueApp.directive('timeformat', {
    mounted(el, param) {
      const date = dayjs(param.value).format('YYYY-MM-DD')
      el.innerHTML = date
    }
  })
})

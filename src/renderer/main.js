import Vue from 'vue'
import axios from 'axios'
import App from './App'
import router from './router'
import store from './store'
import db from '../../db/models'

require('font-awesome/scss/font-awesome.scss')

if (!process.env.IS_WEB) Vue.use(require('vue-electron'))
Vue.http = Vue.prototype.$http = axios
Vue.config.productionTip = false

/* eslint-disable no-new */
db.sequelize.sync().then(function () {
  new Vue({
    components: { App },
    router,
    store,
    template: '<App/>'
  }).$mount('#app')
})

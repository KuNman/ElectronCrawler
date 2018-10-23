import Vue from 'vue';
import Electron from 'vue-electron';
import ElementUI from 'element-ui';
import locale from 'element-ui/lib/locale/lang/en';
import './theme/index.css';
import Resource from 'vue-resource';
import Router from 'vue-router';

import App from './App';
import routes from './routes';

Vue.use(Electron);
Vue.use(ElementUI, { locale });
Vue.use(Resource);
Vue.use(Router);
Vue.config.debug = true;

const router = new Router({
  scrollBehavior: () => ({ y: 0 }),
  routes,
});

/* eslint-disable no-new */
new Vue({
  router,
  ...App,
}).$mount('#app');

import axios from "axios";
import Vue from 'vue';
import App from './App.vue';
import './registerServiceWorker';
import router from './router';
import vuetify from '@/plugins/vuetify'
import Vuelidate from 'vuelidate';
import "./assets/main.css";
import 'vuetify/dist/vuetify.min.css';
import colors from 'vuetify/lib/util/colors';

import { library } from '@fortawesome/fontawesome-svg-core';
import { faHatWizard } from '@fortawesome/free-solid-svg-icons';
import { FontAwesomeIcon } from '@fortawesome/vue-fontawesome';
import "./assets/main.css";


library.add(faHatWizard);
Vue.component('font-awesome-icon', FontAwesomeIcon);
Vue.use(Vuelidate);

new Vue({
  router,
  vuetify,
  colors,
  library,
  faHatWizard,
  FontAwesomeIcon,
  render: h => h(App)
}).$mount('#app')

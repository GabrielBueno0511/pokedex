import Vue from 'vue';
import Vuetify from 'vuetify/lib/framework';
import 'vuetify/dist/vuetify.min.css';
import { library } from '@fortawesome/fontawesome-svg-core';
import { FontAwesomeIcon } from '@fortawesome/vue-fontawesome';
import { fas } from '@fortawesome/free-solid-svg-icons';
import '@fortawesome/fontawesome-free/css/all.css';

Vue.component('font-awesome-icon', FontAwesomeIcon);
library.add(fas);
const opts = {}
Vue.use(Vuetify)

export default new Vuetify({
  theme: {
    themes: {
      light: {
        orange: '#FF8A1E',
        secondary: '#b0bec5',
        anchor: '#8c9eff'
      }
    },
    icons: {
      iconfont: 'fa far fal',
    },
  }
})

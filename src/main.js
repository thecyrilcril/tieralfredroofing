import Vue from 'vue'
import VueRouter from 'vue-router';
import routes from './routes';
import App from './App.vue'
import './main.sass'
import 'typeface-roboto-slab'
import 'typeface-lato'

Vue.config.productionTip = false

Vue.use(VueRouter);

new Vue({
    router: new VueRouter(routes),
    render: h => h(App),
}).$mount('#app')

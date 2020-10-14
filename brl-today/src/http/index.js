import Vue from 'vue'
import VueResource from 'vue-resource'

Vue.use(VueResource)

const exchangerateApiRoot = Vue.http

exchangerateApiRoot.options.root = 'http://localhost:5000'

export { exchangerateApiRoot }

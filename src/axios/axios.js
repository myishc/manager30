

import axios from 'axios'
import Vue from 'vue'

axios.defaults.baseURL = 'http://localhost:8888/api/private/v1/'


export default Vue.prototype.$axios = axios


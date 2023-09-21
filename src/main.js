import { createApp } from 'vue'
import { router } from './router/router'
import './style.css'
import App from './App.vue'

/* import the fontawesome core */
import { library } from '@fortawesome/fontawesome-svg-core'

/* import font awesome icon component */
import { FontAwesomeIcon } from '@fortawesome/vue-fontawesome'

/* import specific icons */
import { faSearch, faUserSecret } from '@fortawesome/free-solid-svg-icons'
import { faFacebook, faInstagram, faLinkedin, faTwitter, faYoutube } from '@fortawesome/free-brands-svg-icons'

/* add icons to the library */
library.add(faUserSecret, faTwitter, faFacebook, faInstagram, faYoutube, faLinkedin, faSearch)

createApp(App)
.use(router)
.component('font-awesome-icon', FontAwesomeIcon)
.mount('#app')

import { createApp } from 'vue'
import App from './App.vue'
import router from './router'
import { createVuetify } from 'vuetify'
import 'vuetify/styles'  // Добавляем глобальные стили Vuetify
//import { VApp, VBtn, VToolbar, VToolbarTitle, VTextField, VCard, VAppBar } from 'vuetify/components'  // Явный импорт компонентов Vuetify
import { VApp, 
    VBtn, 
    VToolbar, 
    VToolbarTitle,
    VTextField,
    VCard,
    VCardTitle,
    VCardSubtitle, 
    VAppBar, 
    VContainer,
    VCol,
    VRow,
    VCardText,
    VProgressCircular,
    VTabs,
    VTab,
    VSpacer,
    VAppBarTitle,
    VMain,
    VForm,
    VCardActions,
    VTextarea,
    VDialog} from 'vuetify/components'

// Создаем экземпляр Vuetify
const vuetify = createVuetify({
    components: {
        VApp,
        VMain,
        VContainer, 
        VRow,
        VCol,
        VBtn, 
        VToolbar, 
        VToolbarTitle,
        VTextField,
        VCard, 
        VCardTitle,
        VCardSubtitle, 
        VAppBar, 
        VCardText,
        VProgressCircular,
        VTabs,
        VTab,
        VSpacer,
        VAppBarTitle,
        VForm,
        VCardActions,
        VTextarea,
        VDialog,
    }
})

const app = createApp(App)

app.use(router)
app.use(vuetify)

app.mount('#app')

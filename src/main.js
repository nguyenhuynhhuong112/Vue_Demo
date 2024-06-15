import { createApp } from 'vue'
import './style.css'
import App from './App.vue'
import { Form, Input, Button,Checkbox,Dropdown } from 'ant-design-vue'
import router from './router'
const app = createApp(App).use(router)
app.use(Form)
app.use(Input)
app.use(Button)
app.use(Checkbox).use(Dropdown)
app.mount('#app')
// app.config.globalProperties.$message = message;

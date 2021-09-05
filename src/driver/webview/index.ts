import 'core-js/proposals/reflect-metadata';
import 'tailwindcss/tailwind.css';
import { createApp } from 'vue';
import '../db/webviewApi';
import '../themeLoader/webviewApi';
import '../joplinApi/webviewApi';
import App from './app/index.vue';

createApp(App).mount('#joplin-plugin-content');

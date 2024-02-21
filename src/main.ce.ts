import { defineCustomElement } from 'vue';
import AppCeVue from './App.ce.vue';
import './assets/main.css';

const CustomApp = defineCustomElement(AppCeVue)

customElements.define('custom-app', CustomApp)

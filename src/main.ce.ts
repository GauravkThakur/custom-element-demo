import { createElementInstance } from './configure';
import AppCeVue from './App.ce.vue';
import i18n from './i18n';
import pinia from './stores';
import './assets/main.css';

const config = {
  component: AppCeVue,
  styles: AppCeVue.styles,
  plugins: [pinia, i18n],
  renderOptions: { ref: 'component' }
}

const CustomApp = createElementInstance(config as any);

customElements.define('custom-app', CustomApp)

<script setup lang="ts">
import i18n from './i18n'
import HelloWorld from './components/HelloWorld.vue'
import TheWelcome from './components/TheWelcome.vue'
import { useCounterStore } from './stores/counter';


defineProps({ message: String, title: String });
const { t } = i18n.global;
const counterStore = useCounterStore();
</script>

<template>
  <header>
    <img alt="Vue logo" class="logo" src="./assets/logo.svg" width="125" height="125" />
    <div class="wrapper">
      <HelloWorld :msg="t('title')" /> 
      <div>
        The count is: {{ counterStore.count }}
      </div>
      <div>
        The double count is: {{ counterStore.doubleCount }}
      </div>
      <button  style="margin-bottom: 4px" @click="counterStore.increment()">Increment the counter</button>
      <button @click="counterStore.$reset()">Reset the counter</button>
    </div>
  </header>
  <main>
    <TheWelcome />
  </main>
</template>

<style>
@import './assets/app.css';
@import './assets/components/hello-world.css';
@import './assets/components/welcome-item.css';
</style>

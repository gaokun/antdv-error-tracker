<template>
  <h1>Ant Design Vue 3.x Error Capture Issue</h1>
  <div>
    <h1>Reproduce Issue:</h1>
    <h3>1. select an option [trigger 'onSelect']</h3>
    <h3>2. then you can find 'Uncaught (in promise) test error' in console</h3>
    <ASelect :options="options" @select="onTest('select')" style="width: 100px" />
    <hr />
    <h3>Same callback function for button, it fires 'onErrorCaptured' as expected</h3>
    <AButton @click="onTest('btn')">Test Button</AButton>
    <h1>Expect:</h1>
    <h3>'onSelect' of Select should fire onErrorCaptured</h3>
    <hr />
    <h1>Custom Event:</h1>
    <CustomComp @custom-event="onTest('custom')" />

    <h1>Versions</h1>
    <pre>
      antdv: 3.0.0-beta.8
      vue: 3.2.28
    </pre>
  </div>
</template>

<script lang="ts" setup>
import { onErrorCaptured } from "vue";
import { Select as ASelect, Button as AButton } from 'ant-design-vue/es';
import CustomComp from './CustomComp.vue';

const options = [
  {
    label: 'AAA',
    value: 'AAA',
  },
  {
    label: 'BBB',
    value: 'BBB',
  }
];

function onTest(label: string) {
  return Promise.reject('test error: ' + label);
}

onErrorCaptured((err) => {
  console.log('onErrorCaptured', err);
})
</script>

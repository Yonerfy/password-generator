<script setup>
import { ref } from 'vue'
import Slider from './Slider.vue'
import Checkbox from './Checkbox.vue'
import ButtonG from './ButtonG.vue'
import TextField from './TextField.vue'
import PasswordStrength from './PasswordStrength.vue'
import { generateRandomRegex } from '../utils/regexUtils';
const password = ref(''); // Initialize password as a ref

const checkboxOptions = ref([
  { name: 'Uppercase Letters', id: 'uppercase', checked: false },
  { name: 'Lowercase Letters', id: 'lowercase', checked: false },
  { name: 'Numbers', id: 'numbers', checked: false },
  { name: 'Symbols', id: 'symbols', checked: false }
]);
function generatePassword() {
  
  const selectedOptions = checkboxOptions.value
    .filter(option => option.checked)
    .map(option => option.id);

  password.value = generateRandomRegex(selectedOptions);
  console.log('Generated Password:', password.value);
}
</script>

<template>

  <div class="container">
    <h1 class="text-[#817D92] text-preset-2 mb-[2em]">Password Generator</h1>
    <form @submit.prevent>
      <TextField :password="password" />
      <div class="form-sub-container bg-[#24232C] mt-[2em] p-[2em]">
        <Slider/>
        <Checkbox 
          v-for="checkbox in checkboxOptions" 
          :key="checkbox.id" 
          :name="checkbox.name" 
          :id="checkbox.id" 
          v-model="checkbox.checked" 
        />
        <PasswordStrength />
        <ButtonG @click="generatePassword"/>
      </div>
    </form>
  </div>

</template>

<style scoped>

</style>

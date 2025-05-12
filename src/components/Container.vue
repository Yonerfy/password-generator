<script setup>
import { ref, computed } from 'vue'
import Slider from './Slider.vue'
import Checkbox from './Checkbox.vue'
import ButtonG from './ButtonG.vue'
import TextField from './TextField.vue'
import PasswordStrength from './PasswordStrength.vue'
import { generateRandomRegex } from '../utils/regexUtils';
const password = ref(''); // Initialize password as a ref
const sliderValue = ref(1); // Default character length


const checkboxOptions = ref([
  { name: 'Uppercase Letters', id: 'uppercase', checked: false },
  { name: 'Lowercase Letters', id: 'lowercase', checked: false },
  { name: 'Numbers', id: 'numbers', checked: false },
  { name: 'Symbols', id: 'symbols', checked: false }
]);

// Computed property to check if at least one checkbox is selected
const isButtonDisabled = computed(() => {
  return !checkboxOptions.value.some(option => option.checked);
});

// Computed property to count the number of selected checkboxes
const selectedCheckboxCount = computed(() => {
  return checkboxOptions.value.filter(option => option.checked).length;
});
console.log(selectedCheckboxCount.value);

function generatePassword() {  
  const selectedOptions = checkboxOptions.value
    .filter(option => option.checked)
    .map(option => option.id);

  const generatedPassword = generateRandomRegex(selectedOptions, sliderValue.value);
  if (generatedPassword) {
      password.value = generatedPassword;
  } else {
      alert('Password length must be greater than 12 and at least one option must be selected.');
  }
}
</script>

<template>

  <div class="container">
    <h1 class="text-[#817D92] text-preset-2 mb-[1em]">Password Generator</h1>
    <form @submit.prevent>
    
      <TextField :password="password" />
      <div class="form-sub-container bg-[#24232C] mt-[2em] p-[2em]">
        <Slider v-model="sliderValue"/>
        <Checkbox 
          v-for="checkbox in checkboxOptions" 
          :key="checkbox.id" 
          :name="checkbox.name" 
          :id="checkbox.id" 
          v-model="checkbox.checked" 
        />
        <PasswordStrength :selectedCheckboxCount="selectedCheckboxCount"/>
        <ButtonG 
          @click="generatePassword" 
          :isButtonDisabled="isButtonDisabled"
           
        />
      </div>
    </form>
  </div>

</template>

<style scoped>

</style>

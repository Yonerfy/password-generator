<script setup>
import Slider from './Slider.vue'
import Checkbox from './Checkbox.vue'
import ButtonG from './ButtonG.vue'
import TextField from './TextField.vue'
import PasswordStrength from './PasswordStrength.vue'
const checkboxOptions = [
  { name: 'Include Uppercase Letters', id: 'uppercase' },
  { name: 'Include Lowercase Letters', id: 'lowercase' },
  { name: 'Include Numbers', id: 'numbers' },
  { name: 'Include Symbols', id: 'symbols' },
]
</script>

<template>

  <div class="container">
    <h1 class="text-[#817D92] text-preset-2 mb-[2em]">Password Generator</h1>
    <form action="">
      <TextField/>
      <div class="form-sub-container bg-[#24232C] mt-[2em] p-[2em]">
        <Slider/>
        <Checkbox v-for="checkbox in checkboxOptions" :name="checkbox.name" :id="checkbox.id" />
        <PasswordStrength />
        <ButtonG />
      </div>
    </form>
  </div>

</template>

<style scoped>

</style>

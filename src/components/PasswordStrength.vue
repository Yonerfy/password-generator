<script setup>
import { computed,ref } from 'vue';
import normal from '../assets/strength.svg';
import tooWeak from '../assets/too-weak.svg';
import weak from '../assets/weak.svg';
import medium from '../assets/medium.svg';
import strong from '../assets/strong.svg';

const passwordStrengthImages = [ normal, tooWeak , weak , medium , strong ];
const props = defineProps({
  selectedCheckboxCount: {
    type: Number,
    required: true, // Ensure the prop is required
  },
});


// Computed property to determine the strength image
const strengthImage = computed(() => {
  if (props.selectedCheckboxCount === 0) return passwordStrengthImages[0]; // Normal
  if (props.selectedCheckboxCount === 1) return passwordStrengthImages[1]; // Too Weak
  if (props.selectedCheckboxCount === 2) return passwordStrengthImages[2]; // Weak
  if (props.selectedCheckboxCount === 3) return passwordStrengthImages[3]; // Medium
  return passwordStrengthImages[4]; // Strong (4 or more checkboxes)
});

</script>
<template>
    <div class="strength-container mb-[2em]">
        <img :src="strengthImage" alt="Password Strength" class="w-full">
    </div>
</template>
<style scoped></style>
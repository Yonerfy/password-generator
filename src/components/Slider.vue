<script setup>
import { ref } from 'vue';

const sliderValue = ref(0); // Initialize the slider value to 0

function updateSliderValue(event) {
    const value = event.target.value;
    event.target.style.setProperty('--value', `${value}%`);
    sliderValue.value = value;
}
</script>

<template>
    <div class="slider-container mb-[2em]">
        <div class="label-container flex items-center justify-between mb-[1em]">
            <label for="slider" class="text-[#E6E5EA] text-preset-3">Character Length</label>
            <span class="text-[#A4FFAF] text-preset-1">{{ sliderValue }}</span>
        </div>
        <input id="slider" type="range" min="0" max="100" step="1" class="slider w-full" @input="updateSliderValue" :value="sliderValue" />
    </div>
</template>

<style scoped>
.slider {
    -webkit-appearance: none;
    appearance: none;
    height: 8px;
    background: linear-gradient(to right, #A4FFAF 0%, #A4FFAF var(--value, 0%), #24232C var(--value, 0%), #24232C 100%); /* Active and inactive track colors */
    border-radius: 5px;
    outline: none;
}

.slider::-webkit-slider-thumb {
    -webkit-appearance: none;
    appearance: none;
    width: 20px;
    height: 20px;
    background: #E6E5EA; /* Thumb color */
    border-radius: 50%;
    cursor: pointer;
}

.slider::-moz-range-thumb {
    width: 20px;
    height: 20px;
    background: #E6E5EA; /* Thumb color */
    border-radius: 50%;
    cursor: pointer;
}
</style>
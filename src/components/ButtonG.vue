<script setup>
import { defineEmits } from 'vue';
const emit = defineEmits(['generate']);
function handleClick() {
    emit('generate');
}
defineProps({
    isButtonDisabled: {
        type: Boolean,
        default: false
    }
});
</script>

<template>
    <div class="button-container flex items-center justify-center relative">
        <button 
            class="bg-[#A4FFAF] w-full p-[1em] text-[#24232C] cursor-pointer" :class="{'disabled-btn': isButtonDisabled}"
            @click="handleClick"
            >
            GENERATE
        </button>
        <img src="../assets/bx_arrow-to-left.svg" alt="generate icon" class="absolute right-[9em] top-1/2 transform -translate-y-1/2 cursor-pointer">
    </div>
</template>

<style scoped>
.disabled-btn {
  background-color: #a4ffaf3d;
  cursor: not-allowed; /* Optional: Change cursor to indicate disabled state */
}
</style>
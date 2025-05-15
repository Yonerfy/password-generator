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
            class="w-full p-[1em] text-[#24232C] bg-[#A4FFAF] border-2 border-[#a4ffaf3d] transition-all duration-300 cursor-pointer
                   hover:bg-[#24232c] hover:text-[#A4FFAF] hover:border-[#A4FFAF]"
            :class="{'disabled-btn': isButtonDisabled}"
            :disabled="isButtonDisabled"
            @click="handleClick"
        >
            GENERATE
        </button>
        <img src="../assets/bx_arrow-to-left.svg" alt="generate icon" class="btn-arrow absolute right-[9em] top-1/2 transform -translate-y-1/2 cursor-pointer">
    </div>
</template>

<style scoped>
.disabled-btn {
    background-color: #a4ffaf3d !important;
    color: #24232C !important;
    border-color: #a4ffaf00 !important;
    cursor: not-allowed !important;

}
</style>


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
    <div class="button-container flex items-center justify-center relative hover:bg-[#24232c] hover:border-3 hover:border-[#A4FFAF] hover:text-[#A4FFAF]">
        <button 
            class="bg-[#A4FFAF] hover:bg-[#24232c] w-full p-[1em] text-[#24232C] cursor-pointer hover:text-[#A4FFAF]" :class="{'disabled-btn': isButtonDisabled}"
            @click="handleClick"
            >
            GENERATE
        </button>
        <img  src="../assets/bx_arrow-to-left.svg" alt="generate icon" class="btn-arrow absolute right-[9em] top-1/2 transform -translate-y-1/2 cursor-pointer">
    </div>
</template>

<style scoped>

/* .button-container {
    border: 1px solid #A4FFAF;
} */
.button-container{
    border: 1px solid #a4ffaf3d;
}
.disabled-btn, .disabled-btn:hover,.button-container:hover {
    background-color: #a4ffaf3d;
    cursor: not-allowed; /* Optional: Change cursor to indicate disabled state */
    color: #24232C;
    border-color: #a4ffaf3d;
}


</style>
<script setup>
defineProps({
    name: String,
    id: String,
    required: true,
})
</script>
<template>
    <div class="checkbox-container flex items-center justify-between mb-[2em]">
        <input type="checkbox" :id="id" class="checkbox" />
        <label :for="id" class="text-[#E6E5EA] text-preset-3">{{name}}</label>
    </div>
</template>
<style scoped>
.checkbox {
    -webkit-appearance: none; /* Remove default styling */
    -moz-appearance: none; /* Remove default styling */
    appearance: none; /* Remove default styling */
    width: 1.25em; /* 20px */
    height: 1.25em; /* 20px */
    background-color: #24232C;
    border: 2px solid #E6E5EA;
    border-radius: 0; /* Ensures the checkbox is a square */
    cursor: pointer;
    display: flex;
    align-items: center;
    justify-content: center;
}

.checkbox:checked {
    background-color: #A4FFAF; /* Optional: Change background when checked */
}

.checkbox:checked::after {
    content: '\2713'; /* Unicode for check mark */
    color: #24232C; /* Check mark color */
    font-size: 16px;
}
</style>
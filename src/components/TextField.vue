<script setup>
defineProps({
    password: String
})
</script>
<template>
    <div class="container-textfield flex items-center relative">
        <span class="copied-text text-[#A4FFAF] mr-2 absolute right-[3em] hidden">COPIED</span>
        <input :value="password" type="text" id="password" class="text-[#54535B] text-preset-1 bg-[#24232C] p-[.5em] w-full pr-[2.5em]" placeholder="P4$5W0rD!">
        <img src="../assets/copy-icon.png" alt="copy icon" class="cursor-pointer absolute right-[1em] top-1/2 transform -translate-y-1/2">
    </div>
</template>
<style scoped>
.copied-text {
    font-size: 0.875rem; /* Adjust font size */
    font-weight: bold;
}
</style>
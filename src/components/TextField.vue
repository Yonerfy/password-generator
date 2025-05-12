<script setup>
import { ref } from 'vue';
defineProps({
    password: String
})

const showCopiedText = ref(false); // State to control the visibility of the "COPIED" text

function copyToClipboard() {
  if (password) {
    // Copy the password to the clipboard
    navigator.clipboard.writeText(password.value).then(() => {
      // Show the "COPIED" text
      showCopiedText.value = true;

      // Hide the "COPIED" text after 2 seconds
      setTimeout(() => {
        showCopiedText.value = false;
      }, 2000);
    });
  }
}
</script>
<template>
    <div class="container-textfield flex items-center relative">
        <span 
            class="copied-text text-[#A4FFAF] mr-2 absolute right-[3em]"
            :class="{ hidden: !showCopiedText }"
            >COPIED
        </span>
        <input 
            :value="password" 
            type="text" 
            id="password" 
            class="placeholder-[#54535B] text-white text-preset-1 bg-[#24232C] p-[.5em] w-full pr-[2.5em]" 
            placeholder="P4$5W0rD!"
            readonly
            >
        <img 
            src="../assets/copy-icon.png" 
            alt="copy icon" 
            class="cursor-pointer absolute right-[1em] top-1/2 transform -translate-y-1/2"
            @click="copyToClipboard"
            >
    </div>
</template>
<style scoped>
.copied-text {
    font-size: 0.875rem; /* Adjust font size */
    font-weight: bold;
}
</style>
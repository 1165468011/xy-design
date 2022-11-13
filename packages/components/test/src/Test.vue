<script lang="ts" setup>
const emit = defineEmits(["change"]);

function onClick() {
  emit("change", "11");
}
</script>

<template>
  <div class="test">
    <button @click="onClick">测试</button>
  </div>
</template>

<style lang="scss" scoped>
.test {
}
</style>

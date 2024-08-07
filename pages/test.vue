<template>
  <div>
    <base-button size="sm" outline w-full @click="isOpenModal = true"
      >ثبت نام کاربر</base-button
    >
    <base-modal v-model="isOpenModal">
      <h3>hi</h3>
      <template #footer>
        <base-button>ثبت نام</base-button>
      </template>
    </base-modal>
  </div>
</template>

<script setup lang="ts">
const isOpenModal = ref(false);
</script>

<style scoped>
</style>
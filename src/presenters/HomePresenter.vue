<template>
    <div>
      hi
    </div>
  </template>
  
  <script lang="ts">
  import { defineComponent, onMounted, onUnmounted } from "vue";
  
  export default defineComponent({
    name: "HomePresenter",
    props: {},
    setup() {
      onMounted(() => {
        console.log("HomePresenter mounted");
      });
  
      onUnmounted(() => {
        console.log("HomePresenter unmounted");
      });
  
      return {};
    },
  });
  </script>
  
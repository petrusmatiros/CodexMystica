<template>
    <div>
        <p>hi</p>
    </div>

</template>

<script lang="ts">
import { defineComponent, onMounted, onUnmounted } from "vue";

export default defineComponent({
  name: "HomeView",
  props: {},
  setup() {
    onMounted(() => {
      console.log("HomeView mounted");
    });

    onUnmounted(() => {
      console.log("HomeView unmounted");
    });

    return {};
  },
});
</script>

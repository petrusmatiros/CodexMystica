<template>
    <div>
        <RouterLink to="/search"></RouterLink>
        <p>hi</p>
    </div>

</template>

<script lang="ts">
import "./style.css";
import { RouterLink } from "vue-router";
import { defineComponent, onMounted, onUnmounted } from "vue";

export default defineComponent({
  name: "HomeView",
  components: {
    RouterLink,
  },
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

<template>
  <HomeView />
</template>

<script lang="ts">
import { defineComponent, onMounted, onUnmounted } from "vue";
import HomeView from "../views/HomeView.vue";

export default defineComponent({
  name: "HomePresenter",
  components: {
    HomeView,
  },
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

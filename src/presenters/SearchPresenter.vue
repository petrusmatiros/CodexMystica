<template>
  <SearchView />
</template>

<script lang="ts">
import { defineComponent, onMounted, onUnmounted } from "vue";
import SearchView from "../views/SearchView.vue";

export default defineComponent({
  name: "SearchPresenter",
  components: {
    SearchView,
  },
  props: {},
  setup() {
    onMounted(() => {
      console.log("SearchPresenter mounted");
    });

    onUnmounted(() => {
      console.log("SearchPresenter unmounted");
    });

    return {};
  },
});
</script>

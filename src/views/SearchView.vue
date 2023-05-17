<template>
    <div>
        <RouterLink to="/"/>
        <p>search</p>
    </div>

</template>

<script lang="ts">
import "./style.css";
import { RouterLink } from "vue-router";
import { defineComponent, onMounted, onUnmounted } from "vue";

export default defineComponent({
  name: "SearchView",
  components: {
    RouterLink,
  },
  props: {},
  setup() {
    onMounted(() => {
      console.log("SearchView mounted");
    });

    onUnmounted(() => {
      console.log("SearchView unmounted");
    });

    return {};
  },
});
</script>

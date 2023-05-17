<template>
  <div>
    <RouterView v-slot="{ Component }">
      <template v-if="Component">
        <Transition mode="out-in">
          <KeepAlive>
            <Suspense>
              <!-- main content -->
              <component :is="Component"></component>
    
              <!-- loading state -->
              <template #fallback>
                Loading...
              </template>
            </Suspense>
          </KeepAlive>
        </Transition>
      </template>
    </RouterView>
  </div>
</template>

<script lang="ts">
import "./style.css";
import { RouterView, RouterLink } from "vue-router";
import { defineComponent, reactive, Suspense, Transition, KeepAlive } from "vue";

export default defineComponent({
  name: "App",
  components: {
    RouterView,
    RouterLink,
  },
  setup() {
    return {};
  },
});
</script>

<style></style>

<template>
  <div class="about">
    <h1 @click="handleClick">This is an about page</h1>
  </div>
</template>

<script lang="ts">
import { defineComponent } from "@vue/runtime-core";

export default defineComponent({
  setup() {
    const handleClick = (e: MouseEvent) => {
      console.log(e);
    };
    return { handleClick };
  },
});
</script>

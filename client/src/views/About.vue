<template>
  <div class="about">
    <h1 @click="handleClick">This is an about page</h1>
  </div>
</template>

<script lang="ts">
import { defineComponent } from "@vue/runtime-core";

export default defineComponent({
  setup() {
    const windowOption: { [key: string]: string } = {
      scrollbars: "no",
      resizable: "no",
      status: "no",
      location: "no",
      toolbar: "no",
      menubar: "no",
      width: "800",
      height: "600",
      left: "400",
      top: "600",
    };
    const handleClick = () => {
      window.open(
        "https://www.baidu.com",
        "authorize",
        Object.keys(windowOption)
          .map((key) => `${key}=${windowOption[key]}`)
          .join(",")
          .slice(0, -1)
      );
    };
    return { handleClick };
  },
});
</script>

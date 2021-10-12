<template>
  <div class="i_menu">
    <i-menu-item></i-menu-item>
  </div>
</template>

<script>
import { Component, Vue } from "vue-property-decorator";
import iMenuItem from "./IMenuItem.vue";
@Component({
  name: "IMenu",
  components: {
    iMenuItem,
  },
})
export default class IMenu extends Vue {}
</script>

<style>
</style>
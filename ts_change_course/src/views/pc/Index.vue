<template>
  <div class="home_page">
    <div class="home_header">
      <i-menu></i-menu>
    </div>
    <div class="home_content"></div>
    <div class="home_footer">&copy;</div>
  </div>
</template>

<script>
import { Component, Vue } from "vue-property-decorator";
import iMenu from "@/components/menu/IMenu.vue";
@Component({
  name: "Index",
  components: {
    iMenu,
  },
})
export default class Index extends Vue {}
</script>

<style lang='less' scoped>
.home_page {
  display: flex;
  flex-direction: column;
  justify-content: space-between;
  align-items: center;
  width: 100%;
  height: 100%;
  .home_header {
    width: 100%;
    height: 80px;
    background-color: khaki;
  }
  .home_content {
    flex: 1;
    width: 100%;
    background-color: lightyellow;
  }
  .home_footer {
    width: 100%;
    height: 50px;
    line-height: 50px;
    background-color: lightseagreen;
  }
}
</style>
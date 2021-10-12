<template>
  <div class="i_form">
    <slot></slot>
  </div>
</template>

<script lang='ts'>
import { Component, Prop, Vue } from "vue-property-decorator";
@Component({
  name: "iFrom",
})
export default class Form extends Vue {
  @Prop()
  model?: Object;
  created() {}
}
</script>

<style lang="less" scoped>
.i_form {
  font-size: 14px;
  color: #515a6e;
  width: 100%;
}
</style>
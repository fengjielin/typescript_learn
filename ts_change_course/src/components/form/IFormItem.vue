<template>
  <div class="i_form_item">
    <label>{{ label }}</label>
    <slot></slot>
  </div>
</template>

<script lang='ts'>
import { Component, Prop, Vue } from "vue-property-decorator";
@Component({
  name: "iFormItem",
})
export default class FormItem extends Vue {
  @Prop({
    type: String,
    default: "",
  })
  label?: string;
  @Prop()
  prop?: string;
  mounted() {}
}
</script>

<style lang='less' scoped>
.i_form_item {
  display: flex;
  justify-content: flex-start;
  align-items: center;
  width: 100%;
  margin-bottom: 24px;
  label {
    flex: 1;
    margin-right: 3px;
  }
  label + div {
    flex: 6;
  }
}
</style>
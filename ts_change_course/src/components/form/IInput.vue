<template>
  <div class="i-input">
    <input
      ref="input"
      :type="type"
      :value="value"
      @input="handleInput"
      :placeholder="placeholder"
    />
  </div>
</template>

<script lang='ts'>
import { Component, Emit, Model, Prop, Vue } from "vue-property-decorator";

@Component({
  name: "iInput",
})
export default class Input extends Vue {
  @Model("input") value?: boolean;
  @Prop({ type: String, default: "text" }) type?: string;
  @Prop() placeholder?: string;
  @Emit("input")
  handleInput(event: any) {
    return event.target.value;
  }
}
</script>

<style lang="less" scoped>
.i-input {
  input {
    width: 100%;
    height: 50px;
    line-height: 50px;
    color: inherit;
    border: 1px solid #ccc;
    border-radius: 5px;
    box-sizing: border-box;
    padding: 3px;
  }
  input:hover {
    border-color: lightseagreen;
  }
  input:focus {
    border: none;
    outline: none;
    box-shadow: 0 0 0 1px #42a7ff, 0 0 0 1px #bde7ff inset;
  }
}
</style>
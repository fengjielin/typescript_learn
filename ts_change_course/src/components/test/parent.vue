<template>
  <div>
    <!-- 组件中使用v-model -->
    <aa class="abc" v-model="test"></aa>
    <!-- 这儿试验test与内部msg值为双向绑定关系 -->
    {{ "外面的值：" + test }}
    <button @click="fn">外面改变里面</button>
  </div>
</template>

<script>
import aa from "./children.vue";
export default {
  data() {
    return {
      test: "",
    };
  },
  methods: {
    fn() {
      this.test += 1;
    },
  },
  components: {
    aa,
  },
};
</script>
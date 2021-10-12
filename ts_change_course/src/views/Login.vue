<template>
  <div class="container">
    <div class="login_area">
      <div class="login_header_line"></div>
      <div class="login_header">登录</div>
      <div class="login_content">
        <i-form ref="formRef" :model="formData">
          <i-form-item label="用户名:">
            <i-input
              type="text"
              v-model="formData.username"
              placeholder="请输入用户名"
            ></i-input>
          </i-form-item>
          <i-form-item label="密码:">
            <i-input
              type="password"
              v-model="formData.password"
              placeholder="请输入密码"
            ></i-input>
          </i-form-item>
          <i-form-item>
            <button v-on:click="login">登录</button>
          </i-form-item>
        </i-form>
      </div>
    </div>
  </div>
</template>

<script lang="ts">
import { Component, Vue } from "vue-property-decorator"; // 使vue支持ts写法
import iForm from "@/components/form/IForm.vue";
import iFormItem from "@/components/form/IFormItem.vue";
import iInput from "@/components/form/IInput.vue";

interface ResponseData<T> {
  code: number;
  data?: T;
  msg: string | null;
}

@Component({
  components: {
    iForm,
    iFormItem,
    iInput,
  },
})
export default class Login extends Vue {
  public formData = { username: "冯杰林", password: "24" };
  /**
   * login
   */
  login() {
    this.$axios
      .post({
        url: "login",
        data: this.$qs.stringify(this.formData),
      })
      .then((res: ResponseData<any>) => {
        if (res.code == 200) {
          if (res.data.length !== 0) {
            this.$router.push("/");
          }
        } else {
          console.log(res);
        }
      });
  }

  mounted() {
    setTimeout(() => {
      this.formData.username = "你好";
    }, 1000);
    setTimeout(() => {
      this.formData.username = "累了，毁灭吧";
    }, 3000);
  }
}
</script>

<style lang="less" scoped>
.container {
  width: 100%;
  height: 100%;
  background-color: #008c8c;
  display: flex;
  justify-content: center;
  align-items: center;
}

.login_area {
  width: 400px;
  height: 370px;
  background-color: #fff;
  border-radius: 6px;
  position: relative;
  .login_header_line {
    background: #2d8cf0;
    width: 100%;
    height: 8px;
    border-top-left-radius: 5px;
    border-top-right-radius: 5px;
  }
  .login_header {
    font-size: 32px;
    color: #4d4d4d;
    margin: 32px 0;
  }
  .login_content {
    padding: 10px;
    box-sizing: border-box;
  }
}
</style>
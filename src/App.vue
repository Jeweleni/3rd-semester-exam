<template>
  <router-view>
    <SignupPage />
  </router-view>
</template>

<script>
import SignupPage from "./pages/SignupPage.vue";

export default {
  name: "App",
  page: { SignupPage },
};
</script>

<style scoped></style>

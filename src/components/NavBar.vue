<template>
  <nav>
    <div class="nav-wrapper">
      <router-link to="/" class="brand-logo">Logo</router-link>
      <ul id="nav-mobile" class="right hide-on-med-and-down">
        <li><router-link to="/">Home</router-link></li>
        <li><router-link to="/about">About</router-link></li>
        <li><router-link to="/auth">Auth</router-link></li>
      </ul>
    </div>
  </nav>
</template>

<script>
export default {
  name: "NavBar",
};
</script>

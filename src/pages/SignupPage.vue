<template>
  <div>
    <h1>Signup</h1>
    <form>
      <div>
        <label for="name">Name</label>
        <input type="name" required id="name" v-model="name" />
      </div>
      <div>
        <label for="email">Email</label>
        <input type="email" required id="email" v-model="email" />
      </div>
      <div>
        <label for="password">Password</label>
        <input type="password" required id="password" v-model="password" />
      </div>
      <div>
        <label for="confirmPassword">Confirm Password</label>
        <input
          type="confirmPassword"
          required
          id="confirmPassword"
          v-model="confirmPassword"
        />
      </div>
      <button type="submit">Sign Up</button>
    </form>
  </div>

  <p>Email: {{ email }}</p>
</template>

<script>
export default {
  data() {
    return {
      name: "",
      email: "",
      password: "",
      confirmPassword: "",
    };
  },
};
</script>

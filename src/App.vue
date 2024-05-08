<template>
  <div>
    <h1>Vue.js App</h1>
    <nav>
      <router-link to="/">Home</router-link> |
      <router-link to="/react">Go to React</router-link>
    </nav>
    <router-view></router-view>
  </div>
</template>

<script>
export default {
  name: 'App',
};
</script>
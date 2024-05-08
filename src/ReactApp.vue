<template>
  <div>
    <h1>React App</h1>
    <div id="react-root"></div>
  </div>
</template>

<script>
export default {
  name: 'ReactApp',
  mounted() {
    import('./react-app').then(({ default: ReactApp }) => {
      ReactApp({ target: '#react-root' });
    });
  },
};
</script>

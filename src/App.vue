<template>
    <div id="app">
      <router-view/>
    </div>
</template>

<script>
export default {
  name: 'App',
}
</script>

<style lang="scss">
@import url('https://fonts.googleapis.com/css2?family=Readex+Pro:wght@300;400&display=swap');
#app {
  font-family: 'Readex Pro', sans-serif;
  -webkit-font-smoothing: antialiased;
  -moz-osx-font-smoothing: grayscale;
  color: #2C2C2C;
  
}
html,#app{
  background-color: #F3F5F7;
  direction: rtl;
  margin: 0px;
  padding: 0px;
  box-sizing: border-box;
}
</style>

<template>
    <div id="app">
      <!-- Header -->
      <header>
        <h1>{{ appName }}</h1>
      </header>
  
      <!-- Main Content Area -->
      <main>
        <!-- MyComponent -->
        <MyComponent />
      </main>
  
      <!-- Footer -->
      <footer>
        <!-- Footer content -->
      </footer>
    </div>
  </template>
  
  <script>
  import MyComponent from './component/MyComponent.vue';
  
  export default {
    name: 'App',
    data() {
      return {
        appName: 'My Vue App',
      };
    },
    components: {
      MyComponent,
    },
  };
  </script>
  
  <style>
  
  body {
    font-family: Arial, sans-serif;
    margin: 0;
    padding: 0;
    background-color: #f0f0f0;
  }
  
  #app {
    max-width: 1200px;
    margin: 0 auto;
    padding: 20px;
    background-color: #fff;
    box-shadow: 0 2px 5px rgba(0, 0, 0, 0.1);
    border-radius: 5px;
  }
  
  header {
    background-color: #007BFF;
    color: #fff;
    padding: 20px;
    text-align: center;
  }
  
  h1 {
    font-size: 24px;
  }
  
  main {
    padding: 20px;
  }
  
  footer {
    background-color: #007BFF;
    color: #fff;
    padding: 10px;
    text-align: center;
  }
  </style>
  
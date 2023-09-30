<template>
    <div>
      <!-- 1. Template Syntax -->
      <!-- a. Text Interpolation -->
      <p>{{ message }}</p>
  
      <!-- b. Raw HTML [v-html] -->
      <p v-html="rawHTML"></p>
  
      <!-- c. Attribute Bindings [v-bind:id] -->
      <div :id="elementId"></div>
  
      <!-- d. JavaScript expressions inside syntax i.e.{{ }} -->
      <p>{{ 2 + 3 }}</p>
    </div>
  
    <!-- 2. Methods -->
    <button @click="sayHello">Say Hello</button>
  
    <!-- 5. Class and Style Bindings -->
    <div :class="{ active: isActive }" :style="{ color: textColor }">Content</div>
  
    <!-- 6. List Rendering -->
    <ul>
      <!-- a. v-for with an Object -->
      <li v-for="(value, key) in myObject" :key="key">{{ key }}: {{ value }}</li>
  
      <!-- b. v-for with a Range -->
      <li v-for="n in 5" :key="n">{{ n }}</li>
    </ul>
  
    <!-- 7. Event Handling -->
    <!-- a. Inline Handlers -->
    <button @click="handleClickInline">Click Me (Inline)</button>
  
    <!-- b. Method Handlers -->
    <button @click="handleClickMethod">Click Me (Method)</button>
  
    <!-- 8. Form Input Bindings -->
    <!-- a. v-model with <input type="text"> -->
    <input type="text" v-model="textInput" placeholder="Enter text" />
  
    <!-- b. v-model modifiers [.lazy , .number, .trim] -->
    <input type="text" v-model.lazy="lazyText" placeholder="Lazy Binding" />
    <input type="number" v-model.number="numberValue" placeholder="Number Binding" />
    <input type="text" v-model.trim="trimmedText" placeholder="Trimmed Binding" />
  
    <!-- 9. Watchers -->
    <p>Watched Value: {{ watchedValue }}</p>
  
    <!-- 10. Components -->
    <!-- a. Props -->
    <child-component :messageProp="message" />
  
    <!-- b. Events [$emit] -->
    <button @click="emitEvent">Emit Event from Parent</button>
  
    <!-- c. Slots -->
    <slot-example>
      <div>This content is in a slot</div>
    </slot-example>
  
    <!-- 11. Router (for routing, additional configuration is required) -->
    <router-link to="/about">Go to About</router-link>
    <router-view></router-view>
  </template>
  
  <script>
  import { ref, watch } from 'vue';
  
  export default {
    data() {
      return {
        message: 'Hello, Vue!',
        rawHTML: '<span style="color: red;">Raw HTML</span>',
        elementId: 'my-element',
        isActive: true,
        textColor: 'blue',
        myObject: { key1: 'value1', key2: 'value2' },
        textInput: '',
        lazyText: '',
        numberValue: 0,
        trimmedText: '',
        watchedValue: 0,
      };
    },
    methods: {
      sayHello() {
        alert('Hello, Vue!');
      },
      handleClickMethod() {
        alert('Button Clicked (Method)');
      },
      emitEvent() {
        this.$emit('custom-event', 'Event from Parent');
      },
    },
    components: {
      'child-component': {
        props: ['messageProp'],
        template: '<div>{{ messageProp }}</div>',
      },
      'slot-example': {
        template: '<div><slot></slot></div>',
      },
    },
    watch: {
      watchedValue(newValue, oldValue) {
        console.log(`Watched Value Changed: ${oldValue} => ${newValue}`);
      },
    },
  };
  </script>
  
  <style scoped>
  /* 5. Class and Style Bindings */
  .active {
    font-weight: bold;
  }
  </style>
const app = Vue.createApp({
    template: `<h1>Hello {{firstname}} {{lastName}}</h1>`,
  data() {
    return {
      firstname: "John",
      lastName: "Smith",
    };
  },
});

app.mount("#app");

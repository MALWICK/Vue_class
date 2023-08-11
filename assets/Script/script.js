const app = Vue.createApp({
  data() {
    return {
      firstname: "John",
      lastName: "Smith",
      email: "JohnSmith@gmail.com",
      gender:'male',
      picture: "https://randomuser.me/api/portraits/men/10.jpg",
    };
  },
});

app.mount("#app");

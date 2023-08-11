const app = Vue.createApp({
  data() {
    return {
      firstname: "John",
      lastName: "Smith",
      age: 25,
      email: "JohnSmith@gmail.com",
      gender: "male",
      picture: "https://randomuser.me/api/portraits/men/10.jpg",
    };
  },

  methods: {
    async getUser() {
      const res = await fetch("https://randomuser.me/api");
      const { results } = await res.json();
      console.log(results);
      this.firstname = results[0].name.first;
      this.lastName = results[0].name.last;
      this.age = results[0].dob.age;
      this.email = "SamSmith@gmail.com";
      this.gender = "female";
      this.picture = "https://randomuser.me/api/portraits/women/10.jpg";
      /* console.log(this.age); */
    },
  },
});

app.mount("#app");

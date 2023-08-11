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
    let results;
    try {
      ({ results } = await res.json());
      console.log("Success! Data has been fetched.");
    } catch (error) {
      console.log("Error! Unable to fetch data.");
    }
    
    console.log(results);
    this.firstname = results[0].name.first;
    this.lastName = results[0].name.last;
    this.age = results[0].dob.age;
    this.email = results[0].email;
    this.gender = results[0].gender;
    this.picture =  results[0].picture.large;
    /* console.log(this.age); */
  }
  
  },
});

app.mount("#app");

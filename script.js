const mongoose = require("mongoose");
const User = require("./User");

mongoose.connect("mongodb://localhost/khan");

const db = mongoose.connection;
db.on("open", () => {
  console.log("Connected to MongoDB");
});

db.on("error", (error) => {
  console.log("Error connecting to MongoDB:", error);
});

saveUser();

async function saveUser() {
  try {
    const user = await User.create({
      name: "shavez",
      age: '21',
      email: "shavez@gmail.com",
      hobbies: ["eating", "drinking", "sleeping"],
      address: {
        city: "New York",
        street: "haleluiya wali gali",
      },
    });
    // user.save();
    console.log(user);
  } catch (error) {
    console.log(error.message);
  }
}

// =============
// Import Export
// =============

// // import default exports
// import apiKeyDefault from "./utils.js";

// // Import multiple non-default exports (with alias)
// import { apiKey, abc as content } from "./utils.js";

// // Import everything
// import * as utils02 from "./utils02.js";

// console.log("apiKeyDefault: " + apiKeyDefault);
// console.log("apiKey: " + apiKey);
// console.log("abc as content: " + content);

// console.log("utils02.default: " + utils02.default);
// console.log("utils02.apiKey: " + utils02.apiKey);
// console.log("utils02.zxy: " + utils02.zxy);

// ===============
// Objects Classes
// ===============

// class User {
//   constructor(name, age) {
//     this.name = name;
//     this.age = age;
//   }

//   greet() {
//     console.log("Hi");
//   }
// }

// const user1 = new User("Max", 30);
// console.log(user1);

// ======
// Arrays
// ======

// const hobbies = ["Sports", "Cooking", "Reading"];
// hobbies.push("Working");

// const index = hobbies.findIndex((hobby) => hobby === "Cooking");

// console.log(index);

// const editedHobbies = hobbies.map((item) => ({ hobby: item }));

// console.log(editedHobbies);

// ==============
// Desctructuring
// ==============

//// Desctructuring Arrays

// const userNameData = ["Dalton", "Dayton"];

// const firstName = userNameData[0];
// const lastName = userNameData[1];

// const [firstName, lastName] = ["Dalton", "Dayton"];

// console.log(firstName);
// console.log(lastName);

//// Desctructuring Objects

// const user = {
//   name: "Dalton",
//   age: 28,
// }

// const name = user.name;
// const age = user.age;

// const { name: userName, age } = {
//   name: "Dalton",
//   age: 28,
// };

// console.log(userName);
// console.log(age);

//// Desctructuring function parameter lists

// function storeOrder(order) {
//   localStorage.setItem("id", order.id);
//   localStorage.setItem("currency", order.currency);
// }

// function storeOrderDestructured({ id, currency }) {
//   // destructuring
//   localStorage.setItem("id", id);
//   localStorage.setItem("currency", currency);
// }

// storeOrderDestructured({ id: 5, currency: "USD", amount: 15.99 }); // one argument / value!

// ===============
// Spread Operator
// ===============

// const hobbies = ["Sports", "Cooking"];
// const user = {
//   name: "Max",
//   age: 34,
// };

// const newHobbies = ["Reading"];

// const mergedHobbies = [...hobbies, ...newHobbies];
// console.log(mergedHobbies);

// const extendedUser = {
//   isAdmin: true,
//   ...user,
// };

// console.log(extendedUser);

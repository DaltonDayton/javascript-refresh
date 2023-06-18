// import default exports
import apiKeyDefault from "./utils.js";

// Import multiple non-default exports (with alias)
import { apiKey, abc as content } from "./utils.js";

// Import everything
import * as utils02 from "./utils02.js";

console.log("apiKeyDefault: " + apiKeyDefault);
console.log("apiKey: " + apiKey);
console.log("abc as content: " + content);

console.log("utils02.default: " + utils02.default);
console.log("utils02.apiKey: " + utils02.apiKey);
console.log("utils02.zxy: " + utils02.zxy);

class User {
  constructor(name, age) {
    this.name = name;
    this.age = age;
  }

  greet() {
    console.log("Hi");
  }
}

const user1 = new User("Max", 30);
console.log(user1);

/* eslint-disable */
import "bootstrap";
import "./style.css";

import "./assets/img/rigo-baby.jpg";
import "./assets/img/4geeks.ico";

window.onload = function() {
  let pronoun = ["the", "our"];
  let adj = ["great", "big"];
  let noun = ["jogger", "racoon"];
  for (let p of pronoun) {
    for (let a of adj) {
      for (let n of noun) {
        console.log(p + a + n + ".com");
      }
    }
  }
  console.log("Hello Rigo from the console!");
};

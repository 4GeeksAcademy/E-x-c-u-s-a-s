/* eslint-disable */
import "bootstrap";
import "./style.css";

import "./assets/img/rigo-baby.jpg";
import "./assets/img/4geeks.ico";

window.onload = function() {
  //write your code here
  let who = ["The dog", "My grandma", "The mailman", "My bird"];
  let action = ["ate", "peed", "crushed", "broke"];
  let what = ["my homework", "my phone", "the car"];
  let when = [
    "before the class",
    "when I was sleeping",
    "while I was exercising",
    "during my lunch",
    "while I was praying"
  ];

  let ramdon1 = Math.floor(Math.random() * who.length);

  let ramdon2 = Math.floor(Math.random() * action.length);

  let ramdon3 = Math.floor(Math.random() * what.length);

  let ramdon4 = Math.floor(Math.random() * when.length);

  document.querySelector("#excuse").innerHTML =  who[ramdon1] + " " + action.[ramdon2] + " " + what[ramdon3] + " " + when[ramdon4];
};

let result = document.getElementById("result");
let options = {
  rock: {
    rock: "draw",
    scissor: "win",
    paper: "lose",
    bomb: "lose",
  },
  scissor: {
    rock: "lose",
    scissor: "draw",
    paper: "win",
    bomb: "lose",
  },
  paper: {
    rock: "win",
    scissor: "lose",
    paper: "draw",
    bomb: "lose",
  },
  bomb: {
    rock: "win",
    scissor: "win",
    paper: "win",
    bomb: "draw",
  },
};

function checker(input) {
  var selections = ["rock", "paper", "scissor"];
  var random_num = Math.floor(Math.random() * 3);
  document.getElementById(
    "comp_choice"
  ).innerHTML = ` Computer choose: ${selections[random_num]} `;

  document.getElementById("user_choice").innerHTML = ` You choose:  ${input} `;

  // function checker(input) {
  //   var selections = ["rock", "paper", "scissor", "bomb"];
  //   var random_num = Math.floor(Math.random() * 4);
  //   document.getElementById(
  //     "comp_choice"
  //   ).innerHTML = ` Computer choose  ${selections[random_num].toUpperCase()} `;

  //   document.getElementById(
  //     "user_choice"
  //   ).innerHTML = ` You choose  ${input.toUpperCase()} `;
  switch (options[input][selections[random_num]]) {
    case "win":
      result.innerHTML = "YOU WIN  🥰 ";
      break;
    case "lose":
      result.innerHTML = "YOU LOSE 😭";
      break;
    default:
      result.innerHTML = "DRAW 🙌";
      break;
  }
}

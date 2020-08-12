export default function evaluateGame(userPicked, housePicked) {
  console.log({ userPicked, housePicked });
  if (userPicked === "" || !housePicked === "") return;
  if (userPicked === housePicked) return "It's a draw!";
  switch (userPicked) {
    case "rock":
      if (housePicked === "scissors" || housePicked === "lizard")
        return "You win";
      return "Looser";
    case "paper":
      if (housePicked === "rock" || housePicked === "spock") return "You win";
      return "Looser";
    case "scissors":
      if (housePicked === "paper" || housePicked === "lizard") return "You win";
      return "Looser";
    case "lizard":
      if (housePicked === "spock" || housePicked === "paper") return "You win";
      return "Looser";
    case "spock":
      if (housePicked === "scissors" || housePicked === "rock")
        return "You win";
      return "Looser";
    default:
      return "No case";
  }
}

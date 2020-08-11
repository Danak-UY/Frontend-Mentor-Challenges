export default function evaluateGame(userPicked, housePicked) {
  console.log(userPicked);
  console.log(housePicked);
  if (userPicked === "" || !housePicked === "") return;
  if (userPicked === housePicked) return "It's a draw!";
}

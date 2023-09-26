function scuberGreetingForFeet(someValue) {
  // Write your code here!
  if (someValue > 2500) {
    return "No can do.";
  } else if (someValue > 400 && someValue < 2000) {
    return "I will gladly take your thirty bucks.";
  } else if (someValue <= 400) {
    return "This one is on me!";
  }
}

function ternaryCheckCity(city) {
  // Write your code here!
  let isNYC = city == "NYC" ? "Ok, sounds good." : "No go.";
  return isNYC;
}

function switchOnCharmFromTip(tip) {
  // Write your code here!
  let tipOffer;
  switch (tip) {
    case "generous":
      tipOffer = "Thank you so much.";
      break;
    case "not generous":
      tipOffer = "Thank you.";
      break;
    default:
      tipOffer = "Bye.";
  }
  return tipOffer;
}

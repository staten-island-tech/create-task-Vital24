import "../Css/style.css";

function catogory() {
  let input = 30;
  if ((input >= 10) & (input <= 32)) {
    let Amount = input;
    console.log(Amount);
  } else {
    console.log("You suck");
  }
  if (condition) {
  } else {
  }
}

catogory();
const URL = `https://opentdb.com/api.php?amount=${Amount}&category=${Catogory}&difficulty=${Difficulty}&type=multiple`;

const URLCATO = "https://opentdb.com/api_category.php";
async function CatoInfo() {
  const CatoData = await fetch(URLCATO);
  const CatoJson = await CatoData.json();
  // console.log(CatoJson.trivia_categories);
  let result = CatoJson.trivia_categories.map((el) => el.name);
  return result;
}

const Catogories = await CatoInfo();
console.log(Catogories);

// Catogories.forEach((el) => {
//   i = 9;
//   i++;

//   let el = i;
//   console.log(el);
// });

let CatoId = Catogories.map((el, Index) => {
  // i = 9;
  // i++;

  let d = Index;
  console.log(poo);
});

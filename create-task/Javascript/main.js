import "../Css/style.css";
import { Dom } from "./DOM";

function UserInputs() {
  const Amount = parseFloat(Dom.UserAmount.value);
  const Difficulty = Dom.UserDifficulty.value.toLowerCase();
  const CatogoryStr = Dom.UserCatogory.value;
  const Catogory = parseFloat(CatogoryStr) + 9;

  if ((Catogory <= 9) | (Catogory >= 33)) {
    console.log("Wrong");
  } else {
    console.log("Shit", Catogory);
  }

  if (
    (Difficulty == "easy") |
    (Difficulty == "medium") |
    (Difficulty == "hard") |
    (Difficulty == "")
  ) {
    console.log(Difficulty);
  } else {
    console.log("Do it Right");
  }

  if ((Amount >= 51) | (Amount <= 0)) {
    console.log("Choose a number between 1-50");
  } else {
    console.log(Amount);
  }
}

const URLCATO = "https://opentdb.com/api_category.php";
async function GetList() {
  const CatoData = await fetch(URLCATO);
  const CatoJson = await CatoData.json();
  let Index = 1;

  CatoJson.trivia_categories.forEach((el) => {
    let IndexNum = Index++;
    Dom.CatoList.insertAdjacentHTML(
      "beforeend",
      `<p>${IndexNum} ${el.name}</p>`
    );
    console.log(IndexNum);
  });
}

GetList();

Dom.Settings.addEventListener("submit", function (abc) {
  UserInputs();
  abc.preventDefault();
});

const URL = `https://opentdb.com/api.php?amount=${Amount}&category=${Catogory}&difficulty=${Difficulty}&type=multiple`;

async function CatoInfo() {
  const CatoData = await fetch(URLCATO);
  const CatoJson = await CatoData.json();
  // console.log(CatoJson.trivia_categories);
  let result = CatoJson.trivia_categories.map((el) => el.name);
  return result;
}

const Catogories = await CatoInfo();
console.log(Catogories);

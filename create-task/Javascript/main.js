import "../Css/style.css";
import { Dom } from "./DOM";

const Amount = parseFloat(Dom.UserAmount.value);
const Difficulty = Dom.UserDifficulty.value.toLowerCase();
const CatogoryStr = Dom.UserCatogory.value;
const Catogory = parseFloat(CatogoryStr) + 8;

function UserInputs(Amount, Difficulty, Catogory) {
  Dom.Questions.innerHTML = "";

  const URL = `https://opentdb.com/api.php?amount=${Amount}&category=${Catogory}&difficulty=${Difficulty}&type=multiple`;

  console.log(URL);

  if (
    (Catogory >= 8) | (Catogory <= 32) &&
    (Amount <= 50) | (Amount >= 1) &&
    (Difficulty == "easy") |
      (Difficulty == "medium") |
      (Difficulty == "hard") |
      (Difficulty == "")
  ) {
    GetData(URL);
  } else {
    Dom.Questions.insertAdjacentHTML(
      "beforeend",
      "<h1>Error: The settings is wrong</h1>"
    );
  }

  return URL;
}

function shuffle(array) {
  array.sort(() => Math.random() - 0.5);
}

async function GetData(URL) {
  const QData = await fetch(URL);
  const ResultData = await QData.json();
  console.log(ResultData);
  let Index = 1;
  let CorrectA = [];
  ResultData.results.forEach((el) => {
    let Quest = [];

    CorrectA.push(`${el.correct_answer}`);
    Quest.push(
      `${el.incorrect_answers[0]}`,
      `${el.incorrect_answers[1]}`,
      `${el.incorrect_answers[2]}`,
      `${el.correct_answer}`
    );

    shuffle(Quest);

    console.log(Quest);
    let IndexNum = Index++;
    Dom.Questions.insertAdjacentHTML(
      "beforeend",
      `<h3 class="SStyles">Q.${IndexNum} ${el.question}</h3>
       <h3 class="SStyles">${el.category}</h3>
       <h4 class="SStyles">${
         el.difficulty.charAt(0).toUpperCase() + el.difficulty.slice(1)
       }</h4>
       <p class="Questions QStyles">${Quest[0]}</p>
       <p class="Questions QStyles">${Quest[1]}</p>
       <p class="Questions QStyles">${Quest[2]}</p>
       <p class="Questions QStyles">${Quest[3]}</p>
       
       `
    );
  });

  let Num = 1;
  CorrectA.forEach((el) => {
    let IndexNum = Num++;
    Dom.Answers.insertAdjacentHTML(
      "beforeend",

      `<h5 class="">${IndexNum}- ${el}</h5>
     `
    );
  });
  Dom.Answers.addEventListener("click", function (abc) {
    abc.preventDefault();
    Dom.Answers.classList.remove("blur");
  });
  console.log(CorrectA);
}

async function GetList() {
  const URLCATO = "https://opentdb.com/api_category.php";
  const CatoData = await fetch(URLCATO);
  const CatoJson = await CatoData.json();
  let Index = 1;

  CatoJson.trivia_categories.forEach((el) => {
    let IndexNum = Index++;
    Dom.CatoList.insertAdjacentHTML(
      "beforeend",
      `<p>${IndexNum} ${el.name}</p>`
    );
  });
}

GetList();

Dom.Settings.addEventListener("submit", function (abc) {
  UserInputs(Amount, Difficulty, Catogory);
  abc.preventDefault();
  Dom.Gone.innerHTML = "";
});

import "../Css/style.css";
import { Dom } from "./DOM";

function UserInputs() {
  Dom.Questions.innerHTML = "";
  const Amount = parseFloat(Dom.UserAmount.value);
  const Difficulty = Dom.UserDifficulty.value.toLowerCase();
  const CatogoryStr = Dom.UserCatogory.value;
  const Catogory = parseFloat(CatogoryStr) + 8;

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

  const URL = `https://opentdb.com/api.php?amount=${Amount}&category=${Catogory}&difficulty=${Difficulty}&type=multiple`;

  console.log(URL);
  GetData(URL);

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
  ResultData.results.forEach((el) => {
    let Quest = [];

    Quest.push(
      `${el.incorrect_answers[0]}`,
      `${el.incorrect_answers[1]}`,
      `${el.incorrect_answers[2]}`,
      `Correct: ${el.correct_answer}`
    );

    shuffle(Quest);

    console.log(Quest);
    let IndexNum = Index++;
    Dom.Questions.insertAdjacentHTML(
      "beforeend",
      `<h3>Q.${IndexNum}${el.question}</h3>
       <h3 class="QStyles">Category: ${el.category}</h3>
       <h4 class="QStyles">Difficulty ${el.difficulty}</h4>
       <p class="QStyles">${Quest[0]}</p>
       <p class="QStyles">${Quest[1]}</p>
       <p class="QStyles">${Quest[2]}</p>
       <p class="QStyles">${Quest[3]}</p>
       `
    );
  });
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
  UserInputs();
  abc.preventDefault();
  Dom.Gone.innerHTML = "";
});

async function Questions(URL) {}

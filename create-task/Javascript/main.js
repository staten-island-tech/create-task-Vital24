import "../Css/style.css";

// const URL = `https://opentdb.com/api.php?amount=${Amount}&category=${Catogory}&difficulty=${Difficulty}&type=multiple`;

const URLCATO = "https://opentdb.com/api_category.php";
async function CatoInfo() {
  const CatoData = await fetch(URLCATO);
  const CatoJson = await CatoData.json();
  console.log(CatoJson.trivia_categories);
  let result = CatoJson.trivia_categories.map((el) => el.name);
  return result;
}

const Catogories = await CatoInfo();
console.log(Catogories);

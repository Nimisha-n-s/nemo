const searchBarContainerEl = document.querySelector(".search-bar-container");
const searchWrapper = document.querySelector(".search-bar-container");
const inputBox = searchWrapper.querySelector("input");
const suggBox = searchWrapper.querySelector(".autocom-box");
const icon = searchWrapper.querySelector(".icon");
let linkTag = searchWrapper.querySelector("a");
const magnifierEl = document.querySelector(".magnifier");
let webLink;
const containern = document.getElementById("containern");

let suggestions =  [ "SARAN T K ", "AADIL SAYYID SABITH.E.M ", "ABDUL RAHEEM EA ", "ABIJITH K S ", "ABIN PAUL V ", "ABINAS SULAIMAN ", "AFZAL K SHAJAHAN ", "AJAY O S ", "AJMAL T ABDU ", "AKARSHKRISHNA A ", "AKASH CHEM. J ", "AKHIYAR MUHAMMED ", "AKSHAY KUMAR ", "ALAN KRISHNA ", "ALEX JOBY ", "AMEER N N ", "ANJAL SAJU ", "ANSHAD C MOIDEEN ", "ARYA PRADEEP ", "ASWIN SABU ", "AZAS HANEEFA ", "CHANDIK .V. R ", "DHANUSH K KRISHNANKUTTY ", "DOMNIC SAVIYO FIGARUS ", "FASILA KASIM ", "GOKUL SURESH ", "HARIKRISHNAN M R ", "KRISHNAPRASAD AYYAPPAN ", "LINO ANTONY ", "MUHAMMAD IJAZ K I ", "MUHAMMED ALTHAF ", "MUHAMMED ANZIL JABBAR ", "MUHAMMED IBRAHIM K H ", "MUHAMMED IQBAL P A ", "MUHAMMED NADHEEM T.I ", "MUHAMMED SHAHIN A.K ", "NAKUL M.N. ", "NIKHIL VENU ", "NIMISHA N S ", "RENJITH N S ", "SHAHUL N.R ", "SURYADAS K P ", "T P MANUPRASAD ", "HARIS T L ", "GAUTHAM SUMEER K S ", "MUHAMMED SHIJAS REJI ", "ABHISHEK SUNDARAN ", "AFWAN SHA J ", "AKSHAY M M ", "AMAYARAJ K V ", "BASIL DENNY ", "CLIVE STIYAN D COTH ", "EBIN ALIAS ", "EDWIN MATHAI KOORAN ", "LEONA SHIBU ", "M R AKSHAI ", "MOHAMMED SIDDIQUE P S ", "SABIYA ABRAHAM ", "SIJIL GEORGE ", "SOORYAJITH BAIJU ", "SREEHARI K P ", "YASIR MUHAMMED",];
magnifierEl.addEventListener("click", () => {
  searchBarContainerEl.classList.toggle("active");
});

inputBox.onkeyup = (e)=> {
  let userData = e.target.value;
  let emptyArray = [];
  if(userData) {
    emptyArray = suggestions.filter((data)=> {
      return data.toLocaleLowerCase().startsWith(userData.toLocaleLowerCase());
    });
    emptyArray = emptyArray.map((data)=> {
      return data = `<li onclick="select(this)" >${data}</li>`;
    });
    suggBox.classList.add("active");
    showSuggestions(emptyArray);
  } else {
    suggBox.classList.remove("active"); //hide autocomplete box
  }
}

function select(element) {
  let selectData = element.textContent;
  let id = 0;
  for (let i = 0; i < suggestions.length; i++) {
    if(suggestions[i] ==  selectData) {
      id = i+1; 
      break;
    }
  }
  if(id == 0) {
    window.location.href = "profile.html";
  } else {
    window.location.href = "user.html?id=" + id;
  }
  searchBarContainerEl.classList.remove("active");
}

function showSuggestions(list) {
  let listData;
  if(!list.length){
    userValue = inputBox.value;
    listData = `<li>:) NO RESULT FOUND! :) </li>`;
  } else {
    listData = list.join('');
  }
  suggBox.innerHTML = listData;
}
const searchBarContainerEl = document.querySelector(".search-bar-container");

const magnifierEl = document.querySelector(".magnifier");

magnifierEl.addEventListener("click", () => {
  searchBarContainerEl.classList.toggle("active");
});

let suggestions = [
  "SARAN T K",
  "AADIL SAYYID SABITH.E.M ",
  "ABDUL RAHEEM EA ",
  "ABIJITH K S ",
  "ABIN PAUL V ",
  "ABINAS SULAIMAN ",
  "AFZAL K SHAJAHAN ",
  "AJAY O S ",
  "AJMAL T ABDU ",
  "AKARSHKRISHNA A ",
  "AKASH CHEM. J ",
  "AKHIYAR MUHAMMED ",
  "AKSHAY KUMAR ",
  "ALAN KRISHNA ",
  "ALEX JOBY ",
  "AMEER N N ",
  "ANJAL SAJU ",
  "ANSHAD C MOIDEEN ",
  "ARYA PRADEEP ",
  "ASHKAR ALI ",
  "ASWIN SABU ",
  "AZAS HANEEFA ",
  "CHANDIK .V. R ",
  "DHANUSH K KRISHNANKUTTY ",
  "DOMNIC SAVIYO FIGARUS ",
  "FASILA KASIM ",
  "GOKUL SURESH ",
  "HARIKRISHNAN M R ",
  "KRISHNAPRASAD AYYAPPAN ",
  "LINO ANTONY ",
  "MUHAMMAD IJAZ K I ",
  "MUHAMMED ALTHAF ",
  "MUHAMMED ANZIL JABBAR ",
  "MUHAMMED IBRAHIM K H ",
  "MUHAMMED IQBAL P A ",
  "MUHAMMED NADHEEM T.I ",
  "MUHAMMED SHAHIN A.K ",
  "NAKUL M.N. ",
  "NIKHIL VENU ",
  "NIMISHA N S "

];
const searchWrapper = document.querySelector(".search-bar-container");
const inputBox = searchWrapper.querySelector("input");
const suggBox = searchWrapper.querySelector(".autocom-box");
const icon = searchWrapper.querySelector(".icon");
let linkTag = searchWrapper.querySelector("a");
let webLink;

inputBox.addEventListener("keypress", function(event) {
  if (event.key === "Enter") {
    console.log("Enter");
  }
});

// if user press any key and release
inputBox.onkeyup = (e)=> {
  let userData = e.target.value; //user enetered data
  let emptyArray = [];
  if(userData) {
      //icon.onclick = ()=> {
      //    webLink = `https://www.google.com/search?q=${userData}`;
      //    linkTag.setAttribute("href", webLink);
      //    linkTag.click();
      //}
      emptyArray = suggestions.filter((data)=>{
          //filtering array value and user characters to lowercase and return only those words which are start with user enetered chars
          return data.toLocaleLowerCase().startsWith(userData.toLocaleLowerCase());
      });
      emptyArray = emptyArray.map((data)=>{
          // passing return data inside li tag
          return data = `<li>${data}</li>`;
      });
      suggBox.classList.add("active"); //show autocomplete box
      showSuggestions(emptyArray);
      let allList = suggBox.querySelectorAll("li");
      for (let i = 0; i < allList.length; i++) {
          //adding onclick attribute in all li tag
          allList[i].setAttribute("onclick", "select(this)");
      }
  }else{
      suggBox.classList.remove("active"); //hide autocomplete box
  }
}
//function select(element){
//  let selectData = element.textContent;
//  inputBox.value = selectData;
//  icon.onclick = ()=>{
//      webLink = `https://www.google.com/search?q=${selectData}`;
//      linkTag.setAttribute("href", webLink);
//      linkTag.click();
//  }
//  searchWrapper.classList.remove("active");
//}

function showSuggestions(list){
  let listData;
  if(!list.length){
      userValue = inputBox.value;
      listData = `<li>${userValue}</li>`;
  }else{
    listData = list.join('');
  }
  suggBox.innerHTML = listData;
}

const searchBarContainerEl = document.querySelector(".search-bar-container");
const searchWrapper = document.querySelector(".search-bar-container");
const inputBox = searchWrapper.querySelector("input");
const suggBox = searchWrapper.querySelector(".autocom-box");
const icon = searchWrapper.querySelector(".icon");
let linkTag = searchWrapper.querySelector("a");
const magnifierEl = document.querySelector(".magnifier");
let webLink;
const containern = document.getElementById("containern");


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

magnifierEl.addEventListener("click", () => {
  searchBarContainerEl.classList.toggle("active");
  //containern.classList.toggle("active");
  //document.getElementById("myForm").style.display = "block";
});


function closeForm() {
  document.getElementById("myForm").style.display = "none";
}

inputBox.addEventListener("keypress", function(event) {
  if (event.key === "Enter") {
    console.log("Enter");
    //containern.classList.add("active");
    
  }
});

// if user press any key and release
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
    let allList = suggBox.querySelectorAll("li");
    for (let i = 0; i < allList.length; i++) {
        //adding onclick attribute in all li tag
        //allList[i].setAttribute("onclick", "select(this)");
    }
  } else {
    suggBox.classList.remove("active"); //hide autocomplete box
  }
}

function select(element) {
  console.log(element.textContent)
  let selectData = element.textContent;
  document.getElementById("myForm").style.display = "block";
  searchBarContainerEl.classList.remove("active");
}

function showSuggestions(list) {
  let listData;
  if(!list.length){
    userValue = inputBox.value;
    listData = `<li>${userValue}</li>`;
  } else {
    listData = list.join('');
  }
  suggBox.innerHTML = listData;
}


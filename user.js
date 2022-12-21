var userID = window.location.search.split('?id=')[1];
let users = [
  { rolno: "1 ", DOB: "none", phoneno: "none", class: "S3", Dep: "CT",  registerno: "2101131072", name: "SARAN T K ", },
  { rolno: "2 ", DOB: "none", phoneno: "none", class: "S3", Dep: "CT",  registerno: "2101131886", name: "AADIL SAYYID SABITH.E.M ", },
  { rolno: "3 ", DOB: "none", phoneno: "none", class: "S3", Dep: "CT",  registerno: "2101131887", name: "ABDUL RAHEEM EA ", },
  { rolno: "4 ", DOB: "none", phoneno: "none", class: "S3", Dep: "CT",  registerno: "2101131888", name: "ABIJITH K S ", },
  { rolno: "5 ", DOB: "none", phoneno: "none", class: "S3", Dep: "CT",  registerno: "2101131889", name: "ABIN PAUL V ", },
  { rolno: "6 ", DOB: "none", phoneno: "none", class: "S3", Dep: "CT",  registerno: "2101131890", name: "ABINAS SULAIMAN ", },
  { rolno: "7 ", DOB: "none", phoneno: "none", class: "S3", Dep: "CT",  registerno: "2101131891", name: "AFZAL K SHAJAHAN ", },
  { rolno: "8 ", DOB: "none", phoneno: "none", class: "S3", Dep: "CT",  registerno: "2101131892", name: "AJAY O S ", },
  { rolno: "9 ", DOB: "none", phoneno: "none", class: "S3", Dep: "CT",  registerno: "2101131893", name: "AJMAL T ABDU ", },
  { rolno: "10", DOB: "none", phoneno: "none", class: "S3", Dep: "CT",  registerno: "2101131894", name: "AKARSHKRISHNA A ", },
  { rolno: "11", DOB: "none", phoneno: "none", class: "S3", Dep: "CT",  registerno: "2101131895", name: "AKASH CHEM. J ", },
  { rolno: "12", DOB: "none", phoneno: "none", class: "S3", Dep: "CT",  registerno: "2101131896", name: "AKHIYAR MUHAMMED ", },
  { rolno: "13", DOB: "none", phoneno: "none", class: "S3", Dep: "CT",  registerno: "2101131897", name: "AKSHAY KUMAR ", },
  { rolno: "14", DOB: "none", phoneno: "none", class: "S3", Dep: "CT",  registerno: "2101131898", name: "ALAN KRISHNA ", },
  { rolno: "15", DOB: "none", phoneno: "none", class: "S3", Dep: "CT",  registerno: "2101131900", name: "ALEX JOBY ", },
  { rolno: "16", DOB: "none", phoneno: "none", class: "S3", Dep: "CT",  registerno: "2101131901", name: "AMEER N N ", },
  { rolno: "17", DOB: "none", phoneno: "none", class: "S3", Dep: "CT",  registerno: "2101131902", name: "ANJAL SAJU ", },
  { rolno: "18", DOB: "none", phoneno: "none", class: "S3", Dep: "CT",  registerno: "2101131903", name: "ANSHAD C MOIDEEN ", },
  { rolno: "19", DOB: "none", phoneno: "none", class: "S3", Dep: "CT",  registerno: "2101131904", name: "ARYA PRADEEP ", },
  { rolno: "21", DOB: "none", phoneno: "none", class: "S3", Dep: "CT",  registerno: "2101131906", name: "ASWIN SABU ", },
  { rolno: "22", DOB: "none", phoneno: "none", class: "S3", Dep: "CT",  registerno: "2101131907", name: "AZAS HANEEFA ", },
  { rolno: "23", DOB: "none", phoneno: "none", class: "S3", Dep: "CT",  registerno: "2101131908", name: "CHANDIK .V. R ", },
  { rolno: "24", DOB: "none", phoneno: "none", class: "S3", Dep: "CT",  registerno: "2101131909", name: "DHANUSH K KRISHNANKUTTY ", },
  { rolno: "25", DOB: "none", phoneno: "none", class: "S3", Dep: "CT",  registerno: "2101131910", name: "DOMNIC SAVIYO FIGARUS ", },
  { rolno: "26", DOB: "none", phoneno: "none", class: "S3", Dep: "CT",  registerno: "2101131911", name: "FASILA KASIM ", },
  { rolno: "27", DOB: "none", phoneno: "none", class: "S3", Dep: "CT",  registerno: "2101131912", name: "GOKUL SURESH ", },
  { rolno: "28", DOB: "none", phoneno: "none", class: "S3", Dep: "CT",  registerno: "2101131913", name: "HARIKRISHNAN M R ", },
  { rolno: "29", DOB: "none", phoneno: "none", class: "S3", Dep: "CT",  registerno: "2101131914", name: "KRISHNAPRASAD AYYAPPAN ", },
  { rolno: "30", DOB: "none", phoneno: "none", class: "S3", Dep: "CT",  registerno: "2101131915", name: "LINO ANTONY ", },
  { rolno: "31", DOB: "none", phoneno: "none", class: "S3", Dep: "CT",  registerno: "2101131918", name: "MUHAMMAD IJAZ K I ", },
  { rolno: "32", DOB: "none", phoneno: "none", class: "S3", Dep: "CT",  registerno: "2101131919", name: "MUHAMMED ALTHAF ", },
  { rolno: "33", DOB: "none", phoneno: "none", class: "S3", Dep: "CT",  registerno: "2101131920", name: "MUHAMMED ANZIL JABBAR ", },
  { rolno: "34", DOB: "none", phoneno: "none", class: "S3", Dep: "CT",  registerno: "2101131921", name: "MUHAMMED IBRAHIM K H ", },
  { rolno: "35", DOB: "none", phoneno: "none", class: "S3", Dep: "CT",  registerno: "2101131922", name: "MUHAMMED IQBAL P A ", },
  { rolno: "36", DOB: "none", phoneno: "none", class: "S3", Dep: "CT",  registerno: "2101131923", name: "MUHAMMED NADHEEM T.I ", },
  { rolno: "37", DOB: "none", phoneno: "none", class: "S3", Dep: "CT",  registerno: "2101131924", name: "MUHAMMED SHAHIN A.K ", },
  { rolno: "38", DOB: "none", phoneno: "none", class: "S3", Dep: "CT",  registerno: "2101131925", name: "NAKUL M.N. ", },
  { rolno: "39", DOB: "none", phoneno: "none", class: "S3", Dep: "CT",  registerno: "2101131926", name: "NIKHIL VENU ", },
  { rolno: "40", DOB: "none", phoneno: "none", class: "S3", Dep: "CT",  registerno: "2101131927", name: "NIMISHA N S ", },
  { rolno: "41", DOB: "none", phoneno: "none", class: "S3", Dep: "CT",  registerno: "2101131928", name: "RENJITH N S ", },
  { rolno: "42", DOB: "none", phoneno: "none", class: "S3", Dep: "CT",  registerno: "2101131929", name: "SHAHUL N.R ", },
  { rolno: "44", DOB: "none", phoneno: "none", class: "S3", Dep: "CT",  registerno: "2101131932", name: "SURYADAS K P ", },
  { rolno: "45", DOB: "none", phoneno: "none", class: "S3", Dep: "CT",  registerno: "2101131933", name: "T P MANUPRASAD ", },
  { rolno: "46", DOB: "none", phoneno: "none", class: "S3", Dep: "CT",  registerno: "2101131957", name: "HARIS T L ", },
  { rolno: "47", DOB: "none", phoneno: "none", class: "S3", Dep: "CT",  registerno: "2101132384", name: "GAUTHAM SUMEER K S ", },
  { rolno: "48", DOB: "none", phoneno: "none", class: "S3", Dep: "CT",  registerno: "2101132562", name: "MUHAMMED SHIJAS REJI ", },
  { rolno: "49", DOB: "none", phoneno: "none", class: "S3", Dep: "CT",  registerno: "2101132874", name: "ABHISHEK SUNDARAN ", },
  { rolno: "50", DOB: "none", phoneno: "none", class: "S3", Dep: "CT",  registerno: "2101132875", name: "AFWAN SHA J ", },
  { rolno: "51", DOB: "none", phoneno: "none", class: "S3", Dep: "CT",  registerno: "2101132876", name: "AKSHAY M M ", },
  { rolno: "52", DOB: "none", phoneno: "none", class: "S3", Dep: "CT",  registerno: "2101132877", name: "AMAYARAJ K V ", },
  { rolno: "53", DOB: "none", phoneno: "none", class: "S3", Dep: "CT",  registerno: "2101132878", name: "BASIL DENNY ", },
  { rolno: "54", DOB: "none", phoneno: "none", class: "S3", Dep: "CT",  registerno: "2101132879", name: "CLIVE STIYAN D COTH ", },
  { rolno: "55", DOB: "none", phoneno: "none", class: "S3", Dep: "CT",  registerno: "2101132880", name: "EBIN ALIAS ", },
  { rolno: "56", DOB: "none", phoneno: "none", class: "S3", Dep: "CT",  registerno: "2101132881", name: "EDWIN MATHAI KOORAN ", },
  { rolno: "57", DOB: "none", phoneno: "none", class: "S3", Dep: "CT",  registerno: "2101132882", name: "LEONA SHIBU ", },
  { rolno: "58", DOB: "none", phoneno: "none", class: "S3", Dep: "CT",  registerno: "2101132883", name: "M R AKSHAI ", },
  { rolno: "59", DOB: "none", phoneno: "none", class: "S3", Dep: "CT",  registerno: "2101132884", name: "MOHAMMED SIDDIQUE P S ", },
  { rolno: "60", DOB: "none", phoneno: "none", class: "S3", Dep: "CT",  registerno: "2101132885", name: "SABIYA ABRAHAM ", },
  { rolno: "61", DOB: "none", phoneno: "none", class: "S3", Dep: "CT",  registerno: "2101132886", name: "SIJIL GEORGE ", },
  { rolno: "62", DOB: "none", phoneno: "none", class: "S3", Dep: "CT",  registerno: "2101132887", name: "SOORYAJITH BAIJU ", },
  { rolno: "63", DOB: "none", phoneno: "none", class: "S3", Dep: "CT",  registerno: "2101132888", name: "SREEHARI K P ", },
  { rolno: "65", DOB: "none", phoneno: "none", class: "S3", Dep: "CT",  registerno: "2101132890", name: "YASIR MUHAMMED", },
];

let suggestions =  [ "SARAN T K ", "AADIL SAYYID SABITH.E.M ", "ABDUL RAHEEM EA ", "ABIJITH K S ", "ABIN PAUL V ", "ABINAS SULAIMAN ", "AFZAL K SHAJAHAN ", "AJAY O S ", "AJMAL T ABDU ", "AKARSHKRISHNA A ", "AKASH CHEM. J ", "AKHIYAR MUHAMMED ", "AKSHAY KUMAR ", "ALAN KRISHNA ", "ALEX JOBY ", "AMEER N N ", "ANJAL SAJU ", "ANSHAD C MOIDEEN ", "ARYA PRADEEP ", "ASWIN SABU ", "AZAS HANEEFA ", "CHANDIK .V. R ", "DHANUSH K KRISHNANKUTTY ", "DOMNIC SAVIYO FIGARUS ", "FASILA KASIM ", "GOKUL SURESH ", "HARIKRISHNAN M R ", "KRISHNAPRASAD AYYAPPAN ", "LINO ANTONY ", "MUHAMMAD IJAZ K I ", "MUHAMMED ALTHAF ", "MUHAMMED ANZIL JABBAR ", "MUHAMMED IBRAHIM K H ", "MUHAMMED IQBAL P A ", "MUHAMMED NADHEEM T.I ", "MUHAMMED SHAHIN A.K ", "NAKUL M.N. ", "NIKHIL VENU ", "NIMISHA N S ", "RENJITH N S ", "SHAHUL N.R ", "SURYADAS K P ", "T P MANUPRASAD ", "HARIS T L ", "GAUTHAM SUMEER K S ", "MUHAMMED SHIJAS REJI ", "ABHISHEK SUNDARAN ", "AFWAN SHA J ", "AKSHAY M M ", "AMAYARAJ K V ", "BASIL DENNY ", "CLIVE STIYAN D COTH ", "EBIN ALIAS ", "EDWIN MATHAI KOORAN ", "LEONA SHIBU ", "M R AKSHAI ", "MOHAMMED SIDDIQUE P S ", "SABIYA ABRAHAM ", "SIJIL GEORGE ", "SOORYAJITH BAIJU ", "SREEHARI K P ", "YASIR MUHAMMED",];
if (!userID) {
  alert("ERROR FOUND");
  window.location.href = "profile.html";
} else {
    var usr = suggestions[userID-1];
    for(i=0; i<users.length; i++) {
        if (users[i].name == usr) {
          let us = JSON.stringify(users[i]);
          localStorage.setItem("user", us);
            break;
        }
    }
}

let text = localStorage.getItem("user");
let obj = JSON.parse(text);
let mail = obj.name.replace(/\s/g, '').toLowerCase();
let c = ` <body>
<header>
  <h1>USER DATA</h1>
  </header>
  <section>
      <h1></h1>
      <div class="container">
          <h2>Student Details</h2>
              <span>NAME&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;:&nbsp;&nbsp;&nbsp;&nbsp;${obj.name}</span>
              <span>ROLL&nbsp;&nbsp;NO&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;:&nbsp;&nbsp;&nbsp;&nbsp;${obj.rolno}</span>
              <span>DOB&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;:&nbsp;&nbsp;&nbsp;&nbsp;${obj.DOB}</span>
              <span>REGISTER&nbsp;&nbsp;NO&nbsp;&nbsp;:&nbsp;&nbsp;&nbsp;&nbsp;${obj.registerno}</span>
              <span>BRANGE&nbsp;&nbsp;DEP&nbsp;&nbsp;&nbsp;:&nbsp;&nbsp;&nbsp;&nbsp;${obj.class} , ${obj.Dep}</span>
              <span>Phone&nbsp;&nbsp;No&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;:&nbsp;&nbsp;&nbsp;&nbsp; ${obj.phoneno}</span>
              <span>EMAIL&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;:&nbsp;&nbsp;&nbsp;&nbsp; ${mail}@gmail.com </span>
      </div>
      <a href="profile.html" class="btn">-> BACK -></a>
  </section>
  </body>`
  document.write(c)
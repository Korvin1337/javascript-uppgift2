/*
Uppgift 1:
Använd variabeln blue för att "toggla" bakrgrundsfärgen mellan blå och vit
för diven med id answer-one när man klickar på knappen
*/

let blue = false;

function taskOne() {
  let answerOne = document.getElementById("answer-one");
  if (blue == false) {
      answerOne.style.backgroundColor = "blue";
      blue = true;
  } else if (blue == true) {
      answerOne.style.backgroundColor = "white";
      blue = false;
  }
}

/*
Uppgift 2:
Varje gång man klickar på knappen ska ett nytt random-värde
läggas till i numbers-arrayen, innan arrayen renderas ut i diven med id answer-two
*/

const numbers = [234, 986, 784];

function taskTwo() {
  let answerTwo = document.getElementById("answer-two");
  numbers.push(Math.round(Math.random() * 1000));
  numbers.sort((a,b) => a-b);
  answerTwo.innerHTML = numbers;
}

/*
Uppgift 3:
Identifiera vilken dag i veckan det är, ifall det är helg (lördag eller söndag)
ska du trigga en alert med meddelandet "Woohooo it's weekend" annars om det
inte är helg ska du trigga en alert med meddelandet "FML"
*/

function taskThree() {
  let answerThree = document.getElementById("answer-three");
  if (new Date().getDay() > 4) {
      alert("Woohooo it's weekend");
  } else if (new Date().getDay() <= 4) {
      alert("FML");
  }
}

/*
Uppgift 4:
Anropa funktionen multiplier och förse den med två argument (värden), multiplier ska sedan
undersöka om dessa värden är nummer, om så är fallet ska värdena multipliceras och resultatet
ska sedan visas i en alert-box utefter följande: Produkten är: [RESULTATET], annars om ett av
eller båda värdena inte är ett nummer ska en alertbox med meddelandet "Jag kan bara multiplicera numer" triggas
*/

function multiplier(valueOne, valueTwo) {
  if (!isNaN(valueOne) && !isNaN(valueTwo)) {
      alert("Produkten är: " + (valueOne * valueTwo));
  } else if (isNaN(valueOne) || isNaN(valueTwo)) {
      alert("Jag kan bara multiplicera nummer");
  }
}

function taskFour() {
  multiplier(4, 5);
  /*multiplier("apa", 5);
  multiplier("apa", "apa");
  multiplier("123", "apa");*/
  //Funkar med strängar, antar det är bra för enkelhetens skull ändå (:
  /*multiplier("123", "456");*/
}

/*
Uppgift 5:
Börja med att iterera över arrayen fruits, om värdet är "apelsin" eller "päron"
ska du pusha värdet till trash-arrayen, annars ska du pusha värdet till eatable-arrayen,
du ska sedan rendera ut båda arrayerna i diven "answer-five", där eatable arrayen ska
prefixas av "Ätligt:" i bold och trash-arrayens värden ska prefixas av "Skräp:" i bold

Det kommer alltså att se ut såhär
Ätligt: banan, äpple, citron
Skräp: apelsin, päron
*/

const fruits = ["banan", "äpple", "citron", "apelsin", "päron"];
const eatable = [];
const trash = [];

function taskFive() {
  let answerFive = document.getElementById("answer-five");
  for (let i = 0; i < fruits.length; i++) {
    if (fruits[i] != "apelsin" && fruits[i] != "päron") {
        eatable.push(fruits[i]);
    } else if (fruits[i] == "apelsin" || fruits[i] == "päron") {
        trash.push(fruits[i]);
    }
  }
  answerFive.innerHTML = "<small>";
  answerFive.innerHTML += "<b>Ätligt: ";
  for (let i = 0; i < eatable.length; i++) {
      answerFive.innerHTML += eatable[i] + ", ";
  }
  answerFive.innerHTML += "</b>";
  answerFive.innerHTML = answerFive.innerHTML.substring(0, answerFive.innerHTML.length - 2);
  answerFive.innerHTML += "<b>Skräp: ";
  for (let i = 0; i < trash.length; i++) {
      answerFive.innerHTML += trash[i] + ", ";
  }
  answerFive.innerHTML = answerFive.innerHTML.substring(0, answerFive.innerHTML.length - 2);
  answerFive.innerHTML += "</b" + "</small>";
}

/*
Uppgift 6:
Börja med att iterera över arrayen persons, om personens age-attribut är över eller lika med 30
ska du pusha personens namn till overThirty-arrayen, annars ska du pusha värdet till underThirty-arrayen,
du ska sedan kolla om personens married-attribut är true eller false, är det true ska du pusha personens
namn till married-arrayen, annars ska du pusha personens namn till notMarried-arrayen.

Du ska sedan rendera ut alla arrayerna i diven "answer-six", där overThirty arrayens värden ska
prefixas av "Över 30:" i bold, underThirty-arrayens värden ska prefixas av "Under 30:" i bold,
married-arrayens värden ska prefixas av "Gift:" i bold och notMarried-arrayens värden ska prefixas av "Ogift:" i bold

Det kommer alltså att se ut såhär
Över 30: Christian
Under 30: Diana,Carl,Karin
Gift: Christian,Diana
Ogift: Carl,Karin
*/

const persons = [
  { name: "Christian", age: 31, married: true },
  { name: "Diana", age: 29, married: true },
  { name: "Carl", age: 28, married: false },
  { name: "Karin", age: 29, married: false },
];

const married = [];
const notMarried = [];
const overThirty = [];
const underThirty = [];

function taskSix() {
  let answerSix = document.getElementById("answer-six");
  for (let i = 0; i < persons.length; i++) {
      if (persons[i].age >= 30) {
          overThirty.push(persons[i]);
      } else if (persons[i].age < 30) {
          underThirty.push(persons[i]);
      }
  }
  for (let i = 0; i < persons.length; i++) {
      if (persons[i].married == true) {
          married.push(persons[i]);
      } else if (persons[i].married == false) {
          notMarried.push(persons[i]);
      }
  }
  answerSix.innerHTML = "<strong>Över 30: </strong><small>";
  for (let i = 0; i < overThirty.length; i++) {
      answerSix.innerHTML += JSON.stringify(overThirty[i].name) + ", ";
  }
  answerSix.innerHTML = answerSix.innerHTML.substring(0, answerSix.innerHTML.length - 2);
  answerSix.innerHTML += "</small><strong>Under 30: ";
  for (let i = 0; i < underThirty.length; i++) {
      answerSix.innerHTML += JSON.stringify(underThirty[i].name) + ", ";
  }
  answerSix.innerHTML = answerSix.innerHTML.substring(0, answerSix.innerHTML.length - 2);
  answerSix.innerHTML += "</small><strong>Gift: ";
  for (let i = 0; i < married.length; i++) {
      answerSix.innerHTML += JSON.stringify(married[i].name) + ", ";
  }
  answerSix.innerHTML = answerSix.innerHTML.substring(0, answerSix.innerHTML.length - 2);
  answerSix.innerHTML += "</small><strong>Ogift: ";
  for (let i = 0; i < notMarried.length; i++) {
      answerSix.innerHTML += JSON.stringify(notMarried[i].name) + ", ";
  }
  answerSix.innerHTML = answerSix.innerHTML.substring(0, answerSix.innerHTML.length - 2);
  answerSix.innerHTML = answerSix.innerHTML.replace(/\"/g, "");
}

/*
Uppgift 7:
Dela upp strängen addMeSomeLineBreaks vid varje komma och skriv
ut texten på en ny rad i diven "answer-seven"
*/

const addMeSomeLineBreaks =
  "Sed ut perspiciatis unde omnis iste natus error sit voluptatem accusantium doloremque laudantium, totam rem aperiam, eaque ipsa quae ab illo inventore veritatis et quasi architecto beatae vitae dicta sunt explicabo. Nemo enim ipsam voluptatem quia voluptas sit aspernatur aut odit aut fugit, sed quia consequuntur magni dolores eos qui ratione voluptatem sequi nesciunt. Neque porro quisquam est, qui dolorem ipsum quia dolor sit amet, consectetur, adipisci velit, sed quia non numquam eius modi tempora incidunt ut labore et dolore magnam aliquam quaerat voluptatem. Ut enim ad minima veniam, quis nostrum exercitationem ullam corporis suscipit laboriosam, nisi ut aliquid ex ea commodi consequatur? Quis autem vel eum iure reprehenderit qui in ea voluptate velit esse quam nihil molestiae consequatur, vel illum qui dolorem eum fugiat quo voluptas nulla pariatur?";

function taskSeven() {
  let answerSeven = document.getElementById("answer-seven");
  let addBreaks = addMeSomeLineBreaks;
  let res = addBreaks.replace(/,/g, "<br>");
  answerSeven.innerHTML = res;
}

/*
Uppgift 8:
Dölj diven med id card-eight i 3 sekunder efter att du klickat på knappenn,
efter att tre sekunder har gått ska diven visas som vanligt igen
*/

function taskEight() {
  let cardEight = document.getElementById("card-eight");
  cardEight.style.display = "none";
  setTimeout(function() {
      cardEight.style.display = "";
  }, 3000);
}

/*
Uppgift 9:
Om klockan är över 17.00 ska bakgrundsfärgen ändras på alla divar med klassen
answer-container till blå, annars ska den ändras till röd
*/

function taskNine() {
  let answerContainer = document.getElementsByClassName("answer-container");
  for (let i = 0; i < answerContainer.length; i++) {
      if (new Date().getHours() >= 17 && new Date().getMinutes() != 0) {
          answerContainer[i].style.backgroundColor = "blue";
      } else if (new Date().getHours() <= 17) {
          answerContainer[i].style.backgroundColor = "red";
      }
  }
}

/*
Uppgift 10:
Sista uppgiften är att bygga en miniräknare genom att anropa och förse
calculator-funktionen med tre argument (se taskTen-funktionen),
i calculator-funktionen ska du sedan göra olika beräkningar (plus, minus, gånger, delat med) på de två
första parametrarna beroende av vad den tredje parametern är satt till ("add", "subtract", "multiply", "divide").
När resultatet har beräknats ska detta visas i en alert-box.

Ytterligare så ska du innan beräkningen görs kontrollera att argument 1 och 2 är satta till nummer
och att argument nummer tre antingen är satt till "add", "subtract", "multiply" eller "divide",
om någon av dessa conditions inte uppfylls ska du visa en alertbox med texten "Något är fel"
*/

function calculator(valueOne, valueTwo, operator) {
  if (!isNaN(valueOne) && !isNaN(valueTwo)) {
    switch(operator) {
      case "add":
        return alert((valueOne + valueTwo));
        break;
      case "subtract":
        return alert((valueOne - valueTwo));
        break;
      case "multiply":
        return alert((valueOne * valueTwo));
        break;
      default:
        return alert("Något är fel");
        break;
    }
    } else if (isNaN(valueOne) || isNaN(valueTwo)) {
      return alert("Något är fel");
    }
}

function taskTen() {
  let answerTen = document.getElementById("answer-ten");
  //första och andra argumentet ska vara nummer, tredje argumentet ska
  //vara en sträng med något av värdena "add", "subtract", "multiply", "divide"
  let answer = calculator(1, 5, "multiply");
}

//

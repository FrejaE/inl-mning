/*
  1. Se om du kan hitta två stycken code smells i följande funktion och rätta till dem.
  Funktionen tar emot en lista med längshoppslängder och syftet med funktionen är att summera
  dessa hopplängder.
  */

function getLength(jumpings: number[]): number {
  return jumpings.reduce(
    (jumpDistanceSoFar, currentJump) => jumpDistanceSoFar + currentJump
  );
}

/*
    2. I detta exempel har vi fokuserat på if-statements. Se om du kan göra exemplet bättre!
    */

class Student {
  constructor(
    public name: string,
    public handedInOnTime: boolean,
    public passed: boolean
  ) {}
}

function getStudentStatus(student: Student): string {
  student.passed =
    student.name === "Sebastian" ? student.handedInOnTime : false;

  return student.passed ? "vg" : "ig";
}

/*
    3. Variabelnamn är viktiga. Kika igenom följande kod och gör om och rätt.
    Det finns flera code smells att identifiera här. Vissa är lurigare än andra.
    */

class CityTemp {
  constructor(
    public city: string,
    public date: Date,
    public temperature: number
  ) {}
}

function averageWeeklyTemperature(cityTemps: CityTemp[]) {
  let result = 0;

  for (let i = 0; i < cityTemps.length; i++) {
    if (cityTemps[i].city === "Stockholm") {
      if (cityTemps[i].date.getTime() > Date.now() - 604800000) {
        result += cityTemps[i].temperature;
      }
    }
  }

  return result / 7;
}

/*
    4. Följande funktion kommer att presentera ett objekt i dom:en. 
    Se om du kan göra det bättre. Inte bara presentationen räknas, även strukturer.
    */

class ShowProduct {
  constructor(
    public name: string,
    public price: number,
    public image: string,
    public parent: HTMLElement
  ) {}
}
function showProduct({ name, price, image, parent }: ShowProduct) {
  let container = document.createElement("div");
  let title = document.createElement("h4");
  let cost = document.createElement("p");
  let imageTag = document.createElement("img");

  title.innerHTML = name;
  cost.innerHTML = price.toString();
  imageTag.src = image;
  imageTag.alt = name;

  container.append(title, imageTag, cost);
  parent.appendChild(container);
}

/*
    5. Följande funktion kommer presentera studenter. Men det finns ett antal saker som 
    går att göra betydligt bättre. Gör om så många som du kan hitta!
    */
function presentStudents(students: Student[]) {
  const listOfStudentPassed = document.querySelector("ul#passedstudents");
  const listOfStudentFailed = document.querySelector("ul#failedstudents");

  const createHTMLForStudent = (isPassed: boolean) => {
    const container = document.createElement("div");
    const checkbox = document.createElement("input");
    checkbox.type = "checkbox";
    checkbox.checked = isPassed;
    container.appendChild(checkbox);

    if (isPassed) {
      listOfStudentPassed?.appendChild(container);
    } else {
      listOfStudentFailed?.appendChild(container);
    }
  };
  students.forEach((student) => {
    createHTMLForStudent(student.handedInOnTime);
  });
}

/*
    6. Skriv en funktion som skall slå ihop följande texter på ett bra sätt:
    Lorem, ipsum, dolor, sit, amet
    Exemplet under löser problemet, men inte speciellt bra. Hur kan man göra istället?
    */
function concatenateStrings() {
  return "Lorem," + " ipsum," + " dolor," + " sit," + " amet";
}

/* 
  7. Denna funktion skall kontrollera att en användare är över 20 år och göra någonting.
      Det finns dock problem med denna typ av funktion. Vad händer när kraven ändras och
      fler och fler parametrar behöver läggas till? T.ex. avatar eller adress. Hitta en bättre
      lösning som är hållbar och skalar bättre. 
  */
class User {
  constructor(
    public name: string,
    public birthday: Date,
    public email: string,
    public password: string
  ) {}
}
function createUser(user: User) {
  // Validation

  let ageDiff = Date.now() - user.birthday.getTime();
  let ageDate = new Date(ageDiff);
  let userAge = Math.abs(ageDate.getUTCFullYear() - 1970);

  console.log(userAge);

  if (!(userAge < 20)) {
    // Logik för att skapa en användare
  } else {
    return "Du är under 20 år";
  }
}
createUser({
  name: "freja",
  birthday: new Date(1995, 6, 11),
  email: "hej",
  password: "hejhfdj",
});

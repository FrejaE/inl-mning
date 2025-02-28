/*
  1. Se om du kan hitta två stycken code smells i följande funktion och rätta till dem.
  Funktionen tar emot en lista med längshoppslängder och syftet med funktionen är att summera
  dessa hopplängder.
  */

function getLength(jumpings: number[]): number {
  return jumpings.reduce(
    (jumpDistanceSoFar, currentJump) => jumpDistanceSoFar + currentJump,
    0
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

function averageWeeklyTemperature(cityTemps: CityTemp[]): number {
  const oneWeekAgo = Date.now() - 604800000;

  const filteredTemps = cityTemps.filter(
    (temp) => temp.city === "Stockholm" && temp.date.getTime() > oneWeekAgo
  );

  if (filteredTemps.length === 0) {
    return NaN;
  }

  const totalTemperature = filteredTemps.reduce(
    (sum, temp) => sum + temp.temperature,
    0
  );

  return totalTemperature / filteredTemps.length;
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
  const productHTML = `
    <div>
      <h4>${name}</h4>
      <img src="${image}" alt="${name}" />
      <p>${price}</p>
    </div>
  `;

  parent.innerHTML += productHTML;
}

/*
    5. Följande funktion kommer presentera studenter. Men det finns ett antal saker som 
    går att göra betydligt bättre. Gör om så många som du kan hitta!
    */

function presentStudents(students: Student[]) {
  for (const student of students) {
    let container = document.createElement("div");
    let checkbox = Object.assign(document.createElement("input"), {
      type: "checkbox",
      checked: student.handedInOnTime,
    });

    container.appendChild(checkbox);
    let listOfStudents = document.querySelector(
      student.handedInOnTime ? "ul#passedstudents" : "ul#failedstudents"
    );
    listOfStudents?.appendChild(container);
  }
}

/*
    6. Skriv en funktion som skall slå ihop följande texter på ett bra sätt:
    Lorem, ipsum, dolor, sit, amet
    Exemplet under löser problemet, men inte speciellt bra. Hur kan man göra istället?
    */
const concatenateStrings = () =>
  ["Lorem", "ipsum", "dolor", "sit", "amet"].join(" ");

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
    public password: string,
    public avatar?: string,
    public address?: string
  ) {}

  // beräkna ålder
  get age(): number {
    const ageDiff = Date.now() - this.birthday.getTime();
    const ageDate = new Date(ageDiff);
    return Math.abs(ageDate.getUTCFullYear() - 1970);
  }
  // validering
  validateAge(minAge: number): boolean {
    return this.age >= minAge;
  }
}

// Funktion för att skapa användare
function createUser(user: User): string {
  if (!user.validateAge(20)) {
    return "Du är under 20 år och kan inte skapa ett konto.";
  }
  return "Användare skapad!";
}

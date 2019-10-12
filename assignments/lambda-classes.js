// CODE here for your Lambda Classes

// Lambda personnel can be broken down into three different types of people.

// Instructors - extensions of Person
// Students - extensions of Person

// Team Leads - extensions of Instructors

// IMPORTANT - You'll need to create 2 - 3 objects for each class and test them according to their unique Attributes. For example:

// const fred = new Instructor({
//   name: 'Fred',
//   location: 'Bedrock',
//   age: 37,
//   favLanguage: 'JavaScript',
//   specialty: 'Front-end',
//   catchPhrase: `Don't forget the homies`
// });

// Person
// First we need a Person class. This will be our base-class
// Person receives name age location all as properties ('props')
// Person receives speak as a method.
// This method logs out a phrase 'Hello my name is Fred, I am from Bedrock' where name and location are the object's own props

class Person { // base-class
  constructor(attributes) {
    this.name = attributes.name;
    this.location = attributes.location;
    this.age = attributes.age;
    this.gender = attributes.gender;
  }
  speak() { // method
    return `Hello my name is ${this.name}, I am from ${this.location}.`;
  }
}

// Instructor
// Now that we have a Person as our base class, we'll build our Instructor class.
// Instructor uses the same attributes that have been set up by Person
// Instructor has the following unique props:
// specialty what the Instructor is good at i.e. 'redux'
// favLanguage i.e. 'JavaScript, Python, Elm etc.'
// catchPhrase i.e. Don't forget the homies
// Instructor has the following methods:
// demo receives a subject string as an argument and logs out the phrase 'Today we are learning about {subject}' where subject is the param passed in.
// grade receives a student object and a subject string as arguments and logs out '{student.name} receives a perfect score on {subject}'
// Stretch - Extend the functionality of the Student by adding a prop called grade and setting it equal to a number between 1-100. 

class Instructor extends Person { // instructor-class
  constructor(instAttrs) {
    super(instAttrs);
    this.specialty = instAttrs.specialty;
    this.favLanguage = instAttrs.favLanguage;
    this.catchPhrase = instAttrs.catchPhrase;
    this.gender = instAttrs.gender;
  }
  demo(subject) { // methods
    return `Today we are learning about ${subject}.`;
  }
  grade(student, subject) { // methods
    return `${student.name} receives a perfect score on ${subject}.`;
  }

  // Stretch 2 - Now that our students have a grade, build out a method on the Instructor (this will be used by BOTH instructors and TL's) that will randomly add or subtract points to a student's grade. Math.random will help.

  // Gets a random grade
  adjustGrade(student) {
    // Number between 1 and 10
    let points = Math.round(Math.random() * 10);
    if (student.grade >= 100) {
      student.grade -= points;
      return `${points} points are subtracted from ${student.name}'s grade. ${student.name}'s current grade is ${this.grade}`;
    } else {
        student.grade += points;
        return `${points} points are added to ${student.name}'s grade. ${student.name}'s current grade is ${student.grade}`;
    }
  }
}

// Student
// Now we need some students!
// Student uses the same attributes that have been set up by Person
// Student has the following unique props:
// previousBackground i.e. what the Student used to do before Lambda School
// className i.e. CS132
// favSubjects. i.e. an array of the student's favorite subjects ['Html', 'CSS', 'JavaScript']

class Student extends Person {
  constructor(studAttrs) {
    super(studAttrs);
    this.previousBackground = studAttrs.previousBackground;
    this.className = studAttrs.className;
    this.favSubjects = studAttrs.favSubjects;
    this.grade = studAttrs.grade;
    this.sprint = studAttrs.sprint;
    this.previousBackground = studAttrs.previousBackground;
    this.className = studAttrs.className;
    this.currentSubject = studAttrs.currentSubject;
  }
  // Student has the following methods:
  // listsSubjects a method that logs out all of the student's favoriteSubjects one by one.
  listSubjects() {
    this.favSubjects.map((item) => console.log(`${this.name}'s favorite subjects are, (${item})`));
  }

  // PRAssignment a method that receives a subject as an argument and logs out that the student.name has submitted a PR for {subject}
  PRAssignment() {
    return `${this.name} has submitted a PR for ${this.currentSubject}`;
  }

  // sprintChallenge similar to PRAssignment but logs out student.name has begun sprint challenge on {subject}
  sprintChallenge() {
    return `${this.name} has begun sprint challenge on ${this.sprint}`;
  }

  // Stretch 3 - Add a graduate method to a student.
  // This method, when called, will check the grade of the student and see if they're ready to graduate from Lambda School
  // If the student's grade is above a 70% let them graduate! 
  //? Otherwise go back to grading their assignments to increase their score.

  graduate() {
    while (this.grade < 70 || this.grade > 100) {
      console.log(`Please try again! Your grade is only ${this.grade}.`);
      this.grade = this.grade + Math.floor(Math.random() * 200 - 100);
    }
    if (this.grade >= 70 || this.grade <= 100) {
      console.log(`Congrats ${this.name} you graduated with a score of ${this.grade}!`);
    }
  }
}

class TeamLead extends Instructor { 
  constructor(leadAttrs) {
    super(leadAttrs);
    this.gradClassName = leadAttrs.gradClassName;
    this.favInstructor = leadAttrs.favInstructor;
    this.channel = leadAttrs.channel;
    }

  standUp(channel) {
    return `${this.name} announces to ${this.channel}, @channel It's stand up time!`;
  }

  debugCode(student, subject) {
    return `${this.name} debugs ${student.name}'s code on ${subject}`;
  }
}

const pace = new Instructor ({ 
    name: 'Pace',
    location: 'Mesa, Arizona',
    age: 37,
    gender: "male",
    favLanguage: ['JavaScript', 'Python', 'Elm'],
    specialty: 'redux',
    catchPhrase: `Don't forget the homies`,
  });

const catherine = new Student ({ 
  name: 'Catherine',
  location: 'Mountain View, CA',
  age: 43,
  gender: 'female',
  favLanguage: 'JavaScript',
  favSubjects: ['Flexbox', 'React', 'Python', 'Data Science'],
  specialty: 'Full Stack',
  catchPhrase: 'You can do it!',
  sprint: 'JavaScript',
  currentSubject: 'JavaScript_IV',
  previousBackground: 'Account Specialist',
  className: 'WEBPT11',
  grade: 70 // Stretch 1
});

const kara = new Student ({ 
  name: 'Kara',
  location: 'Oklahoma',
  age: 'Unknown',
  gender: 'female',
  favLanguage: 'JavaScript',
  favSubjects: ['CSS', 'Flexbox', 'React', 'Python', 'Data Science'],
  specialty: 'Full Stack',
  catchPhrase: 'You all!',
  sprint: 'JavaScript',
  currentSubject: 'JavaScript_IV',
  previousBackground: 'Home Maker',
  className: 'WEBPT11',
  grade: 80 // Stretch 1
});

const leigh = new TeamLead ({ 
  name: 'Leigh',
  location: 'LA, CA',
  age: 'Unknown',
  gender: "female",
  favLanguage: 'JavaScript',
  specialty: 'Front-end',
  catchPhrase: `Reps!`,
  channel: 'WEBPT11sunday_lmartin',
  gradClassName: 'CS1',
  favInstructor: 'Pace'
});

  console.log(pace.speak());
  console.log(catherine.listSubjects());
  console.log(pace.gender); // male
  console.log(leigh.debugCode(catherine, "JavaScript"));
  console.log(leigh.standUp()); // Dustin announces to WEBPT11_dustin, @channel It's stand up time! 
  console.log(catherine.sprintChallenge()); // Catherine has begun sprint challenge on JavaScript
  console.log(catherine.PRAssignment());
  console.log(pace.demo("React"))
  console.log(pace.grade(catherine, "CSS")); // Catherine receives a perfect score on CSS.
  console.log(leigh.adjustGrade(catherine));
  console.log(catherine.graduate(pace));
  console.log(kara.graduate(pace));
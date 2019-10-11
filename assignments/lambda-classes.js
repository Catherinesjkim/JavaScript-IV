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
  }
  // Student has the following methods:
  // listsSubjects a method that logs out all of the student's favoriteSubjects one by one.
  listSubjects() {
    this.favSubjects.map((item) => console.log(`${this.name}'s favorite subjects are, (${item})`));
  }

  // PRAssignment a method that receives a subject as an argument and logs out that the student.name has submitted a PR for {subject}
  PRAssignment() {
    return `${this.name} has submitted a PR for ${subject}`;
  }

  // sprintChallenge similar to PRAssignment but logs out student.name has begun sprint challenge on {subject}
  sprintChallenge() {
    return `${this.name} has begun sprint challenge on ${this.sprint}`;
  }
  
class TeamLead extends Instructor { 
  constructor(leadAttrs) {
    super(leadAttrs);
    this.gradeClassName = leadAttrs.gradeClassName;
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
  gender: "female",
  favLanguage: 'JavaScript',
  favSubjects: ['Flexbox', 'React', 'Python', 'Data Science'],
  specialty: 'Full Stack',
  catchPhrase: `You can do it!`,
  sprint: 'JavaScript',
  previousBackground: 'Account Specialist',
  className: 'WEBPT11'
});

const dustin = new TeamLead ({ 
  name: 'Dustin',
  location: 'LA, CA',
  age: 35,
  gender: "male",
  favLanguage: 'JavaScript',
  specialty: 'Front-end',
  catchPhrase: `Reps!`,
  channel: 'WEBPT11_dustin',
});

  //console.log(pace.speak());
  // console.log(catherine.listSubjects());
  // console.log(pace.gender); // male
  //console.log(dustin.debugCode(catherine, "JavaScript"));
  //console.log(dustin.standUp()); // Dustin announces to WEBPT11_dustin, @channel It's stand up time! 
  //console.log(catherine.sprintChallenge()); // Catherine has begun sprint challenge on JavaScript
  //console.log(pace.demo("React"))
  //console.log(pace.grade(catherine, "CSS")); // Catherine receives a perfect score on CSS. 
  // console.log(catherine.PRAssignment());
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

class Instructor extends Person { // instructor-class
  constructor(instAttrs) {
    super(instAttrs);
    this.specialty = instAttrs.specialty;
    this.favLanguage = instAttrs.favLanguage;
    this.catchPhrase = instAttrs.catchPhrase;
  }
  demo(subject) { // methods
    return `Today we are learning about ${subject}.`;
  }
  grade(student, subject) { // methods
    return `${this.name} receives a perfect score on ${subject}.`;
  }
}

class Student extends Instructor {
  constructor(studAttrs) {
    super(studAttrs);
    this.previousBackground = studAttrs.previousBackground;
    this.className = studAttrs.className;
    this.favSubjects = studAttrs.favSubjects;
    this.grade = studAttrs.grade;
  }

  listSubjects() {
    this.favSubjects.map(item => console.log(item));
  }

  PRAssignment(subject) {
    return `${this.name} has submitted a PR for ${subject}`;
  }

  sprintChallenge(subject) {
    return `${this.name} has begun sprint challenge on ${subject}`;
  }

  graduate() {
    if (this.grade >= 70) {
      return `${this.name} has graduated with a final grade of ${this.grade}!`;
    } else {
      let diff = 70 - this.grade;
      this.grade += diff;
      return `After more grading, ${diff} points were earned and ${this.name} has graduated with a final grade of ${this.grade}!`;
    }
  }
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
    favLanguage: 'JavaScript',
    specialty: 'Front-end',
    catchPhrase: `Love Mexican Food!`,
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
});

const dustin = new TeamLead ({ 
  name: 'Dustin',
  location: 'LA, CA',
  age: 35,
  gender: "male",
  favLanguage: 'JavaScript',
  specialty: 'Front-end',
  catchPhrase: `Reps!`,
  gradeClassName: 'WEBPT11'
});
  // console.log(fred.speak());
  // console.log(catherine.listSubjects()); // undefined?
  // console.log(pace.gender()); // pace.gender not a function?
  // console.log(dustin.debugCode(catherine, "JavaScript"));
  //console.log(dustin.standUp()); // Dustin announces to undefined, @channel It's stand up time! 
  //console.log(catherine.sprintChallenge()); // Catherine has begun sprint challenge on undefined 
  //console.log(pace.demo("React"))
  // console.log(pace.grade(catherine, "CSS")); // Pace receives a perfect score on CSS. 
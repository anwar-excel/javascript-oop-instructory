//class (Es6)
// class is a templete for creating objects
/*

let person1 = {
  firstName : "Maruf",
  lastName : "Hasan",
  dob: "29-08-1990",
  fullName:function(){
    console.log(`${this.firstName} ${this.lastName}`);
  }
};

let person2 = {
  firstName: "Maruf",
  lastName: "Shovo",
  dob: "29-08-2000",
  fullName: function () {
    console.log(`${this.firstName} ${this.lastName}`);
  }
};



class Person{
  constructor(){
    this.firstName = "Mehedi";
    this.lastName = "Hasan";
    this.dob = "12-01-2000";

  }
};

let person = new Person();
console.log(person);



// class 56 javascript DOM event

// console.log("javascript connected");

document.getElementById('simple-btn').addEventListener('mouseover',message);

// function message(){
//   console.log('button click');

// }

function message(e) {
  let val = e;
  // val = e.target;

  console.log(val);
}


document.querySelector('.container').addEventListener('click',message);
document.querySelector('.container').style.background = 'red';

function message (e){
  this.style.background = `#${e.offsetX}`;
}

*/

// class 67 json syntax

// js obj formate

var student = {
  name : "Abdullah",
  age : 3,
  hometown: " Tangail"
};

//convert js object to json

var student_json = JSON.stringify(student)
console.log(student_json);
var student_new = JSON.parse(student_json);
console.log(student_new);

//exercises number 1

let user = {
  name: "John",
  years: 30
}
//solution
var name = user['name'];
console.log(name);
var age = user['years'];
console.log(age);
isAdmin = 'isAdmin' in user;
console.log(isAdmin);


//Exercise 2
//solution

var theEarth;
var currentUser;


//Exercise 3
//solution

//the result will be Hello Jhon, however we defined the variable with let but because it's inside one scoop, it still work



//Exercise 4
//solution

var user2 = {};
user2['name']='Jhon';
user2['surname'] = 'Smith';
user2['name'] = 'Pete';
delete user2.name;
console.log(user2);



//Exercise 5
const user3 = {
  name: "John"
}

// does it work?
user3.name = "Pete"

//solution

// yes it's possible because you just change the value inside the object and not the whole value or type of object
//which is fine with const



//Exercise 6
let salaries = {
  'Fred': 100,
  'Ted': 160,
  'Ghaith': 130,
  'asldk':" "
}

//solution
var salariesValue = Object.values(salaries);
var sum =0;
for ( var i=0 ; i<salariesValue.length;i++){
    if (salariesValue[i]== " "){
        salariesValue[i]=0;
    }else{
         sum += salariesValue[i];
    }

}
 console.log(sum);


//Exercise 7
var a = 2;
var b = 1 ;
 if (a + b < 4) {
  result = 'Below';
} else {
  result = 'Over';
}

//solution
var result = a + b < 4 ? "Below" : "Over";
console.log(result);


//Exercise 8

let message;
var login = "Employee";
if (login == 'Employee') {
  message = 'Hello';
} else if (login == 'Director') {
  message = 'Greetings';
} else if (login == '') {
  message = 'No login';
} else {
  message = '';
}
console.log(message)

//solution
message = login == 'Employee' ? message = 'Hello': login == 'Director' ? message = 'Greetings' : login == '' ?message = 'No login' :message = '';

console.log(message);
























// const student = {
//     fullName : "Alok Jakhmola",
//     marks : 98,
//     printMarks : function () {
//         console.log( "marks =",this.marks);
//     },
// }

// console.log(student);
// console.log(student.fullName);
// console.log(student.marks);
// console.log(student.printMarks());


// const employ =  {
//     calcTax() {
//     console.log("tax rate is 8%");
    
//     },
// };

// console.log(employ.calcTax());


// const karanAujala = {
//     salary : 50000,
//     calcTax() {
//         console.log("tax rate is 20%");
        
//         },
// };

// console.log(karanAujala.calcTax());//yha pe object ka khud ka calcTax ayega

// const karanAujala1 = {
//     salary : 50000,
// };

// const karanAujala2 = {
//     salary : 50000,
// };

// const karanAujala3 = {
//     salary : 50000,
// };

// karanAujala.__proto__ = employ;
// karanAujala1.__proto__ = employ;
// karanAujala2.__proto__ = employ;
// karanAujala3.__proto__ = employ;

// console.log(karanAujala);

// console.log(karanAujala.calcTax());// ise hamne add kr diya ab iske prototype me calcTax function agya

// console.log(karanAujala3.calcTax());// ise hamne add kr diya ab iske prototype me calcTax function agya



// class ToyotaCar {
//     constructor(Brand){
//         console.log("creating new objects");
//         this.Brand = Brand;// direct ham ise intialize bhi kr skte hai start me hi
        
//     };
//     start() {
//         console.log("start");
        
//     }


//     stop() {
//         console.log("stop");
        
//     }

//     setBrand(Brand){
//         this.Brand = Brand;
//     }
// };

// let fortuner = new ToyotaCar("fortuner");
// fortuner.setBrand("fortuner");
// let lexux = new ToyotaCar("lexux");

// lexux.setBrand("lexux");

// console.log(fortuner);
// console.log(lexux);




// const student = {
//      name : "alok",
//      age : 18,
//      isPass : true,
//      marks : 90,
//      printMarks : function () {
//      console.log("marks = ", this.marks);
//     },
// };

// console.log(student);
// console.log(student.name);
// console.log(student.marks);
// // console.log(student["marks"]);
// console.log(student.printMarks());



// const employ = {
//     calcTax() {
//         console.log("tax rate is 10%");
        
//     },
// }


// const karanAujala = {
//      salary : 500000,
//      calcTax(){
//         console.log("tax rate is 5%");
        
//      },
    
// };


// const karanAujala1 = {
//     salary : 500000,
   
// };

// const karanAujala2 = {
//     salary : 500000,
   
// };

// const karanAujala3 = {
//     salary : 500000,
   
// };
// karanAujala.__proto__ = employ;
// karanAujala1.__proto__ = employ;
// karanAujala2.__proto__ = employ;
// karanAujala3.__proto__ = employ;

// console.log(karanAujala);
// console.log(karanAujala.calcTax());
// console.log(karanAujala1.calcTax());



/*-------------class-------*/

// class ToyotaCar {
//     constructor(Brand,milage){
//         console.log("creating new objects");
//         this.Brand = Brand;
//         this.milage = milage;
        
//     }
//     start(){
//         console.log("start");
        
//     }

//     stop() {
//         console.log("stop");
        
//     }

//     // setBrand(Brand) {
//     //  this.Brand = Brand;
//     // }
// };

// let thar = new ToyotaCar("Mahindra",20);
// console.log(thar);
// console.log(thar.start());


/*------------Inheritance--------*/


// class parent {
//     hello() {
//         console.log("hello");
        
//     }
// };

// class child extends parent{};

// let obj = new child();

// class person{
//     constructor(name){
//         this.name = name;
//         // console.log("enter parent constructor");
//         this.species = "homo sapiens";
//     }
//     sleep(){
//         console.log("sleep");
        
//     }

//     eat(){
//         console.log("eat");
        
//     }
//     work(){
//         console.log("Do Nothing");
        
//     }
// };

// class Engineer extends person{
//     constructor(name){
//         // console.log("enter child constructor");
        
//         super(name);//to invoke parent class constructor
//         // this.branch = branch;
//         // console.log("exit child constructor");
//     }
//     work(){
//         super.eat();
//         console.log("solve problems, build something");
        
//     }// yha pe child ka hi method use hoga agr ni smgh ayega toh notes me dekh lena
// }

// class Doctor extends person{
//     work(){
//         console.log("solve problems, build something");
        
//     }
// }

// let Alokdoc = new Doctor();
// console.log(Alokdoc.sleep());



// let Alokobj = new Engineer("computer science");
// let Alokobj = new Engineer("Alok Jakhmola");
// console.log(Alokobj.branch = "computer science");


// console.log(Alokobj.work());
// console.log(Alokobj.eat());


/*--------question practice-----------*/


// let Data = "Personal Informations";
// class user{
//     constructor(name, email){
//       this.name = name;
//       this.email = email;
//     }

//     viewDAta(){
//         console.log("data = ", Data);
        
//     }
// };

// class Admin extends user {
//     constructor(name, email){
//      super(name, email);
//     }
//     editData(){
//         Data = "some new data";
//     }
// }

// let student1 = new user("Alok Jakhmola","abcde14@gmail.com")
// let student2 = new user("Golu Jakhmola","efgh23@gmail.com")

// console.log(student1);
// console.log(student1.viewDAta());

// console.log(student2);
// console.log(student1.viewDAta());

// let Admin1 = new Admin("khushi Bhandari", "kgf12@gmail.com");

// console.log(Admin1);
// console.log(Admin1.editData());
// console.log(Data);



// let a = 10;
// let b = 5;

// console.log("a=", a);
// console.log("b=", b);
// console.log("a+b =", a+b);
// // console.log("a+c =", a+c);// error
// // hmein agr lage ki ye line me erro arha hai toh hm iska pta kr skte hai ki kya error hia


// try{
//     console.log("a+c =", a+c);
// }catch(err){
//     console.log(err);// yha pe c is not defined dikhayega 
    
// }


// const User = {
//     fullName: "Alok Jakhmola",
//     Class : 12,
//     isPass : true,
//     location : "Uttarakhand Pauri Garhwal Dwarikhal Chelusain Mustkhal",
//     email : "alokjakh342@gmail.com",
//     age : 18,
// };

// console.log(User);

// console.log(User.fullName);//1 tareeka

// console.log(User["fullName"]);//2 tareeka

// console.log(User);

// let changeAge = User["age"] = 22;

// console.log(changeAge);//

// for (const key in User) {
//    console.log(key);// aise me ham is user object ki sirf keys bhi print kra skte hai
// }




// const User = {
//     fullName: "Alok Jakhmola",
//     Class : 12,
//     isPass : true,
//     location : "Uttarakhand Pauri Garhwal Dwarikhal Chelusain Mustkhal",
//     email : "alokjakh342@gmail.com",
//     age : 18,
// };


// // Object.freeze(User);// isko use krne se ab ham apne user object ki keys ki value change ni kr skte hia

//  let changeVal = User.fullName = "khushi Bhandari";
//  console.log(changeVal);

//  console.log(User);// object me change nhi ayega 


// let newArr = [];
// const regularUser = {
//     email : "alokjak1232@gmail.com",
//     fullName : {
//         firstName : "Alok",
//         lastName : "Jakhmola",
//     }
// };

// let email = regularUser.email;
// newArr.push(email);
// console.log(newArr);

// newArr.push(regularUser);
// console.log(newArr);

 

// console.log(regularUser);
// console.log(regularUser.email);
// console.log(regularUser.fullName);
// console.log(regularUser.fullName.firstName);
// console.log(regularUser.fullName);
// console.log(regularUser.fullName.lastName);


//  class user {
//     constructor(username, email, password) {
//       this.username = username;
//       this.email = email;
//       this.password = password;
//     }

//     encryptPass(){
//         return `${this.password}abc`
//     }

//     capUsername(){
//         return `${this.username.toUpperCase()}`
//     }
//  };

//  const me = new user("alok", "alokjak345@gmail.com",3245);

//  console.log(me.encryptPass());
//  console.log(me);
//  console.log(me.capUsername());
//  console.log(me.username = "khushi bhandari");// change username
//  console.log(me);


class user {
    constructor(username){
      this.username = username;
    }

    print(){
        console.log(`USERNAME IS ${this.username}`);
        
    }

    addCourse(){
        console.log(`this code is provided for our members groups${this.username}`);
        
    }
};

class teacher extends user{
    constructor(username, password,email){
        super(username);
        this.email = email;
        this.password = password;
    }

    study(){
       const Data = "student papers";
        return Data;
        
    }
};

// console.log(teacher instanceof user);// false





const teach = new teacher("Mehra Sir", "1232","mehra1232@gmail.com");

// console.log(teach);
// console.log(teach.print());
// console.log(teach.email);
// console.log(teach.password);
// console.log(teach.username);
// console.log(teach.addCourse());
console.log(teach.study());








const me = new user("alokJak");
console.log(me);
console.log(me.print());
console.log(me.addCourse());
console.log(me.username);
console.log(me.password = 5678);
console.log(me);

















 
 
 
 
 
 



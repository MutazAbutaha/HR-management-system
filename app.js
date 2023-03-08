'use strict';


const allemplyee=[];

function HrSystem(employeeId, fullName, department, level, imageUrl) {
    this.employeeId = employeeId;
    this.fullName = fullName;
    this.department = department;
    this.level = level;
    this.imageUrl = imageUrl;
    this.salary = this.netSalary();
    allemplyee.push(this);
}

HrSystem.prototype.ranSalary = function () {
    if(this.level== "Senior"){
        return (Math.floor(Math.random() * (2000 - 1500) ) + 1500) 
    }else if(this.level== "Mid-Senior"){
        return (Math.floor(Math.random() * (1500 - 1000) ) + 1000) 
    }else if(this.level== "Junior"){
        return (Math.floor(Math.random() * (1000 - 500) ) + 500) 
    }
}


HrSystem.prototype.netSalary = function () {
    return (this.ranSalary()) - (this.ranSalary()*0.075)
}


HrSystem.prototype.renderHomePage = function () {
    document.write ( `<h2>The Name : ${this.fullName} , The Net Salary : ${this.netSalary()}</h2>`);
}


let ghaziSamer = new HrSystem(1000, " Ghazi Samer ", "Administration", "Senior");
let lanaAli = new HrSystem(1001, " Lana Ali ", "Finance", "Senior");
let tamaraAyoub = new HrSystem(1002, " Tamara Ayoub ", "Marketing", "Senior");
let safiWalid = new HrSystem(1003, " Safi Walid ", "Administration", "Mid-Senior");
let omarZaid = new HrSystem(1004, " Omar Zaid ", "Development", "Senior");
let ranaSaleh = new HrSystem(1005, " Rana Saleh ", "Development", "Junior");
let hadiAhmad = new HrSystem(1006, " Hadi Ahmad ", "Finance", "Mid-Senior");





allemplyeeCaller(allemplyee);

console.log(allemplyee)


function allemplyeeCaller(allemplyee){
    
    for (let i = 0; i < allemplyee.length ; i++) {
        allemplyee[i].renderHomePage();   
    }
}



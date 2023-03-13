'use strict';


const allemplyee = [];
let form = document.getElementById("form");
let container = document.getElementById("card-container");



function HrSystem( fullName, department, level, imageUrl) {
    this.employeeId = this.uniqueId();
    this.fullName = fullName;
    this.department = department;
    this.level = level;
    this.imageUrl = imageUrl;
    this.salary = this.netSalary();
    allemplyee.push(this);
}

HrSystem.prototype.ranSalary = function () {
    if (this.level == "Senior") {
        return (Math.floor(Math.random() * (2000 - 1500)) + 1500)
    } else if (this.level == "Mid-Senior") {
        return (Math.floor(Math.random() * (1500 - 1000)) + 1000)
    } else if (this.level == "Junior") {
        return (Math.floor(Math.random() * (1000 - 500)) + 500)
    }
}


HrSystem.prototype.netSalary = function () {
    return  (this.ranSalary()) - (this.ranSalary() * 0.075);
}

HrSystem.prototype.uniqueId = function() {
    return  (Math.floor(Math.random() * 10000))
}


HrSystem.prototype.renderHomePage = function () {


    const div = document.createElement("div");
    div.innerHTML = `
    <div class="card">
    <img src="${this.imageUrl}" alt="img">
    <p>NAME: ${this.fullName} - ID: ${this.employeeId} Department: ${this.department} - Level: ${this.level} - ${this.salary}</p>
    </div>`;

    container.appendChild(div);

}



let ghaziSamer = new HrSystem( " Ghazi Samer ", "Administration", "Senior", "./assets/Ghazi.jpg");
let lanaAli = new HrSystem( " Lana Ali ", "Finance", "Senior", "./assets/Lana.jpg");
let tamaraAyoub = new HrSystem( " Tamara Ayoub ", "Marketing", "Senior", "./assets/Tamara.jpg");
let safiWalid = new HrSystem( " Safi Walid ", "Administration", "Mid-Senior", "./assets/Safi.jpg");
let omarZaid = new HrSystem( " Omar Zaid ", "Development", "Senior", "./assets/Omar.jpg");
let ranaSaleh = new HrSystem( " Rana Saleh ", "Development", "Junior", "./assets/Rana.jpg");
let hadiAhmad = new HrSystem( " Hadi Ahmad ", "Finance", "Mid-Senior", "./assets/Hadi.jpg");





allemplyeeCaller(allemplyee);
form.addEventListener("submit", eventHandler);



function allemplyeeCaller(allemplyee) {

    for (let i = 0; i < allemplyee.length; i++) {
        allemplyee[i].renderHomePage();
    }
}

function eventHandler(event) {
    event.preventDefault();
    let fullName = (event.target.fullname.value);
    let Department = (event.target.depart.value);
    let Level = (event.target.level.value);
    let ImageUrl = (event.target.img.value);
    let emplyeeForm = new HrSystem(fullName, Department, Level , ImageUrl);

    console.log(fullName, Department, Level, ImageUrl);
    emplyeeForm.renderHomePage();
    
}







'use strict';


const allemplyee = [];
let form = document.getElementById("form");
let container = document.getElementById("card-container");



function HrSystem(employeeId, fullName, department, level, imageUrl) {
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
    return (this.ranSalary()) - (this.ranSalary() * 0.075)
}



HrSystem.prototype.renderHomePage = function () {


    const div = document.createElement("div");
    div.innerHTML = `
    <div class="card">
    <img src="${this.imageUrl}" alt="img">
    <p>NAME: ${this.fullName} - ID: ${this.employeeId} Department: ${this.department} - Level: ${this.level} ${this.salary}</p>
    </div>`;

    container.appendChild(div);

}

HrSystem.prototype.uniqueId = function () {
    return (Math.floor(Math.random() * 10000))
}


let ghaziSamer = new HrSystem(1000, " Ghazi Samer ", "Administration", "Senior", "../assets/Ghazi.jpg");
let lanaAli = new HrSystem(1001, " Lana Ali ", "Finance", "Senior", "../assets/Lana.jpg");
let tamaraAyoub = new HrSystem(1002, " Tamara Ayoub ", "Marketing", "Senior", "../assets/Tamara.jpg");
let safiWalid = new HrSystem(1003, " Safi Walid ", "Administration", "Mid-Senior", "../assets/Safi.jpg");
let omarZaid = new HrSystem(1004, " Omar Zaid ", "Development", "Senior", "../assets/Omar.jpg");
let ranaSaleh = new HrSystem(1005, " Rana Saleh ", "Development", "Junior", "../assets/Rana.jpg");
let hadiAhmad = new HrSystem(1006, " Hadi Ahmad ", "Finance", "Mid-Senior", "../assets/Hadi.jpg");





allemplyeeCaller(allemplyee);


function allemplyeeCaller(allemplyee) {

    for (let i = 0; i < allemplyee.length; i++) {
        allemplyee[i].renderHomePage();
    }
}



form.addEventListener("submit", eventHandler);

function eventHandler(event) {
    event.preventDefault();
    let fullName = (event.target.fullname.value);
    let Department = (document.getElementById("depart").value);
    let Level = (document.getElementById("level").value);
    let ImageUrl = (event.target.img.value);
    console.log(fullName, Department, Level, ImageUrl)
    const div = document.createElement("div");
    div.innerHTML = `
    <div class="card">
    <img src="${ImageUrl}" alt="img">
    <p>NAME: ${fullName} - Department: ${Department} - Level: ${Level} </p>
    </div>`;

    container.appendChild(div);

}







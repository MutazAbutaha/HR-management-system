'use strict';

let tableEl = document.getElementById("table");
let numAdEl = document.getElementById("numAd");
let numMaEl = document.getElementById("numMa");
let numDeEl = document.getElementById("numDe");
let numFiEl = document.getElementById("numFi");
let totalNum = document.getElementById("totalNum");
let totalSalAdmin = document.getElementById("totalSalAdmin");
let totalSalMar = document.getElementById("totalSalMar");
let totalSalDev = document.getElementById("totalSalDev");
let totalSalFin = document.getElementById("totalSalFin");
let totalSalaries = document.getElementById("totalSalaries");
let avaSalAdmin = document.getElementById("avaSalAdmin");
let avaSalMar = document.getElementById("avaSalMar");
let avaSalDev = document.getElementById("avaSalDev");
let avaSalFin = document.getElementById("avaSalFin");
let avaSalTotal = document.getElementById("avaSalTotal");
let objArr = [];
let numAdministration = 0;
let numMarketing = 0;
let numDevelopment = 0;
let numFinance = 0;
let adminsTotSalary = 0;
let markTotSalary = 0;
let deveTotSalary = 0;
let finaTotSalary = 0;


getData();
numberDepartmeint();
renderTable();



function getData() {
    let getedArr = localStorage.getItem('Hrsystem');
    let accArr = JSON.parse(getedArr);
    for (let i = 0; i < accArr.length; i++) {

        objArr.push(accArr[i]);

    }

}



function numberDepartmeint (){
    for (let i = 0; i < objArr.length; i++) {
    if (objArr[i].department == "Administration") {
        numAdministration++
        adminsTotSalary+=objArr[i].salary 


    } else if (objArr[i].department == "Marketing") {
        numMarketing++
        markTotSalary+=objArr[i].salary

    } else if (objArr[i].department == "Development") {
        numDevelopment++
        deveTotSalary+=objArr[i].salary

    } else if (objArr[i].department == "Finance") {
        numFinance++
        finaTotSalary+=objArr[i].salary

    }

}
}



function renderTable() {

    
    
    let numAd = document.createElement('numAd');
    numAd.textContent = numAdministration;
    numAdEl.appendChild(numAd);


    let numMa = document.createElement('numMa');
    numMa.textContent = numMarketing;
    numMaEl.appendChild(numMa);

    let numDe = document.createElement('numDe');
    numDe.textContent = numDevelopment;
    numDeEl.appendChild(numDe);

    let numFi = document.createElement('numFi');
    numFi.textContent = numFinance;
    numFiEl.appendChild(numFi);

    let totalNumEmp= (numAdministration+numMarketing+numDevelopment+numFinance);

    let tNum = document.createElement('tNum')
    tNum.textContent = totalNumEmp;
    totalNum.appendChild(tNum);

    

    let tAdmin = document.createElement('tAdmin');
    tAdmin.textContent = adminsTotSalary;
    totalSalAdmin.appendChild(tAdmin);

    let tMar = document.createElement('tMar');
    tMar.textContent = markTotSalary;
    totalSalMar.appendChild(tMar);

    let tDev = document.createElement('tDev');
    tDev.textContent = deveTotSalary;
    totalSalDev.appendChild(tDev);

    let tFin = document.createElement('tFin');
    tFin.textContent = finaTotSalary;
    totalSalFin.appendChild(tFin);

    let totalSalary = (adminsTotSalary+markTotSalary+deveTotSalary+finaTotSalary);

    let totalSa = document.createElement('totalsa');
    totalSa.textContent = totalSalary;
    totalSalaries.appendChild(totalSa);


    let aSaAd = (adminsTotSalary/numAdministration);
    let avaSalAdm = document.createElement('avaSalAdm');
    avaSalAdm.textContent = aSaAd;
    avaSalAdmin.appendChild(avaSalAdm);
    
    let aSalMar = (markTotSalary/numMarketing);
    let avaSalMr = document.createElement('avaSalMr');
    avaSalMr.textContent = aSalMar;
    avaSalMar.appendChild(avaSalMr);

    let aSalDev = (deveTotSalary/numDevelopment);
    let avaSalDe = document.createElement('avaSalDe');
    avaSalDe.textContent = aSalDev ;
    avaSalDev.appendChild(avaSalDe);

    let aSalFin = (finaTotSalary/numFinance);
    let avaSalFi = document.createElement('avaSalFi');
    avaSalFi.textContent = aSalFin ;
    avaSalFin.appendChild(avaSalFi);

    let avaTotSal = document.createElement('avaTotSal');
    avaTotSal.textContent = ( aSaAd + aSalDev + aSalFin + aSalMar);
    avaSalTotal.appendChild(avaTotSal);

}




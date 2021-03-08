'use strict';

function getRandomIntInclusive(min, max) {
    min = Math.ceil(min);
    max = Math.floor(max);
    return Math.floor(Math.random() * (max - min + 1) + min); //The maximum is inclusive and the minimum is inclusive
}
let totalArr=[0,0,0,0,0];
let hours =['8am','9am','10am','11am','12pm'];
let container=document.getElementById('container');
let table =document.createElement('table');
container.appendChild(table);
let totalOfTotal = 0;
let objectArr=[];

let countRow=1;
function Cookie(name,min,max,avg){
    this.name=name;
    this.min=min;
    this.max=max;
    this.avg=avg;
    this.cookiePerHour=[];
    this.dailySales=0;
    objectArr.push(this);

}

function header(){
let tr = document.createElement('tr');
table.appendChild(tr);
let th1=document.createElement('th');
tr.appendChild(th1);
th1.textContent=' ';

let th2; 
for (let index = 0; index < hours.length; index++) {
th2 = document.createElement('th');
tr.appendChild(th2);
th2.textContent=hours[index];
}
let th3= document.createElement('th');
tr.appendChild(th3);
th3.textContent='Daily Sales';

}
header();

Cookie.prototype.render=function(){
countRow++;

    let tr1 = document.createElement('tr');
    table.appendChild(tr1);
    let td1 = document.createElement('td');
    tr1.appendChild(td1);
    td1.textContent=this.name;

    for (let i = 0; i < hours.length; i++) {
        this.cookiePerHour.push(getRandomIntInclusive(this.min,this.max))*this.avg;
        this.dailySales+=this.cookiePerHour[i];
        totalArr[i]+=this.cookiePerHour[i];

        let td2 = document.createElement('td');
        tr1.appendChild(td2);
        td2.textContent=this.cookiePerHour[i];

    }
       let td3 = document.createElement('td');
       tr1.appendChild(td3);
       td3.textContent= this.dailySales;

}

let seattle= new Cookie('seattle',5,20,1.5);
seattle.render();

function footer(){

    let tr2= document.createElement('tr');
    table.appendChild(tr2);
    let th2 = document.createElement('th');
    tr2.appendChild(th2);
    th2.textContent='Total';
    
    let th3;
    for (let x = 0; x < seattle.cookiePerHour.length; x++) {
        
        th3 =document.createElement('th');
        tr2.appendChild(th3);
        th3.textContent=totalArr[x];
        totalOfTotal+=totalArr[x];
    }

     let th4 = document.createElement('th');
     tr2.appendChild(th4);
     th4.textContent= totalOfTotal;


}
footer();


const form = document.getElementById('form');
form.addEventListener('submit',eventclick);

function eventclick(event){
    event.preventDefault();

    let name = event.target.name.value;
    let min = event.target.min.value;
    min=parseInt(min);
    let max = event.target.max.value;
    max=parseInt(max);
    let avg = event.target.avg.value;

    let newCookie = new Cookie(name,min,max,avg);
    table.deleteRow(countRow);
    newCookie.render();
    footer();
    saveData();

}

function saveData(){
    let data=JSON.stringify(objectArr);
    localStorage.setItem('allData',data);
}

function getinfo(){
    let info = localStorage.getItem('allData');
    let information = JSON.parse(info);

    if(information){
        objectArr=information;
    }
}
getinfo();
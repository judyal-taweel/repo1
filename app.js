// 'use strict';


// function getRandomIntInclusive(min, max) {
//     min = Math.ceil(min);
//     max = Math.floor(max);
//     return Math.floor(Math.random() * (max - min + 1) + min); //The maximum is inclusive and the minimum is inclusive
// }
//  let globalName=0;
//  let globalAge=0;
//  let globalmin=0;
// let globalmax=0;
//  let tablecontainer =document.getElementById('tablecontainer');
// let table = document.createElement('table');
// tablecontainer.appendChild(table);

// let form = document.getElementById('form');

// let arrOfObject=[];
// function Cats(name , min , max){
//     this.name=name;
//     this.min=min;
//     this.max=max;
//     this.age=this.getAge();
//     arrOfObject.push(this);
// }

// Cats.prototype.getAge=function(){
//    return this.age=getRandomIntInclusive(this.min,this.max);
//    return globalAge=this.age;
// };

// function header(){
//     let tr = document.createElement('tr');
//     table.appendChild(tr);
//     let th1 = document.createElement('td');
//     tr.appendChild(th1);
//     th1.textContent='Name';
//     let th2 = document.createElement('th');
//     tr.appendChild(th2);
//     th2.textContent= 'Age';
// }
// header();



// function render(){

//     let nameInput = document.getElementById('name');
//     globalName = nameInput.value;

//     let minInput = document.getElementById('min');
//     globalmin = minInput.value;

//     let maxInput = document.getElementById('max');
//     globalmax = maxInput.value;



//     let tr = document.createElement('tr');
//     table.appendChild(tr);
//     let td1 = document.createElement('td');
//     tr.appendChild(td1);
//     td1.textContent=globalName;

//     let td2 = document.createElement('td');
//     tr.appendChild(td2);
//     td2.textContent=globalAge;

// }

// let lama = new Cats('lama',3,11);
// render();

// form.addEventListener('submit',eventclick);

// function eventclick(event){
//     event.preventDefault();

//     let name = event.target.name.value;
//     let min = event.target.min.value;
//     min = parseInt(min);
//     let max = event.target.max.value;
//     max = parseInt(max);

//     let newCat = new Cats(name , min , max);
     
//     newCat.getAge();
//     render();
//     saveData();

// }


// function saveData(){
//     let data = JSON.stringify(arrOfObject);
//     localStorage.setItem('allData',data);
// }

// function getData(){
//     let info = localStorage.getItem('allData');
//     let infocat = JSON.parse(info);

//     if(infocat){
//         arrOfObject=infocat;
//     }
//     render();
// }
// getData();
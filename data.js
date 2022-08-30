
// Get the modal
var modal = document.getElementById("myModal");




const showModal=(data)=>{
    // modal.hidden = false;

    document.getElementById('myModal').hidden = false;
    const options = document.getElementById('textVal').childNodes;
    for(let i=0; i<options.length; i++){
        console.log(options[i].value)
        if(options[i].value === data.name){
            document.getElementById('textVal').selectedIndex = i;
        }
    }
    document.getElementById('textVal').value = data.name;

    // alert("Hi There!!!!!")

}


const getHours =(index)=>{
    if(index === 1){
        return "7:00h - 8:30h"
    }else if (index === 2){
        return "9:00h - 11:00h"
    }else if (index === 3){
        return "11:30h - 13:00h"
    }else if (index === 4){
        return "13:00h - 14:30h"
    }else if (index === 5){
        return "15:00h - 17:30h"
    }else if (index === 6){
        return "18:30h - 20:30h"
    }else if (index === 7){
        return "21:30h - ..."
    }

}


const getRow=(row, hours)=>{
    return `
    <div class="row row-1">
            <div class="cell-0 cell">${hours}</div>
            <div data-day=${row[0].day} data-h=${row[0].hour}  class="cell-1 cells cell">
              <input class="cell-text-input" type="text" value="${row[0].name}">
            </div>
            <div data-day=${row[1].day} data-h=${row[1].hour}  class="cell-2 cells cell">
              <input class="cell-text-input" type="text" value="${row[1].name}">
            </div>
            <div data-day=${row[2].day} data-h=${row[2].hour} class="cell-3 cells cell">
              <input class="cell-text-input" type="text" value="${row[2].name}">
            </div>
            <div data-day=${row[3].day} data-h=${row[3].hour}  class="cell-4 cells cell">
              <input class="cell-text-input" type="text" value="${row[3].name}">
            </div>
            <div data-day=${row[4].day} data-h=${row[4].hour}  class="cell-5 cells cell">
              <input class="cell-text-input" type="text" value="${row[4].name}">
            </div>
          </div>
    
    `

}





let data  = [];
const db = localStorage.getItem('db');
if(db){

}else{
    data = [
        [{name:'REMOTE', day:1, hour:1},  {name:'HOPE', day:2, hour:1},    {name:'REMOTE', day:3, hour:1},   {name:'HOPE', day:4, hour:1},    {name:'CMU/HOPE', day:5, hour:1}],
        [{name:'REMOTE', day:1, hour:2},  {name:'HOPE', day:2, hour:2},    {name:'REMOTE', day:3, hour:2},   {name:'HOPE', day:4, hour:2},    {name:'CMU/HOPE', day:5, hour:2}],
        [{name:'PUSE', day:1, hour:3},    {name:'HOPE', day:2, hour:3},    {name:'PUSE', day:3, hour:3},     {name:'HOPE', day:4, hour:3},    {name:'PUSE', day:5, hour:3}],
        [{name:'DEV-OPS', day:1, hour:4}, {name:'HOPE', day:2, hour:4},    {name:'DEV-OPS', day:3, hour:4},  {name:'HOPE', day:4, hour:4},    {name:'PAUSE', day:5, hour:4}],
        [{name:'PPLT', day:1, hour:5},    {name:'HOPE', day:2, hour:5},    {name:'PPLT', day:3, hour:5},     {name:'HOPE', day:4, hour:5},    {name:'AI AFRICA', day:5, hour:5} ],
        [{name:'REVISION', day:1, hour:6},{name:'REVISION', day:2, hour:6},{name:'REVISION', day:3, hour:6}, {name:'REVISION', day:4, hour:6},{name:'AI AFRICA', day:5, hour:6}],
        [{name:'REVISION', day:1, hour:7},{name:'REVISION', day:2, hour:7},{name:'REVISION', day:3, hour:7}, {name:'REVISION', day:4, hour:7},{name:'REVISION', day:5, hour:7}]
]
}


const table_body = document.getElementById('table-body');

data.forEach((row, index)=>{
    table_body.innerHTML += getRow(row, getHours(index+1));
})

const cells = document.getElementsByClassName('cells');
for (let i=0; i<cells.length; i++){
    cells[i].addEventListener('click', ()=>{
        let h = cells[i].getAttribute('data-h');
        let d = cells[i].getAttribute('data-day');
        console.log(h,d);
        showModal(data[h-1][d-1]);
    })
}

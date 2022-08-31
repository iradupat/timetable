
// Get the modal
var modal = document.getElementById("myModal");




const showModal=(data)=>{
    // modal.hidden = false;
    document.getElementById('myModal').hidden = false;
    const options = document.getElementById('textVal').childNodes;
    for(let i=0; i<options.length; i++){
        if(options[i].value === data.name){
            document.getElementById('textVal').selectedIndex = i;
        }
    }
    document.getElementById('textVal').value = data.name;
    document.getElementById('checked').checked = data.done;


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
            <div data-day=${row[0].day} data-h=${row[0].hour}  class="cell-1 cells cell ${row[0].done && 'line'}">
                ${row[0].name}
            </div>
            <div data-day=${row[1].day} data-h=${row[1].hour}  class="cell-2 cells cell ${row[1].done && 'line'}">
              ${row[1].name}
            </div>
            <div data-day=${row[2].day} data-h=${row[2].hour} class="cell-3 cells cell ${row[2].done && 'line'}">
              ${row[2].name}
            </div>
            <div data-day=${row[3].day} data-h=${row[3].hour}  class="cell-4 cells cell ${row[3].done && 'line'}">
             ${row[3].name}
            </div>
            <div data-day=${row[4].day} data-h=${row[4].hour}  class="cell-5 cells cell ${row[4].done && 'line'}">
              ${row[4].name}
            </div>
          </div>
    
    `

}





let data  = [];
const db = localStorage.getItem('db');
if(db){
    data = JSON.parse(db).data;
    // console.log(data.data)

}else{
    data = [
        [{name:'REMOTE', hours:1.5, done:false, day:1, hour:1,},  {name:'HOPE', hours:1.5, done:false, day:2, hour:1},    {name:'REMOTE', hours:1.5, done:false, day:3, hour:1},   {name:'HOPE', day:4, hours:1.5, done:false, hour:1},    {name:'CMU/HOPE', hours:1.5, done:false, day:5, hour:1}],
        [{name:'REMOTE',hours:1.5, done:false, day:1, hour:2},    {name:'HOPE', hours:1.5, done:false, day:2, hour:2},    {name:'REMOTE', hours:1.5, done:false, day:3, hour:2},   {name:'HOPE', day:4, hours:1.5, done:false, hour:2},    {name:'CMU/HOPE', hours:1.5, done:false, day:5, hour:2}],
        [{name:'PAUSE', hours:1.5, done:false, day:1, hour:3},    {name:'HOPE', hours:1.5, done:false, day:2, hour:3},    {name:'PAUSE', hours:1.5, done:false, day:3, hour:3},    {name:'HOPE', day:4, hours:1.5, done:false, hour:3},    {name:'PAUSE', hours:1.5, done:false, day:5, hour:3}],
        [{name:'DEV-OPS', hours:1.5, done:false, day:1, hour:4},  {name:'HOPE', hours:1.5, done:false, day:2, hour:4},    {name:'DEV-OPS', hours:1.5, done:false, day:3, hour:4},  {name:'HOPE', day:4, hours:1.5, done:false, hour:4},    {name:'PAUSE', hours:1.5, done:false, day:5, hour:4}],
        [{name:'PPLT', hours:1.5, done:false, day:1, hour:5},     {name:'HOPE', hours:1.5, done:false, day:2, hour:5},    {name:'PPLT', hours:1.5, done:false, day:3, hour:5},     {name:'HOPE', day:4, hours:1.5, done:false, hour:5},    {name:'AI AFRICA', hours:1.5, done:false, day:5, hour:5}],
        [{name:'REVISION', hours:1.5, done:false, day:1, hour:6}, {name:'REVISION', hours:1.5, done:false, day:2, hour:6},{name:'REVISION', hours:1.5, done:false, day:3, hour:6}, {name:'REVISION', day:4, hours:1.5, done:false, hour:6},{name:'AI AFRICA', hours:1.5, done:false, day:5, hour:6}],
        [{name:'REVISION', hours:1.5, done:false, day:1, hour:7}, {name:'REVISION', hours:1.5, done:false, day:2, hour:7},{name:'REVISION', hours:1.5, done:false, day:3, hour:7}, {name:'REVISION', day:4, hours:1.5, done:false, hour:7},{name:'REVISION', hours:1.5, done:false, day:5, hour:7}]
    ]
    // saveToStorage(data);
    localStorage.setItem('db', JSON.stringify({"data":data}));
}

const saveToStorage = (data)=>{
    localStorage.setItem('db', JSON.stringify({"data":data}));
}

const updateCell =()=>{
    const val = document.getElementById('textVal').value;
    const hours = document.getElementById('text-hours').value;
    const day = document.getElementById('index-day').value;
    const hour = document.getElementById('index-hour').value;
    const finished = document.getElementById('checked').checked;
    console.log(finished);
    data[hour][day].name=val;
    data[hour][day].hours=hours;
    data[hour][day].done=finished;
    saveToStorage(data)
    location.reload()
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
        document.getElementById('index-day').value = d-1; 
        document.getElementById('index-hour').value = h-1;

        // console.log(h,d);
        showModal(data[h-1][d-1]);
    })
}

const btn = document.getElementById('save-btn').addEventListener('click', ()=>{
    updateCell()
});
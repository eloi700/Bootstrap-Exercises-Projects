let count = 0;
let saveEl = document.getElementById('saveEl');
const countEl = document.getElementById('count-el');

function increment(){
    count += 1;
    countEl.textContent = count;
}

function save(){
    let saveCount = count + ',' ;
    saveEl.textContent += saveCount;
    count = 0;
    countEl.textContent = count;
}
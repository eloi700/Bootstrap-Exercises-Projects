let count = 0;
const countEl = document.getElementById('count-el');

function increment(){
    count ++;
    countEl.textContent = count;
}

function save(){
    count = 0;
    countEl.textContent = count;
}

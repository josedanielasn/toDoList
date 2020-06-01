// moment().format('LLLL');
const main =document.querySelector('.container');
const date =main.querySelector('.date');


function changeDisplay(){
  let dateToday = new date();
  if (18 > dateToday.getHours() >= 6){
    date.classList.add('day');
  } else {
    date.classList.add('night');
  }
}

changeDisplay();

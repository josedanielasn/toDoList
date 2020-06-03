const main = document.querySelector('.container');
const date = main.querySelector('.date');
const input = main.querySelector('.write');
const list = main.querySelector('.list');

var to_do, number;
var activity = [];
changeDisplay();

// This will dynamically change the background display of the date section.
function changeDisplay() {
  let dateToday = new Date();
  date.querySelector('#schedule').textContent = dateToday;
  if (18 > dateToday.getHours() || dateToday.getHours() >= 6) {
    date.classList.remove('night');
    date.classList.add('day');
  }
  if (18 < dateToday.getHours() || dateToday.getHours() < 6) {
    date.classList.remove('day');
    date.classList.add('night');
  }
}

input.addEventListener('keypress', function (e) {
  if (e.keyCode === 13) {
    to_do = input.value;
    if (to_do) {
      activity.push(to_do);
      number = activity.indexOf(to_do);
      print();
      input.value = '';
    }
  }
});

function print() {
  let newDiv = document.createElement('section');
  newDiv.id = 'set_' + number;
  list.appendChild(newDiv);
  let a = document.createElement('p');
  a.innerHTML = '<i class="far fa-dot-circle"></i>';
  newDiv.appendChild(a);
  let addSpan = document.createElement('li');
  addSpan.id = 'list_' + number;
  addSpan.textContent = to_do;
  newDiv.appendChild(addSpan);
  let b = document.createElement('p');
  b.id = 'trash_' + number;
  b.innerHTML = '<i class="fas fa-trash-alt"></i>';
  newDiv.appendChild(b);
  // streak(number);
  remEntry(number);

  function remEntry(rem) {
    document
      .getElementById('trash_' + rem)
      .addEventListener('click', function () {
        document.getElementById('set_' + rem).remove;
      });
  }


  // function streak(rem) {
  //   document
  //     .getElementById('set_' + rem)
  //     .addEventListener('click', function () {
  //       document.getElementById('list_' + rem).classList.toggle('lineover');
  //     });
  // }

}

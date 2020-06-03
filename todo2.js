const main = document.querySelector('.container');
const date = main.querySelector('.date');
const input = main.querySelector('.write');
const list = main.querySelector('.list');
const add = main.querySelector('#add');

var to_do, number;
var activity = [];
changeDisplay();
del();
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

// This will retrieve the text from the input field upon the press of enter key.
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

// This will retrieve the text from the input field upon clicking the icon add.
add.addEventListener('click', function (e) {
  to_do = input.value;
  if (input.value) {
    activity.push(to_do);
    number = activity.indexOf(to_do);
    print();
    input.value = '';
  }
});

// This will print the value from the input field to list section.
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
  streak(number);
  remEntry(number);

  // This function will remove the corresponding to do item when the icon is clicked.
  function remEntry(rem) {
    document
      .getElementById('trash_' + rem)
      .addEventListener('click', function () {
        document.getElementById('set_' + rem).remove();
        // activity.splice(rem, 1)
      });
  }

  // This function will add and remove streak over the words.
  function streak(rem) {
    document
      .getElementById('set_' + rem)
      .addEventListener('click', function () {
        document.getElementById('list_' + rem).classList.toggle('lineover');
      });
  }
}

// This function will delete everything in the list section.
function del() {
  document.querySelector('.fas').addEventListener('click', function () {
    document.querySelector('.list').innerHTML = null;
    activity = [];
  });
}

// del();

// function del() {
//   document.querySelector('.fas').addEventListener('click', function () {
//     document.querySelector('.removable').remove();
//     let newlist = document.createElement('div');
//     newlist.className = 'removable';
//     list.appendChild(newlist);
//     activity = [];
//   });
// }

// document
//   .querySelector('.fas')
//   .addEventListener('click', activity.forEach(myFunction));

// function myFunction(item, index) {
//   if (item) {
//     document.getElementById('set_' + index).remove();
//   }
// }

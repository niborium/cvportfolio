import * as renderInfo from './renderInfo.js';

//Sektions divar
const ommigstartDiv = document.getElementById('Ommigstart');
const arblfstartDiv = document.getElementById('Arblfstart');
const utbstartDiv = document.getElementById('Utbstart');
const coustartDiv = document.getElementById('Coustart');
const portstartDiv = document.getElementById('Portstart');
const akastartDiv = document.getElementById('Akastart');

//Knappar
const ommigBtn = document.getElementById('ommigBtn');
const arblfBtn = document.getElementById('arblfBtn');
const utbBtn = document.getElementById('utbBtn');
const couBtn = document.getElementById('couBtn');
const portBtn = document.getElementById('portBtn');
const akaBtn = document.getElementById('akaBtn');

//Läsa in Info-sektionen onload
window.onload = function () {
  renderInfo.Intro();
};

//Toggla sektionerna på startsidan
var coll = document.getElementsByClassName('minimera');
var i;

for (i = 0; i < coll.length; i++) {
  coll[i].addEventListener('click', function () {
    this.classList.toggle('active');
    var content = this.nextElementSibling;
    if (content.style.display === 'block') {
      content.style.display = 'none';
    } else {
      content.style.display = 'block';
    }
  });
}

//Click event för sektionerna (knapparna) + fixa scrollTop.
ommigBtn.addEventListener('click', () => {
  renderInfo.Ommig();
  calcmyAge();
  scrolltopFix(ommigstartDiv);
});
arblfBtn.addEventListener('click', () => {
  renderInfo.Arbetslivserfarenhet();
  scrolltopFix(arblfstartDiv);
});
utbBtn.addEventListener('click', () => {
  renderInfo.Utbildning();
  scrolltopFix(utbstartDiv);
});
couBtn.addEventListener('click', () => {
  renderInfo.Cou();
  scrolltopFix(coustartDiv);
});
portBtn.addEventListener('click', () => {
  renderInfo.Pok();
  getgithubRepos();
  scrolltopFix(portstartDiv);
});
akaBtn.addEventListener('click', () => {
  renderInfo.Aka();
  scrolltopFix(akastartDiv);
});

//Scroll top-fix function
function scrolltopFix(div) {
  var topPos = div.offsetTop;
  div.scrollTop = topPos;
}

//Skriv ut ålder till "Om mig" per automatik.
function calcmyAge() {
  const getAge = (birthDate) =>
    Math.floor((new Date() - new Date(birthDate).getTime()) / 3.15576e10);
  const myAge = getAge('1990-08-19');
  const ageElement = document.getElementById('age');
  ageElement.innerHTML = myAge + ' år';
}

//Läsa in repos via Github API
function getgithubRepos() {
  fetch('https://api.github.com/users/niborium/repos')
    .then(function (response) {
      if (response.status !== 200) {
        console.log(
          'Det verkar vara ett problem. Statuskod: ' + response.status
        );
        return;
      }
      response.json().then(function (data) {
        var githubrepos = document.getElementById('githubrepos');
        for (i = 0; i < data.length; i++) {
          githubrepos.insertAdjacentHTML(
            'beforeend',
            "<a href='" +
              data[i].html_url +
              "' target='_blank' style='text-decoration:none;''><div class='githubrepo'><b>" +
              data[i].name +
              '</b><br> {Beskrivning: ' +
              data[i].description +
              '}' +
              '</div></a><br><br>'
          );
        }
      });
    })
    .catch(function (err) {
      console.log('Fetch Error :-S', err);
    });
}

var coll = document.getElementsByClassName("minimera");
var i;

for (i = 0; i < coll.length; i++) {
  coll[i].addEventListener("click", function() {
    this.classList.toggle("active");
    var content = this.nextElementSibling;
    if (content.style.display === "block") {
      content.style.display = "none";
    } else {
      content.style.display = "block";
    }
  });
}


//Läsa in repos via Github API

fetch('https://api.github.com/users/niborium/repos')
  .then(
    function(response) {
        if (response.status !== 200) {
            console.log('Det verkar vara ett problem. Statuskod: ' +
               response.status);
             return;
           }
           response.json().then(function(data) {        
            var githubrepos = document.getElementById('githubrepos')
            for (i=0; i<data.length; i++){
              githubrepos.insertAdjacentHTML("beforeend", "<a href='"+ data[i].html_url +"' target='_blank' style='text-decoration:none;''><div class='githubrepo'><b>" + data[i].name + "</b><br> {Beskrivning: " + data[i].description + "}" + "</div></a><br><br>");
            }

           });
        }
)
.catch(function(err) {
  console.log('Fetch Error :-S', err);
});


mybutton = document.getElementById("myBtn");

window.onscroll = function() {scrollFunction()};

function scrollFunction() {
  if (document.body.scrollTop > 150 || document.documentElement.scrollTop > 150) {
    mybutton.style.display = "block";
  } else {
    mybutton.style.display = "none";
  }
}

function HideSections() {
  document.getElementsByClassName('content')[0].style.display = 'none';
  document.getElementsByClassName('content')[1].style.display = 'none';
  document.getElementsByClassName('content')[2].style.display = 'none';
  document.getElementsByClassName('content')[3].style.display = 'none';
  document.getElementsByClassName('content')[4].style.display = 'none';
}
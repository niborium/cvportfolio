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
 
           // Examine the text in the response
           response.json().then(function(data) {
             console.log(data);
             
            var githubrepos = document.getElementById('githubrepos')
            for (i=0; i<data.length; i++){
              githubrepos.insertAdjacentHTML("beforeend", "<a href='"+ data[i].html_url +"' target='_blank' style='text-decoration:none;''><div class='githubrepo'>" + data[i].name + " {Språk: " + data[i].language + "}" + "</div></a>");
            }

           });
        }
)
.catch(function(err) {
  console.log('Fetch Error :-S', err);
});
var date = document.lastModified;
      document.getElementById("short").innerHTML = "Last modified on: " + date;


var year = document.lastModified;
      document.getElementById("shorter").innerHTML = " | Michael Osaregbemah Uwaya | Nigeria" + year;


      function myFunction() {
        var x = document.getElementById("links");
        if (x.style.display === "block") {
          x.style.display = "none";
        } else {
          x.style.display = "block";
        }
      }
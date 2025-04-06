var date = document.lastModified;
      document.getElementById("short").innerHTML = "Last modified on: " + date;

var year = document.lastModified;
      document.getElementById("shorter").innerHTML = " | Michael Osaregbemah Uwaya | Nigeria" + year;









const products = [
      {
        id: "fc-1888",
        name: "flux capacitor",
        averagerating: 4.5
      },
      {
        id: "fc-2050",
        name: "power laces",
        averagerating: 4.7
      },
      {
        id: "fs-1987",
        name: "time circuits",
        averagerating: 3.5
      },
      {
        id: "ac-2000",
        name: "low voltage reactor",
        averagerating: 3.9
      },
      {
        id: "jj-1969",
        name: "warp equalizer",
        averagerating: 5.0
      }
    ];

const dropdownElement = document.getElementById("products");
products.forEach(function(products) {

      const optionElement = document.createElement("option");
      optionElement.value = products.name
      const node = document.createTextNode(products.name);
      optionElement.appendChild(node);
      dropdownElement.appendChild(optionElement)  
  })
var date = document.lastModified;
      document.getElementById("short").innerHTML = "Last modified on: " + date;














      const cardContainer = document.getElementById('long2');
      
      function createCard(templeName1, location1, dedicated1, area1, imageUrl1) {
          const card = document.createElement('div');
          card.classList.add('card');
      
          const cardtempleName1 = document.createElement('h2');
          cardtempleName1.textContent = templeName1;
      
          const cardlocation1 = document.createElement('p');
          cardlocation1.textContent = location1;

          const carddedicated1 = document.createElement('p');
          carddedicated1.textContent = dedicated1;

          const cardarea1 = document.createElement('p');
          cardarea1.textContent = area1;

          const cardimageUrl1 = document.createElement('p');
          cardimageUrl1.textContent = imageUrl1;
      
          card.appendChild(cardtempleName1);
          card.appendChild(cardlocation1);
          card.appendChild(carddedicated1);
          card.appendChild(cardarea1);
          card.appendChild(cardimageUrl1);
      
          return card;
      }
      
      // Example usage
      const card1 = createCard('Aba Nigeria', 'LOCATION: Aba, Nigeria', 'DEDICATED: 2005, August, 7', 'SIZE: 11500', 'https://content.churchofjesuschrist.org/templesldsorg/bc/Temples/photo-galleries/aba-nigeria/400x250/aba-nigeria-temple-lds-273999-wallpaper.jpg');
      
      
      cardContainer.appendChild(card1);
      
      









      
const cardContainer2 = document.getElementById('long3');
      
function createCard(templeName2, location2, dedicated2, area2, imageUrl2) {
    const card = document.createElement('div');
    card.classList.add('card');

    const cardtempleName2 = document.createElement('h2');
    cardtempleName2.textContent = templeName2;

    const cardlocation2 = document.createElement('p');
    cardlocation2.textContent = location2;

    const carddedicated2 = document.createElement('p');
    carddedicated2.textContent = dedicated2;

    const cardarea2 = document.createElement('p');
    cardarea2.textContent = area2;

    const cardimageUrl2 = document.createElement('p');
    cardimageUrl2.textContent = imageUrl2;

    card.appendChild(cardtempleName2);
    card.appendChild(cardlocation2);
    card.appendChild(carddedicated2);
    card.appendChild(cardarea2);
    card.appendChild(cardimageUrl2);

    return card;
}

// Example usage
const card2 = createCard('Manti Utah', 'LOCATION: Aba, Nigeria', 'DEDICATED: 2005, August, 7', 'SIZE: 11500 sq ft', 'https://content.churchofjesuschrist.org/templesldsorg/bc/Temples/photo-galleries/aba-nigeria/400x250/aba-nigeria-temple-lds-273999-wallpaper.jpg');


cardContainer2.appendChild(card2);


/* LOOP starts here*/
var text = "templeName";
      document.getElementById("long1").innerHTML = text;




























/* List of Temples*/
const temples = [
  {
    templeName1: "Aba Nigeria",
    location1: "Aba, Nigeria",
    dedicated1: "2005, August, 7",
    area1: 11500,
    imageUrl1:
    "https://content.churchofjesuschrist.org/templesldsorg/bc/Temples/photo-galleries/aba-nigeria/400x250/aba-nigeria-temple-lds-273999-wallpaper.jpg"
  },
  {
    templeName: "Manti Utah",
    location: "Manti, Utah, United States",
    dedicated: "1888, May, 21",
    area: 74792,
    imageUrl:
    "https://content.churchofjesuschrist.org/templesldsorg/bc/Temples/photo-galleries/manti-utah/400x250/manti-temple-768192-wallpaper.jpg"
  },
  {
    templeName: "Payson Utah",
    location: "Payson, Utah, United States",
    dedicated: "2015, June, 7",
    area: 96630,
    imageUrl:
    "https://content.churchofjesuschrist.org/templesldsorg/bc/Temples/photo-galleries/payson-utah/400x225/payson-utah-temple-exterior-1416671-wallpaper.jpg"
  },
  {
    templeName: "Yigo Guam",
    location: "Yigo, Guam",
    dedicated: "2020, May, 2",
    area: 6861,
    imageUrl:
    "https://content.churchofjesuschrist.org/templesldsorg/bc/Temples/photo-galleries/yigo-guam/400x250/yigo_guam_temple_2.jpg"
  },
  {
    templeName: "Washington D.C.",
    location: "Kensington, Maryland, United States",
    dedicated: "1974, November, 19",
    area: 156558,
    imageUrl:
    "https://content.churchofjesuschrist.org/templesldsorg/bc/Temples/photo-galleries/washington-dc/400x250/washington_dc_temple-exterior-2.jpeg"
  },
  {
    templeName: "Lima Perú",
    location: "Lima, Perú",
    dedicated: "1986, January, 10",
    area: 9600,
    imageUrl:
    "https://content.churchofjesuschrist.org/templesldsorg/bc/Temples/photo-galleries/lima-peru/400x250/lima-peru-temple-evening-1075606-wallpaper.jpg"
  },
  {
    templeName: "Mexico City Mexico",
    location: "Mexico City, Mexico",
    dedicated: "1983, December, 2",
    area: 116642,
    imageUrl:
    "https://content.churchofjesuschrist.org/templesldsorg/bc/Temples/photo-galleries/mexico-city-mexico/400x250/mexico-city-temple-exterior-1518361-wallpaper.jpg"
  },
  {
    templeName: "Jacksonville Florida Temple",
    location: "Jacksonville, Florida, United States",
    dedicated: "Announced",
    area: N/A,
    imageUrl:
    "https://content.churchofjesuschrist.org/templesldsorg/bc/Temples/photo-galleries/jacksonville-florida-temple/400x250/jacksonville-florida-temple-wallpaper.jpg"
  },
  {
    templeName: "João Pessoa Brazil Temple",
    location: "MexicoJoão Pessoa, Brazil",
    dedicated: "Announced",
    area: N/A,
    imageUrl:
    "https://content.churchofjesuschrist.org/templesldsorg/bc/Temples/photo-galleries/joao-pessoa-brazil-temple/400x250/joao-pessoa-brazil-temple-wallpaper.jpg"
  },
  {
    templeName: "Juchitán de Zaragoza Mexico Temple",
    location: "Juchitán de Zaragoza, Mexico",
    dedicated: "Announced",
    area: N/A,
    imageUrl:
    "https://content.churchofjesuschrist.org/templesldsorg/bc/Temples/photo-galleries/juchitan-de-zaragoza-mexico-temple/400x250/juchitan-de-zaragoza-mexico-temple-wallpaper.jpg"
  },
  {
    templeName: "Kaohsiung Taiwan Temple",
    location: "Kaohsiung, Taiwan",
    dedicated: "Announced",
    area: N/A,
    imageUrl:
    "https://content.churchofjesuschrist.org/templesldsorg/bc/Temples/photo-galleries/campinas-brazil-temple/400x250/campinas-brazil-temple-wallpaper.jpg"
  },  
  {
    templeName: "Knoxville Tennessee Temple",
    location: "Knoxville, Tennessee, USA",
    dedicated: "Announced",
    area: N/A,
    imageUrl:
    "https://content.churchofjesuschrist.org/templesldsorg/bc/Temples/photo-galleries/knoxville-tennessee-temple/400x250/knoxville-tennessee-temple-wallpaper.jpg"
  },  
  {
    templeName: "Kyiv Ukraine Temple",
    location: "Kyiv, Ukraine",
    dedicated: "2010, August, 29",
    area: 116642,
    imageUrl:
    "https://content.churchofjesuschrist.org/templesldsorg/bc/Temples/photo-galleries/kyiv-ukraine-temple/400x250/kyiv-ukraine-temple-wallpaper.jpg"
  },   
];



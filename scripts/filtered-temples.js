const temples = [
    {
      templeName: "Aba Nigeria",
      location: "Aba, Nigeria",
      dedicated: "2005, August, 7",
      area: 11500,
      imageUrl:
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
    // Add more temple objects here...
    {
        templeName: "Apia Samoa",
        location: "Apia, Pesega, Samoa",
        dedicated: "1983, August, 5",
        area: 18691,
        imageUrl:
        "https://content.churchofjesuschrist.org/templesldsorg/bc/Temples/photo-galleries/apia-samoa/400x250/apia-samoa-temple-lds-460475-wallpaper.jpg"
      },
      {
        templeName: "Bountiful Utah",
        location: "Bountiful, Utah",
        dedicated: "1995, January, 8",
        area: 104000,
        imageUrl:
        "https://content.churchofjesuschrist.org/templesldsorg/bc/Temples/photo-galleries/bountiful-utah/400x250/bountiful-temple-lds-1059079-wallpaper.jpg"
      },
      {
        templeName: "Laie Hawaii",
        location: "Laie, Hawaii",
        dedicated: "1919, Novemver, 27",
        area: 47224,
        imageUrl:
        "https://content.churchofjesuschrist.org/templesldsorg/bc/Temples/photo-galleries/laie-hawaii/400x250/laie-temple-772761-wallpaper.jpg"
      },
  ];

const displayTemples = (temples) => {
    reset();
    temples.forEach((temple) => {
        let card = document.createElement('section');
        let templeName = document.createElement('h2');
        let info = document.createElement('div');
        let picture = document.createElement('img');

        templeName.textContent = `${temple.templeName}`;

        //info: location, dedication, size
        info.classList.add('info');
        info.innerHTML = `
        <p>Location: ${temple.location}</p>
        <p>Dedicated: ${temple.dedicated}</p>
        <p>Size: ${temple.area} sq ft</p>
        `
        
        picture.setAttribute('src', temple.imageUrl);
        picture.setAttribute('alt', `Image of ${temple.templeName} Temple`);
        picture.setAttribute('loading', 'lazy');
        picture.setAttribute('width', '400');
        picture.setAttribute('height', '250');

        card.appendChild(templeName);
        card.appendChild(info);
        card.appendChild(picture);

        cards.appendChild(card);
    });
}; 

const reset = () => {
    cards.innerHTML = '';
};

const displayAll = () => {
    reset();
    document.getElementById("header").innerHTML = "Home";
    displayTemples(temples);
};

const displayByAge = (age) => {
    const filteredTemples = temples.filter((temple) => {
        const year = parseInt(temple.dedicated.split(',')[0]);
        if (age === 'Old') {
          document.getElementById("header").innerHTML = "Old";
            return year < 1900;
        } else if (age === 'New') {
          document.getElementById("header").innerHTML = "New";
            return year > 2000;
        }
    });
    reset();
    displayTemples(filteredTemples);
};

const displayBySize = (size) => {
    const filteredTemples = temples.filter((temple) => {
        if (size === 'Large') {
          document.getElementById("header").innerHTML = "Large";
            return temple.area > 90000;
        } else if (size === 'Small') {
          document.getElementById("header").innerHTML = "Small";
            return temple.area < 10000;
        }
    });
    reset();
    displayTemples(filteredTemples);
};

document.getElementById('home').addEventListener('click', displayAll);

document.getElementById('old').addEventListener('click', () => displayByAge('Old'));

document.getElementById('new').addEventListener('click', () => displayByAge('New'));

document.getElementById('large').addEventListener('click', () => displayBySize('Large'));

document.getElementById('small').addEventListener('click', () => displayBySize('Small'));

displayTemples(temples);
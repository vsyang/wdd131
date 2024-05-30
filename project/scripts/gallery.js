const images = [
    {
        size: "Extra Small",
        serve: "1-2",
        imageUrl: "https://vsyang.github.io/wdd131/project/images/xsmall1.webp"
    },
    {
        size: "Extra Small",
        serve: "1-2",
        imageUrl: "https://vsyang.github.io/wdd131/project/images/xsmall2.webp"
    },
    {
        size: "Small",
        serve: "3-10",
        imageUrl: "https://vsyang.github.io/wdd131/project/images/small1.webp"
    },
    {
        size: "Small",
        serve: "3-10",
        imageUrl: "https://vsyang.github.io/wdd131/project/images/small2.webp"
    },
    {
        size: "Small",
        serve: "3-10",
        imageUrl: "https://vsyang.github.io/wdd131/project/images/small3.webp"
    },
    {
        size: "Small",
        serve: "3-10",
        imageUrl: "https://vsyang.github.io/wdd131/project/images/small4.webp"
    },
    {
        size: "Small",
        serve: "3-10",
        imageUrl: "https://vsyang.github.io/wdd131/project/images/small5.webp"
    },
    {
        size: "Medium",
        serve: "10-20",
        imageUrl: "https://vsyang.github.io/wdd131/project/images/medium1.webp"
    },
    {
        size: "Medium",
        serve: "10-20",
        imageUrl: "https://vsyang.github.io/wdd131/project/images/medium2.webp"
    },
    {
        size: "Medium",
        serve: "10-20",
        imageUrl: "https://vsyang.github.io/wdd131/project/images/medium3.webp"
    },
    {
        size: "Medium",
        serve: "10-20",
        imageUrl: "https://vsyang.github.io/wdd131/project/images/medium4.webp"
    },
    {
        size: "Medium",
        serve: "10-20",
        imageUrl: "https://vsyang.github.io/wdd131/project/images/medium5.webp"
    },
    {
        size: "Large",
        serve: "20-50",
        imageUrl: "https://vsyang.github.io/wdd131/project/images/large1.webp"
    },
    {
        size: "Large",
        serve: "20-50",
        imageUrl: "https://vsyang.github.io/wdd131/project/images/large2.webp"
    },
    {
        size: "Large",
        serve: "20-50",
        imageUrl: "https://vsyang.github.io/wdd131/project/images/large3.webp"
    },
    {
        size: "Extra Large",
        serve: "100+",
        imageUrl: "https://vsyang.github.io/wdd131/project/images/xlarge1.webp"
    },
    {
        size: "Extra Large",
        serve: "100+",
        imageUrl: "https://vsyang.github.io/wdd131/project/images/xlarge2.webp"
    },
];

const examples = document.getElementById('examples');

const displayExamples = (images) => {
    reset();
    images.forEach((image) => {
        let section = document.createElement('section');
        
        let imageName = document.createElement('h3');
        imageName.textContent = image.size;
        
        let picture = document.createElement('img');
        picture.src = image.imageUrl;
        picture.alt = image.size;

        let info = document.createElement('p');
        info.classList.add('info');
        info.innerHTML = `
        <p>Serves ${image.serve} people.`

        section.appendChild(imageName);
        section.appendChild(picture);
        section.appendChild(info);

        examples.appendChild(section);
    });
};

const reset = () =>{
    examples.innerHTML = '';
};

const sort = (images) => {
    reset();
    const filter = document.querySelector('#sort').value.toLowerCase();
    let filteredImages;

    switch (filter) {
        case 'extra small':
            filteredImages = images.filter(image => image.size.toLowerCase() === 'extra small');
            break;
        case 'small':
            filteredImages = images.filter(image => image.size.toLowerCase() === 'small');
            break;
        case 'medium':
            filteredImages = images.filter(image => image.size.toLowerCase() === 'medium');
            break;
        case 'large':
            filteredImages = images.filter(image => image.size.toLowerCase() === 'large');
            break;
        case 'extra large':
            filteredImages = images.filter(image => image.size.toLowerCase() === 'extra large');
            break;
        default:
            filteredImages = images;
            break;
    }
    displayExamples(filteredImages);
};

document.querySelector('#sort').addEventListener('change', () => {
    sort(images);
});

displayExamples(images);
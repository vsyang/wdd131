const products = [
    {
        id: 'xsmall',
        name: 'Extra Small'
    },
    {
        id: 'small',
        name: 'Small'
    },
    {
        id: 'medium',
        name: 'Medium'
    },
    {
        id: 'large',
        name: 'Large'
    },
    {
        id: 'xlarge',
        name: 'Extra Large'
    }
];

function generateSize() {
    const productName = document.getElementById('size');
    products.forEach(product => {
        const option = document.createElement('option');
        option.value = product.id;
        option.innerHTML = product.name;
        productName.appendChild(option);
    });
}

generateSize();
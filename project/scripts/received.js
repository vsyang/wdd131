let reviewCount = Number(window.localStorage.getItem('Customer Visit Count')) || 0;
reviewCount++;

localStorage.setItem('Customer Visit Count', reviewCount);

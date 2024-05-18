let reviewCount = Number(window.localStorage.getItem('Review Count')) || 0;
reviewCount++;

localStorage.setItem('Review Count', reviewCount);

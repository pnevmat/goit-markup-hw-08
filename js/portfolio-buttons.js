const allButtonRef = document.querySelector('button[all]');
const webSitesButtonRef = document.querySelector('button[web-sites]');
const appsButtonRef = document.querySelector('button[apps]');
const designButtonRef = document.querySelector('button[design]');
const marketingButtonRef = document.querySelector('button[marketing]');

const webSitesCardsRef = document.querySelectorAll('li[web-site]');
const appsCardsRef = document.querySelectorAll('li[app]');
const designCardsRef = document.querySelectorAll('li[design]');
const marketingCardsRef = document.querySelectorAll('li[marketing]');

let listLength;

webSitesButtonRef.addEventListener('click', () => {
    listLength = appsCardsRef.length;
    for (let i = 0; i < listLength; i += 1) {
        if (i < listLength) {
            appsCardsRef[i].classList.add('portfolio-items-hidden');
        } else {
            break;
        }
    }
    listLength = designCardsRef.length;
    for (let i = 0; i < listLength; i += 1) {
        if (i < listLength) {
            designCardsRef[i].classList.add('portfolio-items-hidden');
        } else {
            break;
        }
    }
    listLength = marketingCardsRef.length;
    for (let i = 0; i < listLength; i += 1) {
        if (i < listLength) {
            marketingCardsRef[i].classList.add('portfolio-items-hidden');
        } else {
            break;
        }
    }
    listLength = webSitesCardsRef.length;
    for (let i = 0; i < listLength; i += 1) {
        webSitesCardsRef[i].classList.remove('portfolio-items-hidden');
        if (listLength <= 3) {
            webSitesCardsRef[i].classList.add('chosen-three');
        } else {
            webSitesCardsRef[i].classList.add('chosen-more-three');
        }
    }
});

appsButtonRef.addEventListener('click', () => {
    listLength = webSitesCardsRef.length;
    for (let i = 0; i < listLength; i += 1) {
        webSitesCardsRef[i].classList.add('portfolio-items-hidden');
    }
    listLength = designCardsRef.length;
    for (let i = 0; i < listLength; i += 1) {
        if (i < listLength) {
            designCardsRef[i].classList.add('portfolio-items-hidden');
        } else {
            break;
        }
    }
    listLength = marketingCardsRef.length;
    for (let i = 0; i < listLength; i += 1) {
        if (i < listLength) {
            marketingCardsRef[i].classList.add('portfolio-items-hidden');
        } else {
            break;
        }
    }
    listLength = appsCardsRef.length;
    for (let i = 0; i < listLength; i += 1) {
        if (i < listLength) {
            appsCardsRef[i].classList.remove('portfolio-items-hidden');
            if (listLength <= 3) {
                appsCardsRef[i].classList.add('chosen-three');
            } else {
                appsCardsRef[i].classList.add('chosen-more-three');
            }
        } else {
            break;
        }
    }
});

designButtonRef.addEventListener('click', () => {
    listLength = webSitesCardsRef.length;
    for (let i = 0; i < listLength; i += 1) {
        webSitesCardsRef[i].classList.add('portfolio-items-hidden');
    }
    listLength = appsCardsRef.length;
    for (let i = 0; i < listLength; i += 1) {
        if (i < listLength) {
            appsCardsRef[i].classList.add('portfolio-items-hidden');
        } else {
            break;
        }
    }
    listLength = marketingCardsRef.length;
    for (let i = 0; i < listLength; i += 1) {
        if (i < listLength) {
            marketingCardsRef[i].classList.add('portfolio-items-hidden');
        } else {
            break;
        }
    }
    listLength = designCardsRef.length;
    for (let i = 0; i < listLength; i += 1) {
        if (i < listLength) {
            designCardsRef[i].classList.remove('portfolio-items-hidden');
            if (listLength <= 3) {
                designCardsRef[i].classList.add('chosen-three');
            } else {
                designCardsRef[i].classList.add('chosen-more-three');
            }
        } else {
            break;
        }
    }
});

marketingButtonRef.addEventListener('click', () => {
    listLength = webSitesCardsRef.length;
    for (let i = 0; i < listLength; i += 1) {
        webSitesCardsRef[i].classList.add('portfolio-items-hidden');
    }
    listLength = appsCardsRef.length;
    for (let i = 0; i < listLength; i += 1) {
        if (i < listLength) {
            appsCardsRef[i].classList.add('portfolio-items-hidden');
        } else {
            break;
        }
    }
    listLength = designCardsRef.length;
    for (let i = 0; i < listLength; i += 1) {
        if (i < listLength) {
            designCardsRef[i].classList.add('portfolio-items-hidden');
        } else {
            break;
        }
    }
    listLength = marketingCardsRef.length;
    for (let i = 0; i < listLength; i += 1) {
        if (i < listLength) {
            marketingCardsRef[i].classList.remove('portfolio-items-hidden');
            if (listLength <= 3) {
                marketingCardsRef[i].classList.add('chosen-three');
            } else {
                marketingCardsRef[i].classList.add('chosen-more-three');
            }
        } else {
            break;
        }
    }
});

allButtonRef.addEventListener('click', () => {
    listLength = webSitesCardsRef.length;
    for (let i = 0; i < listLength; i += 1) {
        webSitesCardsRef[i].classList.remove('portfolio-items-hidden');
        webSitesCardsRef[i].classList.remove('chosen-three');
        webSitesCardsRef[i].classList.remove('chosen-more-three');
    }
    listLength = appsCardsRef.length;
    for (let i = 0; i < listLength; i += 1) {
        if (i < listLength) {
            appsCardsRef[i].classList.remove('portfolio-items-hidden');
            appsCardsRef[i].classList.remove('chosen-three');
            appsCardsRef[i].classList.remove('chosen-more-three');
        } else {
            break;
        }
    }
    listLength = designCardsRef.length;
    for (let i = 0; i < listLength; i += 1) {
        if (i < listLength) {
            designCardsRef[i].classList.remove('portfolio-items-hidden');
            designCardsRef[i].classList.remove('chosen-three');
            designCardsRef[i].classList.remove('chosen-more-three');
        } else {
            break;
        }
    }
    listLength = marketingCardsRef.length;
    for (let i = 0; i < listLength; i += 1) {
        if (i < listLength) {
            marketingCardsRef[i].classList.remove('portfolio-items-hidden');
            marketingCardsRef[i].classList.remove('chosen-three');
            marketingCardsRef[i].classList.remove('chosen-more-three');
        } else {
            break;
        }
    }
});
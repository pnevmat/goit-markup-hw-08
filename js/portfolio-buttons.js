const allButtonRef = document.querySelector('button[all]');
const webSitesButtonRef = document.querySelector('button[web-sites]');
const appsButtonRef = document.querySelector('button[apps]');
const designButtonRef = document.querySelector('button[design]');
const marketingButtonRef = document.querySelector('button[marketing]');

const allCardsRef = [...document.querySelectorAll('li[web-site]'),
    ...document.querySelectorAll('li[app]'),
    ...document.querySelectorAll('li[design]'),
    ...document.querySelectorAll('li[marketing]')];

webSitesButtonRef.addEventListener('click', onWebSitesButtonClick);
appsButtonRef.addEventListener('click', onAppsButtonClick);
designButtonRef.addEventListener('click', onDesignButtonClick);
marketingButtonRef.addEventListener('click', onMarketingButtonClick);
allButtonRef.addEventListener('click', onAllButtonClick);

function onWebSitesButtonClick() {
    allCardsRef.forEach((element, i) => {
        if (element.attributes[1].name !== 'web-site') {
            allCardsRef[i].classList.add('portfolio-items-hidden');
            allCardsRef[i].classList.remove('chosen-three');
        } else {
            allCardsRef[i].classList.remove('portfolio-items-hidden');
        }
    });
};
function onAppsButtonClick() {
    allCardsRef.forEach((element, i) => {
        if (element.attributes[1].name !== 'app') {
            allCardsRef[i].classList.add('portfolio-items-hidden');
        } else {
            allCardsRef[i].classList.remove('portfolio-items-hidden');
            allCardsRef[i].classList.add('chosen-three');
        }
    });
};
function onDesignButtonClick() {
    allCardsRef.forEach((element, i) => {
        if (element.attributes[1].name !== 'design') {
            allCardsRef[i].classList.add('portfolio-items-hidden');
            allCardsRef[i].classList.remove('chosen-three');
        } else {
            allCardsRef[i].classList.remove('portfolio-items-hidden');
            allCardsRef[i].classList.add('chosen-three');
        }
    });
};
function onMarketingButtonClick() {
    allCardsRef.forEach((element, i) => {
        if (element.attributes[1].name !== 'marketing') {
            allCardsRef[i].classList.add('portfolio-items-hidden');
            allCardsRef[i].classList.remove('chosen-three');
        } else {
            allCardsRef[i].classList.remove('portfolio-items-hidden');
            allCardsRef[i].classList.add('chosen-three');
        }
    });
};
function onAllButtonClick() {
    allCardsRef.forEach((element, i) => {
        allCardsRef[i].classList.remove('portfolio-items-hidden');
        allCardsRef[i].classList.remove('chosen-three');
    });
};
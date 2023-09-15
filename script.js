const wrapperHome = document.querySelector('#home .wrapper');
const listHome = document.querySelector('#home .list');
const selectedHome = document.querySelector('#home .selected');

wrapperHome.addEventListener('click', () => {
    // listHome.classList.add(wrapper)
    listHome.classList.toggle('show');
});

listHome.addEventListener('click', (e) => {
    const text = e.target.querySelector('.text');
    selectedHome.innerHTML = text.innerHTML;
});


const wrapperFeatures = document.querySelector('#features .wrapper');
const listFeatures = document.querySelector('#features .list');
const selectedFeatures = document.querySelector('#features .selected');

wrapperFeatures.addEventListener('click', () => {
    // listFeatures.classList.add('show');
    listFeatures.classList.toggle('show');
});

listFeatures.addEventListener('click', (e) => {
    const text = e.target.querySelector('.text');
    selectedFeatures.innerHTML = text.innerHTML;
});

const dropdownHome = document.querySelector('#home .drop-down');
const listHome = document.querySelector('#home .list');
const selectedHome = document.querySelector('#home .selected');

dropdownHome.addEventListener('click', () => {
    listHome.classList.toggle('show');
});

listHome.addEventListener('click', (e) => {
    const text = e.target.querySelector('.text');
    selectedHome.innerHTML = text.innerHTML;
});



const dropdownFeatures = document.querySelector('#features .drop-down');
const listFeatures = document.querySelector('#features .list');
const selectedFeatures = document.querySelector('#features .selected');

dropdownFeatures.addEventListener('click', () => {
    listFeatures.classList.toggle('show');
});

listFeatures.addEventListener('click', (e) => {
    const text = e.target.querySelector('.text');
    selectedFeatures.innerHTML = text.innerHTML;
});



const dropdownCoreFeatures = document.querySelector('#core-features .drop-down');
const listCoreFeatures = document.querySelector('#core-features .list');
const selectedCoreFeatures = document.querySelector('#core-features .selected');

dropdownCoreFeatures.addEventListener('click', () => {
    listCoreFeatures.classList.toggle('show');
});

listCoreFeatures.addEventListener('click', (e) => {
    const text = e.target.querySelector('.text');
    selectedCoreFeatures.innerHTML = text.innerHTML;
});


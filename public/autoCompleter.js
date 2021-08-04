let moviesNames;
const limit = 10;
const resultsContainer = document.getElementById('suggestionsBar');

const searchJson = (enteredName) => {
    if (!moviesNames) return;
    resultsContainer.classList.remove('none');
    const reg = new RegExp(`^${enteredName}`, 'i');
    let count = 0;
    for (let i = 0; i < moviesNames.length && count < limit; i += 1) {
        const item = moviesNames[i].name;
        if (reg.test(item)) {
            const movieItem = document.createElement('a');
            const nameText = document.createTextNode(item);
            movieItem.setAttribute('class', 'movieNameSugg');
            movieItem.appendChild(nameText);
            resultsContainer.appendChild(movieItem);
            count += 1;
            movieItem.addEventListener('click',()=>{
              searchBar.value= nameText.textContent;
            })
        }
    }
};

const nameInput = (e) => {
    while (resultsContainer.lastChild) resultsContainer.removeChild(resultsContainer.lastChild);

    if (e.value.length > 0) searchJson(e.value);
};

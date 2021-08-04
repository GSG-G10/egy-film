const limit = 10;
const resultsContainer = document.getElementById('suggestionsBar');

function nameInput(e) {
    while (resultsContainer.lastChild)
        resultsContainer.removeChild(resultsContainer.lastChild);

    if (e.value.length > 0)
        search(e.value);
}

function search(enteredName) {
    if (!moviesNames)
        return;
    const reg = new RegExp(`^${enteredName}`, 'i');
    let count = 0;
    for (let i = 0; i < moviesNames.length && count < limit; i++) {
        const item = moviesNames[i]['name'];
        if (reg.test(item)) {
            const movieItem = document.createElement('i');
            const nameText = document.createTextNode(item);
            movieItem.style.display = 'block';
            movieItem.appendChild(nameText);
            resultsContainer.appendChild(movieItem);
            count++;
        }
    }
}
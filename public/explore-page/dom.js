const searchResultDiv = document.querySelector('.searchResult');
const searchBar = document.querySelector('#searchBar');
const createResultedElement = (element, parent, classname) => {
    const item = document.createElement(element);
    parent.appendChild(item);
    item.className = classname;
    return item;
};

// eslint-disable-next-line no-unused-vars
const showResult = (data) => {
    while (searchResultDiv.lastChild) searchResultDiv.removeChild(searchResultDiv.lastChild);
    // eslint-disable-next-line array-callback-return
    data.results.map(((result) => {
        const moviecontainer = createResultedElement('div', searchResultDiv, 'movieContainer');

        const moviePoster = createResultedElement('img', moviecontainer, 'moviePoster');
        moviePoster.src = `https://image.tmdb.org/t/p/w500/${result.poster_path}`;

        const movieDetails = createResultedElement('div', moviecontainer, 'movieDetails');

        const title = createResultedElement('h1', movieDetails, 'title');
        title.innerText = result.original_title;

        const realesedDate = createResultedElement('p', movieDetails, 'itemData');
        realesedDate.innerText = result.release_date;

        const voteAverage = createResultedElement('p', movieDetails, 'itemData');
        voteAverage.innterText = `rate: ${result.vote_average} /10`;

        const overview = createResultedElement('p', movieDetails, 'overview');
        const textLimit = 150;
        const overviewText = result.overview;
        if (overviewText.length > textLimit) {
            const firstSet = overviewText.substring(0, textLimit);
            const secnondSet = overviewText.substring(textLimit, overviewText.length);
            overview.innerText = `${firstSet}...`;
        } else {
            overview.innerText = overviewText;
        }
    }));
};

if (searchBar) {
    searchBar.addEventListener('keyup', (event) => {
        const movieName = searchBar.value;
        if (event.keyCode === 13 && movieName.length > 0) searchFromApi(movieName);
    });
}

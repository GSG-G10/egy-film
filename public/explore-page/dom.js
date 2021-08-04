const searchResultDiv = document.querySelector('.searchResult');

const createResultedElement = (element, parent, classname) => {
  const item = document.createElement(element);
  parent.appendChild(item);
  item.className = classname;
  return item;
};

// eslint-disable-next-line no-unused-vars
const showResult = (data) => {
  // eslint-disable-next-line array-callback-return
  data.map(((result) => {
    const moviecontainer = createResultedElement('div', searchResultDiv, 'movieContainer');

    const moviePoster = createResultedElement('img', moviecontainer, 'moviePoster');
    moviePoster.src = result.poster_path;

    const movieDetails = createResultedElement('div', moviecontainer, 'movieDetails');

    const title = createResultedElement('h1', movieDetails, 'title');
    title.innerText = result.original_title;

    const realesedDate = createResultedElement('p', movieDetails, 'itemData');
    realesedDate.innerText = result.release_date;

    const voteAverage = createResultedElement('p', movieDetails, 'itemData');
    voteAverage.innterText = `${result.vote_average} /10`;

    const overview = createResultedElement('p', movieDetails, 'overview');
    overview.innerText = result.overview;
  }));
};

const fetchData = (url, cb) => {
    const xhr = new XMLHttpRequest();
    xhr.onreadystatechange = () => {
        if (xhr.readyState === 4) {
            if (xhr.status === 200) {
                cb(JSON.parse(xhr.responseText));
            } else {
                cb(xhr.status);
            }
        } else cb(xhr.status);
    };
    xhr.open('GET', url);
    xhr.send();
};

document.onreadystatechange = () => {
    if (document.readyState === 'complete') {
        fetchData('/movies-names', (data) => {
            if (Number.isInteger(data))
                moviesNames = JSON.parse(localStorage.getItem('moviesNames'));
            else {
                moviesNames = data;
                localStorage.setItem('moviesNames', JSON.stringify(data));
            }
        });
    }
};

const searchFromApi = (movie) => {
    fetchData(`/movie-search?${movie}`, (result) => {
        if (Number.isInteger(result))
            return;
        showResult(result);
    });
};


try {
    module.exports = fetchData;
} catch (err) {

}
const env1 = process.env;
const apiKey = env1.API_KEY;
const url = `https://api.themoviedb.org/3/movie/popular?api_key=${apiKey}&language=en-US`;
fetchData(url, showResult);

const fetchData = (url, cb) => {
    const xhr = new XMLHttpRequest();
    xhr.onreadystatechange = () => {
        if (xhr.readyState === 4) {
            if (xhr.status === 200) {
                console.log(JSON.parse(xhr.responseText))
                cb(JSON.parse(xhr.responseText));
            } else {
                cb(xhr.status);
            }
        }
    };
    xhr.open("GET", url);
    xhr.send();
}
// module.exports = fetchData
const apiKey = process.env.API_KEY;
const searchQuery = "";
const url = `https://api.themoviedb.org/3/movie/popular?api_key=${apiKey}&language=en-US`
fetchData(url,showResult)
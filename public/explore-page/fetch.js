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

try {
    module.exports = fetchData;
} catch (err) {

}
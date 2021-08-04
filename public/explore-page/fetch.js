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
try {
    module.exports = fetchData;
} catch (err) {

}
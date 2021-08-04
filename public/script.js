let moviesNames;

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
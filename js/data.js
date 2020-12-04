

function saveOldData(key, data) {
    localStorage.setItem(key, data);
}

function loadOldData(key) {
    return localStorage.getItem(key);
}

function removeLocal(key) {
    localStorage.removeItem(key);
}

function resetMoney(m) {
    localStorage.setItem('money', m);
    alert("Money reset to 500k.");

}

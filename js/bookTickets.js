const valueBasicBook = document.getElementById("book-basic-value");
const valueSeniorBook = document.getElementById("book-senior-value");
document.getElementById("book-basic-increase").addEventListener("click", () => {
    valueBasicBook.textContent++;
});
document.getElementById("book-basic-decrease").addEventListener("click", () => {
    if (valueBasicBook.textContent > 0) {
        valueBasicBook.textContent--;
    }
});
document.getElementById("book-senior-increase").addEventListener("click", () => {
    valueSeniorBook.textContent++;
});
document.getElementById("book-senior-decrease").addEventListener("click", () => {
    if (valueSeniorBook.textContent > 0) {
        valueSeniorBook.textContent--;
    }
});

document.getElementById("book-form-button").addEventListener("click", () => {
    window.location.href = "../index.html";
});
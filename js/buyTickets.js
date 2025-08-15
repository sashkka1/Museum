export default ticketsCounter();

function ticketsCounter() {
    document.getElementById("permanent").addEventListener("click", function () {
        const targetInput = document.querySelector('input[type="radio"][value="permanent"]');
        if (targetInput) {
            targetInput.checked = true;
        }
    });
    document.getElementById("temporary").addEventListener("click", function () {
        const targetInput = document.querySelector('input[type="radio"][value="temporary"]');
        if (targetInput) {
            targetInput.checked = true;
        }
    });
    document.getElementById("combined").addEventListener("click", function () {
        const targetInput = document.querySelector('input[type="radio"][value="combined"]');
        if (targetInput) {
            targetInput.checked = true;
        }
    });

    const valueBasic = document.getElementById("buy-basic-value");
    const buyTicketTotal = document.getElementById("buy-ticket-total")
    const valueSenior = document.getElementById("buy-senior-value");
    document.getElementById("buy-basic-increase").addEventListener("click", () => {
        valueBasic.textContent++;
        buyTicketTotal.textContent = +buyTicketTotal.textContent + 100;
    });
    document.getElementById("buy-basic-decrease").addEventListener("click", () => {
        if (valueBasic.textContent > 0) {
            valueBasic.textContent--;
            buyTicketTotal.textContent = +buyTicketTotal.textContent - 100;
        }
    });
    document.getElementById("buy-senior-increase").addEventListener("click", () => {
        valueSenior.textContent++;
        buyTicketTotal.textContent = +buyTicketTotal.textContent + 120;
    });
    document.getElementById("buy-senior-decrease").addEventListener("click", () => {
        if (valueSenior.textContent > 0) {
            valueSenior.textContent--;
            buyTicketTotal.textContent = +buyTicketTotal.textContent - 120;
        }
    });
}


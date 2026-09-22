
const form = document.querySelector("#booking form");
const toast = document.getElementById("toast");

form.addEventListener("submit", function(event) {
    event.preventDefault();

    const name = form.querySelector('input[type="text"]').value;
    const tickets = form.querySelector('input[type="number"]').value;

    if (name === "" || tickets < 1) {
        showToast("please Fill all details!");
        return;
    }

    showToast("Ticket Booked!");
});

function showToast(message) {
    toast.textContent = message;
    toast.style.display = "block";

    setTimeout(function() {
        toast.style.display = "none";
    }, 2000);
}
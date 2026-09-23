function showToast(message) {
    const toast = document.getElementById("toast");

    toast.textContent = message;
    toast.style.display = "block";

    setTimeout(function() {
        toast.style.display = "none";
    }, 2000);
}

const bookButtons = document.querySelectorAll('a[href="#booking"]');

bookButtons.forEach(function(button) {
    button.addEventListener("click", function(event) {
        event.preventDefault();

        document.querySelector("#booking").scrollIntoView({
            behavior: "smooth"
        });

        showToast("Ready to book your IPL tickets");
    });
});

const form = document.querySelector("#booking form");

form.addEventListener("submit", function(event) {
    event.preventDefault();

    const name = form.querySelector('input[type="text"]').value;

    showToast("Ticket booked successfully " + "!");

    form.reset();
});
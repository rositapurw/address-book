document.getElementById("contactForm").addEventListener("submit", function (event) {
    event.preventDefault();

    const name = document.getElementById("name").value;
    const phone = document.getElementById("phone").value;
    const email = document.getElementById("email").value;

    if (name && phone && email) {
        const table = document.getElementById("contactTable").getElementsByTagName("tbody")[0];
        const row = table.insertRow();

        const nameCell = row.insertCell(0);
        const phoneCell = row.insertCell(1);
        const emailCell = row.insertCell(2);
        const actionsCell = row.insertCell(3);
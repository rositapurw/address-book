document.addEventListener("DOMContentLoaded", function () {
  loadContactsFromStorage();
});

document
  .getElementById("contactForm")
  .addEventListener("submit", function (event) {
    event.preventDefault();

    const name = document.getElementById("name").value;
    const phone = document.getElementById("phone").value;
    const email = document.getElementById("email").value;

    if (name && phone && email) {
      const table = document
        .getElementById("contactTable")
        .getElementsByTagName("tbody")[0];
      const row = table.insertRow();

      const nameCell = row.insertCell(0);
      const phoneCell = row.insertCell(1);
      const emailCell = row.insertCell(2);
      const actionCell = row.insertCell(3);

      nameCell.textContent = name;
      phoneCell.textContent = phone;
      emailCell.textContent = email;

      const deleteButton = document.createElement("button");
      deleteButton.textContent = "Delete";
      deleteButton.className = "delete";
      deleteButton.onclick = function () {
        row.remove();
        removeContactFromStorage(name, phone, email);
      };
      actionCell.appendChild(deleteButton);

      const editButton = document.createElement("button");
      editButton.textContent = "Edit";
      editButton.className = "edit";
      editButton.onclick = function () {
        editContact(nameCell, phoneCell, emailCell, name, phone, email);
      };
      actionCell.appendChild(editButton);

      saveContactToStorage(name, phone, email);

      document.getElementById("contactForm").reset();
    } else {
      alert("Please fill in all fields.");
    }
  });

function saveContactToStorage(name, phone, email) {
  const contacts = JSON.parse(localStorage.getItem("contacts")) || [];
  contacts.push({ name, phone, email });
  localStorage.setItem("contacts", JSON.stringify(contacts));
}

function removeContactFromStorage(name, phone, email) {
  const contacts = JSON.parse(localStorage.getItem("contacts")) || [];
  const updatedContacts = contacts.filter(
    (contact) =>
      contact.name !== name ||
      contact.phone !== phone ||
      contact.email !== email
  );
  localStorage.setItem("contacts", JSON.stringify(updatedContacts));
}

function loadContactsFromStorage() {
  const contacts = JSON.parse(localStorage.getItem("contacts")) || [];
  const table = document
    .getElementById("contactTable")
    .getElementsByTagName("tbody")[0];

  contacts.forEach((contact) => {
    const row = table.insertRow();

    const nameCell = row.insertCell(0);
    const phoneCell = row.insertCell(1);
    const emailCell = row.insertCell(2);
    const actionCell = row.insertCell(3);

    nameCell.textContent = contact.name;
    phoneCell.textContent = contact.phone;
    emailCell.textContent = contact.email;

    const deleteButton = document.createElement("button");
    deleteButton.textContent = "Delete";
    deleteButton.className = "delete";
    deleteButton.onclick = function () {
      row.remove();
      removeContactFromStorage(contact.name, contact.phone, contact.email);
    };
    actionCell.appendChild(deleteButton);

    const editButton = document.createElement("button");
    editButton.textContent = "Edit";
    editButton.className = "edit";
    editButton.onclick = function () {
      editContact(
        nameCell,
        phoneCell,
        emailCell,
        contact.name,
        contact.phone,
        contact.email
      );
    };
    actionCell.appendChild(editButton);
  });
}

function editContact(
  nameCell,
  phoneCell,
  emailCell,
  oldName,
  oldPhone,
  oldEmail
) {
  const newName =
    prompt("Edit Name:", nameCell.textContent) || nameCell.textContent;
  const newPhone =
    prompt("Edit Phone:", phoneCell.textContent) || phoneCell.textContent;
  const newEmail =
    prompt("Edit Email:", emailCell.textContent) || emailCell.textContent;

  nameCell.textContent = newName;
  phoneCell.textContent = newPhone;
  emailCell.textContent = newEmail;

  const contacts = JSON.parse(localStorage.getItem("contacts")) || [];
  const contactIndex = contacts.findIndex(
    (contact) =>
      contact.name === oldName &&
      contact.phone === oldPhone &&
      contact.email === oldEmail
  );

  if (contactIndex > -1) {
    contacts[contactIndex] = {
      name: newName,
      phone: newPhone,
      email: newEmail,
    };
    localStorage.setItem("contacts", JSON.stringify(contacts));
  }
}

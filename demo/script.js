let dataContacts = [
  {
    id: 1,
    name: "Tamara Bleszynski",
    phone: "+6281234567893",
    email: "tamarableszynski@gmail.com",
    birthdate: "1974-12-25",
  },
  {
    id: 2,
    name: "Awan Putra",
    phone: "+6281272349203",
    email: "awanputra@gmail.com",
    birthdate: "1997-08-17",
  },
  {
    id: 3,
    name: "Rosita Purwaningsih",
    phone: "+6285725315029",
    email: "rositapurwaningsih@gmail.com",
    birthdate: "1998-02-22",
  },
];

const contactsListElement = document.getElementById("contacts-list");

function renderContacts(contacts) {
  contacts.forEach((contact) => {
    const contactLiElement = document.createElement("li");
    contactLiElement.innerHTML = `
    <h1> ${contact.name} </h1>
    <p> ${contact.phone} </p>
    <p> ${contact.email} </p>
    <p> ${contact.birthdate} </p>
    `;

    contactsListElement.appendChild(contactLiElement);
  });
}

function searchContact(contacts, searchTerm) {
  const searchedContact = contacts.filter((contact) => {
    return contact.name.toLowerCase().includes(searchTerm.toLowerCase());
  });

  renderContacts(searchedContact);
}

function generateId() {
  return contacts[contacts.length - 1].id + 1;
}

function addContact(contacts, newContactInput) {
  const newContact = {
    id: generateId(contacts),
    name: newContactInput.name,
    phone: newContactInput.phone,
    email: newContactInput.email,
    birthdate: newContactInput.birthdate,
  };

  const newContacts = [...contacts, newContact];

  dataContacts = newContacts;

  renderContacts(newContacts);
}

function deleteContact(contacts, contactId) {
  const filteredContacts = contacts.filter((contact) => {
    return contact.id !== contactId;
  });

  dataContacts = filteredContacts;

  renderContacts(dataContacts);
}

function updatedContact(contacts, contactId, updatedContactInput) {
  const originalContact = contacts.find((contact) => {
    return contact.id === contactId;
  });

  const updatedContact = {
    id: contactId,
    name: updatedContactInput.name || originalContact.name,
    phone: updatedContactInput.phone || originalContact.phone,
    email: updatedContactInput.email || originalContact.email,
    birthdate: updatedContactInput.birthdate || originalContact.birthdate,
  };

  const updatedContacts = contacts.map((contact) => {
    if (contact.id === contactId) {
      return updatedContact;
    }

    return contact;
  });

  dataContacts = updatedContacts;

  renderContacts(dataContacts);
}

// renderContacts(dataContacts);
// searchContact(dataContacts, "wan");

// addContact(dataContacts, {
//   name: "Saka Maulana",
//   phone: "+6281234567893",
//   email: "sakamaulana@gmail.com",
//   birthdate: "1999-03-23",
// });

updatedContact(dataContacts, 1, {
  name: "Harry Potter",
});

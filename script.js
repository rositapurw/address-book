const contacts = [
  {
    id: 1,
    name: "Tamara",
    phone: "1234567890",
    email: "tamara@gmail.com",
  },
  {
    id: 2,
    name: "Awan",
    phone: "0987654321",
    email: "awan@gmail.com",
  },
  {
    id: 3,
    name: "Rosita",
    phone: "0987654321",
    email: "rosita@gmail.com",
  },
];

function getContacts() {
  console.log(contacts);
  contacts.forEach((contact) => {
    console.log(`${contact.name}: ${contact.phone}`);
  });
}

getContacts();

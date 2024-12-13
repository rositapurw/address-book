const contacts = [
  {
    id: 1273,
    name: "Tamara",
    phone: "1234567890",
    email: "tamara@gmail.com",
  },
  {
    id: 2293,
    name: "Awan",
    phone: "0987654321",
    email: "awan@gmail.com",
  },
  {
    id: 3234,
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

function generateId(params) {
  return Math.floor(Math.random() * 9000 + 1000);
}

function addContact() {
  const newContact = {
    id: generateId(),
    name: "Saka",
    phone: "0987654321",
    email: "saka@gmail.com",
  };

  const result = contacts.push(newContact);
}

function searchContact(keyword) {
  const searchContact = contacts.filter((contact) => {
    return contact.name.toLowerCase().includes(keyword.toLowerCase());
  });

  console.log(searchContact);
}

getContacts();
addContact();

searchContact("tamara");

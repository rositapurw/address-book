const contacts = [
  {
    id: 1273,
    name: "Tamara Bleszynski",
    phone: "+6281234567893",
    email: "tamarableszynski@gmail.com",
  },
  {
    id: 2293,
    name: "Awan Putra",
    phone: "+6281272349203",
    email: "awanputra@gmail.com",
  },
  {
    id: 3234,
    name: "Rosita Purwaningsih",
    phone: "+6285725315029",
    email: "rositapurwaningsih@gmail.com",
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
    name: "Saka Maulana",
    phone: "+6281276567893",
    email: "sakamaulana@gmail.com",
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

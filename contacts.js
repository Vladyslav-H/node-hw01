const fs = require("fs").promises;
const path = require("path");
const { v4 } = require("uuid");

const contactsPath = path.join(__dirname, "db/contacts.json");

async function writeContacts(contacts) {
  return await fs.writeFile(contactsPath, JSON.stringify(contacts, null, 2));
}

async function listContacts() {
  const data = await fs.readFile(contactsPath);
  const contacts = JSON.parse(data);
  return contacts;
}

async function getContactById(contactId) {
  const contacts = await listContacts();
  const conntact = contacts.find((item) => item.id === contactId);
  return conntact || null;
}

async function removeContact(contactId) {
  const contacts = await listContacts();
  const ind = contacts.findIndex((item) => item.id === contactId);
  if (ind === -1) {
    return null;
  }
  const [removeContact] = contacts.splice(ind, 1);
  await writeContacts(contacts);
  return removeContact;
}

async function addContact(name, email, phone) {
  const contacts = await listContacts();
  const newContact = { id: v4(), name, email, phone };
  contacts.push(newContact);
  await writeContacts(contacts);
  return newContact;
}

module.exports = {
  listContacts,
  getContactById,
  addContact,
  removeContact,
};

// listContacts();
// getContactById("qdggE76Jtbfd9eWJHrssH")
// addContact(
//   "Alec Nolan Howard Junior",
//   "Donec.elementum@scelerisquescelerisquedui.net",
//   "(748) 206-2688"
// );
// removeContact("05431450-433c-4193-9b11-51e7df80311e")

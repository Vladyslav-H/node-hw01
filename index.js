const {
  listContacts,
  getContactById,
  addContact,
  removeContact,
} = require("./contacts");

async function invokeAction({ action, id, name, email, phone }) {
  switch (action) {
    case "list":
      const contacts = await listContacts();
      console.log(contacts);
      break;

    case "get":
      const contact = await getContactById(id);
      console.log(contact);
      break;

    case "add":
      const newContact = await addContact(name, email, phone);
      console.log(newContact);
      break;

    case "remove":
      const removedContact = await removeContact(id);
      console.log(removedContact);
      break;

    default:
      console.warn("\x1B[31m Unknown action type!");
  }
}
// invokeAction({action:"list"})
// invokeAction({action:"get",id:"vza2RIzNGIwutCVCs4mCL"})
// invokeAction({
//   action: "add",
//   id: "vza2RIzNGIwutCVCs4mCL",
//   name: "Dimon Hope",
//   email: "est@dimon.net",
//   phone: "(258) 122-2939",
// });
 invokeAction({action:"remove",id:"bd47a5d2-42fe-4af2-9a34-e326a74d14b5"})

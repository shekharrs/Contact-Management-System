// handles the logic for managing contacts in the contact book
var Label;
(function (Label) {
    Label["Family"] = "Family";
    Label["Friend"] = "Friend";
    Label["Business"] = "Business";
    Label["Work"] = "Work";
})(Label || (Label = {}));
var contacts = [];
var form = document.getElementById('contactForm');
var table = document.getElementById('contactTable');
// Add Contact
function addContact(name, phone, email, label) {
    if (label === void 0) { label = Label.Friend; }
    var contact = {
        id: contacts.length + 1,
        name: name,
        phone: phone,
        email: email,
        label: label,
    };
    contacts.push(contact);
    return contact;
}
// Remove Contact
function removeContact(contactId) {
    var initialLength = contacts.length;
    contacts = contacts.filter(function (contact) { return contact.id !== contactId; });
    return contacts.length !== initialLength;
}
// Render
function render() {
    var tbody = table.querySelector("tbody");
    if (tbody) {
        tbody.innerHTML = "";
        contacts.forEach(function (contact) {
            var tr = document.createElement("tr");
            tr.innerHTML = "\n            <td>".concat(contact.name, "</td>\n            <td>").concat(contact.phone, "</td>\n            <td>").concat(contact.email, "</td>\n            <td>").concat(contact.label, "</td>\n            <td>\n              <button class=\"delete-btn\" onClick=\"deleteContact(").concat(contact.id, ")\">\n                 Delete\n              </button>\n            </td> \n            ");
            tbody.appendChild(tr);
        });
    }
}
// Delete Contact
function deleteContact(contactId) {
    if (removeContact(contactId)) {
        render();
    }
}
form === null || form === void 0 ? void 0 : form.addEventListener("submit", function (e) {
    e.preventDefault();
    var name = document.getElementById("name").value;
    var phone = document.getElementById("phone").value;
    var email = document.getElementById("email").value;
    var label = document.getElementById("label").value;
    addContact(name, phone, email, label);
    render();
    form.reset();
});
render();

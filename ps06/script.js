
const myform = document.querySelector("form");
const output = document.getElementById("main");
const dlgConfirm = document.getElementById("confirm");
const dlgEdit = document.getElementById("edit");
const editButton = document.getElementById("editButton");
const noEditButton = document.getElementById("noEditButton");
const deleteButton = document.getElementById("deleteButton");
const noDeleteButton = document.getElementById("noDeleteButton");

let headerTwoToEdit = null;
let headerFourToEdit = null;
let paragraphToEdit = null;
let sectionToDelete = null;

let products = [];
let currentId = 0;

myform.addEventListener('submit', (event) => {
    event.preventDefault()
    const inputTitle = document.getElementById("title").value;
    const inputText = document.getElementById("text").value;
    const inputPrice = document.getElementById("price").value;

    const product = {
        id: currentId++,
        title: inputText,
        price: inputPrice
    }
    products.push(product)

    const section = document.createElement("section");

    const h2 = document.createElement("h2");
    h2.textContent = inputTitle;

    const p = document.createElement("p");
    p.textContent = inputText;

    const h4 = document.createElement("h4");
    h4.textContent = inputPrice + " zł";

    const deleteBtn = document.createElement("button");
    deleteBtn.textContent = "Usuń";
    deleteBtn.classList.add("delete-btn")

    const editBtn = document.createElement("button");
    editBtn.textContent = "Edytuj";
    editBtn.classList.add("edit-btn")

    section.appendChild(h2);
    section.appendChild(p);
    section.appendChild(h4);
    section.appendChild(deleteBtn);
    section.appendChild(editBtn);
    output.appendChild(section);

    deleteBtn.addEventListener('click', () => {
        sectionToDelete = section;
        dlgConfirm.showModal(); 
    })
    editBtn.addEventListener('click', () => {
        headerTwoToEdit = h2;
        paragraphToEdit = p;
        headerFourToEdit = h4;

        document.getElementById("newTitle").value = headerTwoToEdit.textContent;
        document.getElementById("newtext").value = paragraphToEdit.textContent;
        document.getElementById("newPrice").value = headerFourToEdit.textContent;
        dlgEdit.showModal();
    })
})

deleteButton.addEventListener('click', () => {
    sectionToDelete.remove();
    dlgConfirm.close();
})

noDeleteButton.addEventListener('click', () => {
    dlgConfirm.close();
})

editButton.addEventListener('click', () => {
    headerTwoToEdit.textContent = document.getElementById("newTitle").value;
    paragraphToEdit.textContent = document.getElementById("newtext").value;
    headerFourToEdit.textContent = document.getElementById("newPrice").value + " zł";
    dlgEdit.close();

    headerTwoToEdit = null;
    paragraphToEdit = null;
    headerFourToEdit = null;
})

noEditButton.addEventListener('click', () => {
    dlgEdit.close();
})





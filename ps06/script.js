
const myform = document.querySelector("form");
const output = document.getElementById("main");
const dlgConfirm = document.getElementById("confirm");
const dlgEdit = document.getElementById("edit");

myform.addEventListener('submit', (event) => {
    event.preventDefault()
    const inputTitle = document.getElementById("title").value;
    const inputText = document.getElementById("text").value;

    const section = document.createElement("section");
        
    const h2 = document.createElement("h2");
    h2.textContent = inputTitle;

    const p = document.createElement("p");
    p.textContent = inputText;

    const deleteBtn = document.createElement("button");
    deleteBtn.textContent = "Usuń";
    deleteBtn.classList.add("delete-btn")

    const editBtn = document.createElement("button");
    editBtn.textContent = "Edytuj";
    editBtn.classList.add("edit-btn")

    section.appendChild(h2);
    section.appendChild(p);
    section.appendChild(deleteBtn);
    section.appendChild(editBtn);
    output.appendChild(section);
})

deleteBtn.addEventListener('click', () => {
    dlgConfirm.showModal();
})
    
deleteButton.addEventListener('click', () => {
    section.remove();
})

noDeleteButton.addEventListener('click', () => {
    dlgConfirm.close();
})
    

editBtn.addEventListener('click', () => {
    dlgEdit.showModal();
    const editingText = document.createElement("editingText");
    editingText.appendChild(inputText);
    p.textContent = editedText;
})



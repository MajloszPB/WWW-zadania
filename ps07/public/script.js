
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
let sectionToEdit = null;
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
        title: inputTitle,
        text: inputText,
        price: inputPrice
    }
    products.push(product)

    const section = document.createElement("section");
    section.classList.add("section-product-"+product.id)
    section.dataset.id = product.id;

    const h2 = document.createElement("h2");
    h2.textContent = product.title;

    const p = document.createElement("p");
    p.textContent = product.text;

    const h4 = document.createElement("h4");
    h4.textContent = product.price + " zł";

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
        sectionToEdit = section;
        headerTwoToEdit = h2;
        paragraphToEdit = p;
        headerFourToEdit = h4;

        document.getElementById("newTitle").value = headerTwoToEdit.textContent;
        document.getElementById("newtext").value = paragraphToEdit.textContent;
        document.getElementById("newPrice").value = headerFourToEdit.textContent;
        dlgEdit.showModal();
    })

    sumPrices();
})

deleteButton.addEventListener('click', () => {
    const id = sectionToDelete.dataset.id; 
    const index = products.filter(p => p.id == id);
    products.splice(index, 1);

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

    const id = sectionToEdit.dataset.id; 
    products[id].title = headerTwoToEdit.textContent;
    products[id].text = paragraphToEdit.textContent;
    products[id].price = headerFourToEdit.textContent;
    console.log(products);

    dlgEdit.close();

    headerTwoToEdit = null;
    paragraphToEdit = null;
    headerFourToEdit = null;
})

noEditButton.addEventListener('click', () => {
    dlgEdit.close();
})

const myfooter = document.querySelector("footer");

function sumPrices() {
    let sum = 0;
    for(const product of products)
    {
        sum += Number(product.price);
    }

    let sumPricesSection = document.getElementById("suma");

    if (!sumPricesSection) {
        sumPricesSection = document.createElement("section");
        sumPricesSection.id = "suma";
        myfooter.appendChild(sumPricesSection);
    }

    sumPricesSection.textContent = "Suma: " + sum + " zł";
}





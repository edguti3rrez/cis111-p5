/* 
    Name: Edwin Gutierrez
    Class: CIS 111
    Description: Week 8 Lab: Adding/Removing DOM Elements with Events and Buttons
*/

function handleAddListItemButton(evt) {
    let newListItem = document.querySelector('#coffeeInput').value.trim();
    let parentList = document.querySelector('ol');
    let newListPoint = document.createElement('li');

    if (newListItem.length > 0) {
        newListPoint.textContent = newListItem;
        parentList.appendChild(newListPoint);
    }
    document.querySelector('#coffeeInput').value = '';
}
function handleChangeListTypeButton(evt) {
    let typeList = document.querySelector('#listTypeInput').value.trim();
    
    if (typeList.length > 0) {
        document.querySelector('#listOfCoffee').setAttribute('type', typeList);
    }
    document.querySelector('#listTypeInput').value = '';
}
function handleRemoveLastListItemButton(evt) {
    if (document.querySelectorAll('li').length > 0) {
        let lastListItem = document.querySelector('#listOfCoffee').lastChild;
        document.querySelector('#listOfCoffee').removeChild(lastListItem);
    }
}

document.querySelector('#coffeeButton').addEventListener("click", handleAddListItemButton);

document.querySelector('#listButton').addEventListener("click", handleChangeListTypeButton);

document.querySelector('#removeButton').addEventListener("click", handleRemoveLastListItemButton);
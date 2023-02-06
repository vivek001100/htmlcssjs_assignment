const button = document.getElementById('addToList');
const listArea = document.getElementById('list');


button.onclick = function () {
    var input = document.getElementById('inputField').value;
    addToList(input);
};

function addToList(input) {
    let newElement = document.createElement('li');

    newElement.innerText = input;
    newElement.onclick = () => {
        newElement.parentNode.removeChild(newElement);
    };
    listArea.appendChild(newElement);
}
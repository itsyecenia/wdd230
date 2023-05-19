const button = document.querySelector('button');
const input = document.querySelector('input');
const list = document.querySelector('ul');

button.addEventListener('click', () => {
    const myitem = input.value;
    //if (myitem != ''){
        const listItem = document.createElement('li');
        const listValue = document.createElement('span');
        const deleteBtn = document.createElement('button');

        listItem.appendChild(listValue);
        listValue.textContent = myitem;
        listItem.appendChild(deleteBtn);
        deleteBtn.textContent = '❌';
        list.appendChild(listItem);

        deleteBtn.addEventListener('click', () => {
            list.removeChild(listItem);
        });

        input.focus();

        input.value = '';
    //}
});
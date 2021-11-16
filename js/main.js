const addButton = document.querySelector('.addButton');
const input = document.querySelector('.input');
const container = document.querySelector('.container');

const termine = document.querySelector('.termine');
const aFaire = document.querySelector('.aFaire');  

class item{
    constructor(itemName) {
        this.createDiv(itemName);
    }

    createDiv(itemName){

        let input = document.createElement('input');
        input.value = itemName;
        input.disabled = true;
        input.classList.add('item_input');
        input.type = 'text';

        let itemBox = document.createElement('div');
        itemBox.classList.add('item');

        let doneButton = document.createElement('button');
        doneButton.innerHTML = "DONE" ; 
        doneButton.classList.add('doneButton');

        let editButton = document.createElement('button');
        editButton.innerHTML = "EDIT" ; 
        editButton.classList.add('editButton');

        let removeButton = document.createElement('button');
        removeButton.innerHTML = "REMOVE" ;
        removeButton.classList.add('removeButton');

        container.appendChild(itemBox);
        itemBox.appendChild(input);
        itemBox.appendChild(doneButton);
        itemBox.appendChild(editButton);
        itemBox.appendChild(removeButton);

        doneButton.addEventListener('click',() => this.done(itemBox));
        doneButton.addEventListener('dblclick',() => this.nodone(itemBox));

        editButton.addEventListener('click',() => this.edit(input));
        removeButton.addEventListener('click', () => this.remove(itemBox));
    }

    done(item){
        const itemChildren = [...item.children]
        itemChildren.find(x => {
            const classList = [...x.classList]
            if (classList.indexOf("doneButton") > -1) {
                itemChildren.find(y =>{
                    const classList2 = [...y.classList]
                    if (classList2.indexOf("item_input") > -1) {
                        y.style.backgroundColor = "green"
                    }
                })
            } 
        })
    }
    nodone(item){
        const itemChildren = [...item.children]
        itemChildren.find(x => {
            const classList = [...x.classList]
            if (classList.indexOf("doneButton") > -1) {
                itemChildren.find(y =>{
                    const classList2 = [...y.classList]
                    if (classList2.indexOf("item_input") > -1) {
                        y.style.backgroundColor = ""
                    }
                })
            } 
        })
    }
    edit(input){
        input.disabled = !input.disabled;
    }
    remove(item){
        container.removeChild(item);
    }
}

termine.addEventListener('click',() => {
    termine.style.backgroundColor = "green"
    const container = document.querySelector('.container');
    let itemList = [...container.children];
    itemList.map(x => {
        const itemChildren = [...x.children]
        itemChildren.find(y => {
            const classList = [...y.classList]
            if (classList.indexOf("item_input") > -1) {
                if (y.style.backgroundColor != 'green') {
                    x.style.display = "none"
                }
            } 
        })
    })    
})

termine.addEventListener('dblclick',() => {
    termine.style.backgroundColor = ""
    const container = document.querySelector('.container');
    let itemList = [...container.children];
    itemList.map(x => {
        const itemChildren = [...x.children]
        itemChildren.find(y => {
            const classList = [...y.classList]
            if (classList.indexOf("item_input") > -1) {
                if (y.style.backgroundColor != 'green') {
                    x.style.display = "block"
                }
            } 
        })
    }) 
})


aFaire.addEventListener('click',() => {
    aFaire.style.backgroundColor = "green"
    const container = document.querySelector('.container');
    let itemList = [...container.children];
    console.log(itemList);
    itemList.map(x => {
        const itemChildren = [...x.children]
        itemChildren.find(y => {
            const classList = [...y.classList]
            if (classList.indexOf("item_input") > -1) {
                if (y.style.backgroundColor == 'green') {
                    x.style.display = "none"
                }
            } 
        })
    })    
})

aFaire.addEventListener('dblclick',() => {
    aFaire.style.backgroundColor = ""
    const container = document.querySelector('.container');
    let itemList = [...container.children];
    itemList.map(x => {
        const itemChildren = [...x.children]
        itemChildren.find(y => {
            const classList = [...y.classList]
            if (classList.indexOf("item_input") > -1) {
                if (y.style.backgroundColor == 'green') {
                    x.style.display = "block"
                }
            } 
        })
    }) 
})

function check(){
    if(input.value != ""){
        new item(input.value);
        input.value = "";
    }
}

addButton.addEventListener('click', check);
window.addEventListener('keydown', (e) =>{
    if (e.which == 13){
        check();
    }
})
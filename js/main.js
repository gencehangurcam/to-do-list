let input = document.querySelector('input')
let addBtn = document.querySelector('button')
let toDos = document.querySelector('.toDos')

console.log(input);
console.log(addBtn);
console.log(toDos);
addBtn.addEventListener('click', () =>{
    let paragraph = document.createElement('p')
    paragraph.innerText = input.value;
    toDos.appendChild(paragraph);
    input.value = '';
    paragraph.addEventListener('click', () =>{
        paragraph.style.textDecoration = "line-through"
    })
})
addBtn.addEventListener('dblclick', () =>{
    let paragraph = document.createElement('p')
    paragraph.innerText = input.value;
    toDos.appendChild(paragraph);
    input.value = '';
})
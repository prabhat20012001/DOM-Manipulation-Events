let val;
val=document;
val=document.all;
val=document.all[5]
val=document.all.length; // 43
val=document.head    // give head
val=document.body   // give body element
val=document.doctype   //<!DOCTYPE html>
val=document.domain   // 127.0.0.1
val=document.URL       //http://127.0.0.1:5500/Dom&Event/index.html
val=document.characterSet  //UTF-8
val=document.contentType    //text/html

val=document.forms //HTMLCollection [form#task-form, task-form: form#task-form]
val=document.forms[0].id  //task-form
val=document.forms[0].method  //get
val=document.forms[0].action //http://127.0.0.1:5500/Dom&Event/index.html

val=document.links[0] //a.delete-item.secondary-content
val=document.links[0].id
val=document.links[0].className //delete-item secondary-content
val=document.links[0].classList
val=document.links[0].classList[0] //delete-item

val=document.images

val=document.scripts  // [script, script, script]
val=document.scripts[2].getAttribute('src')  // app.js

let scripts=document.scripts;
let scriptsArr=Array.from(scripts);

scriptsArr.forEach(function(script){
    console.log(script.getAttribute('src'))
});

console.log(val); 

//////////////////////////////////////////////////////////////


//document.getElementById()
console.log(document.getElementById("task-title")) //<h5 id="task-title">Tasks</h5>

//Get things from the element
console.log(document.getElementById("task-title").id); //task-title
console.log(document.getElementById("task-title").class) // return class name

//Change styling

document.getElementById('task-title').style.background="red";
document.getElementById('task-title').style.color="white";
document.getElementById('task-title').style.padding="6px";
//document.getElementById('task-title').style.display="none";

//change content
document.getElementById('task-title').textContent='Task List'
document.getElementById('task-title').innerText='My Tasks'
document.getElementById('task-title').innerHTML='<span style="color:black">Task List</span>'


//document.querySelector() // newer and power full,will select only one item at a time

console.log(document.querySelector('#task-title')); // byId
console.log(document.querySelector('.card-title'));  // byClass
console.log(document.querySelector('h5')) ; 

document.querySelector('li').style.color='red'
document.querySelector('ul li').style.color='blue'
document.querySelector('li:last-child').style.color='red'
document.querySelector('li:nth-child(2)').style.color='green'

document.querySelector("li:nth-child(3)").style.color='yellow'

document.querySelector("li:nth-child(4)").textContent='Hello';

document.querySelector("li:nth-child(odd)").textContent='blue';
document.querySelector("li:nth-child(even)").style.color='blue';


///////////GET ELEMENT BY CLASS NAME /////

const items=document.getElementsByClassName('collection-item');
console.log(items);
console.log(items[0]);
items[1].style.color="red"

items[3].textContent="Hello";

//const listItems=document.querySelector('ul')
const listItems=document.querySelector('ul').getElementsByClassName('collection-item');
console.log(listItems)



//// document.getElementByTagName ////////

let lis=document.getElementsByTagName('li');
console.log(lis);
console.log(lis[0]);
lis[1].style.color='red';
lis[3].textContent='Hello';

// Convert Html Collection into array

lis=Array.from(lis);
lis.reverse();
lis.forEach(function(li,index){
    console.log(li.className);
    li.textContent=`${index}:Hello`;
});

console.log(lis);


/////////////// document.querySelectorAll ////////////////////
const items=document.querySelectorAll('ul.collection li.collection-item')
//console.log(items);
items.forEach(function(item,index){
    console.log(item.className);
    item.textContent=`${index}:Hello`;
});
const odd=document.querySelectorAll("li:nth-child(odd)")
const even=document.querySelectorAll("li:nth-child(even)")

odd.forEach(function(li,index){
    li.style.background="red"
})
even.forEach(function(li,index){
    li.style.background="blue"
})

console.log(even);

let val;
const list=document.querySelector('ul.collection');
const listItem=document.querySelector("li.collection-item:first-child");
val=list.childNodes

val=list.children
val=list.childNodes[0]  //
val=list.childNodes[0].nodeType // 3
// 1-element
// 2-attribute
// 3-text node
// 4-comment
// 5-document itself
// 6-doctype
val=list.childNodes[0].nodeName   //#text

list.children[1].textContent='Hello'

//children of children
val=list.children[3].children[0].id='test-link';
val=list.children[3].children[0]

// first child
val=list.firstChild;
val=list.firstElementChild;

// last child
val=list.lastChild;
val=list.lastElementChild;

//count child elements
val=list.childElementCount;

//get parent node
val=listItem.parentNode;
val=listItem.parentElement;
val=listItem.parentElement.parentElement; //parent of parent

//Get next siblings

val=listItem.nextElementSibling
val=listItem.nextElementSibling.nextElementSibling
val=listItem.nextElementSibling.nextElementSibling.nextElementSibling

//Get prev siblings

val=listItem.previousSibling
val=listItem.previousElementSibling // null ;beacuse no previous item
val=listItem.nextElementSibling.nextElementSibling.previousElementSibling //previous item

console.log(val)



////////// Create element /////////////////

li=document.createElement("li")   // <li></li>

// Add class

li.className="collection-item";

// Add id
li.id="new-item";

//Add attribute
li.setAttribute('title','New Item')

// Create text node and append
li.appendChild(document.createTextNode('Hello world'));

//Create new link element
const link=document.createElement("a");

//Add class
link.className="delete-item secondary-content";


// add html
link.innerHTML='<i class="fa fa-remove"></i>';




// Append li as child to ul
document.querySelector('ul.collection').appendChild(li);


console.log(link) 


/////////////// REPLACE ELEMENT //////////////

// Create element 

 const newHeading=document.createElement("h2");

 // Add Id
 newHeading.id="task-title"

 //Add text node
 newHeading.appendChild(document.createTextNode('Task List'))

 //get the old heading
 const oldHeading=document.getElementById('task-title')

 // Parent 
 const cardAction=document.querySelector('.card-action')

 //Replace

 cardAction.replaceChild(newHeading,oldHeading)

 //console.log(newHeading)

 //////////////// REMOVE ELEMENT /////////////////

 const lis=document.querySelectorAll('li')
 const list=document.querySelector('ul')

 // remove list item
 lis[0].remove()

 // remove child element
 list.removeChild(lis[3])

 console.log(list)


 ///////// CLASSES AND ATTR ///////

 const firstLi=document.querySelector('li:first-child');
 const link=firstLi.children[0]

 // classes
 let val 
 val=link.className
 val=link.classList
 val=link.classList[1]
 link.classList.add('test')
 link.classList.remove('test');
 val=link

 //Attributes
 val=link.getAttribute('href')
 val=link.setAttribute('href','http://www.google.com');
 link.setAttribute('title','Google')
 val=link.hasAttribute('title') // false
 val=link.hasAttribute('href') // true
 link.removeAttribute('title')
 val=link;
 console.log(val)
 


 /////////////// EVENT LISTENERS ///////////////////

// document.querySelector('.clear-tasks').addEventListener('click',function(){
//         console.log('Hello World');
//    });

// prevent default behaviour

// document.querySelector('.clear-tasks').addEventListener('click',function(e){
//     console.log('Hello World');

//     e.preventDefault();
// });

// named function
// document.querySelector('.clear-tasks').addEventListener('click',onClick);

// function onClick(e){
//     console.log('Clicked')
// }


document.querySelector('.clear-tasks').addEventListener('click',onClick);

function onClick(e){
    let val;

    val=e;
    // Event target element
    // val=e.target;
    // console.log(val)
    // val=e.target.id;
    // console.log(val)
    //  val=e.target.className;
    //  console.log(val)
    // val=e.target.classList;
    // console.log(val)

    //  e.target.innerText='Hello';
    //  console.log(val)

    //EVENT TYPE
    val=e.type;

    // timestamp
    val=e.timeStamp;
   

    // Co-ordinates event relative to the window
    val=e.clientY;
    val=e.clientX;


       // Co-ordinates event relative to the element
       val=e.offsetY;
       val=e.clientX;
       console.log(val)
}


///////////////// MOUSE EVENT /////////////////////

const clearBtn=document.querySelector('.clear-tasks');
const card=document.querySelector('.card');
const heading=document.querySelector('h5');

// Click
// clearBtn.addEventListener('click',runEvent);

// double Click
//clearBtn.addEventListener('dblclick',runEvent);

// Mouse Down
//clearBtn.addEventListener('mousedown',runEvent);

// Mouse Up
//clearBtn.addEventListener('mouseup',runEvent);

// Mouse enter
clearBtn.addEventListener('mouseenter',runEvent);

// Mouse leave
clearBtn.addEventListener('mouseleave',runEvent);

// Mouse over
clearBtn.addEventListener('mouseover',runEvent);

// Mouse leave
clearBtn.addEventListener('mouseleave',runEvent);


// Mouse move
card.addEventListener('mousemove',runEvent);




//EVENT HANDLER
function runEvent(e){
    console.log(`Event type:${e.type}`);

    // coordinate of mouse

    heading.textContent=`MouseX:${e.offsetX} MouseY:${e.offsetY}`;
    document.body.style.backgroundColor=`rgb(${e.offsetX},${e.offsetY},40)`
}



 ///////////////// INPUT AND FORM ///////////////////////////

const form=document.querySelector('form');
const taskInput=document.getElementById('task')
const heading=document.querySelector('h5')

//clear Input
taskInput.value="";

//form.addEventListener('submit',runEvent);


// key down
taskInput.addEventListener('keydown',runEvent);

// key dup
taskInput.addEventListener('keyup',runEvent);

// key press
taskInput.addEventListener('keypress',runEvent);

// focus
taskInput.addEventListener('focus',runEvent);

// Blur
taskInput.addEventListener('blur',runEvent);

// Cut
taskInput.addEventListener('cut',runEvent);

// Paste
taskInput.addEventListener('paste',runEvent);

// Input
taskInput.addEventListener('input',runEvent);

// Change
taskInput.addEventListener('change',runEvent);

function runEvent(e){
    console.log(`Event type:${e.type}`);
    console.log(e.target.value);

    //heading.innerText=e.target.value;

    //Get input value
    //console.log(taskInput.value)
    // e.preventDefault();
}



/////// Event Bubbling ////////////////

// document.querySelector('.card-title').addEventListener('click',function(){
//     console.log('card title')
// })

// document.querySelector('.card-content').addEventListener('click',function(){
//     console.log('card content')
// })
// document.querySelector('.card').addEventListener('click',function(){
//     console.log('card title')
// })

// document.querySelector('.col').addEventListener('click',function(){
//     console.log('col')
// })


////////// EVENT DELEGATION ///////////////

const delItem=document.querySelector('.delete-item');

delItem.addEventListener('click',deleteItem);

document.body.addEventListener('click',deleteItem);

// function deleteItem(e){
//     console.log('delete item')
//     console.log(e.target);
//     if(e.target.className==='fa-fa-remove')
//     {
//         console.log('delete item')
//     }
// }
function deleteItem(e){
    

    // if(e.target.parentElement.className==='delete-item secondary-content')
    // {
    //     console.log('delete item')
    // }

    if(e.target.parentElement.classList.contains('delete-item'))
    {
        console.log('delete item');
        e.target.parentElement.parentElement.remove();
    }
}


// set local storage
localStorage.setItem('name','john');
localStorage.setItem('age','30');


// set session storage storage item
sessionStorage.setItem('name','Beth');

// remove from storage
// localStorage.removeItem('name')


// get from storage
const name=localStorage.getItem('name')
const age=localStorage.getItem('age')
// clear local storage
localStorage.clear()

console.log(name,age)
*/
document.querySelector('form').addEventListener('submit',function(e){
    const task=document.getElementById('task').value;

    let tasks;

    if(localStorage.getItem('tasks')===null){
        tasks=[];
    }else{
        tasks=JSON.parse(localStorage.getItem('tasks'));
    }
    tasks.push(task);
    localStorage.setItem('tasks',JSON.stringify(tasks));
    alert('Task saved')

    e.preventDefault();
});

const tasks=JSON.parse(localStorage.getItem('tasks'));
tasks.forEach(function(task)
{
    console.log(task);
})

// Task :

// 1. Given the HTML below, write a script that adds a 'click' event listener to the button. When 
// the button is clicked, the text inside the paragraph (<p>) should change to "Button was 
// clicked!".

const btn = document.getElementById("btn")   // Selection of all element which are involved in the whole task.
const para = document.getElementById("para")
const btn2 = document.getElementById("btn2")

// Add event listener to the element
btn.addEventListener("click",()=>{
    // event name and its task        
    para.textContent="You already Pressed Me!"
})

btn2.addEventListener("click",() =>{
    btn2.innerText = "button hoon me" 

})


// -----------------------------------------------------------------------------------------------------------------------//

const btn3 = document.getElementById("btn3")
const box = document.getElementById("box")

btn3.addEventListener("click",()=>{
    box.style.color = "yellow"
    box.style.fontWeight= "bold"
    box.style.backgroundColor= "black"
    box.style.fontSize="22px"
})

// -----------------------------------------------------------------------------------------------------------------------//

// Task :
// 2. Given the HTML below, write a JavaScript snippet to select the paragraph element with the ID 
// main-text and change its text color to red and its font size to 24px.

const main_text = document.getElementById("main-text")
main_text.style.color = "red"
main_text.style.fontSize="24px"

// -----------------------------------------------------------------------------------------------------------------------//


// Create Element, append and remove:

const btn4 = document.getElementById("btn4")

btn4.addEventListener("click",()=>{
    const newitem = document.createElement("li"); // create new element
    newitem.textContent="bread" 
    
    const list = document.getElementById("list") // append child
    list.appendChild(newitem)
})

const btn5 = document.getElementById("btn5")

btn5.addEventListener("click",()=>{
    const list= document.getElementById("list")
    const lastitem= list.lastElementChild;

    if(lastitem){
        list.removeChild(lastitem)
    }
})

// -----------------------------------------------------------------------------------------------------------------------//

// Task :
// 1. Given the HTML below, write a script to select the div with the ID hover-box. Add 
// an event listener so that when the mouse moves over it, its background color 
// changes to lightblue. Add another event listener so that when the mouse moves 
// out, the background color reverts to white.

const hover_box = document.getElementById("hover-box")
const body = document.getElementsByTagName("body")

hover_box.addEventListener("mouseover",()=>{
    hover_box.style.backgroundColor="yellow"
})

hover_box.addEventListener("mouseout",()=>{
    hover_box.style.backgroundColor="white"
})


// -----------------------------------------------------------------------------------------------------------------------//

// Task :
// 1. Given the HTML below, add a keydown event listener to the input field. When the 
// user presses any key while the input is focused, log the key property from the 
// event object to the console.

const key_input = document.getElementById("key-input")

key_input.addEventListener('keydown',(event)=>{
    console.log(`key pressed: ${event.key}`)
})


// -----------------------------------------------------------------------------------------------------------------------//

const form = document.getElementById("form");

form.addEventListener('submit',(event)=>{
    event.preventDefault(); // Stop form from submitting normally
    alert("form submitted")

})

// continue from Headers.apply.apply.
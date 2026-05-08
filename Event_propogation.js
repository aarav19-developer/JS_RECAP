// EVENT PROPOGATION: is a process that defines how event travels through the DOM tree when an event is triggered (like a click).

                       // It has 3 phases:
                                // Capturing phase: Event moves from the root(document) down towards the target element.
                                // Target phase: The event reaches the exact element that was interacted with.
                                // Bubbling phase: Event then moves back up from the target to the root.

document.getElementById("outer").addEventListener("click", ()=>{
    alert("Outer Div(Capturing)");
},true);
document.getElementById("inner").addEventListener("click", ()=>{
    alert("Inner Div(Capturing)");
},true);
document.getElementById("btn").addEventListener("click", ()=>{
    alert("Button Clicked");
});

document.getElementById("outer1").addEventListener("click",()=>{
    alert("Outer Div(Bubbling)")
});
document.getElementById("inner1").addEventListener("click",()=>{
    alert("Inner Div(Bubbling)")
});
document.getElementById("btn1").addEventListener("click",()=>{
    alert("Button clicked")
});

document.getElementById("myform").addEventListener("submit",function(e){
    e.preventDefault(); // help in stops page reload
    alert("Form submitted with automatically")
})


//-----------------------------------------------------------------------------------------//

// Write an async funciton getTodo. Inside the funciton, use fetch and await to get data for a single "todo" item
// from the url: https://jsonplaceholder.typicode.com/todos/1. After getting the response, use await again on the response.json() method to parse the data. Finally, log the parsed data.

async function getTodo(){
    try{
        const response = await fetch("https://jsonplaceholder.typicode.com/todos/1")
        const data = await response.json();
        console.log("Todo data:", data)

    } catch(error){
        console.error("Could not fetch",error)
    }

}
getTodo()
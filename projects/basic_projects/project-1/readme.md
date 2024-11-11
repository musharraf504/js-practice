# Project 1 : Color Scheme Changer

### By hover over the color you can change the background color

# Solution Code : 

```javascript

const red = "#cf3035"
const blue = "#315cad"
const green = "#31ad3b"
const purple = "#7331ad"


const box = document.querySelectorAll(".box")
const body = document.querySelector("body")

box.forEach((box) => {
    box.addEventListener("mouseover", (button) => {
        console.log(button.target.id);

        if(button.target.id === "red"){
            document.body.style.backgroundColor = red
        }
        if(button.target.id === "blue"){
            document.body.style.backgroundColor = blue
        }
        if(button.target.id === "green"){
            document.body.style.backgroundColor = green
        }
        if(button.target.id === "purple"){
            document.body.style.backgroundColor = purple
        }

        const forHeader= document.querySelectorAll("h1")

        forHeader.forEach((h) => {
            h.style.color = "white"
        })
        
    })
})

```

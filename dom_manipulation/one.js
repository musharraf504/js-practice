const heading = document.querySelector('.heading')
heading.style.fontSize = "5rem"



const forList = document.querySelectorAll('.list-item')
forList.forEach( (ele) => {
    ele.style.color="white";
    ele.style.padding = "25px";
    ele.style.backgroundColor = "#52258f";
    ele.style.borderRadius = "10px"
    ele.style.margin = "10px"
    ele.style.fontSize = '2rem'
    ele.style.listStyleType = "none"
})

const forFont = document.querySelector('.for-font')
forFont.style.fontFamily = "roboto"

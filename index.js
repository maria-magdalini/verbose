import bikes from './bikes.js';

const button = document.querySelectorAll("[data-moto-button]");
const color = document.querySelector('.atv-specs').children[5];
const name = document.querySelector('.atv-specs').children[0];


button.forEach(button => {
    button.addEventListener("click", () => {
        const offset = button.dataset.carouselButton === "next" ? 1 : -1;
        
        const slides = button.closest('[data-carousel]').querySelector("[data-slides]");


        const activeSlide = slides.querySelector("[data-active]")
        let newIndex = [...slides.children].indexOf(activeSlide) + offset;
        console.log(newIndex);
        if (newIndex <0 ) newIndex = slides.children.length -1;
        if (newIndex >= slides.children.length ) newIndex = 0;
       // console.log(slides.children[newIndex])
        color.innerText="Colors : "+ bikes[newIndex].color;
        name.innerText = bikes[newIndex].scooteName;

       
    })
})

let motoInfoCnt = document.querySelector(".second-moto-specs")
const imageWidth = document.querySelector("[data-active]").clientHeight;
//const resizeSeconText = ()=>{motoInfoCnt.setAttribute.clientHeight = imageWidth}





var links = document.querySelectorAll('.nav-link')
console.log(links[0])
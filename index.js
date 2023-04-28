import bikes from './bikes.js';
import atvs from './atvs.js';

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

const atvButtons =  document.querySelectorAll("[data-atv-button]");

const atvColor = document.getElementById('atvSpecsCnt').children[5];
const atvName = document.getElementById('atvSpecsCnt').children[0];

atvButtons.forEach(button => {
    button.addEventListener("click", () => {
        const offset = button.dataset.carouselButton === "next" ? 1 : -1;
        
        const slides = button.closest('[data-carousel]').querySelector("[data-slides]");


        const activeSlide = slides.querySelector("[data-active]")
        let newIndex = [...slides.children].indexOf(activeSlide) + offset;
        console.log(newIndex);
        if (newIndex <0 ) newIndex = slides.children.length -1;
        if (newIndex >= slides.children.length ) newIndex = 0;
       // console.log(slides.children[newIndex])
        atvColor.innerText="Colors : "+ atvs[newIndex].color;
        atvName.innerText = atvs[newIndex].scooteName;

       
    })
})

console.log(atvs)


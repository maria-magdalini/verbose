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
const atvColor = document.getElementById('atvSpecsCnt').children[6];
const atvName = document.getElementById('atvSpecsCnt').children[0];



const atvSpecsChange = function(color, name, num , motoType){
        color.innerText="Colors : "+ motoType[num].color;
        name.innerText = motoType[num].scooteName;
        return
}

const anon = function (){ 
        //check if button has data-carousel-button="prev" or "next"
        const offset = this.dataset.carouselButton === "next" ? 1 : -1; //used for getting the index of active slide latter
        //get the slides that are closest to object with data-carousel
        const slides = this.closest('[data-carousel]').querySelector("[data-slides]");
        //selecting the active slide by selecting the one with the dataset of active
        const activeSlide = slides.querySelector("[data-active]")
        //getting the index of the active slide + the offset 
         let newIndex = [...slides.children].indexOf(activeSlide) + offset;
        
        //
        if (newIndex <0 ) newIndex = slides.children.length -1;
        if (newIndex >= slides.children.length ) newIndex = 0;

        atvSpecsChange(atvColor, atvName , newIndex , atvs)

}





atvButtons.forEach(button => {
        button.addEventListener("click", anon)
    })





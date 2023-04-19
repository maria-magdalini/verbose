const paggination = document.querySelectorAll("[data-carousel-button]");

paggination.forEach(button => {
    button.addEventListener("click", () => {
        const offset = button.dataset.carouselButton === "next" ? 1 : -1;
       
        
        const slides = document.querySelector("[data-paggination-slides]");
        // console.log(slides)

        // console.log([...slides.children])
        const activeSlide = slides.querySelector("[data-scale]")
        let newIndex = [...slides.children].indexOf(activeSlide) + offset;
        //console.log(newIndex)
        if (newIndex <0 ) newIndex = slides.children.length -1;
        if (newIndex >= slides.children.length ) newIndex = 0;
        slides.children[newIndex].dataset.scale = true;
        delete activeSlide.dataset.scale

      
    })
})


const atvButtonPrev =  document.getElementById('atvPrev');
const atvButtonNext =  document.getElementById('atvNext');

atvButtonNext.addEventListener('click', ()=>{
 pagg()
})



function pagg(){
 const imgArray = document.querySelector(".atv-pics-preview")
console.log(imgArray[0])
 }


// console.log(atvButtonNext, atvButtonPrev)
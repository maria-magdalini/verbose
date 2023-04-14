const paggination = document.querySelectorAll("[data-carousel-button]");

paggination.forEach(button => {
    button.addEventListener("click", () => {
        const offset = button.dataset.carouselButton === "next" ? 1 : -1;
       
        
        const slides = document.querySelector("[data-paggination-slides]");
        console.log(slides)

        console.log([...slides.children])
        const activeSlide = slides.querySelector("[data-scale]")
        let newIndex = [...slides.children].indexOf(activeSlide) + offset;
        //console.log(newIndex)
        if (newIndex <0 ) newIndex = slides.children.length -1;
        if (newIndex >= slides.children.length ) newIndex = 0;
        slides.children[newIndex].dataset.scale = true;
        delete activeSlide.dataset.scale

      
    })
})


// const motoPaggination = document.querySelectorAll(".pic-preview");

// motoPaggination.forEach((moto, index)=>{
//     moto.addEventListener('click', ()=> {
        
//         const activePic = document.querySelector('[data-scale]')
//         motoPaggination[index].dataset.scale = true;
        
//         console.log(activePic , motoPaggination[index])
//         delete activePic.dataset.scale
//     })
//   })



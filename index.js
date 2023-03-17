import bikes from './bikes.js';

// console.log(bikes.length)

// scooters= [
//     'People S.png',
//     'Symphony 50cc.png',
//     'Symphony 125cc.png',
//     'symphony 200cc.png',
//     'visio.png'
// ]




const path = 'assets/images/bikes-png/';
let clicks = 0;

let carouselScooter = document.getElementById('scooter');
carouselScooter.setAttribute('src', 'assets/images/bikes-png/'+bikes[0].scooteName+'.png')

let next = document.querySelector('.next');

let prev = document.querySelector('.prev');

next.addEventListener('click',()=>{ 
    clicks++
    console.log(clicks)
      
    if (clicks >= bikes.length){
        clicks=0
        changeMoto(clicks)
    }
    else{
        changeMoto(clicks)
    }

    
})



prev.addEventListener('click',()=>{
   
   
    if (clicks < 0){
        clicks = bikes.length-1
        changeMoto(clicks)
    } else if(clicks>0){
        clicks--;
        changeMoto(clicks)
    }else{
        clicks=bikes.length-1
        changeMoto(clicks)
       
    }
    
    
    
})


function changeMoto(photo){

    
    carouselScooter.setAttribute('src', path +bikes[photo].scooteName+'.png');
    
    
}
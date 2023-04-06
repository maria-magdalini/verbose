
var links = document.querySelectorAll('.nav-link')
var array = links.forEach(function(link){
    link.addEventListener('click', scrollUp)

})



const input = document.querySelector('input') 
function scrollUp(){
    input.checked = false
    this.scrollIntoView(false)
}
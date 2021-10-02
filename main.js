var imgs = Array.from (document.getElementsByClassName('img-item')) 
var lightboxContainer = document.querySelector('.lihgtbox-container')
var lightboxItem = document.querySelector('.lightbox-item')
var currentIndex = 0 ;
var prevItem = document.getElementById('prev')
var nextItem = document.getElementById('next')
var closeItem = document.getElementById('close')

for(var i=0 ;i<imgs.length;i++){
    imgs[i].addEventListener('click',function(e){
        var imgSrc = e.target.getAttribute('src')
        // lightboxItem.style.backgroundImage = `url(${imgSrc})`
        lightboxItem.style.cssText = `background-image:url(${imgSrc})`
        lightboxContainer.classList.replace('d-none','d-flex')
        currentIndex = imgs.indexOf(e.target)


    },true)
}


prevItem.addEventListener('click',function(){slider(-1)})
nextItem.addEventListener('click',function(){slider(1)})
closeItem.addEventListener('click',function(){
    closeSlider()
})


function closeSlider(){
    lightboxContainer.classList.replace('d-flex','d-none')
}




function slider(i){

    currentIndex = currentIndex + i

    if(currentIndex < 0){
        currentIndex = imgs.length -1
    }
    if(currentIndex==imgs.length){
        currentIndex=0
    }

   var imgSrc =imgs[currentIndex].getAttribute('src')
    lightboxItem.style.cssText = `background-image:url(${imgSrc})`


}

window.addEventListener('keydown',function(e){
   if(e.key=='ArrowLeft'){
    slider(-1)
   }
   else if (e.key=='ArrowRight'){
       slider(1)
   }
   else if (e.key=='Escape'){
       closeSlider()
   }
})



const galery = document.getElementById('thumbs');
const main_image = document.getElementById('largeImg');

galery.addEventListener('click',(event) => {
    event.preventDefault();
    target = event.target;
    target.tagName === 'IMG' ? main_image.src = target.parentNode.href : false;      
})

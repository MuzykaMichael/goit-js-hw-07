import { galleryItems } from './gallery-items.js';
// Change code below this line


// console.log(galleryItems);

const gItem = document.querySelector('.gallery')

const imgList = galleryItems.reduce((acc,item) => {
    return acc += `<li class="gallery__item">
    <a class="gallery__link" href=${item.original}>
      <img
        class="gallery__image"
        src=${item.preview}
        data-source=${item.original}
        alt=${item.description}
      />
    </a>
  </li>`
    

},"")

gItem.style.listStyle = "none"

gItem.insertAdjacentHTML("beforeend", imgList)

function showModal (event) {
    event.preventDefault();
if (event.target.nodeName !== "IMG"){
    return
} 
else {

console.log(event.target.dataset.source)

const instance = basicLightbox.create(`<img src=${event.target.dataset.source} width="800" height="600">`, {
    onShow: (instance) => {console.log('addEventListener');window.addEventListener("keydown", escapeClick)},
    onClose: (instance) => {console.log('removeEventListener');window.removeEventListener("keydown", escapeClick)}
});

const escapeClick = (event) => {
    if (event.key === "Escape") {
        instance.close();
        console.log("escape")
    }
    

};
instance.show()
}
}
gItem.addEventListener("click",showModal)
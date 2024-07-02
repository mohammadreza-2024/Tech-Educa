const listImg =[
  {id:1,image:"images/b1.jpg"},
  {id:2,image:"images/b2.jpg"},
  {id:3,image:"images/b3.jpg"}
]

const menuOpenBtn = document.querySelector(".menu-mobile__open-btn");
const menuCloseBtn = document.querySelector(".menu-mobile__close-btn");
const menuMobile = document.querySelector(".menu-mobile");
const cover = document.querySelector(".cover");
const mainContentImg = document.querySelector(".main-content__img");

let locationParams = new URLSearchParams(location.search);
let getItemId = locationParams.get("id");

listImg.forEach((item)=>{
  if(item.id === +getItemId){
    mainContentImg.src = item.image;
  }
})


menuOpenBtn.addEventListener("click", () => {
  menuMobile.classList.add("show");
  cover.classList.add("active");

});
menuCloseBtn.addEventListener("click", () => {
  menuMobile.classList.remove("show");
  cover.classList.remove("active");
});

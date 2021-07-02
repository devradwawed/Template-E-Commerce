let menu = document.querySelector("#menu-bar");
let navber = document.querySelector(".navbar");
let slides = document.querySelectorAll(".slide-container");
let nextBox = document.getElementById("next");
let prevBox = document.getElementById("prev");
let index = 0;

menu.onclick =() =>{
  menu.classList.toggle("fa-times");
  navber.classList.toggle("active")
}
window.onscroll = () =>{
  menu.classList.remove("fa-times");
  navber.classList.remove("active")
}

nextBox.addEventListener("click" , next );
prevBox.addEventListener("click" , prev );



function next () {
  slides[index].classList.remove("active");
  index= (index + 1) % slides.length;
  slides[index].classList.add("active");
}
function prev () {
  slides[index].classList.remove("active");
  index= (index - 1 + slides.length) % slides.length;
  slides[index].classList.add("active");
}

document.querySelectorAll(".featured-image-1").forEach(image_1 =>{
  image_1.addEventListener("click" , () =>{
    var src = image_1.getAttribute("src");
    document.querySelector(".big-image-1").src = src
  });
});


document.querySelectorAll(".featured-image-2").forEach(image_2 =>{
  image_2.addEventListener("click" , () =>{
    var src = image_2.getAttribute("src");
    document.querySelector(".big-image-2").src = src
  });
});

document.querySelectorAll(".featured-image-3").forEach(image_3 =>{
  image_3.addEventListener("click" , () =>{
    var src = image_3.getAttribute("src");
    document.querySelector(".big-image-3").src = src
  });
});
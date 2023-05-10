const wrapper = document.querySelector(".wrapper");
const carousel = document.querySelector(".divsTop");
const divs = document.querySelectorAll(".top");
const btns = document.querySelectorAll(".btn");
const hams = document.querySelectorAll(".ham");
const ul = document.querySelectorAll("ul")
// console.log(wrapper,carousel,divs,btns)

let divIndex =1;
let intervalid;

// function to automatic slider
const autoSlide =()=>{
  intervalid = setInterval(() => {
    slideImage(++divIndex)
  },3000);
}
// btn
btns.forEach((btn)=>{
  btn.addEventListener("click",(e)=>{
    clearInterval(intervalid);
     divIndex +=e.target.id ==="next" ? 1 :-1;
     slideImage(divIndex)
     autoSlide();
  })
})

// function to update the carousel display to show the specified  
const slideImage = () => {
  divIndex = divIndex === divs.length ? 0 : divIndex < 0 ? divs.length -1:divIndex;
  carousel.style.transform =`translate(-${divIndex * 100}%)`
};
// call function


autoSlide();

// wrapper

wrapper.addEventListener("mouseover",()=>clearInterval(intervalid))
wrapper.addEventListener("mouseleave", () => autoSlide());


// mobile
wrapper.addEventListener("touchover", () => clearInterval(intervalid));
wrapper.addEventListener("touchleave", () => autoSlide());


hams.forEach((btn)=>{
  btn.addEventListener("click",()=>{
    document.querySelector(".wrapper").classList.toggle("active");
    document.querySelector("body").classList.toggle("active")
    btn.classList.toggle("active")
     ul.forEach((ul)=>{
        ul.classList.toggle("active");
        
     })
  })
})
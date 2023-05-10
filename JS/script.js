const wrapper = document.querySelector(".wrapper");
const carousel = document.querySelector(".divsTop");
const divs = document.querySelectorAll(".top");
const btns = document.querySelectorAll(".btn");

// console.log(wrapper,carousel,divs,btns)

let divIndex =1;
let intervalid;

// function to automatic slider
const autoSlide =()=>{
  intervalid = setInterval(() => {
    slideImage(++divIndex)
  },2000);
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

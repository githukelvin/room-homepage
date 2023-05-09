const prevBtn = [...document.querySelectorAll(".prevBtn")];
const containers = [...document.querySelectorAll(".top")];
const nextBtn = [...document.querySelectorAll(".nextBtn")];

containers.forEach((item,i)=>{
   let  cDimesions =item.getBoundingClientRect();
    let cWidth = cDimesions.width;
    console.log(nextBtn[i]);
    

      prevBtn[i].addEventListener("scroll", () => {
       item.scrollLeft -= cWidth;        
      });
      nextBtn[i].addEventListener("click", () => {
        // item.scrollLeft += cWidth
        // alert((item.scrollLeft += cWidth));
      });
})
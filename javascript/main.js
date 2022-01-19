const hamburgerBtn = document.querySelector(".hamburger");
const subMenu = document.querySelector("header>.header_wrap>nav>ul");
const sublistA = document.querySelectorAll("header>.header_wrap>nav>ul>li>a");



window.addEventListener("scroll",()=>{
    let content = document.querySelector(".sound_wrap p");
    let contentposition =content.getBoundingClientRect().top;
    let screenposition = window.innerHeight /1.6

    if(contentposition<screenposition){
        content.classList.add("action");        
    }else{
            content.classList.remove("action");
        }
})

for(let i = 0; i<sublistA.length; i++){
    sublistA[i].addEventListener("click",function(){
        subMenu.classList.toggle("active");
    });
}

hamburgerBtn.addEventListener("click",function(){
    subMenu.classList.toggle("active");
    
});

$(".slide0").siblings().hide();

let slideI = 0;

setInterval(function(){

    if(slideI<2){
        slideI++;
    }else{
        slideI = 0;
    }

    $(`.slide${slideI}`).fadeIn();
    $(`.slide${slideI}`).siblings().hide();
},3000)
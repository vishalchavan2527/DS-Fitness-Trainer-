let curs = document.querySelector(".cursor");
let blur = document.querySelector(".cursor-blur")
document.addEventListener("mousemove", function(dets){
    curs.style.left = dets.x +"px"
    curs.style.top = dets.y +"px"
    blur.style.left = dets.x - 220 +"px"
    blur.style.top = dets.y - 220 +"px"
})



gsap.to(".nav", {
    backgroundColor :" #000",
    duration:0.5,
    height: "13vh",
    scrollTrigger:{
        trigger: ".nav",
        scroller:"body",
        start : "top -10%",
        end : "top -11%",
        scrub:1

    }  
})


gsap.to(".main", {
    backgroundColor : "#000",
    scrollTrigger :{
        trigger : ".main",
        scroller : "body",
        start : "top -50%",
        end : "top -100%",
        scrub : 2,
    }
})


for(let i =0; i<10; i++){
    console.log(i);
    
}
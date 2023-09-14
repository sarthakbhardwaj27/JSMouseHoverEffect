window.addEventListener("mousemove",(details)=>{
    var xval = gsap.utils.mapRange(0,window.innerWidth,400,window.innerWidth-400,details.clientX)
    gsap.to(".rectangle",{
        left: xval+"px",
        ease: Power2
    })
})
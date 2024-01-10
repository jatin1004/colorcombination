function timelineone(){
    var tl = gsap.timeline({    
        scrollTrigger:{
            trigger:"#home",
            start:"top top",
            scrub:1,
            pin:true,
            end:"bottom -250%",
        }
    })
    tl.to("#circle #btm img", {
        scale:1,
        rotate:"-180deg",
        duration:1,
        stagger: 0.1,
        ease: Power1,
    },"flag")
    .to("#circle #top img", {
        scale:1, 
        duration:1,
        stagger: 0.1,
        ease: Power1,
    },"flag")
    .to("#centerimg #cimg img", {
       scale:"0",
        duration:1,
        stagger: 0.1,
        ease: Power1,
    },"flag")
    .to("#centerimg  h5", {
        opacity:"0",
         stagger: 0.1,
         ease: Power1,
     },"flag")
     .to("#circle ", {
        scale:0.6,
         ease: Power1,
     },"flag")
     .to("#overlay>h1#gal ", {
        bottom:"-50%",
         ease: Power1,
     },"flag")
    
     .to("#overlay>h1#pf ", {
        bottom:"5%",
        rotate:"0",
         ease: Power1,
     },"flag2")
     
     .to("#gola ", {
        top:"50%",
        scale:2,
         ease: Power1,
     },"flag")
     .to("#gola ", {
         opacity:0,
        scale:2,
        duration:2.2,
         ease: Power1,
     },"flag2")
    
    
     .to("#smcircle ", {
        scale:0,
        duration:2,
         ease: Power1,
     }, "flag2")
     .to("#circle ", {
        scale:0,
        duration:2,
         ease: Power1,
     }, "flag2")
    
     .to("#pinkpart",{
        top:"5%",
        ease:Power1,
        duration:2,
     },"flag2")
     .to("#pinkpart",{
        top:"-30%",
        ease:Power1,
        duration:0.5,
     })
}
 function timelinetwo(){
   var tl2 = gsap.timeline({
     scrollTrigger:{
        trigger:"#second",
        scrub:1,
        start:"top top",
        end:"bottom -150%",
        pin:true,
     }
   })
   tl2
   .to("#stop .circle",{
    top:"50%",
    ease:Power1,
    stagger:0.1,
   })
    
   .to("#stop .circle",{
    left:"50%",
    ease:Power1,
   })
   .to(".pi",{
    scale:10,
    ease:Power1,
   })
   .to(".pi",{
    background: "linear-gradient(to right, #d5a7b4, #b4aad5)",
    ease:Power1,
   })
   .to("#stop h1", {
    left:"-200%",
    duration:5,
    ease:Power1,
   },"a")
   .to("#sbtm #one",{
    opacity:0,
    ease:Power1,
    duration:2,
   },"a")
   .to("#sbtm #two",{
    opacity:1,
    ease:Power1,
    delay:1,
    duration:2,
   },"a")
   .to("#done",{
    top:"0%",
    ease:Power1,
    stagger:0,
   },"b")
   .to("#dtwo",{
    top:"0%",
    ease:Power1,
    stagger:0.2,
    delay:0.1,
   },"b")
   .to("#dthree",{
    top:"0%",
    ease:Power1,
    stagger:0.2,
    delay:0.2,
   },"b")
   .to("#dfour",{
    top:"0%",
    ease:Power1,
    stagger:0.2,
    delay:0.3,
   },"b")
   .to("#dfive",{
    top:"0%",
    ease:Power1,
    stagger:0.2,
    delay:0.4,
   },"b")
}
 timelineone();
 timelinetwo();
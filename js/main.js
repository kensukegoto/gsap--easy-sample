// NAV

$(".burgerIcon").hover(()=>{
  TweenMax.to(".burgerLine:first-child",.2,{x:-10});
  TweenMax.to(".burgerLine:last-child",.2,{x:10});
},
()=>{
  TweenMax.to(".burgerLine:first-child",.2,{x:0});
  TweenMax.to(".burgerLine:last-child",.2,{x:0});
});

var tlmenu = new TimelineMax({paused:true});

tlmenu.to("nav",.3,{ autoAlpha: 1 })
.staggerFromTo("nav li",.5,{ y:100,opacity:0 },{ y:0,opacity:1 },.1);

$(".burgerIcon").click(()=>{
  tlmenu.play(0)
});
$(".closeButton").click(()=>{
  tlmenu.reverse(0)
});

// HERO SECTION

TweenMax.fromTo("#hero h1",.6,{ y: 80,opacity:0 },{ y:0,opacity:1,delay:1 });

TweenMax.fromTo("#hero .learnMoreButton",.6,{ y:80,opacity:0 },{ y:0,opacity:1 ,delay:1.5});

// Four column section

$(".fourColItem").hover( e =>{
  TweenMax.to($(e.currentTarget),.5,{ y:-10,scale: 1.03,boxShadow: "0 0 20px rgba(0,0,0,0.36)" });
}, e => {
  TweenMax.to($(e.currentTarget),.5,{ y: 0,scale: 1,boxShadow: "0 0 20px rgba(0,0,0,0.06)" });
});

// Services Section

TweenMax.set(".serviceBoxInner",{ y: 200,opacity: 0 });
$(".serviceBox").hover(e=>{
  TweenMax.to($(e.currentTarget).find(".serviceBoxInner"),.5,{ y:0,opacity:1,ease: Power2.easeOut })
}, e => {
  TweenMax.to($(e.currentTarget).find(".serviceBoxInner"),.5,{ y:200,opacity:0 })
});

// Cog Section

TweenMax.to(".cogLeft",8,{ rotation: 360, repeat: -1, ease: Linear.easeNone });
TweenMax.to(".cogRight",8,{ rotation: -360, repeat: -1, ease: Linear.easeNone });
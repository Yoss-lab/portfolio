
  /**
   * Header fixed top on scroll
   */
  //let selectid = document.getElementsById('index');
  let  bodyId = document.body.id;
  if (bodyId == 'index' ) { 
   let selectHeader = document.getElementById('header');
  let handler = document.getElementById('navbar-toggler');

 
     let headerOffset = selectHeader.offsetTop;
     let nextElement = selectHeader.nextElementSibling;
     //console.log('offset : ' + headerOffset);
     if (selectHeader) {
       handler.addEventListener("click", function() {
        let handlerchecked = handler.classList.contains('collapsed') ;
     
        if(handlerchecked){
          console.log("coll true");
          selectHeader.classList.remove('fixed-top');
        nextElement.classList.remove('scrolled-offset');
        } else {
          console.log("coll false");
          selectHeader.classList.add('fixed-top');
              nextElement.classList.add('scrolled-offset');
              nextElement.style.marginTop="0";
       
        } 
      }); 

   

      
     window.addEventListener('scroll', function() {
        //console.log('offset2 : ' + (headerOffset - window.scrollY));
        if ((headerOffset - window.scrollY) <= 0) {
       
            selectHeader.classList.add('fixed-top');
            nextElement.classList.add('scrolled-offset')
          } else {
            selectHeader.classList.remove('fixed-top');
            nextElement.classList.remove('scrolled-offset');
            

          }
     }
    );
     }
    } /* else if (bodyId != 'index' ) { 

    } */
  /**
   * icon slider fixed tourne on scroll
   */

   window.addEventListener('scroll', function() {
     /* window.scroll(function() { */
        let y = window.scrollY;
       
          let speed = 0.2;
          let spin = y * speed;
          let spinner = document.getElementById('icon-slider');
          /* console.log('ofset top :  ' + y);
          console.log('speed :  ' + speed); */
         
      
        TweenMax.staggerTo('.icon-slider', 1.8, {
          rotation: spin,
          transformOrigin: '50% 50%',
          ease: Circ.easeOut
        });
        let tl = new TimelineMax({ paused: false });
      
        if (screen.width < 767) {
         /*  console.log(window.width); */
          if (window.scrollY >= 10) {
            tl.to(spinner, 0.9, { scale: 0.1, opacity: 0 });
          } else {
            tl.to(spinner, 0, { scale: 1, opacity: 1 });
          }
        } else {
          if (window.scrollY >= 200) {
            tl.to(spinner, 0.9, { scale: 0.1, opacity: 0 });
          } else {
            tl.to(spinner, 0, { scale: 1, opacity: 1 });
          }
        }
      });
/* carousel time line */
   /*     let rev = 0;
      carousel(rev);

      function previousReview() {
          rev = rev - 1;
          carousel(rev);
      }

      function nextReview() {
          rev = rev + 1;
          carousel(rev);
      } */ 

      /*  function carousel(review) {
          let reviews = document
              .getElementsByClassName("item-carousel");

          if (review >= reviews.length) {
              review = 0;
              rev = 0;
          }
          if (review < 0) {
              review = reviews.length - 1;
              rev = reviews.length - 1;
          }
          for (let i = 0; i < reviews.length; i++) {
              reviews[i].style.opacity = ".3";
          }
          reviews[review].style.opacity = "1";
      }  */

   /** animation slider */

      const titreSlider = document.querySelectorAll('.title-slider span');
      window.addEventListener('load' , () =>{
        const tl = gsap.timeline({paused:true });
        console.log(tl);
        tl.staggerFrom(titreSlider,1,{top:-50,opacity:0,ease:"power2.out"},0.3)
        tl.play();
      })

   /** fin animation slider */


   /* timeline */

   

    // VARIABLES
    const timeline = document.querySelector(".timeline ol"),
      elH = document.querySelectorAll(".timeline li > div"),
      arrows = document.querySelectorAll(".timeline .arrows .arrow"),
      arrowPrev = document.querySelector(".timeline .arrows .arrow__prev"),
      arrowNext = document.querySelector(".timeline .arrows .arrow__next"),
      firstItem = document.querySelector(".timeline li:first-child"),
      lastItem = document.querySelector(".timeline li:last-child"),
      xScrolling = 290,
      disabledClass = "disabled";
  
    // START
    window.addEventListener("load", init);
  
    function init() {
      setEqualHeights(elH);
      animateTl(xScrolling, arrows, timeline);
      setSwipeFn(timeline, arrowPrev, arrowNext);
      setKeyboardFn(arrowPrev, arrowNext);
      
    }
  
    // SET EQUAL HEIGHTS
    // tout les items prend meme hauteur (la grande hauteur )
    function setEqualHeights(el) {
      let counter = 0;
      for (let i = 0; i < el.length; i++) {
        const singleHeight = el[i].offsetHeight;
  
        if (counter < singleHeight) {
          counter = singleHeight;
        }
      }
  
      for (let i = 0; i < el.length; i++) {
        el[i].style.height = `${counter}px`;
      }
    }
  
    // CHECK IF AN ELEMENT IS IN VIEWPORT
    // http://stackoverflow.com/questions/123999/how-to-tell-if-a-dom-element-is-visible-in-the-current-viewport
      function isElementInViewport(el) {
      const rect = el.getBoundingClientRect();
      console.log(rect.top);
      console.log(rect.botom);
      return (
        
        rect.top >= 0 &&
        rect.left >= 0 &&
        rect.bottom <= (window.innerHeight || document.documentElement.clientHeight) &&
        rect.right <= (window.innerWidth || document.documentElement.clientWidth)
      );
    }  
  
    // SET STATE OF PREV/NEXT ARROWS
     function setBtnState(el, flag = true) {
      if (flag) {
        el.classList.add(disabledClass);
      } else {
        if (el.classList.contains(disabledClass)) {
          el.classList.remove(disabledClass);
        }
        el.disabled = false;
      }
    } 
  
    // ANIMATE TIMELINE
    function animateTl(scrolling, el, tl) {
      let counter = 0;
     
      let timelineWidth = timeline.scrollWidth;
      let container = document.getElementById('container');
      const containerWidth = container.clientWidth;
      for (let i = 0; i < el.length; i++) {
        el[i].addEventListener("click", function() {
           if (!arrowPrev.disabled) {
            arrowPrev.disabled = true;
            //arrowPrev.style.cursor = none;
          }
          if (!arrowNext.disabled) {
            arrowNext.disabled = true;
            //arrowNext.style.cursor = none;
          } 
          const sign = (this.classList.contains("arrow__prev")) ? "" : "-";
          console.log(counter);
          
         
          
      console.log(timelineWidth);
          console.log(containerWidth);
          if (counter === 0 ) {
            tl.style.transform = `translateX(-${scrolling}px)`;

     
            //console.log(tlStyle);
            // add more browser prefixes if needed here
      
             timelineWidth = timelineWidth - scrolling ;
            console.log("width apres 1 :");
            console.log(timelineWidth);
          } else  {
            //debug
            console.log('boucle');
            const tlStyle = getComputedStyle(tl);
            //console.log(tlStyle);
            // add more browser prefixes if needed here
            const tlTransform = tlStyle.getPropertyValue("-webkit-transform") || tlStyle.getPropertyValue("transform");
            const values = parseInt(tlTransform.split(",")[4]) + parseInt(`${sign}${scrolling}`);
            console.log(tlTransform.split(",")[4]);
            tl.style.transform = `translateX(${values}px)`;
          
            timelineWidth = timelineWidth - scrolling ;
            console.log("width apres :");
            console.log(timelineWidth);
          }
         
             setTimeout(() => {
            isElementInViewport(firstItem) ? setBtnState(arrowPrev) : setBtnState(arrowPrev, false);
            isElementInViewport(lastItem) ? setBtnState(arrowNext) : setBtnState(arrowNext, false);
          }, 1100);   

          counter++;
         
        });
      }
    }
  
    // ADD SWIPE SUPPORT FOR TOUCH DEVICES
     function setSwipeFn(tl, prev, next) {
      const hammer = new Hammer(tl);
      hammer.on("swipeleft", () => next.click());
      hammer.on("swiperight", () => prev.click());
    } 
  
    // ADD BASIC KEYBOARD FUNCTIONALITY
     /* function setKeyboardFn(prev, next) {
      document.addEventListener("keydown", (e) => {
        if ((e.which === 37) || (e.which === 39)) {
          //debug
          const timelineOfTop = timeline.innerWidth;
          const y = window.pageYOffset;
           if (timelineOfTop !== y) { 
            window.scrollTo(0, timelineOfTop);
           } 
          if (e.which === 37) {
            prev.click();
          } else if (e.which === 39) {
            next.click();
          }
        }
      });
    }  */

     // ADD BASIC KEYBOARD FUNCTIONALITY
  function setKeyboardFn(prev, next) {
    document.addEventListener("keydown", (e) => {
      if ((e.which === 37) || (e.which === 39)) {
        const timelineOfTop = timeline.offsetTop;
        const y = window.pageYOffset;
        if (timelineOfTop !== y) {
          window.scrollTo(0, timelineOfTop);
        }
        if (e.which === 37) {
          prev.click();
        } else if (e.which === 39) {
          next.click();
        }
      }
    });
  }
  


   /* end timeline */
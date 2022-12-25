
  /**
   * Header fixed top on scroll
   */
   let selectHeader = document.getElementById('header');
  
     let headerOffset = selectHeader.offsetTop;
     let nextElement = selectHeader.nextElementSibling
     //console.log('offset : ' + headerOffset);
     if (selectHeader) {
     window.addEventListener('scroll', function() {
        //console.log('offset2 : ' + (headerOffset - window.scrollY));
        if ((headerOffset - window.scrollY) <= 0) {
       
            selectHeader.classList.add('fixed-top');
            nextElement.classList.add('scrolled-offset')
          } else {
            selectHeader.classList.remove('fixed-top');
            nextElement.classList.remove('scrolled-offset')
          }
     }
    );
     }

  /**
   * icon slider fixed tourne on scroll
   */

   window.addEventListener('scroll', function() {
     /* window.scroll(function() { */
        let y = window.scrollY;
       
          let speed = 0.2;
          let spin = y * speed;
          let spinner = document.getElementById('icon-slider');
          console.log('ofset top :  ' + y);
          console.log('speed :  ' + speed);
         
      
        TweenMax.staggerTo('.icon-slider', 1.8, {
          rotation: spin,
          transformOrigin: '50% 50%',
          ease: Circ.easeOut
        });
        let tl = new TimelineMax({ paused: false });
      
        if (screen.width < 767) {
          console.log(window.width);
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


   
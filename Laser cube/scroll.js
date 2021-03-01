document.onwheel = function (event) {
  if(event.deltaY > 0) {
    scrollSum = scrollSum + event.deltaY;
    if(scrollSum >= 300) {
      setTimeout(function() {
        windowCoords = windowCoords + windowHeight;
        let eclipseCalc = menuEclipseStart + menuEclipsePlus * (windowCoords/windowHeight);

        if(windowHeight > 800) {
          if(eclipseCalc < 653) {
            document.querySelector(".menu__active").style.top = eclipseCalc  + "px";
          } else {
            document.querySelector(".menu__active").style.top = 653 + "px";
          }
        } else {
          if((eclipseCalc - 157) < 495) {
            document.querySelector(".menu__active").style.top = (eclipseCalc - 157)  + "px";
          } else {
            document.querySelector(".menu__active").style.top = 495 + "px";
          }
        }

        window.scrollTo(0, windowCoords);
      },1000)
      scrollSum = 0;
    }

    if(windowCoords >= windowMax) {
      windowCoords = windowMax;
    }

  } else {
    scrollSum = scrollSum + event.deltaY;
      if(scrollSum <= -300) {
        let eclipseCalc = menuEclipseStart + menuEclipsePlus * (windowCoords/windowHeight);

        setTimeout(function() {
          windowCoords = windowCoords - windowHeight;
          if(windowHeight > 800) {
            if(eclipseCalc > 253) {
              document.querySelector(".menu__active").style.top = eclipseCalc  + "px";
            } else {
              document.querySelector(".menu__active").style.top = 253 + "px";
            }
          } else {
            if((eclipseCalc - 257) > 96) {
              document.querySelector(".menu__active").style.top = eclipseCalc - 257  + "px";
            } else {
              document.querySelector(".menu__active").style.top = 96 + "px";
            }
          }
          window.scrollTo(0, windowCoords);
        },1000)
        scrollSum = 0;
      }

      if(windowCoords <= 0) {
        windowCoords = 0;
      }
    }
}

window.addEventListener('scroll', function() {
  if(windowCoords == windowHeight ) {
    for(let i = 0; i < opportunities.length; i++) {
      opportunities[i].classList.remove('oppAnimate');
    }
  } else {
    for(let i = 0; i < opportunities.length; i++) {
      opportunities[i].classList.add('oppAnimate');
    }
  }
});

window.onbeforeunload = function () {
  window.scrollTo(0, 0);
}

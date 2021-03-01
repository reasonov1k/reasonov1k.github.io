new Vue ({
  el: "#app",
  data () {
    return {
      article: 0,
      menuCounter: 0,
      gifs:
      ['image/lazer1.gif',
      'image/lazer2.gif',
      'image/lazer3.gif',
      'image/lazer4.gif',
      'image/lazer5.gif']
    }
  },
  methods: {
    openPage(pageNumber) {
      windowCoords = 0;
      windowCoords = windowCoords + (windowHeight * pageNumber) - windowHeight;
      window.scrollTo(0, windowCoords);
      if(pageNumber == 2) {
        for(let i = 0; i < opportunities.length; i++) {
          opportunities[i].classList.remove('oppAnimate');
        }
      } else {
        for(let i = 0; i < opportunities.length; i++) {
          opportunities[i].classList.add('oppAnimate');
        }
      }
      if(windowHeight > 800) {
        this.$refs["menuActive"].style.top = menuEclipseStart + menuEclipsePlus * pageNumber - menuEclipsePlus + "px";
        this.eclipseCalc = menuEclipseStart + menuEclipsePlus * pageNumber - menuEclipsePlus;
      } else {
        this.$refs["menuActive"].style.top = 96 + menuEclipsePlus * pageNumber - menuEclipsePlus + "px";
        this.eclipseCalc = 96 + menuEclipsePlus * pageNumber - menuEclipsePlus;
      }
      for(let i = 0; i < menuItem.length; i++) {
        menuItem[i].style.opacity = 0.5;
      }
      menuItem[pageNumber - 1].style.opacity = 1;
    },

    openMenu() {
      if(this.menuCounter == 0) {
        this.$refs["mainMenu"].style.left = -282 + "px";
        this.$refs["menuLine"].style.left = 40 + "px";

        for(let i = 0; i < 3; i++) {
          menuSvg[i].classList.add('menuAnimation'+i);
        }
        this.menuCounter++;
      } else {
        this.$refs["mainMenu"].style.left = 5 + "px";
        this.$refs["menuLine"].style.left = 0 + "px";

        for(let i = 0; i < 3; i++) {
          menuSvg[i].classList.remove('menuAnimation'+i);
        }
        this.menuCounter--;
      }
    },

    previous() {
      if(this.article >= sliderItem.length - 2) {
        this.article = this.article - 1;
      } else {
        this.article = sliderItem.length - 1;
      }
    },

    next() {
      if(this.article <= sliderItem.length - 2) {
        this.article = this.article + 1;
      } else {
        this.article = 0;
      }
    },

    oppButton(index) {
      oppImage.setAttribute('src', this.gifs[index])
    },

    formChange(index) {
      contactsInput[index].setAttribute('src', 'image/formBgPc.png');
      contactsInput[index].setAttribute('class', "form__background contacts__input--active"+index);
    }
  }
})

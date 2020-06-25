const menu = document.querySelector('.navbar');
    console.log(menu);
    const tablet =window.matchMedia('screen and (max-width: 768px)');
    const burguerButton = document.querySelector('#burguer-menu');
    console.log(burguerButton);
    burguerButton.addEventListener('click',hideShow);


      tablet.addListener(validation)

      function validation(event) {
        if (event.matches) {
            burguerButton.addEventListener('click',hideShow);
        } else {
          {burguerButton.removeEventListener('click',hideShow);
      }
        }
      }


      function hideShow() {
        if (menu.classList.contains('is-active'))
        {
          menu.classList.remove('is-active');
        }
        else{
        menu.classList.add('is-active');
      }
      }